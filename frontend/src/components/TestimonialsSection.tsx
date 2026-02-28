import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {testimonials} from '../data/data.js'

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear what our clients say about working with Doctor of Data.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 min-h-[260px] flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl">
              "{testimonials[current].content}"
            </p>
            <div>
              <p className="font-display font-semibold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
