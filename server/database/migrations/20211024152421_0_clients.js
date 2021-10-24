exports.up = function (knex) {
    return knex.schema.createTable('clients', (table) => {
        table.increments('id').primary()
        table.string('first_name')
        table.string('last_name')
        table.string('email')
        table.string('phone')
        table.timestamp('created_at')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('clients')
}