const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

app.use("/api/v1/", router);

mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rqgcl.mongodb.net/userdb?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(process.env.PORT || 3000);
    })
    .catch((err) => {
        return res.status(500).json({ message: "Server Error :(!" });
    });
