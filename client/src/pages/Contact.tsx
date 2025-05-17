import { useEffect, useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, Check, Upload } from "lucide-react";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";
import { Helmet } from "react-helmet";

const Contact = () => {
  // Add form toggle state at the top with other states
  const [activeForm, setActiveForm] = useState<'business' | 'career'>('business');

  // Separate state for contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Separate state for career form
  const [careerEmail, setCareerEmail] = useState("");
  const [careerPhone, setCareerPhone] = useState("");
  const [careerMessage, setCareerMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  
  // Add this ref at the top of your component
  const applicationFormRef = useRef<HTMLDivElement>(null);

  // Handle form submission with timeout handling
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show immediate feedback
    toast.loading("Sending your message...", { id: "contact-form" });
    
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), 8000); // 8 second timeout
    });
    
    try {
      // Race between the fetch and the timeout
      const fetchPromise = fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });
      
      // Use Promise.race to implement timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      toast.success("Message sent successfully! We'll get back to you soon.", { id: "contact-form" });
      
      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Simple error message without technical details
      toast.error("Unable to send message. Please try again later.", { id: "contact-form" });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    setShowApplicationForm(true);
    // Add this scroll behavior
    setTimeout(() => {
      applicationFormRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        // Check if resume file is selected
        if (!resumeFile) {
          toast.error("Please upload your resume");
          setIsSubmitting(false);
          return;
        }
  
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', careerEmail);
        formData.append('phone', careerPhone);
        formData.append('position', selectedPosition);
        formData.append('message', careerMessage);
        
        // Make sure the file is properly appended with the correct field name
        // The field name should match what your backend expects
        formData.append('resume', resumeFile, resumeFile.name);
  
        console.log("Submitting application with resume:", resumeFile.name);
        
        // For development, use this URL
        const response = await fetch(`${API_BASE_URL}/api/career/apply`, {
        // const response = await fetch('http://localhost:5000/api/career/apply', {
          method: 'POST',
          // Important: Don't set Content-Type header when sending FormData
          // The browser will set it automatically with the correct boundary
          body: formData,
        });
  
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("Server error:", errorData);
          throw new Error(errorData.message || 'Failed to submit application');
        }
  
        const data = await response.json();
        toast.success(data.message || "Application submitted successfully!");
        
        // Clear form - also update these to use the career-specific state variables
        setFullName("");
        setCareerEmail(""); // Change from setEmail to setCareerEmail
        setCareerPhone(""); // Change from setPhone to setCareerPhone
        setSelectedPosition("");
        setCareerMessage(""); // Change from setMessage to setCareerMessage
        setResumeFile(null);
        setShowApplicationForm(false);
      } catch (error) {
        console.error('Error submitting application:', error);
        toast.error("Failed to submit application. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
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
      <Helmet>
        <title>Contact – UnderTheArch | Get in Touch & Careers</title>
        <meta name="description" content="Contact Under The Arch for business inquiries or career opportunities. Let's build something extraordinary together." />
        <meta property="og:title" content="Contact Us &amp; Careers | Under The Arch" />
        <meta property="og:description" content="Contact Under The Arch for business inquiries or career opportunities. Let's build something extraordinary together." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://underthearch.in/contact" />
        <meta property="og:image" content="https://underthearch.in/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us &amp; Careers | Under The Arch" />
        <meta name="twitter:description" content="Contact Under The Arch for business inquiries or career opportunities. Let's build something extraordinary together." />
        <meta name="twitter:image" content="https://underthearch.in/og-image.png" />
      </Helmet>
      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile background image */}
          <img 
            src="/projects/IC/IC-13.jpg" 
            alt="Architecture mobile" 
            className="w-full h-full object-cover object-bottom block sm:hidden"
          />
          {/* Desktop background image */}
          <img 
            src="/projects/IC/IC-7.png" 
            alt="Architecture desktop" 
            className="w-full h-full object-cover object-bottom hidden sm:block"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Contact Us & Career
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Have questions or want to discuss a project? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-24 bg-black px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header and Toggle Switch in a flex container */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            {/* Left side - Heading */}
            <div className="text-left max-w-2xl mb-8 md:mb-0">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                {activeForm === 'business' ? 'BUSINESS INQUIRIES' : 'JOIN OUR TEAM'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                {activeForm === 'business' 
                  ? "Let's Start a Project Together" 
                  : "Career Opportunities"}
              </h2>
              <p className="text-gray-300">
                {activeForm === 'business'
                  ? "Ready to transform your vision into reality? Share your project details with us, and let's create something extraordinary together."
                  : "We're always looking for talented individuals to join our creative team. Submit your application and become part of something extraordinary."}
              </p>
            </div>
            
            {/* Right side - Toggle Switch */}
            <div className="bg-secondary p-1 rounded-lg inline-flex">
              <button
                onClick={() => setActiveForm('business')}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-sm md:text-base font-medium transition-colors ${
                  activeForm === 'business'
                    ? 'bg-white text-black'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Business Inquiry
              </button>
              <button
                onClick={() => setActiveForm('career')}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-sm md:text-base font-medium transition-colors ${
                  activeForm === 'career'
                    ? 'bg-white text-black'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Join Our Team
              </button>
            </div>
          </div>

          {activeForm === 'business' ? (
            <>
              {/* Business Form */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Form - Now takes full width */}
                <div className="lg:col-span-5">
                  <div className="bg-secondary p-4 md:p-10 rounded-lg border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Existing business form fields */}
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
                            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                            required
                            pattern="[0-9]{10}"
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
            </>
          ) : (
            <>
              {/* Career Content */}
              {/* Removing the duplicate header section that appears below the toggle */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Career Form - Now takes full width and matches business form styling */}
                <div className="lg:col-span-5">
                  <div className="bg-secondary p-4 md:p-10 rounded-lg border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Submit Your Application
                    </h2>
                    <form onSubmit={handleApplicationSubmit} className="space-y-6">
                      {/* Two Column Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
                          <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="careerEmail" className="block text-white mb-2">Email Address</label>
                          <input
                            id="careerEmail"
                            type="email"
                            value={careerEmail}
                            onChange={(e) => setCareerEmail(e.target.value)}
                            required
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="careerPhone" className="block text-white mb-2">Phone Number</label>
                          <input
                            id="careerPhone"
                            type="tel"
                            value={careerPhone}
                            onChange={(e) => setCareerPhone(e.target.value.replace(/[^0-9]/g, ''))}
                            required
                            pattern="[0-9]{10}"
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="position" className="block text-white mb-2">Position</label>
                          <select
                            id="position"
                            value={selectedPosition}
                            onChange={(e) => setSelectedPosition(e.target.value)}
                            required
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 appearance-none"
                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                                    backgroundPosition: "right 0.75rem center", 
                                    backgroundRepeat: "no-repeat", 
                                    backgroundSize: "1.5em 1.5em", 
                                    paddingRight: "2.5rem" }}
                          >
                            <option value="">Select a position</option>
                            <option value="Senior Architect">Senior Architect</option>
                            <option value="Interior Designer">Interior Designer</option>
                            <option value="3D Visualization Artist">3D Visualization Artist</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="careerMessage" className="block text-white mb-2">Cover Letter</label>
                        <textarea
                          id="careerMessage"
                          value={careerMessage}
                          onChange={(e) => setCareerMessage(e.target.value)}
                          required
                          rows={5}
                          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                          placeholder="Tell us about yourself, your experience, and why you'd be a great fit for this position..."
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="resume" className="block text-white mb-2">Resume/CV</label>
                        <div className="relative">
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            onChange={handleFileChange}
                            required
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                          <label
                            htmlFor="resume"
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white flex items-center justify-center cursor-pointer hover:bg-black/80 hover:border-white/20 transition-all duration-300"
                          >
                            <Upload className="w-5 h-5 mr-2" />
                            {resumeFile ? (
                              <span className="text-green-400">{resumeFile.name}</span>
                            ) : (
                              "Upload Resume (PDF, DOC, DOCX)"
                            )}
                          </label>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>Submitting... <Check size={16} className="ml-2" /></>
                        ) : (
                          <>Submit Application <Send size={16} className="ml-2" /></>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Contact Information and Map Section */}
      <section className="py-24 bg-secondary px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">REACH OUT</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-gray-300">
              Have questions or need assistance? Our team is here to help. Reach out through any of the following channels.
            </p>
          </div>
          
         
          
          {/* Map Section - Redesigned with adjusted height */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Map with adjusted height */}
            <div className="rounded-lg overflow-hidden h-[400px] border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.33794473476!2d72.86717671084106!3d21.233104880386364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe744c44351%3A0xdbdd594208b678a6!2sUnder%20the%20arch!5e1!3m2!1sen!2sin!4v1744694733505!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
            
            {/* Contact information card with adjusted height and better spacing */}
            <div className="bg-black p-6 rounded-lg border border-white/10 h-auto flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <a 
                  href="mailto:underthearch.in@gmail.com" 
                  className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4 flex items-center justify-center text-white text-sm sm:text-base" target="_blank"
                >
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Mail Us</span>
                </a>
                <a 
                  href="tel:+919016527950" 
                  className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4 flex items-center justify-center text-white" target="_blank"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>

              <div className="space-y-6">
                {/* Surat Branch */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Surat Branch</h4>
                    <p className="text-gray-300 mt-1">
                    310, Silver Trade Center, opposite Utran Power House Road,<br />
                      Uttran, Surat, Gujarat 395006
                    </p>
                  </div>
                </div>

                {/* Rajkot Branch */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Rajkot Branch</h4>
                    <p className="text-gray-300 mt-1">
                      217, RK Supreme, near Nana Mauva Circle,<br />
                      150 ft Ring Road, Rajkot - 360004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Find answers to common questions about our services, process, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-secondary p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">What services do you offer?</h3>
              <p className="text-gray-300">
                We offer a comprehensive range of architectural services including conceptual design, 
                detailed planning, 3D visualization, interior design, construction documentation, 
                and project management for residential, commercial, and institutional projects.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-secondary p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary based on scope and complexity. Small residential projects may take 
                3-6 months from concept to completion, while larger commercial projects can take 1-2 years. 
                During our initial consultation, we'll provide a more accurate timeline for your specific project.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-secondary p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">What is your design process?</h3>
              <p className="text-gray-300">
                Our design process begins with understanding your vision and requirements, followed by 
                conceptual design, schematic development, detailed design, documentation, and construction 
                administration. We maintain open communication throughout to ensure your vision is realized.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-secondary p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Do you work on international projects?</h3>
              <p className="text-gray-300">
                Yes, we have experience working on international projects. Our team can collaborate remotely 
                and travel as needed. We understand different regional requirements and can adapt our designs 
                to meet local building codes and cultural contexts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
