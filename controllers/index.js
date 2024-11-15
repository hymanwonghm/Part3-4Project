const dbConfigs = require('../knexfile')
const knex = require('knex')(dbConfigs)


const indexController = async (req, res) => {
    const storage = await knex('products').select('*').orderBy('id','asc')
    res.render("index", {data: storage})
}

const deleteController = async (req, res) => {
    console.log("Enter del")
    try {
        let inputName = req.params.id
        console.log(inputName)
        const deleted = await knex('products')
                            .where({id: inputName})
                            .del()
        if(deleted === 0){
            res.status(404).json({error: "Fail to delete item"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to delete item"})
    }

    const storage = await knex('products').select('*').orderBy('id','asc')
    res.render("index", {data: storage})
}

const insertController = async (req, res) => {
    try {
        const name = req.query.name
        const category = req.query.category
        const inserted = await knex('products')
            .insert(
             {  name:name,
                category:category,
                availability:"available"
             })
        if(inserted === 0){
            res.status(404).json({error: "Fail to add item"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to add item"})
    }

    const storage = await knex('products').select('*').orderBy('id','asc')
    res.render("index", {data: storage})
}

const availabilityController= async (req,res)=>{
    try {
        let inputName = req.params.id
        const updated = await knex('products')
                            .where({id: inputName})
                            .update({availability: 'available'})
        if(updated === 0){
            res.status(404).json({error: "Fail to update item"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to update item"})
    }

    const storage = await knex('products').select('*').orderBy('id','asc')
    res.render("index", {data: storage})
}

const outController = async (req,res)=>{
    try {
        let inputName = req.params.id
        const out = await knex('products')
                            .where({id: inputName})
                            .update({availability: 'out of stock'})
        if(out === 0){
            res.status(404).json({error: "Fail to update item"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to update item"})
    }

    const storage = await knex('products').select('*').orderBy('id','asc')
    res.render("index", {data: storage})
}
module.exports = {indexController, deleteController, insertController,availabilityController,outController
}