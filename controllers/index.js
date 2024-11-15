const dbConfigs = require('../knexfile')
const knex = require('knex')(dbConfigs)


const indexController = async (req, res) => {
    const storage = await knex('products').select('*')
    console.log({data: storage})
    res.render("index", {data: storage})
}




module.exports = {indexController}