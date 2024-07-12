export default interface Cabecera {
  numero_factura:number | null;
  codigo_cliente:number | null;
  codigo_postal:string;
  nombre_cliente:string;
  poblacion_cliente:string;
  provincia_cliente:string;
  fecha:Date | string;
  importe_producto:number | null;
  total_factura:number |null ;
  iban:string;
  nombre_banco:string;
  nombre_vendedor:string;
  apellidos_vendedor:string;
  poblacion_empresa:string;
  provincia_empresa:string;
  cif_nie_vendedor:string;
  codigo_postal_empresa:string;
  codigo_banco:number | null;
  swift_bci:string;
  direccion_envio:string;
  codigo_postal_envio:string;
  nombre_cliente_envio:string;
  poblacion_envio:string;
  provincia_envio:string;
}
