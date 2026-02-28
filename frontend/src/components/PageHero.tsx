import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
}

const PageHero = ({ badge, title, description }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden section-padding pb-16 md:pb-20">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              {badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
