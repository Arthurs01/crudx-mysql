const mysql2 = require('mysql2')

/*  const PORT = process.env.PORT || 3000 */
 const DB_HOST = process.env.DB_HOST || 'localhost'
 const DB_USER = process.env.DB_USER || 'root'
 const DB_PASSWORD = process.env.DB_PASSWORD || 'Methalsql'
 const DB_NAME = process.env.DB_NAME || 'inventario'
 const DB_PORT = process.env.DB_PORT || 3307


const connection = mysql2.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
})
/* const connection = mysql2.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'Methalsql',
    database: 'inventario'
}) */

connection.connect((err) =>{
    if(err){
        console.error('Error de conexión:' + err);
        return
    }
    console.log("Conexión Exitosa!!")
})

module.exports = connection;