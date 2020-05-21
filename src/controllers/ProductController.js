const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req,res){
        const products = await Product.find()

        return res.json(products)
    },

    //show product
    async show(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    //route for create new register in data base

    async store(req, res){
        const product = await Product.create(req.body)

        return res.json(product)
    },

    //update product

    async update(req,res){

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.json(product)
    },

    //delete product
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }


}

