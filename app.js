var express = require("express");
var app = express();
var router = require("./router/routes");
var mongoose = require("mongoose");

app.use(express.json());
var cors = require("cors");
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected to port number 27017");
});

router.get("/", (req, res) => {
    res.send("This is the Root path, present in app.js file");
});

app.use("/api", router);

const port = 3000;
app.listen(port, () => console.log(`App started on port number ${port}`));
