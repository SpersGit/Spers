const express = require('express')
const routes = express.Router()

//Leer user --------------------------------------
routes.get('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM USUARIOS ', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.get('/:DNI', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('SELECT * FROM USUARIOS WHERE `DNI` = ?', [req.params.DNI] , (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


//añadir user --------------------------------------
routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('INSERT INTO fets_2021 set ?', [req.body] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Usuario introducido!')
        })
    })
})

//Borrar user --------------------------------------
routes.delete('/:DNI', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('DELETE FROM USUARIOS WHERE DNI = ?', [req.params.DNI] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Eliminado!')
        })
    })
})

//Actualizar user ---------------------------------
routes.put('/:DNI', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('UPDATE USUARIOS set ? WHERE DNI = ?', [req.body , req.params.DNI] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Actualizado!')
        })
    })
})
module.exports = routes