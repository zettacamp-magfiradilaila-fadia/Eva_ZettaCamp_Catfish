const mongoose = require('mongoose');
const shelfbook = new mongoose.Schema({
    name: {type: String},
    book_ids: [{
        book_id: {type: mongoose.Schema.Types.ObjectId},
        added_date: {},
    }]
    stock
})