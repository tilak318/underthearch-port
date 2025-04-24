import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Increased width */}
          <div className="space-y-6 md:col-span-5">
            <Link to="/" className="inline-block mb-2">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/1ebf338e-3643-4bdd-83c3-a4b06835e2c3.png" 
                  alt="UnderTheArch Logo" 
                  className="h-10"
                />
                <span className="text-white text-xl font-medium">UnderTheArch</span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              At Under The Arch, we are a collective of passionate architects, creative thinkers, and technical experts dedicated to shaping meaningful spaces.
              </p>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg"> With diverse backgrounds and a shared commitment to excellence, our team brings together innovation, precision, and artistry to every project. 

              </p>
           
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">  
              Together, we don't just design buildings, we design experiences.
            </p>
            <div className="flex space-x-6 mb-8">
                <a href="https://www.instagram.com/underthearch.in/" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300" target="_blank">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300" target="_blank">
                  <Twitter size={24} />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300" target="_blank">
                  <Linkedin size={24} />
                </a>
            </div>
          </div>

          {/* Links - Reduced width */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium text-xl mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <div className="flex flex-col gap-y-3">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>About Us
              </Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Portfolio
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Blog
              </Link>
              <Link to="/recognitions" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Recognitions
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Contact Us
              </Link>
              <Link to="/price-calculator" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Price Calculator
              </Link>
              <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-300 flex items-center text-base sm:text-lg">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>Admin Login
              </Link>
            </div>
          </div>

          {/* Contact Info - Kept same width */}
          <div className="md:col-span-4">
            <h3 className="text-white font-medium text-xl mb-6 border-b border-white/10 pb-2 inline-block">Our Locations</h3>
            <div className="space-y-6">
              {/* Surat Branch */}
              <div className="flex items-start space-x-3 group">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={20} />
                <div>
                  <p className="text-gray-300 font-medium mb-1 text-base sm:text-lg">Surat Branch</p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">310, Silver Trade Center, opposite Uttran Power House Road, Uttran, Surat, Gujarat 395006</p>
                </div>
              </div>
              
              {/* Rajkot Branch */}
              <div className="flex items-start space-x-3 group">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={20} />
                <div>
                  <p className="text-gray-300 font-medium mb-1 text-base sm:text-lg">Rajkot Branch</p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">217, RK Supreme, near Nana Mauva Circle, 150 ft Ring Road, Rajkot - 360004</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Phone className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={20} />
                  <a href="tel:+919898873593" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group text-base sm:text-lg" target="_blank">
                    <span>+91 98988 73593</span>
                  </a>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Mail className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={20} />
                  <a href="mailto:underthearch.in@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group text-base sm:text-lg" target="_blank">
                    <span>underthearch.in@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact & Social Section - Reorganized */}
        <div className="space-y-8">
          <div>
          
            
      
           
              
    

            {/* Copyright section remains the same ... */}
            <div className="text-center border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm mb-2">
                © {currentYear} UnderTheArch. All rights reserved.
              </p>
              <p className="text-gray-500 text-base">
                Developed by <a href="https://xdev.onrender.com" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium" target="_blank">xDev Solutions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;