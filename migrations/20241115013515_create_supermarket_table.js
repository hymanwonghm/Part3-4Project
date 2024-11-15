/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex){
    return knex.schema.createTable('products',(table)=>{
        table.increments("id").primary().notNullable();
        table.string("name").notNullable();
        table.string("category").notNullable();
        table.string("availability").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('products')
};
