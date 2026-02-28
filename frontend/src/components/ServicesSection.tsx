import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {categories} from '../data/data.js'
import { ArrowRight } from "lucide-react";


const ServicesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="space-y-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl glass glass-border overflow-hidden hover:border-glow/20 transition-all duration-500"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left: Category info */}
                  <div className="lg:w-2/5 lg:sticky lg:top-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      0{i + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">{cat.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{cat.description}</p>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed">{cat.detail}</p>
                  </div>

                  {/* Right: Services */}
                  <div className="lg:w-3/5 space-y-4">
                    {cat.services.map((service, j) => (
                      <div
                        key={service.name}
                        className="p-5 rounded-xl bg-surface/50 border border-border/50 hover:border-glow/20 hover:bg-surface transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-base font-display font-semibold mb-1">{service.name}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Need a solution tailored to your industry?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-sm group"
          >
            Discuss Your Requirements
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
