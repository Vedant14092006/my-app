import { motion } from "framer-motion";
import { MessageSquare, MapPin, Lightbulb, Box, Palette, Hammer, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const steps = [
  { icon: MapPin, title: "Site Visit", desc: "Our team visits your space to assess dimensions, lighting, and structural considerations." },
  { icon: MessageSquare, title: "Consultation", desc: "We discuss your vision, requirements, lifestyle, and budget to understand your needs." },
  { icon: Lightbulb, title: "Design Concept", desc: "We create a tailored design concept with mood boards, layouts, and material palettes." },
  { icon: Box, title: "3D Visuals", desc: "Photorealistic 3D renders let you experience your space before construction begins." },
  { icon: Palette, title: "Material Selection", desc: "We help you choose the finest materials, finishes, and furnishings within your budget." },
  { icon: Hammer, title: "Execution", desc: "Our skilled team brings the design to life with precision craftsmanship and quality control." },
  { icon: CheckCircle2, title: "Final Handover", desc: "We walk you through every detail and ensure complete satisfaction before handover." },
];
const Process = () => {
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
            Our <span className="text-gradient-gold">Process</span>
          </motion.h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl">
            A systematic approach to creating your dream space
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            subtitle="How We Work"
            title="From Vision to Reality"
            description="Our proven 7-step process ensures a seamless journey from initial concept to final handover."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-8 mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number bubble */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center z-10">
                  <span className="text-sm font-body font-bold text-primary-foreground">{i + 1}</span>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="p-6 bg-card border border-border rounded-sm">
                    <step.icon size={24} className="text-primary mb-3" />
                    <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;