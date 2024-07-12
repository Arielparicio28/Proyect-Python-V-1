import { z } from "zod"
import { ColumnDef } from '@tanstack/react-table'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import GoBack from "../components/GoBack";
import { DataTable } from "../components/tables/FacturaTable";
import cabecera from "../validation/cabecera";
import { useFacturasController } from "../controllers/facturaController";
import { formatDate } from "../lib/utils";


type cabeceraTable = z.infer<typeof cabecera>

type cabeceraColumns = Pick <
cabeceraTable,
|'codigo_cliente'
|'nombre_cliente'
|'numero_factura'
|'total_factura'
|'fecha'
>;

const columns: ColumnDef<cabeceraColumns>[] = [
  {
    accessorKey: 'numero_factura',
    header: () => <div className=' font-bold'>Número de factura</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-pink-600 hover:underline ' to={`/facturas/${idRow.numero_factura}`}>
          {row.getValue('numero_factura')}
        </Link>
      )
    }
  },

  {
    accessorKey: 'codigo_cliente',
    header: () => <div className=' font-bold'>Código de cliente</div>,
  
  },

  {
    accessorKey: 'nombre_cliente',
    header: () => <div className=' font-bold'>Cliente</div>,
  
  },

  {
    accessorKey: 'fecha',
    header: () => <div className=' font-bold '>Fecha Inicio</div>,
    cell: ({ row }) => formatDate(row.getValue('fecha'))
  },

  {
    accessorKey: 'total_factura',
    header: () => <div className=' font-bold'>Total</div>,
  
  },
]

const Facturas = () =>{
const{cabecera,fetchCabecera} = useFacturasController()

useEffect(() =>{
  fetchCabecera();
},[fetchCabecera])



  return (
    <>
    <div>
      <Link to='http://localhost:5173/'>
        <GoBack />
      </Link>
    </div>

    <Link to='http://localhost:5173/facturas/:numero_factura' />
    <div className='container mx-auto mt-5'>
      <h1 className='text-4xl font-semibold'>Nuestros Productos</h1>
      <DataTable columns={columns} data={cabecera} />
    </div>
    </>
  )
}

export default Facturas