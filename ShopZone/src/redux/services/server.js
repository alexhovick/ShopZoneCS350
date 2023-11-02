const express = require("express");
const cors = require("cors");
const stripe = require("./stripe");


const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);

