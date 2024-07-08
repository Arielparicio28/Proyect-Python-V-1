
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import facturaRouter from './router/Router';

 
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(facturaRouter)
  )
 
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
 