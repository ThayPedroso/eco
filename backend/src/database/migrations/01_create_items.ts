// const Knex = require('knex')
import Knex from 'knex'

// Criar a tabela
exports.up = async function (knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

// Voltar atrás (deletar a tabela)
exports.down = async function (knex: Knex) {
    return knex.schema.dropTable('items')
}