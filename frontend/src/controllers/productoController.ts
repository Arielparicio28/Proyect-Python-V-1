import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { axiosPrivate } from '../services/axios_conexion';
import Producto from '../interfaces/productointerface';





 
export const useProductoController = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [form, setForm] = useState<Producto>({
    codigo_producto: null ,
    nombre_producto: '',
    valor_producto: null,
    cantidad: null,
    precio_unitario: null,
  });
 
  useEffect(() => {
    fetchProductos();
  }, []);
 
  const fetchProductos = async () => {
    try {
      const response = await axiosPrivate.get('/productos');
      setProductos(response.data.resultados);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };
 
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
 
  const handleAddOrUpdateProducto = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (form.codigo_producto === null) {
        await axiosPrivate.post('/productos', form);
      } else {
        await axiosPrivate.put(`/productos/${form.codigo_producto}`, form);
      }
      fetchProductos();
      setForm({
        codigo_producto: null ,
        nombre_producto: '',
        valor_producto: null,
        cantidad: null,
        precio_unitario: null,
      });
    } catch (error) {
      console.error('Error saving cliente:', error);
    }
  };
 
  const handleEditProducto = (productos: Producto) => {
    setForm(productos);
  };
 
  const handleDeleteProducto = async (codigo_producto: number | null) => {
    if (codigo_producto === null) return;
    try {
      await axiosPrivate.delete(`/productos/${codigo_producto}`);
      fetchProductos();
    } catch (error) {
      console.error('Error deleting producto:', error);
    }
  };
 
  return {
    productos,
    fetchProductos,
    handleAddOrUpdateProducto,
    handleEditProducto,
    handleDeleteProducto,
    form,
    handleChange
  };
};