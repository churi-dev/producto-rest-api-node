import express from 'express';
import { actualizarProducto, buscarProducto, crearProducto, eliminarProducto, getByIdProducto, obtenerProductos } from "../controllers/producto.controller.js";

const router = express.Router();


router.get("/", obtenerProductos);
router.post("/", crearProducto);
router.put("/:id", actualizarProducto);
router.patch("/:id", eliminarProducto);
router.get("/:id", getByIdProducto);
router.get("/search/producto", buscarProducto);

export default router;