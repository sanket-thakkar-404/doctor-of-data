const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const { protect } = require('../middleware/auth');

const signToken = (id, email) =>
    jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '7d' });

// @route  POST /api/admin/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ success: false, message: 'Email and password are required.' });

        let admin = await Admin.findOne({ email: email.toLowerCase() });

        // First-run: create admin from env if none exists
        if (!admin) {
            if (
                email.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase() &&
                password === process.env.ADMIN_PASSWORD
            ) {
                admin = await Admin.create({
                    email: process.env.ADMIN_EMAIL,
                    password: process.env.ADMIN_PASSWORD,
                    name: 'Super Admin',
                });
            } else {
                return res.status(401).json({ success: false, message: 'Invalid credentials.' });
            }
        }

        const isMatch = await admin.matchPassword(password);
        if (!isMatch)
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });

        const token = signToken(admin._id, admin.email);
        res.json({
            success: true,
            token,
            admin: { id: admin._id, email: admin.email, name: admin.name },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// @route  GET /api/admin/me
router.get('/me', protect, async (req, res) => {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json({ success: true, data: admin });
});

// @route  POST /api/admin/change-password
router.post('/change-password', protect, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const admin = await Admin.findById(req.admin.id);
        const isMatch = await admin.matchPassword(currentPassword);
        if (!isMatch)
            return res.status(400).json({ success: false, message: 'Current password is incorrect.' });
        admin.password = newPassword;
        await admin.save();
        res.json({ success: true, message: 'Password updated successfully.' });
    } catch {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
