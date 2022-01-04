const express = require('express');
const app = express();

//Setting
const PORT = process.env.PORT || 3000;


//Rutas
app.get('/', (req, res)=>{
    res.send('Servidor Activo')
})


//levantar servidor
app.listen(PORT, (req, res)=>{
    console.log(`Servidor Activo on port: ${PORT}`);
});