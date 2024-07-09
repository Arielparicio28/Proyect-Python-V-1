import { useEffect} from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { useClienteController } from '../controllers/clienteController';
import cliente from '../validation/cliente';
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack';
import { DataTable } from '../components/tables/ClienteTabla';

type clienteTable = z.infer<typeof cliente >

type clienteColumns = Pick <
clienteTable,
|'codigo_cliente'
|'nombre'
|'apellido'
|'cif_nie'
|'codigo_postal'


>;

const columns: ColumnDef<clienteColumns>[] = [
  {
    accessorKey: 'nombre',
    header: () => <div className=' font-bold'>Nombre</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-pink-600 hover:underline ' to={`/clientes/${idRow.codigo_cliente}`}>
          {row.getValue('nombre')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'apellido',
    header: () => <div className=' font-bold'>Apellido</div>,
  
  },

  {
    accessorKey: 'cif_nie',
    header: () => <div className=' font-bold'>CIF-NIE</div>,
  },
  {
    accessorKey: 'codigo_postal',
    header: () => <div className=' font-bold'>CP</div>,
 
  },
  {
    accessorKey: 'codigo_cliente',
    header: () => <div className=' font-bold'>Cliente Código</div>,
  },

]






const ClienteTable = () => {
  const { clientes, fetchClientes } = useClienteController();

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  return (
<>
      <div>
        <Link to='http://localhost:5173/'>
          <GoBack />
        </Link>
      </div>

      <Link to='http://localhost:5173/clientes/:codigo_cliente' />
      <div className='container mx-auto mt-5'>
        <h1 className='text-4xl font-semibold'>Nuestros Clientes</h1>
        <DataTable columns={columns} data={clientes} />
      </div>
      </>
  );
};

export default ClienteTable;
