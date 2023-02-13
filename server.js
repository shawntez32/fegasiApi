//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://shawntez32:Tezzyk32@cluster0.wpzbm.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true});

const postSchema = {
    user: String,
    title: String,
    description: String
};

app.post("/",function(req,res) {

});

app.listen(4000, function() {
    console.log("Server started on port 3000");
  });