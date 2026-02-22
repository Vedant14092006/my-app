import { motion } from "framer-motion";
import { Home, Building2, Store, Key, CookingPot, Hammer, Box, Monitor } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Home, title: "Residential Interior Design", desc: "Transform your home into a personalized sanctuary with our bespoke residential design services." },
  { icon: Building2, title: "Commercial / Office Interiors", desc: "Create productive, inspiring workspaces that reflect your brand and culture." },
  { icon: Store, title: "Retail / Showroom Interiors", desc: "Design captivating retail environments that drive customer engagement and sales." },
  { icon: Key, title: "Turnkey Projects", desc: "Complete design and execution under one roof — from concept to final handover." },
  { icon: CookingPot, title: "Modular Kitchen & Wardrobes", desc: "Smart, stylish modular solutions optimized for functionality and aesthetics." },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Breathe new life into existing spaces with thoughtful renovation and remodeling." },
  { icon: Box, title: "3D Design & Visualization", desc: "See your dream space before it's built with photorealistic 3D renders." },
  { icon: Monitor, title: "Online Consultation", desc: "Get expert design advice from anywhere with our virtual consultation services." },
];

const Services = () => {
  return (
    <Layout>
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl">
            Comprehensive interior design solutions for every need
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Do"
            title="End-to-End Design Solutions"
            description="From initial concept to final handover, we cover every aspect of interior design."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-card border border-border rounded-sm hover:border-primary/50 hover:shadow-gold transition-all group"
              >
                <service.icon size={32} className="text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;