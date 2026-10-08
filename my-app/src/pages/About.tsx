import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground"
          >
            About <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl">
            Crafting exceptional spaces since 2010
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Our Story" title="Aseem Design Studios" centered={false} />
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Founded in 2010 in the heart of Gurugram, Aseem Design Studios has grown from a passionate vision into one of the region's most trusted interior design firms.
                </p>
                <p>
                  With over 15 years of experience, we specialize in transforming residential, commercial, and retail spaces into stunning environments that reflect our clients' unique personalities and business goals.
                </p>
                <p>
                  Our philosophy is simple: <strong className="text-primary">Plan. Design. Shape.</strong> Every project begins with careful planning, evolves through innovative design, and is shaped into reality with meticulous attention to detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "2010", label: "Founded" },
                { number: "500+", label: "Projects" },
                { number: "15+", label: "Years" },
                { number: "100%", label: "Commitment" },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-card border border-border rounded-sm text-center">
                  <div className="text-2xl font-display font-bold text-primary">{stat.number}</div>
                  <div className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Why Us" title="What Sets Us Apart" />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Affordable Pricing", desc: "Premium design solutions that respect your budget without compromising quality." },
              { title: "Fast Delivery", desc: "Efficient project management ensuring timely completion of every project." },
              { title: "Custom Furniture", desc: "Bespoke furniture designed and crafted specifically for your space." },
              { title: "Turnkey Solutions", desc: "End-to-end design and execution, so you don't have to worry about a thing." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-sm"
              >
                <div className="w-10 h-0.5 bg-gradient-gold mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;