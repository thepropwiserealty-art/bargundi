"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  Properties: ["Luxury Homes", "Penthouses", "Condominiums", "Commercial"],
  Services: ["Property Management", "Investment Consulting", "Market Analysis", "Financing"],
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Support: ["Contact", "FAQ", "Documentation", "Privacy Policy"],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="foreground rounded-md flex items-center justify-center">
                {/* <span className="text-sm font-bold text-primary">RE</span> */} <img 
                 src="/dostilogo.png" 
                 alt="Dosti Logo" 
                 className="h-10 w-auto rounded-md"  // adjust size as needed
         />
              </div>
              {/* <span className="text-xl font-bold">Luxury Estates</span> */}
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Redefining luxury living with exceptional properties and unparalleled service. Your dream home awaits.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Dosti Greenscapes, Near Magarpatta City,Upper Camp, Pune - 411013</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 987456123</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">shobhalmt@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2025 Greenscapes . All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
