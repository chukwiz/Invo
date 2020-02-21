const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const path = require('path');
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware")




// app.use(
//     '/users',
//     proxy({
//         target: 'http://localhost:3000',
//         changeOrigin: true
//     })
// );




mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern', {useNewUrlParser:true});

app.use(cors({
    origin: process.env.ALLOW_ORIGIN,
    credentials: true,
    allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
    methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(createProxyMiddleware('/users',{target: 'http://localhost:3000'}))

    // app.use(
    //     '/users',
    //     createProxyMiddleware({
    //         target: 'http://localhost:3000',
    //         changeOrigin: true
    //     })
    // );


let Users = require('./routes/Users');
app.use('/users',Users)

if(process.env.NODE_ENV === "production"){
    app.disable('x-powered-by')
    app.use(express.static('build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})