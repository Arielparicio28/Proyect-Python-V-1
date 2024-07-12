import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { axiosPrivate } from '../services/axios_conexion';
import Bancos from '../interfaces/bancos';



 
export const useBancoController = () => {
  const [bancos, setBancos] = useState<Bancos[]>([]);
  const [form, setForm] = useState<Bancos>({
    codigo_banco: null ,
    iban: '',
    nombre_banco: '',
    swift_bci: '',
  });
 
  useEffect(() => {
    fetchBancos();
  }, []);
 
  const fetchBancos = async () => {
    try {
      const response = await axiosPrivate.get('/bancos');
      setBancos(response.data.resultados);
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
 
  const handleAddOrUpdateBanco = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (form.codigo_banco === null) {
        await axiosPrivate.post('/bancos', form);
      } else {
        await axiosPrivate.put(`/bancos/${form.codigo_banco}`, form);
      }
      fetchBancos();
      setForm({
        codigo_banco: null,
        nombre: '',
        apellido: '',
        codigo_postal: '',
        cif_nie: ''
      });
    } catch (error) {
      console.error('Error saving cliente:', error);
    }
  };
 
  const handleEditBanco = (bancos: Bancos) => {
    setForm(bancos);
  };
 
  const handleDeleteBanco = async (codigo_banco: number | null) => {
    if (codigo_banco === null) return;
    try {
      await axiosPrivate.delete(`/bancos/${codigo_banco}`);
      fetchBancos();
    } catch (error) {
      console.error('Error deleting cliente:', error);
    }
  };
 
  return {
    bancos,
    fetchBancos,
    handleAddOrUpdateBanco,
    handleEditBanco,
    handleDeleteBanco,
    form,
    handleChange
  };
};