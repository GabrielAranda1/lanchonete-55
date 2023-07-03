/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('customers', (table) => {
    table.uuid('id').primary()
    table.string('name')
    table.string('email')
    table.string('document_number').unique()
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
