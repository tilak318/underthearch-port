
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Page transition animation
  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
            alt="Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 mt-16 text-center">
          <span className="inline-block px-4 py-1 border border-white/20 text-white text-sm rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-8">
                  Whether you're looking to start a new project, have questions about our services, or simply want to say hello, we're here to help.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Address</h3>
                    <p className="text-gray-400">
                      Silver Trade Center, 310, opposite Utran Power House Road, Uttran, Surat, Gujarat 394105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:underthearch.in@gmail.com" className="hover:text-white transition-colors" target="_blank">
                      underthearch.in@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">
                      <a href="tel:+919876543210" className="hover:text-white transition-colors" target="_blank">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="pt-8">
                <div className="bg-secondary aspect-video rounded-lg overflow-hidden">
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9683180760485!2d72.86718207486868!3d21.233104880467852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe744c44351%3A0xdbdd594208b678a6!2sUnder%20the%20arch!5e0!3m2!1sen!2sin!4v1742483650559!5m2!1sen!2sin" 
                     width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="UnderTheArch office location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-secondary p-8 md:p-10 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="Message subject"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Sending... <Check size={16} className="ml-2" /></>
                    ) : (
                      <>Send Message <Send size={16} className="ml-2" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What services does UnderTheArch offer?",
                answer: "We offer a comprehensive range of architectural services including architectural design, interior design, urban planning, project management, 3D visualization, and sustainable design solutions."
              },
              {
                question: "How do I start a project with UnderTheArch?",
                answer: "Starting a project is easy! Simply reach out to us through our contact form, email, or phone. We'll schedule an initial consultation to discuss your vision, requirements, and budget."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Small residential projects may take 3-6 months, while larger commercial projects can extend to 12-24 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work on projects outside of Surat?",
                answer: "Yes, while our office is based in Surat, we work on projects throughout India and internationally. We leverage technology to collaborate effectively regardless of location."
              },
              {
                question: "How do you charge for your services?",
                answer: "Our fee structure is typically based on a percentage of the construction cost or a fixed fee depending on the project type and scope. We provide transparent pricing and detailed proposals before beginning any work."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-black p-6 rounded-lg border border-white/5 hover-lift"
              >
                <h3 className="text-xl font-medium text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
