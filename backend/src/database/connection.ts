const path = require('path')
const Knex = require('knex')

const connection = Knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
})

module.exports = connection