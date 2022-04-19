const express = require('express')
const routes = express.Router()

//Leer todas preguntas --------------------------------------
routes.get('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM preguntas_q1 ', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//Leer pregunta por id seleccionado --------------------------
routes.get('/:ID_PREGUNTA', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('SELECT * FROM preguntas_q1 WHERE `ID_PREGUNTA` = ?', [req.params.ID_PREGUNTA] , (err,rows)=>{
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
        conn.query('INSERT INTO preguntas_q1 set ?', [req.body] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Pregunta introducido!')
        })
    })
})

//Borrar pregunta --------------------------------------------
routes.delete('/:ID_PREGUNTA', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('DELETE FROM preguntas_q1 WHERE `ID_PREGUNTA` = ?', [req.params.ID_PREGUNTA] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Pregunta Eliminado!')
        })
    })
})

//Actualizar pregunta .........---------------------------------
routes.put('/:ID_PREGUNTA', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body);
        conn.query('UPDATE preguntas_q1 set ? WHERE `ID_PREGUNTA` = ?', [req.body , req.params.ID_PREGUNTA] , (err,rows)=>{
            if(err) return res.send(err)

            res.send('Pregunta Actualizado!')
        })
    })
})
module.exports = routes