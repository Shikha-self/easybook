// console.log("i am from server.js");
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8090;

//using cors for accessing api from different domain
var corsOption ={
    origin:'*'
}
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setting route 
app.use("/user", require(path.join(__dirname, "routes/userRoutes.js")));



app.listen(port,() =>{
    console.log(`This project is running on port ${port}`);
});
