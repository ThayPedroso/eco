const express = require('express')

const PointsController = require('./controllers/PointsController')
const ItemsController = require('./controllers/ItemsController')

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

// controllers methods: index(vários), show(único), create, update, delete

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

module.exports = routes