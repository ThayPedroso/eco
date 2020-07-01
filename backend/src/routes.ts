import express from 'express'
import { celebrate, Joi } from 'celebrate'
import multer from 'multer'
import multerConfig from './config/multer'

const PointsController = require('./controllers/PointsController')
const ItemsController = require('./controllers/ItemsController')

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

// controllers methods: index(vários), show(único), create, update, delete

routes.get('/items', itemsController.index)

routes.post(
    '/points', 
    upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false,
    }),
    pointsController.create,
)
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

module.exports = routes