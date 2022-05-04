const mongoose = require('mongoose');

const saccosSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sacco_name: {type: 'string',  required: true},
  manager: {type: 'string', required: true},
  email: {type: 'string', unique:true },
  phone_no: {type: 'string', required: true},
  role: {type: 'string', default:'manager'},
  reg_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Saccos', saccosSchema)