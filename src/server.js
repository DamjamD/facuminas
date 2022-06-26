const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/contato',(req, resp) => {
    console.log(req.body)
    resp.send('<h1> Mensagem Enviada com Sucesso!!')

})
app.listen(3003, () => {
    console.log("WebService Iniciado")
})