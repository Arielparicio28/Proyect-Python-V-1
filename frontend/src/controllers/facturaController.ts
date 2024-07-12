import Cabecera from '../interfaces/cabeceraInterface';
import { axiosPrivate } from '../services/axios_conexion';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';


 
export const useFacturasController = () => {
  const [cabecera, setCabecera] = useState<Cabecera[]>([]);
  const [form, setForm] = useState<Cabecera>({
    numero_factura:null,
    codigo_cliente:null,
    codigo_postal:'',
    nombre_cliente:'',
    poblacion_cliente:'',
    provincia_cliente:'',
    fecha:'',
    importe_producto:null,
    total_factura:null,
    iban:'',
    nombre_banco:'',
    nombre_vendedor:'',
    apellidos_vendedor:'',
    poblacion_empresa:'',
    provincia_empresa:'',
    cif_nie_vendedor:'',
    codigo_postal_empresa:'',
    codigo_banco:null,
    swift_bci:'',
    direccion_envio:'',
    codigo_postal_envio:'',
    nombre_cliente_envio:'',
    poblacion_envio:'',
    provincia_envio:'',
  });
 
  useEffect(() => {
    fetchCabecera();
  }, []);
 
  const fetchCabecera = async () => {
    try {
      const response = await axiosPrivate.get('/facturas');
      setCabecera(response.data.resultados);
    } catch (error) {
      console.error('Error fetching facturas:', error);
    }
  };
 
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
 
  const handleAddOrUpdateCabecera = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (form.numero_factura === null) {
        await axiosPrivate.post('/facturas', form);
      } else {
        await axiosPrivate.put(`/facturas/${form.numero_factura}`, form);
      }
      fetchCabecera();
      setForm({
        numero_factura:null,
        codigo_cliente:null,
        codigo_postal:'',
        nombre_cliente:'',
        poblacion_cliente:'',
        provincia_cliente:'',
        fecha:'',
        importe_producto:null,
        total_factura:null,
        iban:'',
        nombre_banco:'',
        nombre_vendedor:'',
        apellidos_vendedor:'',
        poblacion_empresa:'',
        provincia_empresa:'',
        cif_nie_vendedor:'',
        codigo_postal_empresa:'',
        codigo_banco:null,
        swift_bci:'',
        direccion_envio:'',
        codigo_postal_envio:'',
        nombre_cliente_envio:'',
        poblacion_envio:'',
        provincia_envio:'',
    
      });
    } catch (error) {
      console.error('Error guardando población:', error);
    }
  };
 
  const handleEditCabecera = (numero_factura: Cabecera) => {
    setForm(numero_factura);
  };
 
  const handleDeleteCabecera = async (numero_factura: number) => {
    if (numero_factura === null) return;
    try {
      await axiosPrivate.delete(`/facturas/${numero_factura}`);
      fetchCabecera();
    } catch (error) {
      console.error('Error eliminando factura:', error);
    }
  };
 
  return {
    cabecera,
    fetchCabecera,
    handleAddOrUpdateCabecera,
    handleEditCabecera,
    handleDeleteCabecera,
    form,
    handleChange
  };
};