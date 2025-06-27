import { Producto } from "../models/producto.model.js";

export const obtenerProductos = async (req, res) => {
    const productos = await Producto.findAll({ where: { activo: true }});
    res.json(productos);
};

export const crearProducto = async (req, res) => {
    const {nombre, descripcion, precio, stock} = req.body;

    const nuevoProducto = await Producto.create( {nombre, descripcion, precio, stock } );
    res.status(201).json(nuevoProducto);
}

export const actualizarProducto = async (req, res) => {
    const {id} = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) return res.status(404).json({ mensaje: "No encontrado." });

    const {nombre, descripcion, precio, stock} = req.body;

    await producto.update( {nombre, descripcion, precio, stock });

    res.json(producto)
}

export const eliminarProducto = async (req, res) => {
    const {id} = req.params;

    const producto = await Producto.findByPk(id);

    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado." });

    await producto.update( {activo: false });

    res.json({ message: "Producto eliminado correctamente."});
}

export const getByIdProducto = async (req, res) => {
    const {id} = req.params;

    const productos = await Producto.findOne({ where: { id: id, activo: true }});

    if (!productos) return res.status(404).json({ message: `Producto no encontrado con id: ${id}` })
    res.json(productos);
}

export const buscarProducto = async (req, res) => {

    const { nombre } = req.query;

    const productos = await Producto.findAll({ where: { activo: true }});

    const econtrados = productos.filter(product => product.nombre.toLowerCase().includes(nombre.toLowerCase()));

    if (!econtrados) return res.status(404).json({ message: `No se encontraron resultados: ${nombre}`});

    res.json(econtrados);
}