var express = require("express");
var router = express.Router();
const item = require("../model/items");

router.get("/", (req, res) => {
    res.send("Hello from Root path, in different directory");
});

router.post("/items", (req, res) => {
    const newitem = new item({
        itemname: req.body.itemname,
        itemquantity: req.body.itemquantity,
        itembought: req.body.itembought
    });
    newitem.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/items", (req, res) => {
    item.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/item/:id", (req, res) => {
    item.findById({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.delete("/item/:id", (req, res) => {
    item.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.put("/item/:id", (req, res) => {
    const updatedItem = {
        itemname: req.body.itemname,
        itemquantity: req.body.itemquantity,
        itembought: req.body.itembought
    };
    item.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updatedItem },
        (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        }
    );
});

module.exports = router;
