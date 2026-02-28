import { motion } from "framer-motion";
import { ArrowRight, Shield, ChevronRight, Zap, Database, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Data visualization background" className="w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-border mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-secondary-foreground">
                Enterprise Technology Consulting
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6">
              Where Technology
              <br />
              Meets <span className="text-gradient">Control.</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary-foreground max-w-xl mb-10 leading-relaxed">
              We architect scalable, data-driven systems that give enterprises
              complete visibility, automation, and decision-making power across
              every operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-sm"
              >
                Book Strategy Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold glass glass-border text-foreground rounded-lg hover:bg-surface-hover transition-all"
              >
                <Shield size={16} />
                Request Consultation
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Enterprise Clients", value: "150+" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "SOC 2 Compliant", value: "✓" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating dashboard cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            {/* Main dashboard card */}
            <div className="glass glass-border rounded-2xl p-6 gradient-border animate-float">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">System Analytics</span>
                </div>
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                    className="flex-1 rounded-sm bg-primary/30"
                    style={{ background: `linear-gradient(to top, hsl(var(--primary) / 0.2), hsl(var(--primary) / ${h / 100}))` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Floating stat card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -left-8 top-8 glass glass-border rounded-xl p-4 animate-float-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-display font-bold text-gradient">
                    <AnimatedCounter target={40} suffix="%" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">Efficiency Gain</div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -right-4 bottom-12 glass glass-border rounded-xl p-4 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-display font-bold">
                    <AnimatedCounter target={3} suffix=".2M+" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">Data Points/Day</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight size={16} className="text-muted-foreground rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
