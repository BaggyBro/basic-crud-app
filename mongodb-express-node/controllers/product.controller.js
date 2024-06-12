const Product = require('../models/product.model.js')


const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

const getSingleProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200)/json(product)
    }
    catch(erorr){
        res.status(404).json({message: error.message})
    }
}

const createProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            return res.status(404).json({message: "Product not found!"})
        }

        const updatesProduct = await Product.findById(id);
        return res.status(200).json(updatesProduct)
    }catch(err){
        res.status(500).json({message: err.message})
    
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params

        const product = await Product.findById(id)

        if(!product){
            return res.status(404).json({message: "Product Not Found!   "})
        }

        res.status(200).json({message: "Product Deleted!"})
    }catch(err){
        res.status(404).json({message: err.message})
    
    }
}


module.exports = {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}