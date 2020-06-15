// const Knex = require('knex')
import Knex from 'knex'

// Criar a tabela
exports.up = async function (knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

// Voltar atrás (deletar a tabela)
exports.down = async function (knex: Knex) {
    return knex.schema.dropTable('point')
}