const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const { protect } = require('../middleware/auth');
const { sendInquiryNotification } = require('../utils/mailer');

// @route  POST /api/inquiries
// @desc   Submit new inquiry (public)
router.post('/', async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();

        // Send email notifications (non-blocking)
        sendInquiryNotification(inquiry).catch(() => { });

        res.status(201).json({
            success: true,
            message: 'Inquiry submitted successfully. Our team will contact you within 24–48 hours.',
            data: { id: inquiry._id, createdAt: inquiry.createdAt },
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((e) => e.message);
            return res.status(400).json({ success: false, message: messages.join('. ') });
        }
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// @route  GET /api/inquiries
// @desc   Get all inquiries (admin only)
router.get('/', protect, async (req, res) => {
    try {
        const { status, search, page = 1, limit = 20 } = req.query;
        const query = {};

        if (status && status !== 'All') query.status = status;
        if (search) {
            query.$or = [
                { fullName: { $regex: search, $options: 'i' } },
                { companyName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { serviceRequired: { $regex: search, $options: 'i' } },
            ];
        }

        const total = await Inquiry.countDocuments(query);
        const inquiries = await Inquiry.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({
            success: true,
            data: inquiries,
            pagination: { total, page: parseInt(page), limit: parseInt(limit), pages: Math.ceil(total / limit) },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// @route  GET /api/inquiries/:id
// @desc   Get single inquiry (admin only)
router.get('/:id', protect, async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);
        if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found.' });
        res.json({ success: true, data: inquiry });
    } catch {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// @route  PATCH /api/inquiries/:id
// @desc   Update inquiry status/notes (admin only)
router.patch('/:id', protect, async (req, res) => {
    try {
        const { status, adminNotes } = req.body;
        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            { ...(status && { status }), ...(adminNotes !== undefined && { adminNotes }) },
            { new: true, runValidators: true }
        );
        if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found.' });
        res.json({ success: true, data: inquiry });
    } catch {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// @route  DELETE /api/inquiries/:id
// @desc   Delete inquiry (admin only)
router.delete('/:id', protect, async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Inquiry deleted.' });
    } catch {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
