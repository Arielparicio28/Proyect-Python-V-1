import { z } from "zod"
import productos from "../validation/productos"
import { ColumnDef } from '@tanstack/react-table'
import { Link } from "react-router-dom";
import { useProductoController } from "../controllers/productoController";
import { useEffect } from "react";
import GoBack from "../components/GoBack";
import { DataTable } from "../components/tables/ProductosTable";



type productoTable = z.infer<typeof productos>

type productoColumns = Pick <
productoTable,
|'nombre_producto'
|'codigo_producto'
|'valor_producto'
>;

const columns: ColumnDef <productoColumns>[] = [
    {
        accessorKey: 'codigo_producto',
        header: () => <div className=' font-bold'>Código Producto</div>,
        cell: ({ row }) => {
          const idRow = row.original
          return (
            <Link className='hover:text-pink-600 hover:underline ' to={`/productos/${idRow.codigo_producto}`}>
              {row.getValue('codigo_producto')}
            </Link>
          )
        }
      },

      {
        accessorKey: 'nombre_producto',
        header: () => <div className=' font-bold'>Producto</div>,
      
      },

      {
        accessorKey: 'valor_producto',
        header: () => <div className=' font-bold'>Precio</div>,
      
      },
]


const Productos = () => {
const {productos,fetchProductos} = useProductoController();

useEffect(() =>{
  fetchProductos();
},[fetchProductos]);

  return (
    <>
    <div>
      <Link to='http://localhost:5173/'>
        <GoBack />
      </Link>
    </div>

    <Link to='http://localhost:5173/productos/:codigo_producto' />
    <div className='container mx-auto mt-5'>
      <h1 className='text-4xl font-semibold'>Nuestros Productos</h1>
      <DataTable columns={columns} data={productos} />
    </div>
    </>
  )
}

export default Productos