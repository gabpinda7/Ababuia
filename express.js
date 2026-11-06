const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Envie os parâmetros n1 e n2 para as rotas /soma, /subtracao, /multiplicacao ou /divisao')
})

app.get('/soma', (req, res) => {
    const ababuia = parseFloat(req.query.n1) + parseFloat(req.query.n2)
    res.send({ conta: isNaN(ababuia) ? "Valores inválidos." : `${req.query.n1} + ${req.query.n2} = ${ababuia}` })
})

app.get('/subtracao', (req, res) => {
    const ababuia = parseFloat(req.query.n1) - parseFloat(req.query.n2)
    res.send({ conta: isNaN(ababuia) ? "Valores inválidos." : `${req.query.n1} - ${req.query.n2} = ${ababuia}` })
})

app.get('/multiplicacao', (req, res) => {
    const ababuia = parseFloat(req.query.n1) * parseFloat(req.query.n2)
    res.send({ conta: isNaN(ababuia) ? "Valores inválidos." : `${req.query.n1} * ${req.query.n2} = ${ababuia}` })
})

app.get('/divisao', (req, res) => {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    if (isNaN(n1) || isNaN(n2)) return res.send({ conta: "Valores inválidos." })
    if (n2 === 0) return res.send({ conta: "Não é possível dividir por zero." })

    res.send({ conta: `${n1} / ${n2} = ${n1 / n2}` })
})

app.listen(8080)
