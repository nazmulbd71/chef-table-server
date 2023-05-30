const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

// All Chef Data load here//
const chefData = require('./data/chefData.json')
app.get('/chefAll', (req, res) => {
    res.send(chefData)
})

app.get('/chefAll/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefData.find(singleChef => singleChef.id == id)
    res.send(selectedChef)
})

// End Here//



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})