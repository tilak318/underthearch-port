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
          <div className="space-y-6 md:col-span-7">
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
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg"> 
              With diverse backgrounds and a shared commitment to excellence, our team brings together innovation, precision, and artistry to every project. 
            </p>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">  
              Together, we don't just design buildings, we design experiences.
            </p>
            <div className="flex space-x-6 mb-8">
              <a href="https://www.instagram.com/underthearch.in/" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300" target="_blank">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/underthearch/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300" target="_blank">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info - Locations */}
          <div className="md:col-span-5">
            <h3 className="text-white font-medium text-xl mb-6 border-b border-white/10 pb-2 inline-block">Our Locations</h3>
            <div className="space-y-6">
              {/* Surat Branch */}
              <div className="flex items-start space-x-3 group">
                <a href="https://maps.app.goo.gl/TUgnuKvXrpCLTSvc7" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <MapPin className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                  </div>
                </a>
                <div>
                  <p className="text-gray-300 font-medium mb-1 text-base sm:text-lg">Surat </p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">310, Silver Trade Center, opposite Uttran Power House Road, Uttran, Surat, Gujarat 395006</p>
                </div>
              </div>
              
              {/* Rajkot Branch */}
              <div className="flex items-start space-x-3 group">
                <a href="https://maps.app.goo.gl/jHynAUZFjZWxtNNE9" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <MapPin className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                  </div>
                </a>
                <div>
                  <p className="text-gray-300 font-medium mb-1 text-base sm:text-lg">Rajkot </p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">217, RK Supreme, near Nana Mauva Circle, 150 ft Ring Road, Rajkot - 360004</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mt-8">
                <h3 className="text-white font-medium text-xl mb-6 border-b border-white/10 pb-2 inline-block">Get in Touch</h3>
                <div className="flex items-start space-x-3 group">
                  <a href="tel:+919016527950" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                      <Phone className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                    </div>
                  </a>
                  <a href="tel:+919016527950" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group text-base sm:text-lg" target="_blank">
                    <span>+91 90165 27950</span>
                  </a>
                </div>
                <div className="flex items-start space-x-3 group">
                  <a href="mailto:contact@underthearch.in" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                      <Mail className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                    </div>
                  </a>
                  <a href="mailto:contact@underthearch.in" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group text-base sm:text-lg" target="_blank">
                    <span>contact@underthearch.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm mb-2">
            © {currentYear} UnderTheArch. All rights reserved.
          </p>
          <p className="text-gray-500 text-base">
            Developed by <a href="https://xdevsolutions.com" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium" target="_blank">xDev Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;