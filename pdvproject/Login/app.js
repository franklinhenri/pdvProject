require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
// Models
const User = require('./models/User')
const Estoque = require('./models/Estoque')


//Open Route = Public Route
app.get('/', (req,res)=>{
    res.status(202).json({
        msg: "Bem bindo a nossa API!"
    })
})

// Private Route
app.get("/user/:id", checkToken ,async (req,res)=>{
    const id = req.params.id
    //check if user exist
    const user = await User.findById(id, '-password')

    if(!user){
        return res.status(404).json({msg:"usuario não encontrado"})
    }

    res.status(202).json({ user })
})

// Midwair
function checkToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({msg:"Acesso Negado!"})
    }

    try{

        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()

    }catch(error){
        res.status(400).json({msg: "Token inválido!"})
    }
}



// Register
app.post('/auth/register',async (req, res)=>{

    const {name, email, password, confirmPassword, products, users, configs,integrations} = req.body

    //validações
    if(!name){
        return res.status(422).json({msg:"O nome é obrigatorio"})
    }
    if(!email){
        return res.status(422).json({msg:"O email é obrigatorio"})
    }
    if(!password){
        return res.status(422).json({msg:"A senha é obrigatoria"})
    }
    if(password != confirmPassword){
        return res.status(422).json({msg:"As senhas não conferem"})
    }

    //check if user exist
    const userExists = await User.findOne({email:email})

    if(userExists){
        return res.status(422).json({msg: "Por favor utilize outro email"})
    }

    //create password
    const salt = await bcrypt.genSalt(12)//variavel de hash
    const passwordHash = await bcrypt.hash(password, salt)//adicionando a hash a senha

    //create user in mongoose
    const user = new User({
        name,
        email,
        password: passwordHash,//esta adicionando a variavel password - o valor passwordHash
        products,
        users,
        configs,
        integrations
    })
    const estoque = new Estoque({
        _id: user._id
    })
    try{
        await user.save()
        await estoque.save()

        res.status(201).json({msg: "Usurio criado com sucesso!", id: user._id, estoque: estoque._id})
    }catch(err){
        console.log(error)
        res.status(500).json({msg: "Aconteceu um erro do servidor, tente mais tarde!"})
    }
})

// Login
app.post('/auth/login',async (req,res)=>{
    const {email, password} = req.body
    if(!email){
        return res.status(422).json({msg:"O email é obrigatorio"})
    }
    if(!password){
        return res.status(422).json({msg:"A senha é obrigatoria"})
    }
    //checar se o usuario existe - check user
    const user = await User.findOne({email:email}) //buscando usuario no bd que tem o email = email do req.body

    if(!user){
        return res.status(404).json({msg:"Usuario não encontrado!"})
    }

    //check password
    const checkPassword = await bcrypt.compare(password, user.password)//buscando a variavel password de dentro de user para verificar se o req.body bate com a senha. com o bcrypt decodificando a senha
    if(!checkPassword){
        return res.status(422).json({msg:"Senha incorreta"})
    }

    try{

        const secret = process.env.secret
        const id = user._id
        const token = jwt.sign({
            id,
        },
            secret,
        )

        res.status(200).json({msg:"Autenticação realizada com sucesso! ", token, id})
    }catch(err){

    }
})


//acesso estoque
//check if id exist
app.get("/pdvhome/estoque/:id", checkToken ,async (req,res)=>{
    const id = req.params.id
    //const userExists = await Estoque.findOne({id:id})
    //check if user exist
    const estoque = await Estoque.findById(id)

    if(!estoque){
        return res.status(404).json({msg:"usuario não encontrado"})
    }

    res.status(202).json({ estoque })
})


//credetials 
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


//conecta com o banco de dados - SE OK -> ENTRA NO THEN, SE ERRO -> ENTRA NO ERR. COMO AO CONECTAR ELE RODA O LISTEN, O SERVIDOR LIGA AO CONECTAR COM O BANCO
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.modmxtp.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(3003)
    console.log('Conectado ao banco')
}).catch((err)=> console.log(err))
