const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()+file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ead').then(()=>console.log("DB connected")).catch((err)=>console.log("DB connect ", err))
const Receipe = require('./models/Receipe')

//get image
app.get('/uploads/:_filename', (req, res)=>{
    res.sendFile(path.join(__dirname, 'uploads', req.params._filename))
    //res.end()
})

//get receipes
app.get('/receipes', async (req, res)=>{
    const data = await Receipe.find()
    res.send(data)
})

//get receipe b y id

app.get('/receipe/:_id', async (req, res)=>{
    const {_id} = req.params
    const data = await Receipe.findById(_id)
    res.send(data)
})

//add validation middleware
const validation = require('./middleware/validate')
//create(save) receipe
app.post('/saveReceipe', validation, upload.single('image'), async (req, res)=>{
    await Receipe.create({...req.body, image:req.file.filename})
    res.send({msg:"Success"})
})
app.listen(4000, ()=>{
    console.log("Server Listening port 4000")
})