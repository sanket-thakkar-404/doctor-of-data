import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ShieldCheck, Lock, Clock, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

const serviceOptions = [
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
];

const businessType = [
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
]


const timelineOptions = [
  "Immediate (< 1 month)",
  "1-3 Months",
  "3-6 Months",
  "6-12 Months",
  "Ongoing Engagement",
];

const companySizeOptions = [
  "1-10 Employees",
  "11-50 Employees",
  "51-200 Employees",
  "201-1000 Employees",
  "1000+ Employees",
];

const InquiryForm = () => {
  const [ndaRequested, setNdaRequested] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-2xl glass glass-border gradient-border"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-8 flex items-center justify-center"
            >
              <ShieldCheck className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-3xl font-display font-bold mb-4">Inquiry Received</h3>
            <p className="text-muted-foreground mb-2">
              Our strategy team will review your requirements and respond within 24 hours.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Check your email for a confirmation with next steps.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-lg bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all hover:border-glow/20";
  const selectClass =
    "w-full px-4 py-3.5 rounded-lg bg-surface border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all appearance-none hover:border-glow/20";
  const labelClass = "block text-sm font-medium text-foreground mb-2";

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-medium tracking-widest uppercase text-primary">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Let's Build Something
                <br />
                <span className="text-gradient">Enterprise-Grade.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Share your requirements. We'll respond with a strategic assessment
                and proposed approach within 24 hours.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "contact@doctorofdata.io" },
                { icon: Phone, label: "+91 7999428556 " },
                { icon: MapPin, label: "Raipur Chattisgarh , 492009" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="space-y-3 pt-4">
              {[
                { icon: Clock, text: "Response within 24 hours" },
                { icon: Lock, text: "All data encrypted & confidential" },
                { icon: CheckCircle2, text: "No obligation consultation" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-2xl glass glass-border gradient-border"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" required placeholder="John Mitchell" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Company Name *</label>
                  <input type="text" required placeholder="Acme Industries" className={inputClass} />
                </div>
                  <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" required placeholder="john@acme.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
                </div>
                {/* business type */}
               <div>
                  <label className={labelClass}> Business Type *</label>
                  <select required className={selectClass} defaultValue="">
                    <option value="" disabled>Select company size</option>
                    {businessType.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Company Size *</label>
                  <select required className={selectClass} defaultValue="">
                    <option value="" disabled>Select company size</option>
                    {companySizeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className={labelClass}>Service Required *</label>
                  <select required className={selectClass} defaultValue="">
                    <option value="" disabled>Select service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className={labelClass}>Timeline</label>
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>Select timeline</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project requirements, current challenges, and desired outcomes..."
                    className={inputClass + " resize-none"}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-surface transition-colors">
                    <input
                      type="checkbox"
                      checked={ndaRequested}
                      onChange={(e) => setNdaRequested(e.target.checked)}
                      className="w-4 h-4 rounded border-border bg-muted text-primary focus:ring-ring"
                    />
                    <div>
                      <span className="text-sm text-foreground block">
                        Request Non-Disclosure Agreement (NDA)
                      </span>
                      <span className="text-xs text-muted-foreground">
                        We'll send an NDA for review before discussing project details
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  All inquiries are treated with strict confidentiality
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-sm w-full sm:w-auto justify-center"
                >
                  Submit Inquiry
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
