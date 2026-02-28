import { motion } from "framer-motion";
import { Clock, Shield, Scale, Wrench, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and dedicated support teams for mission-critical operations.",
    features: ["Dedicated account manager", "15-min response SLA", "Proactive monitoring"],
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and zero-trust architecture.",
    features: ["SOC 2 Type II certified", "End-to-end encryption", "Penetration tested"],
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    description: "Systems designed to grow from startup to enterprise without re-engineering.",
    features: ["Auto-scaling infrastructure", "Microservices ready", "Multi-region deployment"],
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "No off-the-shelf templates. Every system is architected for your specific requirements.",
    features: ["Industry-specific design", "API-first approach", "Future-proof stack"],
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    description: "Live dashboards and analytics that give leadership instant operational clarity.",
    features: ["Live KPI dashboards", "Automated alerts", "Custom report builder"],
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {reasons.slice(0, 3).map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl glass glass-border hover:border-glow/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:glow-sm transition-all">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{reason.description}</p>
              <ul className="space-y-2">
                {reason.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {reasons.slice(3).map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="group p-8 rounded-2xl glass glass-border hover:border-glow/20 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:glow-sm transition-all">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                  <ul className="flex flex-wrap gap-3">
                    {reason.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-surface px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-sm group"
          >
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
