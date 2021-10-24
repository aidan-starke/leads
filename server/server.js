const path = require('path')
const express = require('express')
const db = require('./database/db')
const server = express()
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/api/v1/clients', (req, res) => {
	db.getClients()
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(500).send(err.message)
		})
})

server.post('/api/v1/clients/new', (req, res) => {
	db.addClient(req.body)
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(500).send(err.message)
		})
})

module.exports = server
