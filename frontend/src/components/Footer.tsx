import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      {/* CTA strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="p-10 md:p-14 rounded-2xl glass glass-border gradient-border text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Ready to Take <span className="text-gradient">Control</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join 150+ enterprises that transformed their operations with data-driven systems.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-sm group"
          >
            Schedule Strategy Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight block mb-4">
              DOCTOR OF <span className="text-gradient">DATA</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Enterprise technology consulting. Scalable data systems. Complete operational control.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass glass-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-glow/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold font-display mb-5">Services</h4>
            <ul className="space-y-3">
              {["Enterprise Data Systems", "Business Intelligence", "Digital Infrastructure", "Smart Applications"].map(
                (item) => (
                  <li key={item}>
                    <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-display mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Why Us", to: "/why-us" },
                { label: "Results", to: "/results" },
                { label: "Process", to: "/process" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-display mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contact@doctorofdata.io</li>
              <li>+91 79994-28556 </li>
              <li>Enterprise District, Suite 400</li>
              <li>Raipur chattisgarh , 492001</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Doctor Of Data Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
