const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 80;
const app = express();
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TechnologyContact');
 }

 //Defining schema
 const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    message: String
  });

const contact = mongoose.model('contact', contactSchema);

app.use('/static' , express.static('static'));
app.use(express.urlencoded());

app.set('views engine' , 'pug');
app.set('/views' , path.join(__dirname) , 'views');

app.get("/" , (req,res)=>{
    res.render('index.pug');
})
// app.get("/contact" , (req,res)=>{
//     res.render('contact.pug');
// })

app.post("/contact" , (req,res)=>{
 var Mydata = new contact(req.body);
 Mydata.save().then(()=>{
    res.send("Successfully submitted");
 }).catch(()=>{
    res.status(400).send(" ERROR : Not submitted");
 })
})
 
app.listen(port , (req,res)=>{
    console.log(`server is running on ${port}`);
})