const nodemailer = require('nodemailer');

const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: { rejectUnauthorized: false },
    });
};

const sendInquiryNotification = async (inquiry) => {
    try {
        const transporter = createTransporter();
        const statusBadge = `<span style="background:#00D4FF;color:#050A14;padding:4px 12px;border-radius:4px;font-weight:700;font-size:12px;">NEW LEAD</span>`;

        await transporter.sendMail({
            from: `"Enterprise Consulting" <${process.env.EMAIL_USER}>`,
            to: process.env.NOTIFY_EMAIL || process.env.ADMIN_EMAIL,
            subject: `🔔 New Inquiry: ${inquiry.fullName} — ${inquiry.companyName}`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 680px; margin: 0 auto; background: #050A14; color: #F8FAFC; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0B1628 0%, #1A3A6B 100%); padding: 32px; text-align: center; border-bottom: 2px solid #00D4FF;">
            <h1 style="margin: 0; font-size: 22px; letter-spacing: 2px; color: #00D4FF;">WHERE TECHNOLOGY MEETS CONTROL</h1>
            <p style="margin: 8px 0 0; color: #94A3B8; font-size: 14px;">New Enterprise Inquiry Received</p>
          </div>
          <div style="padding: 32px;">
            <p style="margin: 0 0 24px;">${statusBadge}</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding:10px 0;color:#94A3B8;font-size:13px;width:40%;">Full Name</td><td style="padding:10px 0;font-weight:600;">${inquiry.fullName}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Company</td><td style="padding:10px 0;font-weight:600;">${inquiry.companyName}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Business Type</td><td style="padding:10px 0;font-weight:600;">${inquiry.businessType}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Company Size</td><td style="padding:10px 0;font-weight:600;">${inquiry.companySize} employees</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Email</td><td style="padding:10px 0;font-weight:600;">${inquiry.email}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Phone</td><td style="padding:10px 0;font-weight:600;">${inquiry.phone}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Service Required</td><td style="padding:10px 0;font-weight:600;color:#00D4FF;">${inquiry.serviceRequired}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Budget</td><td style="padding:10px 0;font-weight:600;">${inquiry.budget}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">Timeline</td><td style="padding:10px 0;font-weight:600;">${inquiry.timeline}</td></tr>
              <tr style="border-top:1px solid #1A3A6B;"><td style="padding:10px 0;color:#94A3B8;font-size:13px;">NDA Required</td><td style="padding:10px 0;font-weight:600;">${inquiry.nda ? '✅ Yes' : 'No'}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#0B1628;border-radius:8px;border-left:3px solid #00D4FF;">
              <p style="margin:0 0 8px;color:#94A3B8;font-size:13px;">Project Description</p>
              <p style="margin:0;line-height:1.7;">${inquiry.description}</p>
            </div>
          </div>
          <div style="padding:20px 32px;background:#0B1628;text-align:center;border-top:1px solid #1A3A6B;">
            <p style="margin:0;color:#64748B;font-size:12px;">Received on ${new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
        </div>
      `,
        });

        // Confirmation to client
        await transporter.sendMail({
            from: `"Enterprise Consulting" <${process.env.EMAIL_USER}>`,
            to: inquiry.email,
            subject: `Your Inquiry Has Been Received — ${inquiry.companyName}`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050A14; color: #F8FAFC; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0B1628 0%, #1A3A6B 100%); padding: 32px; text-align: center; border-bottom: 2px solid #00D4FF;">
            <h1 style="margin: 0; font-size: 22px; letter-spacing: 2px; color: #00D4FF;">WHERE TECHNOLOGY MEETS CONTROL</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #F8FAFC; margin: 0 0 16px;">Thank You, ${inquiry.fullName}</h2>
            <p style="color: #94A3B8; line-height: 1.8;">We have received your inquiry regarding <strong style="color:#00D4FF;">${inquiry.serviceRequired}</strong>. Our enterprise team will review your requirements and reach out within <strong>24–48 business hours</strong>.</p>
            <div style="margin-top:24px;padding:20px;background:#0B1628;border-radius:8px;border-left:3px solid #00D4FF;">
              <p style="margin:0;color:#94A3B8;font-size:13px;">Reference: <strong style="color:#F8FAFC;">${inquiry._id}</strong></p>
            </div>
            <p style="margin-top:24px;color:#64748B;font-size:13px;">If you have an urgent requirement, please call us directly or reply to this email.</p>
          </div>
        </div>
      `,
        });

        return true;
    } catch (error) {
        console.error('Email notification failed:', error.message);
        return false;
    }
};

module.exports = { sendInquiryNotification };
