const controller = require("./controller")

module.exports = app => {
    app.get('/', (req, res) => {
        res.redirect('/main')
    })

    app.get('/main', controller.mainView)
    app.get('/create', controller.formView)
    app.get('/list', controller.listView)
}