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
app.use(cors({
  origin: ['http://localhost:8080', 'https://underthearch.onrender.com', 'https://underthearch.in'],
  credentials: true
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
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
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
    const { name, email, phone, subject, message } = req.body;

    // Save data to MongoDB
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Message from ${name}`,
      text: `You received a new message from:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create uploads/resumes directory if it doesn't exist
    const dir = 'uploads/resumes';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
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

// Career Application Route
app.post("/api/career/apply", upload.single('resume'), async (req, res) => {
  try {
    const { fullName, email, phone, position, message } = req.body;
    const resumePath = req.file ? req.file.path : null;

    // Save data to MongoDB
    const newApplication = new Career({
      fullName,
      email,
      phone,
      position,
      message,
      resumePath
    });
    await newApplication.save();

    // Send email notification with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Career Application from ${fullName} for ${position}`,
      text: `
New job application received:

Name: ${fullName}
Position: ${position}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      attachments: resumePath ? [
        {
          filename: req.file.originalname,
          path: resumePath
        }
      ] : []
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
