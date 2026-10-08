import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Home, Building2, Store, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  { image: portfolio1, title: "Luxury Living Room", category: "Residential" },
  { image: portfolio2, title: "Modern Office Space", category: "Commercial" },
  { image: portfolio3, title: "Premium Retail Showroom", category: "Retail" },
  { image: portfolio4, title: "Modular Kitchen Design", category: "Kitchen" },
  { image: portfolio5, title: "Elegant Master Bedroom", category: "Residential" },
];

const services = [
  "Residential Interior Design",
  "Commercial / Office Interiors",
  "Retail / Showroom Interiors",
  "Turnkey Projects",
  "Modular Kitchen & Wardrobes",
  "Renovation & Remodeling",
  "3D Design & Visualization",
  "Online Consultation",
];

const clients = [
  { icon: Home, label: "Homeowners" },
  { icon: Building2, label: "Builders" },
  { icon: Briefcase, label: "Offices" },
  { icon: Store, label: "Shops" },
];

const highlights = [
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  return (
    <Layout>
      {/* Hero Carousel */}
      <section className="relative h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 p1-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-primary">
                Gurugram's Premier Interior Studio
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mt-4 mb-6 leading-tight">
                Aseem Designs {" "}
                <span className="text-gradient-gold">Studio</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                Transforming spaces into extraordinary experiences since 2010.
                We bring your vision to life with elegance and precision.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
                >
                  Get a Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
          <button onClick={prev} className="p-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-8" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Current project label */}
        <div className="absolute bottom-8 right-8 z-10 text-right hidden md:block">
          <p className="text-xs text-primary font-body uppercase tracking-wider">{projects[current].category}</p>
          <p className="text-lg font-display text-foreground">{projects[current].title}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{item.number}</div>
                <div className="text-sm text-muted-foreground font-body mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="From concept to completion, we offer comprehensive interior design solutions tailored to your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-card border border-border rounded-sm hover:border-primary/50 hover:shadow-gold transition-all group"
              >
                <div className="w-10 h-0.5 bg-gradient-gold mb-4 group-hover:w-16 transition-all" />
                <h3 className="font-display text-lg text-foreground">{service}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-wider font-semibold hover:gap-4 transition-all"
            >
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Clients" title="Who We Serve" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-sm hover:border-primary/50 transition-all"
              >
                <client.icon size={32} className="text-primary" />
                <span className="font-body font-medium text-foreground text-sm">{client.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Book a free consultation today and let us bring your dream space to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            >
              Schedule Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
