import { motion } from "framer-motion";
import { AlertTriangle, Eye, Cog, Unplug, TrendingDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const pains = [
  {
    icon: AlertTriangle,
    title: "Manual Reporting",
    stat: "23 hrs/week",
    statLabel: "wasted on manual data compilation",
    description: "Hours wasted compiling spreadsheets. Decisions delayed by outdated data. Your team operates on yesterday's numbers while competitors act on real-time insights.",
    color: "destructive",
  },
  {
    icon: Eye,
    title: "Lack of Data Visibility",
    stat: "67%",
    statLabel: "of leaders lack real-time data access",
    description: "Critical metrics buried across disconnected tools. No single source of truth. Leadership flies blind on performance, missing revenue opportunities daily.",
    color: "primary",
  },
  {
    icon: Cog,
    title: "Process Inefficiency",
    stat: "40%",
    statLabel: "of tasks are repetitive & automatable",
    description: "Repetitive tasks consuming skilled resources. Error-prone workflows draining productivity. Without automation, scaling becomes exponentially harder.",
    color: "accent",
  },
  {
    icon: Unplug,
    title: "Disconnected Systems",
    stat: "12+",
    statLabel: "average tools per enterprise team",
    description: "Siloed departments, fragmented data. Integration gaps create compliance risks, duplicate efforts, and operational bottlenecks that compound over time.",
    color: "primary",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-destructive/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              The Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Your Data Should Drive Decisions.
            <br />
            <span className="text-muted-foreground">Not Create Chaos.</span>
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed">
            Most organizations lose millions annually to disconnected tools,
            manual processes, and zero real-time visibility. These aren't minor
            inconveniences — they're existential risks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl glass glass-border hover:border-glow/30 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <pain.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-display font-bold text-gradient">{pain.stat}</div>
                    <div className="text-[10px] text-muted-foreground max-w-[120px]">{pain.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{pain.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Sound familiar? You're not alone.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            Let's fix this together
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
