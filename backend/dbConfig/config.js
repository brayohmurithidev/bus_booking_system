const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/matatus_bookings'

const dbConfig = mongoose.connect(url, {
  useNewUrlParser: true
}) 
.then(result =>{
  console.log('database connected successfully!');
})
.catch(error =>{
  console.log('Error connecting to database', error.message);
});

module.exports = dbConfig;