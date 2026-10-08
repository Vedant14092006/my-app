import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const message = `Hello Aseem Designs Studio! I'd like to inquire about your services.

  Name: ${form.name}
  Email: ${form.email}
  Phone: ${form.phone}
  Service: ${form.service}
  Message: ${form.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919811890790?text=${encodedMessage}`, "_blank");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

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
            Contact <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl">
            Let's start creating your dream space
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Get in Touch" title="Let's Talk Design" centered={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-body font-semibold text-foreground">Visit Us</div>
                    <div className="text-sm text-muted-foreground font-body">H.No 928 G floor, Sector-4, Gurugram, Haryana, 122001</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-body font-semibold text-foreground">Call Us</div>
                    <div className="text-sm text-muted-foreground font-body">9811890790/9999984999</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-body font-semibold text-foreground">Email Us</div>
                    <div className="text-sm text-muted-foreground font-body">designstudioaseem@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-body font-semibold text-foreground">Working Hours</div>
                    <div className="text-sm text-muted-foreground font-body">Mon - Sat: 10 AM - 7 PM</div>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/aseem_designs_studio?igsh=OHp6aHdtdjdjdDA5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                    <Instagram size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-body font-semibold text-foreground">Follow Us</div>
                    <div className="text-sm text-muted-foreground font-body">@aseem_designs_studio</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card border border-border rounded-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select Service</option>
                    <option>Residential Interior</option>
                    <option>Commercial Interior</option>
                    <option>Retail / Showroom</option>
                    <option>Modular Kitchen</option>
                    <option>Renovation</option>
                    <option>3D Visualization</option>
                    <option>Online Consultation</option>
                  </select>
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
                >
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;