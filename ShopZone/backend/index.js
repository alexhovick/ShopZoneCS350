const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});


//const connection_string = process.env.CONNECTION_STRING
mongoose.set('strictQuery', false);
const connection_string = "mongodb+srv://scuffedleaf:scuffedleaf1412@cluster0.l9tt2y9.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connection_string, {
})
.then(()=> console.log("MongoDB connection Established..."))
.catch((error)=>console.error("Mongo DB connection Failed: ", error.message))
