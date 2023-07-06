const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('Olá mundo da Alura do Brasil!')
})

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST')
})

module.exports = router