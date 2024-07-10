import { Route} from 'react-router-dom';
import ClienteTable from '../Pages/Cliente';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import Cp from '../Pages/Cp';
import Poblacion from '../Pages/Poblacion';
import Provincias from '../Pages/Provincias';
import Bancos from '../Pages/Bancos';


const facturaRouter = (
      <Route path='/'>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="clientes" element={<ClienteTable />} />
      <Route path='cp' element={<Cp/>}/>
      <Route path='poblacion' element={<Poblacion/>}/>
      <Route path='provincias' element = {<Provincias/>}/>
      <Route path='bancos' element = {<Bancos/>}/>
    </Route>
    </Route>

);

export default facturaRouter;
 


