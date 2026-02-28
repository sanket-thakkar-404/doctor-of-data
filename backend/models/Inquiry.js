const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    businessType: {
      type: String,
      required: [true, 'Business type is required'],
      enum: [
        'Manufacturing',
        'Education',
        'Healthcare',
        'Finance & Banking',
        'Retail & E-Commerce',
        'Logistics & Supply Chain',
        'Real Estate',
        'IT & Technology',
        'Government & Public Sector',
        'Startup',
        'Other',
      ],
    },
    companySize: {
      type: String,
      required: true,
      enum: ['1-10', '11-50', '51-200', '201-500', '500-1000', '1000+'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, 'Invalid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    serviceRequired: {
      type: String,
      required: [true, 'Service selection is required'],
      enum: [
        'Advanced MIS Development',
        'Custom Data Management Systems',
        'Complete MIS Outsourcing',
        'Business Dashboard Automation',
        'Process Automation Systems',
        'Data Analytics & Insights',
        'Cloud Integration',
        'ERP Automation',
        'Secure Infrastructure Setup',
        'Web & App Development',
        'AI Integration Solutions',
        'Business Chatbot Systems',
        'Multiple Services / Full Engagement',
      ],
    },
    budget: {
      type: String,
      required: true,
      enum: [
        'Under ₹1L',
        '₹1L – ₹3L',
        '₹3L – ₹5L',
        '₹5L – ₹10L',
        '₹10L – ₹25L',
        '₹25L – ₹50L',
        '₹50L+',
        'To be discussed',
      ],
    },
    timeline: {
      type: String,
      required: true,
      enum: [
        'Immediate (< 1 month)',
        '1–3 months',
        '3–6 months',
        '6–12 months',
        'Flexible',
      ],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      minlength: [20, 'Please provide at least 20 characters of description'],
    },
    nda: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'In Discussion', 'Proposal Sent', 'Closed Won', 'Closed Lost'],
      default: 'New',
    },
    adminNotes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', InquirySchema);
