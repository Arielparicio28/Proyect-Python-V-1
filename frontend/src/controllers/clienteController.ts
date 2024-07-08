import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Cliente from '../interfaces/cliente';
import { axiosPrivate } from '../services/axios_conexion';

 
export const useClienteController = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [form, setForm] = useState<Cliente>({
    codigo_cliente: null,
    nombre: '',
    apellido: '',
    codigo_postal: '',
    cif_nie:''
 
  });
 
  useEffect(() => {
    fetchClientes();
  }, []);
 
  const fetchClientes = async () => {
    try {
      const response = await axiosPrivate.get('/clientes');
      setClientes(response.data.resultados);
    } catch (error) {
      console.error('Error fetching clientes:', error);
    }
  };
 
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
 
  const handleAddOrUpdateCliente = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (form.codigo_cliente === null) {
        await axiosPrivate.post('/cliente', form);
      } else {
        await axiosPrivate.put(`/cliente/${form.codigo_cliente}`, form);
      }
      fetchClientes();
      setForm({
        codigo_cliente: null,
        nombre: '',
        apellido: '',
        codigo_postal: '',
        cif_nie: ''
      });
    } catch (error) {
      console.error('Error saving cliente:', error);
    }
  };
 
  const handleEditCliente = (cliente: Cliente) => {
    setForm(cliente);
  };
 
  const handleDeleteCliente = async (codigo_cliente: number | null) => {
    if (codigo_cliente === null) return;
    try {
      await axiosPrivate.delete(`/cliente/${codigo_cliente}`);
      fetchClientes();
    } catch (error) {
      console.error('Error deleting cliente:', error);
    }
  };
 
  return {
    clientes,
    fetchClientes,
    handleAddOrUpdateCliente,
    handleEditCliente,
    handleDeleteCliente,
    form,
    handleChange
  };
};