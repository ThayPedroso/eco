// const Knex = require('knex')
import Knex from 'knex'

// Criar a tabela
exports.up = async function (knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary()

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points')

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
    })
}

// Voltar atrás (deletar a tabela)
exports.down = async function (knex: Knex) {
    return knex.schema.dropTable('point_items')
}