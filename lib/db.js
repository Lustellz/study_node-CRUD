const sql = require('mssql')

const config = {
    user: 'username',
    password: 'password',
    database: 'db',
    server: 'localhost',
    options: {
        trustServerCertificate: true,
        
    }
}

const appPool = new sql.ConnectionPool(config)
.connect().then( pool =>{
console.log('Connected to db server')
return pool
}).catch(err=>{
    console.log('Db connection failed. Bad config: ',err)
})

module.exports = {
    sql, appPool
}