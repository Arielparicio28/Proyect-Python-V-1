import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack';
import ClienteForm from '../components/forms/ClienteForms';

const AltaCliente = () => {
  return (
    <>
      <div>
        <Link to='/'>
          <GoBack />
        </Link>
      </div>
      <div className='container mx-auto mt-5'>
        <ClienteForm />
      </div>
    </>
  );
};

export default AltaCliente;
