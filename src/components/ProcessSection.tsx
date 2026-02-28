import { motion } from "framer-motion";
import { Search, Target, Code2, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    phase: "01",
    title: "Discovery",
    description: "Deep-dive into your operations, data flows, pain points, and strategic objectives.",
    details: ["Stakeholder interviews", "Systems audit", "Pain point mapping", "Goals alignment"],
    duration: "1-2 weeks",
  },
  {
    icon: Target,
    phase: "02",
    title: "Strategy",
    description: "Architecture blueprint, technology selection, and roadmap aligned to business outcomes.",
    details: ["Technical architecture", "Technology selection", "Timeline & milestones", "ROI projection"],
    duration: "1-2 weeks",
  },
  {
    icon: Code2,
    phase: "03",
    title: "Development",
    description: "Agile development with continuous stakeholder alignment and quality assurance.",
    details: ["Sprint-based delivery", "Weekly demos", "Continuous testing", "Documentation"],
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    phase: "04",
    title: "Deployment",
    description: "Staged rollout with zero-downtime migration, training, and change management.",
    details: ["Staged rollout", "Data migration", "Team training", "Go-live support"],
    duration: "1-2 weeks",
  },
  {
    icon: TrendingUp,
    phase: "05",
    title: "Optimization",
    description: "Ongoing monitoring, performance tuning, and iterative improvements.",
    details: ["Performance monitoring", "Usage analytics", "Iterative improvements", "Quarterly reviews"],
    duration: "Ongoing",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Timeline */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl glass glass-border hover:border-glow/20 transition-all duration-500">
                {/* Phase number & icon */}
                <div className="flex items-start gap-5 md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:glow-sm transition-all">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-px h-6 bg-border" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-primary mb-1">Phase {step.phase}</div>
                    <h3 className="text-2xl font-display font-bold">{step.title}</h3>
                    <div className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-surface text-muted-foreground">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Description & details */}
                <div className="md:w-2/3">
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
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
          <p className="text-muted-foreground mb-4">Ready to start the process?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-sm group"
          >
            Begin Discovery Phase
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
