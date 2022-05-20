const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080

const cards = require("./data")

app.use(cors())
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
app.use(express.json());
app.get('/cards', (req, res) => res.json(
    cards
))

app.post("/cards", (req, res) => {
    console.log(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))