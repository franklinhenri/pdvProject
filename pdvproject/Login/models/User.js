const mongoose = require('mongoose')



const User = mongoose.model('User',{//vai ser adicionado em Users no mongoose
    name: String,
    email: String,
    password: String,
    products: Object,
    users: Object,
    configs: Object,
    integrations: Object
})

module.exports = User
