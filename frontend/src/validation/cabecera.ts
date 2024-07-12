import { z } from 'zod'
//Validación Cabecera

const cabecera = z.object({
 numero_factura:z.coerce.number().nullable(),
  codigo_cliente:z.coerce.number(),
  codigo_postal: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  nombre_cliente: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  poblacion_cliente: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  provincia_cliente: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  fecha:z.date(),
  importe_producto:z.coerce.number(),
  total_factura:z.coerce.number(),
  iban: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  nombre_banco: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  nombre_vendedor: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  apellidos_vendedor: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  poblacion_empresa: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  provincia_empresa: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  cif_nie_vendedor: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  codigo_postal_empresa: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  codigo_banco:z.coerce.number(),
  swift_bci: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  direccion_envio: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  codigo_postal_envio: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  nombre_cliente_envio: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  poblacion_envio: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
  provincia_envio: z.string().min(2, {
    message: 'Debe completar este campo'
  }),  
})

export default cabecera
