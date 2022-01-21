const express = require("express"),
app = express(),
port = 3000

app.use(express.static(__dirname + "/views"))

const routes = require("./routes/")(app)
app.set('view engine', 'jade')
app.locals.pretty=true

const server = app.listen(port, ()=>{
    console.log('Express server had started on port ', port)
})

