const mongoose = require('mongoose');

const DB_PATH = "mongodb+srv://root:root@cluster0.5r7ratk.mongodb.net/airbnb?retryWrites=true&w=majority";

console.log('Testing connection...');

mongoose.connect(DB_PATH)
  .then(() => {
    console.log('✅ Connected successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.log('❌ Connection failed:', err.message);
    process.exit(1);
  });