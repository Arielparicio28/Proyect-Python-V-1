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
      const response = await axiosPrivate.get('/provincias');
      setProvincia(response.data.resultados);
    } catch (error) {
      console.error('Error fetching provincias:', error);
    }
  };
 
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
 
  const handleAddOrUpdateProvincia = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (form.codigo === null) {
        await axiosPrivate.post('/provincias', form);
      } else {
        await axiosPrivate.put(`/provincias/${form.codigo}`, form);
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
 
  const handleEditProvincia = (cp: Codigo) => {
    setForm(cp);
  };
 
  const handleDeleteProvincia = async (codigo: string) => {
    if (codigo === null) return;
    try {
      await axiosPrivate.delete(`/provincias/${codigo}`);
      fetchProvincia();
    } catch (error) {
      console.error('Error eliminando provincia:', error);
    }
  };
 
  return {
    provincia,
    fetchProvincia,
    handleAddOrUpdateProvincia,
    handleEditProvincia,
    handleDeleteProvincia,
    form,
    handleChange
  };
};