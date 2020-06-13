import express from 'express'

const app = express()

app.use(express.json())

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
]

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

app.get('/users', (req, res, next) => {
    const search = String(req.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users

    return res.json(filteredUsers)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    const user = users[id]

    return res.json(user)
})

app.post('/users', (req, res) => {
    const data = req.body

    console.log(data)

    const user = {
        name: data.name,
        email: data.email
    }

    return res.json(user)
})

app.listen(3333)