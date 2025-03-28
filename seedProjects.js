require("dotenv").config();
const mongoose = require("mongoose");
const { projectsData } = require("./projectsData"); // We'll create this file next

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  year: String,
  description: String,
  location: String,
  area: String,
  mainImage: String,
  gallery: [{
    url: String,
    caption: String
  }],
  challenge: String,
  solution: String
});

const Project = mongoose.model("Project", projectSchema);

// Seed function
const seedProjects = async () => {
  try {
    // First, delete all existing projects
    await Project.deleteMany({});
    console.log('Deleted existing projects');

    // Insert the project data
    await Project.insertMany(projectsData);
    console.log('Successfully seeded projects');

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding projects:', error);
    mongoose.connection.close();
  }
};

// Run the seed function
seedProjects(); 