const express = require("express");
const { join } = require("path");
let app = express();
let port = 5050;
const path = require("path");

/* Middleware */
//utilizamos el metodo use y el metodo static de express para ver las imagenes locales
app.use(express.static('public'))

/* Routing */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

/* Server */
app.listen(port, () => console.log(`server running in port ${port}\n link: http://www.localhost:${port}`))
//levantamos un servidor en el puerto 5050