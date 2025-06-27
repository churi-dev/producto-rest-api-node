import express from "express";
import productoRoutes from "./routes/producto.routes.js";
import { sequelize } from "./config/db.js";

const app = express();
const PORT = 3003;

app.use(express.json());

app.use("/api/productos", productoRoutes);

sequelize .sync().then(() => {
    console.log("Base de datos conectada.");
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    })
}).catch(error => console.error('Error al conectar BD:', error));