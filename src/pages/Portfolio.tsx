import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio14 from "@/assets/portfolio-14.jpg";
import portfolio15 from "@/assets/portfolio-15.jpg";
import portfolio16 from "@/assets/portfolio-16.jpg";
import portfolio17 from "@/assets/portfolio-17.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Luxury Living Room",
    category: "Residential",
    location: "Gurugram",
  },
  {
    image: portfolio2,
    title: "Modern Office Space",
    category: "Commercial",
    location: "Gurugram",
  },
  {
    image: portfolio3,
    title: "Premium Retail Showroom",
    category: "Retail",
    location: "Gurugram",
  },
  {
    image: portfolio4,
    title: "Modular Kitchen Design",
    category: "Kitchen",
    location: "Gurugram",
  },
  {
    image: portfolio5,
    title: "Elegant Master Bedroom",
    category: "Residential",
    location: "Gurugram",
  },
  {
    image: portfolio6,
    title: "Natural Stone Foyer",
    category: "Residential",
    location: "Gurugram",
  },
  {
    image: portfolio7,
    title: "Contemporary Hallway",
    category: "Residential",
    location: "Gurugram",
  },
  {
    image: portfolio8,
    title: "Statement Bedroom",
    category: "Bedroom",
    location: "Gurugram",
  },
  {
    image: portfolio9,
    title: "Contemporary Bedroom",
    category: "Bedroom",
    location: "Gurugram",
  },
  {
    image: portfolio10,
    title: "Floral Feature Bedroom",
    category: "Bedroom",
    location: "Gurugram",
  },
  {
    image: portfolio11,
    title: "Luxury Media Room",
    category: "Entertainment",
    location: "Gurugram",
  },
  {
    image: portfolio12,
    title: "Elegant Living Room",
    category: "Living Room",
    location: "Gurugram",
  },
  {
    image: portfolio14,
    title: "Luxury Bathroom",
    category: "Bathroom",
    location: "Gurugram",
  },
  {
    image: portfolio15,
    title: "Luxury Home Bar",
    category: "Custom Interior",
    location: "Gurugram",
  },
  {
    image: portfolio16,
    title: "Designer Pooja Room",
    category: "Pooja Room",
    location: "Gurugram",
  },
  {
    image: portfolio17,
    title: "Kids Room Interior",
    category: "Kids Room",
    location: "Gurugram",
  },
];

const Portfolio = () => {
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
            Our <span className="text-gradient-gold">Portfolio</span>
          </motion.h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl">
            A showcase of our finest work
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Work" title="Featured Projects" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs text-primary font-body uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-display text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{project.location}</p>
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

export default Portfolio;