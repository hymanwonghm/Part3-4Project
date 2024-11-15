exports.seed = (knex)=>{
    return knex('products',Promise)
.insert([{
    name: "tissue",
    category:"daily use"
},{
    name: "water",
    category:"drink"
},{
    name: "coke",
    category:"drink"
}
])
}

