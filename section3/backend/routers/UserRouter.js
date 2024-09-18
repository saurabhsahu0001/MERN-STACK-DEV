const express = require('express');

const router = express.Router();
const Model = require('../models/usermodel');

//end point or route or address 

router.post('/add',(req,res)=> {
    console.log(req.body);
    new Model(req.body).save()
   .then((result) => {
      res.status(200).json(result)
   }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
   });

    
});
router.get('/getall',(req,res)=> {
    Model.find()
    
    .then((result) => {
        res.status(200).json(result)
     }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/getbyid',(req,res)=> {
    res.send('response from user getbyid');
});
router.get('/update',(req,res)=> {
    res.send('response from user update');
});
router.get('/delete',(req,res)=> {
    res.send('response from user delete');
});

module.exports = router;

//response status codes

// 100-199 info response status codes
//  200-299 success sats codes
//  300-399 redirect status codes
//  400-499  cient side error 
// 500-599 servor side error