const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getClients,
    addClient
}

function getClients (db = connection) {
    return db('clients')
        .select()
}

function addClient (client, db = connection) {
    return db('clients')
        .insert({
            first_name: client.firstName,
            last_name: client.lastName,
            email: client.email,
            phone: client.phone,
            created_at: new Date()
        })
}