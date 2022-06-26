const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const porta = 3003

app.use(bodyParser.urlencoded({extended: true}))

app.post('/contato',(req, resp) => {
    console.log(req.body)
    resp.send('<h1> Mensagem Enviada com Sucesso!!')

})
app.listen(porta, () => {
    console.log(`Api Iniciada na Porta ${porta}`)
    console.log('Serviço Ativo')
})
