import { useEffect } from "react"
import { Link } from "react-router-dom";
import GoBack from "../components/GoBack";
import { DataTable } from "../components/tables/CpTabla";
import cp from "../validation/cp";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { usePoblacionController } from "../controllers/poblacionController";

type cptabla = z.infer<typeof cp>

type cpColumns = Pick <
cptabla,
|'codigo'
|'descripcion'
>;

const columns: ColumnDef<cpColumns>[] = [


  {
    accessorKey: 'codigo',
    header: () => <div className=' font-bold'>Código Postal</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-pink-600 hover:underline ' to={`/poblacion/${idRow.codigo}`}>
          {row.getValue('codigo')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'descripcion',
    header: () => <div className=' font-bold'>Población</div>,
  
  },
]

const Poblacion = () => {
    const{poblacion,fetchPoblacion} = usePoblacionController()

useEffect(() => {
fetchPoblacion();
},[fetchPoblacion]);




  return (
 <>
    <div>
        <Link to='http://localhost:5173/'>
          <GoBack />
        </Link>
      </div>

      <Link to='http://localhost:5173/poblacion/:codigo' />
      <div className='container mx-auto mt-5'>
        <h1 className='text-4xl font-semibold'>Poblaciones</h1>
        <DataTable columns={columns} data={poblacion} />
      </div>
 </>
  )
}

export default Poblacion