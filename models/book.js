const mongoose = require('mongoose');
const Schema = mongoose.schema;

const bookSchema = new Schema({
    title:{
        type: string,
        required: true
    },
    description:{
        type: string,
        required: true
    }
});

const Livro = mongoose.model('Product', bookSchema);
module.exports = Livro;