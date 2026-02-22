import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Gurugram",
    text: "Aseem Design Studios transformed our 3BHK into a masterpiece. The attention to detail and quality of work exceeded our expectations. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Rajesh Kapoor",
    role: "CEO, Tech Startup",
    text: "Our office space looks phenomenal. The team understood our brand perfectly and created a workspace that boosts productivity and impresses every visitor.",
    rating: 5,
  },
  {
    name: "Anita Mehta",
    role: "Boutique Owner",
    text: "The showroom design they created has significantly increased our foot traffic. The layout is intuitive and the ambiance is exactly what we envisioned.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Builder, Delhi NCR",
    text: "We've partnered with Aseem Design Studios for multiple projects. Their consistency, professionalism, and innovative designs make them our go-to interior partner.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    role: "Homeowner, Noida",
    text: "The modular kitchen they designed is both beautiful and incredibly functional. The team was patient with our many changes and delivered on time.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Restaurant Owner",
    text: "From 3D visualization to final execution, everything was seamless. Our restaurant's interior has become a talking point among customers!",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Client <span className="text-gradient-gold">Testimonials</span>
          </motion.h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl">
            What our clients say about us
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Reviews"
            title="Words From Our Clients"
            description="Hear directly from the people who trusted us with their spaces."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-sm relative"
              >
                <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-display text-foreground font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-body">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;