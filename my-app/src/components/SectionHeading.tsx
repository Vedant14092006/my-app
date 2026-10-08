import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ subtitle, title, description, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-20 h-0.5 bg-gradient-gold mx-auto mt-6" />
    </motion.div>
  );
};

export default SectionHeading;