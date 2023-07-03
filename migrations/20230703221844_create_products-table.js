/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('products', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.string('category').notNullable()
    table.float('price').notNullable()
    table.string('description').notNullable()
    table.timestamp('created_at').defaultTo(new Date()).notNullable()
    table.timestamp('updated_at').defaultTo(new Date()).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('customers');
}
