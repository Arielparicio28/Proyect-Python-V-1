import Codigo from '../interfaces/codigo_postal';
import { axiosPrivate } from '../services/axios_conexion';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';


 
export const useProvinciaController = () => {
  const [provincia, setProvincia] = useState<Codigo[]>([]);
  const [form, setForm] = useState<Codigo>({
    codigo:'' ,
    descripcion: '',
  });
 
  useEffect(() => {
    fetchProvincia();
  }, []);
 
  const fetchProvincia = async () => {
    try {
      const response = await axiosPrivate.get('/provincia');
      setProvincia(response.data.resultados);
    } catch (error) {
      console.error('Error fetching cp:', error);
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
      if (form.codigo === null) {
        await axiosPrivate.post('/provincia', form);
      } else {
        await axiosPrivate.put(`/provincia/${form.codigo}`, form);
      }
      fetchProvincia();
      setForm({
        codigo: '',
        descripcion: '',
    
      });
    } catch (error) {
      console.error('Error guardando provincia:', error);
    }
  };
 
  const handleEditCliente = (cp: Codigo) => {
    setForm(cp);
  };
 
  const handleDeleteCliente = async (codigo: string) => {
    if (codigo === null) return;
    try {
      await axiosPrivate.delete(`/provincia/${codigo}`);
      fetchProvincia();
    } catch (error) {
      console.error('Error eliminando población:', error);
    }
  };
 
  return {
    provincia,
    fetchProvincia,
    handleAddOrUpdateCliente,
    handleEditCliente,
    handleDeleteCliente,
    form,
    handleChange
  };
};