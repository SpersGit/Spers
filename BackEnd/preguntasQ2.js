const express = require('express')
const routes = express.Router()

//Leer todas preguntas --------------------------------------
routes.get('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM preguntas_q2 ', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//Leer pregunta por id seleccionado --------------------------
routes.get('/:Id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('SELECT * FROM preguntas_q2 WHERE `Id` = ?', [req.params.Id] , (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//añadir pregunta --------------------------------------------
routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('INSERT INTO preguntas_q2 set ?', [req.body] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Pregunta introducido!')
        })
    })
})

//Borrar pregunta --------------------------------------------
routes.delete('/:Id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('DELETE FROM preguntas_q2 WHERE `Id` = ?', [req.params.Id] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Pregunta Eliminado!')
        })
    })
})

//Actualizar pregunta .........---------------------------------
routes.put('/:Id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('UPDATE preguntas_q2 set ? WHERE `Id` = ?', [req.body , req.params.Id] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Pregunta Actualizado!')
        })
    })
})
module.exports = routes