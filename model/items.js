const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema({
    itemname: {
        type: String,
        required: false
    },
    itemquantity: {
        type: Number,
        required: false
    },
    itembought: {
        type: Boolean,
        required: false
    }
});

const item = mongoose.model("Item", itemsSchema);
module.exports = item;
