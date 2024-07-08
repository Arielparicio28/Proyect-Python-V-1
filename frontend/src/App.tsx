import { useEffect } from 'react';
import './App.css';
import ClienteTable from './components/ClienteTable';
import { useClienteController } from './controllers/clienteController';

 
function App() {
  const { clientes, fetchClientes} = useClienteController();
 
  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);
 
  return (
    <div className="App">
      <h1>Clientes</h1>
      <ClienteTable clientes={clientes} />
    </div>
  );
}
 
export default App;
 