const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId(),
  bus_no: {type: 'string',  required: true},
  sacco: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sacco', 
    required: true},
  driver_name: {type: 'string', required: true},
  driver_no: {type: 'string', required: true},
  Image: {type: 'string'},
})

module.exports = mongoose.model('Bus', busSchema)