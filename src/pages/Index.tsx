import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Home,
  Building2,
  Store,
  Briefcase,
  Sparkles,
} from "lucide-react";

import Layout from "@/components/Layout";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Luxury Living Room",
    category: "Residential",
  },
  {
    image: portfolio2,
    title: "Modern Office Space",
    category: "Commercial",
  },
  {
    image: portfolio3,
    title: "Premium Retail Showroom",
    category: "Retail",
  },
  {
    image: portfolio4,
    title: "Modular Kitchen Design",
    category: "Kitchen",
  },
  {
    image: portfolio5,
    title: "Elegant Master Bedroom",
    category: "Residential",
  },
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
  {
    icon: Home,
    label: "Homeowners",
  },
  {
    icon: Building2,
    label: "Builders",
  },
  {
    icon: Briefcase,
    label: "Offices",
  },
  {
    icon: Store,
    label: "Shops",
  },
];

const highlights = [
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "200+",
    label: "Projects Delivered",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previousProject = () => {
    setCurrent(
      (currentIndex) =>
        (currentIndex - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    setCurrent(
      (currentIndex) => (currentIndex + 1) % projects.length
    );
  };

  return (
    <Layout>
      {/* =========================
          HERO
      ========================== */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="absolute inset-0"
          >
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/.96)_0%,hsl(var(--background)/.82)_42%,hsl(var(--background)/.48)_100%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,transparent_0%,hsl(var(--background)/.35)_60%,hsl(var(--background)/.72)_100%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 section-grid opacity-25 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 26,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -12,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2 text-[10px] font-body font-semibold uppercase tracking-[0.3em] text-primary"
            >
              <Sparkles size={12} />
              Gurugram's Premier Interior Studio
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.6rem] font-display font-bold text-foreground mt-5 leading-[0.96] tracking-[-0.025em]">
              Aseem Designs{" "}
              <span className="text-gradient-gold">
                Studio
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-body mt-7 mb-9 max-w-xl leading-relaxed">
              Transforming spaces into extraordinary experiences
              since 2010. We bring your vision to life with
              elegance and precision.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link
                to="/contact"
                className="button-premium inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold text-primary-foreground font-body font-semibold text-[11px] uppercase tracking-[0.15em] rounded-sm"
              >
                Get a Free Consultation
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/portfolio"
                className="button-premium inline-flex items-center gap-2 px-7 py-3.5 border border-primary/50 text-primary bg-background/15 backdrop-blur-sm font-body font-semibold text-[11px] uppercase tracking-[0.15em] rounded-sm hover:bg-primary hover:text-primary-foreground"
              >
                View Our Work
              </Link>
            </div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2.1,
                duration: 0.6,
              }}
              className="mt-10 flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.18em] text-foreground/35"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_hsl(142_70%_50%/.5)]" />
              Design system ready
            </motion.div>
          </motion.div>
        </div>

        {/* Project controls */}
        <div className="absolute bottom-6 left-4 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center gap-3">
          <button
            onClick={previousProject}
            aria-label="Previous project"
            className="p-2.5 border border-primary/30 bg-background/30 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-sm"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-1.5">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setCurrent(index)}
                aria-label={`Show ${project.title}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-7"
                    : "bg-foreground/25 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            aria-label="Next project"
            className="p-2.5 border border-primary/30 bg-background/30 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="absolute bottom-7 right-8 z-10 text-right hidden md:block">
          <p className="text-[9px] text-primary font-body uppercase tracking-[0.2em]">
            {projects[current].category}
          </p>

          <p className="text-base font-display text-foreground/80">
            {projects[current].title}
          </p>
        </div>
      </section>

      {/* =========================
          STATS
      ========================== */}
      <section className="relative w-full border-y border-border/60 bg-secondary/50 py-14 overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-20 pointer-events-none" />

        <div className="relative w-full px-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-0">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="w-full flex flex-col items-center justify-center text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {item.number}
                </div>

                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-body mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================== */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Designed around the way you live.
            </h2>

            <p className="mt-5 text-sm md:text-base text-muted-foreground font-body leading-relaxed">
              From concept to completion, we offer comprehensive
              interior design solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
            {services.map((service, index) => (
              <div
                key={service}
                className="h-full p-7 bg-card/95 group hover:bg-card transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[9px] font-mono text-primary/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="w-7 h-px bg-primary/50 group-hover:w-12 transition-all duration-300" />
                </div>

                <h3 className="font-display text-lg text-foreground leading-snug">
                  {service}
                </h3>

                <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground/55">
                  Design / Execute
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-11">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-body text-[10px] uppercase tracking-[0.2em] font-semibold hover:gap-4 transition-all duration-200"
            >
              Explore All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          CLIENTS
      ========================== */}
      <section className="py-24 bg-secondary/55 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Our Clients
            </p>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Spaces for every kind of ambition.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 max-w-4xl mx-auto border border-border/60">
            {clients.map((client) => {
              const Icon = client.icon;

              return (
                <div
                  key={client.label}
                  className="flex flex-col items-center gap-4 p-7 bg-card hover:bg-card/80 transition-colors"
                >
                  <Icon
                    size={27}
                    className="text-primary"
                    strokeWidth={1.5}
                  />

                  <span className="font-body font-medium text-foreground text-xs">
                    {client.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-background/90" />

        <div className="absolute inset-0 section-grid opacity-20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
              Next project
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Ready to transform your space?
            </h2>

            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Book a free consultation today and let us bring your
              dream space to life.
            </p>

            <Link
              to="/contact"
              className="button-premium inline-flex items-center gap-2 px-9 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-[10px] uppercase tracking-[0.18em] rounded-sm"
            >
              Schedule Consultation
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;