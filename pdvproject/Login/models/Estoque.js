const mongoose = require('mongoose')


const Estoque = mongoose.model('Estoque',{//vai ser adicionado em Users no mongoose
    idUser: String,
    products: Object,
})

module.exports = Estoque
