import { Request, Response } from 'express'
const knex = require('../database/connection')

class ItemsController {
    async index (req: Request, res: Response) {

        const items = await knex('items').select('*')
    
        const serializedItems = items.map((item: { id: any; title: any; image: any }) => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.16:3333/uploads/${item.image}`,
            }
        })
    
        return res.json(serializedItems)
    }
}

module.exports = ItemsController