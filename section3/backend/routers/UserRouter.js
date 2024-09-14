const express = require('express');
const UserRouter = require('./routers/UserRouter')

const router = express.Router();

//end point or route or address 

router.get('/add',(req,res)=> {
    res.send('response from user add');
});

module.exports = router;
