const express = require('express');
const router = express.Router();


// The get Route goes here
router.get('/', async(req, res, next)=>{
 res.status(200).json({
   message: 'We are in the get route'
 })
});

// Get Single Route
router.get('/:id', async(req, res, next)=>{
  res.status(200).json({
    message: 'We getting one bus'
  })
 });

// The Post Route
router.post('/', async(req, res, next)=>{
  res.status(200).json({
    message: 'We are in the post route'
  })
 });

// The Update route
router.patch('/:id', async(req, res, next)=>{
  res.status(200).json({
    message: 'We are Updating'
  })
 });
// Delete Route
router.delete('/:id', async(req, res, next)=>{
  res.status(200).json({
    message: 'We are deleting'
  })
 });
module.exports = router;