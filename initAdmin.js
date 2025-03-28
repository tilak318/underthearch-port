require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin'); // You'll need to create this model file

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const admins = [
  {
    username: 'underthearch2025',
    password: 'aA@underthearch123' // In production, use hashed passwords
  },
  {
    username: 'shrutisalia',
    password: 'aA@shruti123'
  }
];

const initializeAdmins = async () => {
  try {
    await Admin.deleteMany({}); // Clear existing admins
    await Admin.insertMany(admins);
    console.log('Admin accounts created successfully');
  } catch (error) {
    console.error('Error creating admin accounts:', error);
  } finally {
    mongoose.connection.close();
  }
};

initializeAdmins(); 