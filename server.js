const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Permite peticiones desde el frontend

// Ruta para agregar "Sí" en nota.txt
app.post("/agregar-si", (req, res) => {
    fs.appendFile("nota.txt", "Sí\n", (err) => {
        if (err) {
            console.error("Error al escribir en el archivo:", err);
            res.status(500).send("Error al escribir en el archivo.");
        } else {
            res.send("Sí agregado a nota.txt");
        }
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});