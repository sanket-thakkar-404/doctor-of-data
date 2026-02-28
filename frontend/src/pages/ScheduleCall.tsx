import { ArrowRight, Calendar, Clock, Video, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM","06:00 PM", 
  "7:00 PM", "8:00 PM",
];

const ScheduleCall = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="py-32">
          <div className="container max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4">Call Scheduled!</h1>
            <p className="text-muted-foreground mb-8">
              We've received your request. Our team will confirm your strategy call within 24 hours.
            </p>
            <Button onClick={() => window.location.href = "/"} variant="outline" className="rounded-full px-6">
              Back to Home
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Schedule a <span className="text-primary">Strategy Call</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Join 150+ enterprises that transformed their operations with data-driven systems.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left info panel */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display font-semibold text-lg mb-6">What to Expect</h3>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "30 Minutes", desc: "Focused discussion on your data challenges" },
                  { icon: Video, title: "Video or Phone", desc: "Choose your preferred meeting format" },
                  { icon: Calendar, title: "Flexible Scheduling", desc: "Pick a time that works for you" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="md:col-span-3 rounded-2xl border border-border bg-card p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Company</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 00000-00000"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Time slots */}
              <div className="mb-4">
                <label className="text-sm text-muted-foreground mb-3 block">Preferred Time Slot</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                        selectedSlot === slot
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-secondary text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm text-muted-foreground mb-2 block">Tell us about your needs</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of your data challenges..."
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <Button
                onClick={() => setSubmitted(true)}
                size="lg"
                className="w-full rounded-full text-base gap-2"
              >
                Schedule Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScheduleCall;
