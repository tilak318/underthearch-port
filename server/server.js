require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Configure CORS with dynamic origin handling
const allowedOrigins = [
  'http://localhost:8080',
  'https://underthearch.onrender.com',
  'https://underthearch.in',
  'http://underthearch.in',
  'https://www.underthearch.in',
  'http://www.underthearch.in',
  'https://underthearch-22pt.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if the origin is in the allowed list or is a subdomain of underthearch.in
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.underthearch.in')
    ) {
      return callback(null, true);
    }
    
    // For other origins, you can choose to allow or deny
    // For now, we'll allow all origins in development
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const Admin = mongoose.model("Admin", adminSchema);

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  date: { type: Date, default: Date.now },
  author: String,
  image: String
});

const Blog = mongoose.model("Blog", blogSchema);

// Admin Authentication Middleware
const authenticateAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// API Route to Handle Form Submission
app.post("/api/contact", async (req, res) => {
  try {
    console.log('Processing contact form submission');
    const { name, email, phone, subject, message } = req.body;
    console.log(`Contact form submission received from: ${email}`);

    // Save data to MongoDB
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    console.log(`Contact saved to database with ID: ${newContact._id}`);

    // Respond to client immediately after saving to database
    res.status(201).json({ message: "Message sent successfully!" });
    
    // Send email notification (similar to careers approach)
    try {
      // Create a dedicated transporter for contact emails
      const contactTransporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.NOREPLY_EMAIL,
          pass: process.env.NOREPLY_EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        },
        debug: false,
        pool: true,
        maxConnections: 5,
        rateDelta: 20000,
        rateLimit: 5
      });
      
      const mailOptions = {
        from: {
          name: 'Under The Arch',
          address: process.env.NOREPLY_EMAIL
        },
        to: process.env.EMAIL_USER, // Send to contact@underthearch.in
        replyTo: email, // Set reply-to as the submitter's email
        subject: `New Contact Message from ${name}`,
        priority: 'high',
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'High',
          'X-Mailer': 'Under The Arch Website'
        },
        text: `
New contact message received:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}
Message: ${message || 'Not provided'}
        `,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #333;">New Contact Message</h2>
          </div>
          <div style="margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'Not provided'}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message || 'Not provided'}</p>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
            <p>This is an automated message from the Under The Arch website contact form.</p>
          </div>
        </div>
        `
      };
      
      await contactTransporter.sendMail(mailOptions);
      console.log('Contact email notification sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      console.error('Email error details:', emailError.stack);
      // Continue even if email fails - we've already saved to database
    }
      
  } catch (error) {
    console.error("Database error:", error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: "Failed to save your message", details: error.message });
  }
});

// Admin Login Route
app.post("/api/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    
    if (!admin || password !== admin.password) { // In production, use proper password hashing
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Blog Management Routes
app.post("/api/blogs", authenticateAdmin, async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/blogs/:id", authenticateAdmin, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add these routes after your existing routes
app.get("/api/contacts", authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/contacts/:id", authenticateAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("/api/contacts/:id/mark-read", authenticateAdmin, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add this route after your existing routes
app.get("/api/contact/all", authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add this GET route to fetch all contacts
app.get("/api/contact", authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add these routes for managing contacts
app.delete("/api/contact/:id", authenticateAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("/api/contact/:id", authenticateAdmin, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Set up multer for file uploads
// Determine if we're in production environment
const isProduction = process.env.NODE_ENV === 'production';

// Configure storage based on environment
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // In production, use tmp directory which is available on most hosting platforms
    // In development, use local uploads directory
    const dir = isProduction ? '/tmp/resumes' : 'uploads/resumes';
    
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    } catch (error) {
      console.error('Error creating directory:', error);
      // Fallback to tmp directory if there's an error
      cb(null, '/tmp');
    }
  },
  filename: function (req, file, cb) {
    // Create a unique filename to avoid collisions
    const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    cb(null, uniqueFilename);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Define Career Schema
const careerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  position: String,
  message: String,
  resumePath: String,
  date: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }
});

const Career = mongoose.model("Career", careerSchema);

// Career Application Route - with error handling middleware
app.post("/api/career/apply", (req, res, next) => {
  console.log('Career application request received');
  // Use single file upload but catch any errors
  upload.single('resume')(req, res, (err) => {
    if (err) {
      console.error('File upload error:', err);
      // Continue without file if there's an upload error
      req.fileError = err.message;
      next();
    } else {
      console.log('File upload successful or no file provided');
      next();
    }
  });
}, async (req, res) => {
  try {
    console.log('Processing career application submission');
    console.log('Request body:', req.body);
    
    // Extract form data
    const { fullName, email, phone, position, message } = req.body;
    
    console.log(`Form data: fullName=${fullName}, email=${email}, position=${position}`);
    
    if (!fullName || !email || !position) {
      console.error('Missing required fields in form submission');
      return res.status(400).json({ 
        error: 'Missing required fields', 
        details: 'Name, email and position are required' 
      });
    }
    
    console.log(`Received application from ${fullName} for ${position}`);
    
    // Handle file data if available
    let resumePath = null;
    let resumeFilename = null;
    
    if (req.file) {
      console.log('Resume file uploaded:', req.file.originalname);
      console.log('File details:', req.file);
      resumePath = req.file.path;
      resumeFilename = req.file.originalname;
    } else if (req.fileError) {
      console.log('Resume upload failed but continuing:', req.fileError);
    } else {
      console.log('No resume file provided');
    }
    
    // Make sure uploads directory exists
    const uploadsDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadsDir)){
      console.log('Creating uploads directory');
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Save application data to MongoDB (even without resume)
    const newApplication = new Career({
      fullName,
      email,
      phone,
      position,
      message,
      resumePath
    });
    
    const savedApplication = await newApplication.save();
    console.log('Application saved to database with ID:', savedApplication._id);

    // Prepare email notification
    try {
      // Create a dedicated transporter for career emails
      const careerTransporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.NOREPLY_EMAIL,
          pass: process.env.NOREPLY_EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        },
        debug: true
      });

      const mailOptions = {
        from: `"Under The Arch" <${process.env.NOREPLY_EMAIL}>`,
        to: process.env.CAREER_EMAIL,
        replyTo: email, // Set reply-to as the applicant's email
        subject: `New Career Application from ${fullName} for ${position}`,
        text: `
New job application received:

Name: ${fullName}
Position: ${position}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message: ${message || 'Not provided'}
Resume: ${resumePath ? 'Attached' : req.fileError ? 'Upload failed: ' + req.fileError : 'Not provided'}
        `
      };
      
      // Add attachment if file exists and is accessible
      if (resumePath && resumeFilename) {
        try {
          if (fs.existsSync(resumePath)) {
            mailOptions.attachments = [
              {
                filename: resumeFilename,
                path: resumePath
              }
            ];
            console.log('Resume file attached to email');
          } else {
            console.log(`Resume file not found at path: ${resumePath}`);
          }
        } catch (fileError) {
          console.error('File attachment error:', fileError);
          // Continue without attachment
        }
      }

      await careerTransporter.sendMail(mailOptions);
      console.log('Career email notification sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - we've already saved to database
    }

    // Return success response
    res.status(201).json({ 
      message: "Application submitted successfully!",
      applicationId: savedApplication._id,
      resumeStatus: req.file ? 'uploaded' : (req.fileError ? 'failed' : 'not provided')
    });
    
  } catch (error) {
    console.error('Error in career application:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: "Failed to submit application. Please try again or contact us directly.",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get all career applications (admin only)
app.get("/api/career/applications", authenticateAdmin, async (req, res) => {
  try {
    const applications = await Career.find().sort({ date: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete career application (admin only)
app.delete("/api/career/applications/:id", authenticateAdmin, async (req, res) => {
  try {
    const application = await Career.findById(req.params.id);
    if (application && application.resumePath) {
      // Delete resume file if it exists
      fs.unlink(application.resumePath, (err) => {
        if (err) console.error("Error deleting file:", err);
      });
    }
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Mark career application as read (admin only)
app.patch("/api/career/applications/:id/mark-read", authenticateAdmin, async (req, res) => {
  try {
    const application = await Career.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
