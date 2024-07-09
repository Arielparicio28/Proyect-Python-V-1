import { useEffect } from "react"
import { useCpController } from "../controllers/cpController"
import { Link } from "react-router-dom";
import GoBack from "../components/GoBack";
import { DataTable } from "../components/tables/CpTabla";
import cp from "../validation/cp";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";

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
        <Link className='hover:text-pink-600 hover:underline ' to={`/cp/${idRow.codigo}`}>
          {row.getValue('codigo')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'descripcion',
    header: () => <div className=' font-bold'>Provincia</div>,
  
  },
]

const Cp = () => {
    const{cp,fetchCp} = useCpController()

useEffect(() => {
fetchCp();
},[fetchCp]);




  return (
 <>
    <div>
        <Link to='http://localhost:5173/'>
          <GoBack />
        </Link>
      </div>

      <Link to='http://localhost:5173/cp/:codigo' />
      <div className='container mx-auto mt-5'>
        <h1 className='text-4xl font-semibold'>Códigos Postales</h1>
        <DataTable columns={columns} data={cp} />
      </div>
 </>
  )
}

export default Cp