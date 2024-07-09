import Codigo from '../interfaces/codigo_postal';
import { axiosPrivate } from '../services/axios_conexion';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';


 
export const useCpController = () => {
  const [cp, setCp] = useState<Codigo[]>([]);
  const [form, setForm] = useState<Codigo>({
    codigo:'' ,
    descripcion: '',
  });
 
  useEffect(() => {
    fetchCp();
  }, []);
 
  const fetchCp = async () => {
    try {
      const response = await axiosPrivate.get('/cp');
      setCp(response.data.resultados);
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
        await axiosPrivate.post('/cp', form);
      } else {
        await axiosPrivate.put(`/cp/${form.codigo}`, form);
      }
      fetchCp();
      setForm({
        codigo: '',
        descripcion: '',
    
      });
    } catch (error) {
      console.error('Error saving cliente:', error);
    }
  };
 
  const handleEditCliente = (cp: Codigo) => {
    setForm(cp);
  };
 
  const handleDeleteCliente = async (codigo: string) => {
    if (codigo === null) return;
    try {
      await axiosPrivate.delete(`/cp/${codigo}`);
      fetchCp();
    } catch (error) {
      console.error('Error deleting cp:', error);
    }
  };
 
  return {
    cp,
    fetchCp,
    handleAddOrUpdateCliente,
    handleEditCliente,
    handleDeleteCliente,
    form,
    handleChange
  };
};