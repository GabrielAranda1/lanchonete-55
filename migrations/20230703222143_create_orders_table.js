/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('orders', (table) => {
    table.uuid('id').primary()
    table.string('status').notNullable()
    table.uuid('customer_id').notNullable().references('id').inTable('customers')
    table.integer('order_id').unsigned().references('id').inTable('orders');
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
