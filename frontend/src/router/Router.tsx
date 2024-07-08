import { Route} from 'react-router-dom';
import ClienteTable from '../Pages/ClienteTable';
import Layout from '../components/Layout';


const facturaRouter = (
      <Route path='/'>
      <Route element={<Layout />}>
      <Route path="clientes" element={<ClienteTable />} />
    </Route>
    </Route>

);

export default facturaRouter;
 


