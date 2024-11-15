exports.seed = (knex)=>{
    return knex('products',Promise)
.insert([{
    name: "tissue",
    category:"daily use",
    availability: "available"
},{
    name: "water",
    category:"drink",
    availability: "available"
},{
    name: "coke",
    category:"drink",
    availability: "available"
}
])
}

