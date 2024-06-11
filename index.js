const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products',productRoute)

app.get('/',(req,res)=>{
    res.send('Hello World!')
});



mongoose.connect("mongodb+srv://anuraagbagal02:klCif2iKE55DsgT1@backenddb.ehunnmq.mongodb.net/?retryWrites=true&w=majority&appName=backendDB")
.then(()=>{
    console.log('Connected to DB');
    app.listen(3000,()=>{
        console.log('Server listening on 3000...');
    });
})
.catch((err)=>{
    console.error('Connection Failed:', err);
});
