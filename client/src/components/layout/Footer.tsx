import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/1ebf338e-3643-4bdd-83c3-a4b06835e2c3.png" 
                  alt="UnderTheArch Logo" 
                  className="h-10"
                />
                <span className="text-white text-lg font-medium">UnderTheArch</span>
              </div>
            </Link>
            {/* Removed the descriptive text paragraph */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/underthearch.in/" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Linkedin size={20} />
              </a>
            </div>
            {/* Contact details */}
            <div className="space-y-2.5">
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-400 flex-shrink-0" size={18} />
                <a href="tel:+918238169574" className="text-gray-400 hover:text-white transition-colors" target="_blank">+91 82381 69574</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-400 flex-shrink-0" size={18} />
                <a href="mailto:underthearch.in@gmail.com" className="text-gray-400 hover:text-white transition-colors" target="_blank">underthearch.in@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors py-2">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors py-2">About Us</Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors py-2">Portfolio</Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors py-2">Blog</Link>
              <Link to="/recognitions" className="text-gray-400 hover:text-white transition-colors py-2">Recognitions</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors py-2">Contact Us</Link>
              <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors py-2">Admin Login</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Our Locations</h3>
            <div className="space-y-4">
              {/* Surat Branch */}
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 font-medium">Surat Branch</p>
                  <p className="text-gray-400">310, Silver Trade Center, opposite Utran Power House Road, Uttran, Surat, Gujarat 394105</p>
                </div>
              </div>
              
              {/* Rajkot Branch */}
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 font-medium">Rajkot Branch</p>
                  <p className="text-gray-400">217, RK Supreme, near Nana Mauva Circle, 150 ft Ring Road, Rajkot - 360004</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} UnderTheArch. All rights reserved.
          </p>
          <p className="text-gray-500 text-base">
            Developed by <a href="https://xdev.onrender.com" className="text-white hover:text-amber-400 transition-colors duration-300" target="_blank">xDev Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;