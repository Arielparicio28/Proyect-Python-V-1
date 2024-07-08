
export default interface Direcciones{
    codigo_cliente:number; //Este viene de la tabla cliente
    direccion_envio:string; 
    codigo_postal: string; //Este viene de la tabla codigo_postal 
    nombre_cliente: string;
    poblacion:string;  //Este viene de la tabla población
    provincia:string; //Este viene de la tabla provincia
}

