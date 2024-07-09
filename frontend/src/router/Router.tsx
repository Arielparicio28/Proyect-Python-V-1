import { Route} from 'react-router-dom';
import ClienteTable from '../Pages/Cliente';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import Cp from '../Pages/Cp';
import Poblacion from '../Pages/Poblacion';


const facturaRouter = (
      <Route path='/'>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="clientes" element={<ClienteTable />} />
      <Route path='cp' element={<Cp/>}/>
      <Route path='poblacion' element={<Poblacion/>}/>
    </Route>
    </Route>

);

export default facturaRouter;
 


