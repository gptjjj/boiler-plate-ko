const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gptjan:12345@boilerplate.7kd7wu0.mongodb.net/?retryWrites=true&w=majority', {
  //ç  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindandModify: false
}).then(() => console.log('mongoDB connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('안녕!세계!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})