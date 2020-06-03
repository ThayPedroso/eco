import express from 'express'

const app = express()

app.get('/users', (req, res, next) => {
    console.log('Listagem de usuários')

    res.json([
        'Thayla',
        'Lívia',
        'Cezar'
    ])
})

app.listen(3333)