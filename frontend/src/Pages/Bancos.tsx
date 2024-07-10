import { useEffect} from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack';
import banco from '../validation/banco';
import { useBancoController } from '../controllers/bancoController';
import { DataTable } from '../components/tables/BancoTabla';


type bancoTable = z.infer<typeof banco >

type bancoColumns = Pick <
bancoTable,
|'codigo_banco'
|'iban'
|'nombre_banco'
|'swift_bci'


>;

const columns: ColumnDef<bancoColumns>[] = [
  {
    accessorKey: 'nombre_banco',
    header: () => <div className=' font-bold'>Nombre</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-pink-600 hover:underline ' to={`/bancos/${idRow.codigo_banco}`}>
          {row.getValue('nombre_banco')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'iban',
    header: () => <div className=' font-bold'>IBAN</div>,
  
  },

  {
    accessorKey: 'swift_bci',
    header: () => <div className=' font-bold'>Swift-Bci</div>,
  },
  {
    accessorKey: 'codigo_banco',
    header: () => <div className=' font-bold'>Código Banco</div>,
 
  },
]






const Bancos = () => {
  const { bancos, fetchBancos } = useBancoController()

  useEffect(() => {
    fetchBancos();
  }, [fetchBancos]);

  return (
<>
      <div>
        <Link to='http://localhost:5173/'>
          <GoBack />
        </Link>
      </div>

      <Link to='http://localhost:5173/bancos/:codigo_cliente' />
      <div className='container mx-auto mt-5'>
        <h1 className='text-4xl font-semibold'>Bancos</h1>
        <DataTable columns={columns} data={bancos} />
      </div>
      </>
  );
};

export default Bancos;
