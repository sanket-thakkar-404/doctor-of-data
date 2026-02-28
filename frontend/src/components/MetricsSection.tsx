import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, Users, Clock, Database, Award, Globe } from "lucide-react";

const metrics = [
  { icon: Users, value: 150, suffix: "+", label: "Enterprise Clients", description: "Across manufacturing, education, finance, and logistics" },
  { icon: Clock, value: 99, suffix: ".9%", label: "System Uptime", description: "Mission-critical reliability backed by SLA" },
  { icon: TrendingUp, value: 40, suffix: "%", label: "Efficiency Gain", description: "Average operational cost reduction achieved" },
  { icon: Database, value: 3, suffix: ".2M+", label: "Data Points Daily", description: "Processed and analyzed in real-time" },
];

const caseStudies = [
  {
    industry: "Manufacturing",
    title: "Automated production reporting across 12 facilities",
    result: "67% reduction in reporting time",
    tags: ["MIS", "Automation", "Dashboard"],
  },
  {
    industry: "Education",
    title: "Unified student data platform for 50K+ students",
    result: "3x faster administrative processing",
    tags: ["Data Systems", "Cloud", "Analytics"],
  },
  {
    industry: "Financial Services",
    title: "Real-time compliance monitoring dashboard",
    result: "Zero compliance violations in 18 months",
    tags: ["BI", "Security", "Real-time"],
  },
];

const MetricsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl glass glass-border text-center group hover:border-glow/20 transition-all duration-500 gradient-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Case Studies
            </span>
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight">
            Real Impact. <span className="text-gradient">Real Results.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl glass glass-border hover:border-glow/20 transition-all duration-500"
            >
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {cs.industry}
              </span>
              <h4 className="text-base font-display font-semibold mb-3 leading-snug">{cs.title}</h4>
              <div className="text-xl font-display font-bold text-gradient mb-4">{cs.result}</div>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-surface text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
