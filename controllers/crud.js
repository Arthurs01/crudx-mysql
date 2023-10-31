const connection = require('../database/db')

exports.save = (req, res) =>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const categoria = req.body.categoria;
    const cantidad = req.body.cantidad;

    connection.query(
        "INSERT INTO producto SET ?",{nombre: nombre, codigo: codigo, categoria: categoria, cantidad: cantidad},(error, result) =>{
            if(error){
                console.log(error);
            }else {
                res.redirect('/');
            }
        }
    )
};


exports.update = (req, res) =>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const categoria = req.body.categoria;
    const cantidad = req.body.cantidad;
    connection.query('UPDATE producto SET ? WHERE id = ?',[{nombre:nombre,codigo:codigo, categoria:categoria, cantidad:cantidad}, id], (error, results) => {
        if (error) {
            console.log(error);
          } else {
            res.redirect("/");
          }
    })
}