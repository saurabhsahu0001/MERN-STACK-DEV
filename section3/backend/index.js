//import express
const express = require('express');
const UserRouter= require('./routers/UserRouter')
const productRouter= require('./routers/productrouter')
//initialize express
const app = express();

const PORT = 5000;
//middleware
app.use(express.json());
app.use('/user',UserRouter);
app.use('/product',productRouter);


app.get('/',(req,res) => {
    res.send('response from express')
});
app.get('/add',(req,res) => {
    res.send('response from add')
});
app.get('/getall',(req,res) => {
    res.send('response from getall')
});
app.get('/delete',(req,res) => {
    res.send('response from delete')
});
app.get('/getbyid',(req,res) => {
    res.send('response from getbyid')
});

app.listen(PORT,() => {console.log('server started')} );
