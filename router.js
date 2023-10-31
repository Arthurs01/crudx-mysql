const express = require('express');
const router = express.Router();
const connection = require('./database/db');
const crud = require('./controllers/crud')

// Mostrar Registro
router.get('/',(req, res) =>{
    connection.query('SELECT * FROM producto',(error, results) =>{
        if(error){
            throw error;
        }else{
        res.render('index', {results:results});
       }
    })
   })

// CREAR Regristro  
router.get('/create',(req, res)=>{
    res.render('create')
})
router.post('/save', crud.save);


// ACTUALIZAR Registro
router.get('/edit/:id',(req, res)=>{
    const id = req.params.id;
    connection.query('SELECT * FROM producto WHERE id=?',[id],(error, results) =>{
        if(error){
            throw error;
         }else{
            res.render('edit', {product:results[0]});
         }
    })
})

router.post('/update', crud.update);

//ELIMINAR Registro
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    connection.query('DELETE FROM producto  WHERE id= ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/index.ejs');
        
            
        }
    })
})




module.exports = router;