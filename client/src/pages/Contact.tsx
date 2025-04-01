import { useEffect, useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, Check, Upload } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://underthearch-22pt.onrender.com/api/contact', {
        // const response = await fetch('http://localhost:5000/api/contact', {
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

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      toast.success(data.message || "Message sent successfully! We'll get back to you soon.");
      
      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again later.");
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
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('position', selectedPosition);
      formData.append('message', message);
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }

      // For development, use this URL
      const response = await fetch('https://underthearch-22pt.onrender.com/api/career/apply', {
      // const response = await fetch('http://localhost:5000/api/career/apply', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const data = await response.json();
      toast.success(data.message || "Application submitted successfully!");
      
      // Clear form
      setFullName("");
      setEmail("");
      setPhone("");
      setSelectedPosition("");
      setMessage("");
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
      {/* Hero Section */}
      <section className="h-[80vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/daasgedae/image/upload/v1743136299/8_rd2bwq.png" 
            alt="Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white 
          text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Get in Touch
          </span>
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
              <div className="bg-secondary p-4 md:p-10 rounded-lg border border-white/10">
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
      
      {/* Career Section */}
      <section className="py-24 bg-secondary px-4 sm:px-6" ref={applicationFormRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Join Our Team</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-300">
              We're always looking for talented individuals to join our creative team. Explore our current openings and become part of something extraordinary.
            </p>
          </div>

          {!showApplicationForm ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  position: "Senior Architect",
                  type: "Full Time",
                  location: "Surat, Gujarat",
                  experience: "4+ years",
                  icon: "🏛️"
                },
                {
                  position: "Interior Designer",
                  type: "Full Time",
                  location: "Surat, Gujarat",
                  experience: "3+ years",
                  icon: "🪑"
                },
                {
                  position: "3D Visualization Artist",
                  type: "Full Time",
                  location: "Remote",
                  experience: "2+ years",
                  icon: "💻"
                }
              ].map((job, index) => (
                <div 
                  key={index}
                  className="bg-black p-6 sm:p-8 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 hover-lift"
                >
                  <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">{job.icon}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">{job.position}</h3>
                  <div className="space-y-2 text-gray-400">
                    <p className="flex items-center">
                      <span className="w-24">Type:</span>
                      <span>{job.type}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="w-24">Location:</span>
                      <span>{job.location}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="w-24">Experience:</span>
                      <span>{job.experience}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => handleApplyClick(job.position)}
                    className="mt-6 w-full bg-white text-black px-6 py-3 rounded-lg font-medium 
                      hover:bg-white/90 transition-all duration-300 
                      transform hover:scale-[1.02] hover:shadow-lg 
                      active:scale-[0.98] active:bg-white/80 
                      focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="bg-black p-6 sm:p-8 rounded-lg border border-white/10">
                {/* Position Header */}
                <div className="text-center mb-8 pb-8 border-b border-white/10">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">Position Applied For</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    {selectedPosition}
                  </h3>
                </div>

                <form onSubmit={handleApplicationSubmit}>
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Personal Info */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-medium text-white">Personal Information</h4>
                      <div>
                        <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-colors"
                          placeholder="Your full name"
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
                          className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-colors"
                          placeholder="Your email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    {/* Right Column - Cover Letter & Resume Upload */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-medium text-white">Cover Letter</h4>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-colors resize-none"
                        placeholder="Tell us about yourself, your experience, and why you'd be a great fit for this position..."
                      />

                      {/* Resume Upload - Moved to right column */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Resume/CV</h4>
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
                            className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-4 text-white flex items-center justify-center cursor-pointer hover:bg-secondary/80 hover:border-white/20 transition-all duration-300"
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
                    </div>
                  </div>

                  {/* Form Actions - Centered */}
                  <div className="flex items-center justify-center space-x-4 pt-8 mt-8 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white text-black px-6 py-2 rounded-lg font-medium 
                        inline-flex items-center justify-center
                        hover:bg-white/90 transition-colors 
                        disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Submitting...</span>
                          <Check className="animate-spin" size={16} />
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What services does UnderTheArch offer?",
                answer: "We offer a comprehensive range of architectural services including architectural design, interior design, urban planning, project management, 3D visualization, and sustainable design solutions.",
                icon: "🏛️"
              },
              {
                question: "How do I start a project with UnderTheArch?",
                answer: "Starting a project is easy! Simply reach out to us through our contact form, email, or phone. We'll schedule an initial consultation to discuss your vision, requirements, and budget.",
                icon: "🚀"
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Small residential projects may take 3-6 months, while larger commercial projects can extend to 12-24 months. We'll provide a detailed timeline during our initial consultation.",
                icon: "⏱️"
              },
              {
                question: "Do you work on projects outside of Surat?",
                answer: "Yes, while our office is based in Surat, we work on projects throughout India and internationally. We leverage technology to collaborate effectively regardless of location.",
                icon: "🌍"
              },
              {
                question: "How do you charge for your services?",
                answer: "Our fee structure is typically based on a percentage of the construction cost or a fixed fee depending on the project type and scope. We provide transparent pricing and detailed proposals before beginning any work.",
                icon: "💰"
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="absolute -top-4 left-8 bg-secondary w-12 h-12 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  {faq.icon}
                </div>
                
                {/* Content */}
                <div className="relative pt-8">
                  <h3 className="text-xl font-medium text-white mb-4 group-hover:text-white/90 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {faq.answer}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;