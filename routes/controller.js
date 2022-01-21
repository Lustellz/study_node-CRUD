const {sql, appPool} = require('../lib/db')

function mainView(req, res) {
    res.render('index', {_title: 'main page'})
}

async function listView(req, res){
    var orderList = []
    try{
        const pool = await appPool
        const result = await pool.request()
        .query('SELECT * from tb_name')

        if(result!=undefined){
            for(let i=0;i<result.rowsAffected[0];i++){
                orderList.push(result.recordset[i])
            }
            res.render('list', {list: orderList, _title: 'lists'})
        }
    }catch(err){
        res.status(500)
        res.send(err.message)        
    }

}

async function formView(req, res) {

    res.render('form', {__title: 'create new order', param: '', hashs: []})
}

module.exports.mainView = mainView
module.exports.listView = listView
module.exports.formView = formView