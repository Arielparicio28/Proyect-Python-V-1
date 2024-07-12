import Codigo from '../interfaces/codigo_postal';
import { axiosPrivate } from '../services/axios_conexion';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';


 
export const usePoblacionController = () => {
  const [poblacion, setPoblacion] = useState<Codigo[]>([]);
  const [form, setForm] = useState<Codigo>({
    codigo:'' ,
    descripcion: '',
  });
 
  useEffect(() => {
    fetchPoblacion();
  }, []);
 
  const fetchPoblacion = async () => {
    try {
      const response = await axiosPrivate.get('/poblacion');
      setPoblacion(response.data.resultados);
    } catch (error) {
      console.error('Error fetching poblaciones:', error);
    }
  };
 
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
 
  const handleAddOrUpdatePoblacion = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (form.codigo === null) {
        await axiosPrivate.post('/poblacion', form);
      } else {
        await axiosPrivate.put(`/poblacion/${form.codigo}`, form);
      }
      fetchPoblacion();
      setForm({
        codigo: '',
        descripcion: '',
    
      });
    } catch (error) {
      console.error('Error guardando población:', error);
    }
  };
 
  const handleEditPoblacion = (cp: Codigo) => {
    setForm(cp);
  };
 
  const handleDeletePoblacion = async (codigo: string) => {
    if (codigo === null) return;
    try {
      await axiosPrivate.delete(`/poblacion/${codigo}`);
      fetchPoblacion();
    } catch (error) {
      console.error('Error eliminando población:', error);
    }
  };
 
  return {
    poblacion,
    fetchPoblacion,
    handleAddOrUpdatePoblacion,
    handleEditPoblacion,
    handleDeletePoblacion,
    form,
    handleChange
  };
};