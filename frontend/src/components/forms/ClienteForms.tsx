import { useEffect } from "react";
import { useClienteController } from "../../controllers/clienteController";
import { toast } from "../ui/use-toast";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const ClienteForm = () => {
  useEffect(() => {
    toast({
      title: '¡Está por dar el alta de un nuevo cliente!',
      description: 'Por favor asegúrese de que todos los campos estén completos.'
    });
  }, []);

  const {
    form,
    handleChange,
    handleAddOrUpdateCliente,
    codigoPostales
  } = useClienteController();

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-semibold mb-5 text-center">Alta Cliente</h1>
        <Card className="shadow-lg rounded-lg">
          <CardContent className="p-6">
            <form onSubmit={handleAddOrUpdateCliente} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido:</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={form.apellido}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="codigo_postal" className="block text-sm font-medium text-gray-700">Código Postal:</label>
                <select
                  id="codigo_postal"
                  name="codigo_postal"
                  value={form.codigo_postal}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                >
                  <option value="">Seleccionar código postal</option>
                  {codigoPostales.map((cp) => (
                    <option key={cp} value={cp}>
                      {cp}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cif_nie" className="block text-sm font-medium text-gray-700">CIF/NIE:</label>
                <input
                  type="text"
                  id="cif_nie"
                  name="cif_nie"
                  value={form.cif_nie}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              <CardFooter className="flex justify-center space-x-6 mt-6">
                <Button type="button" className="w-32 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded">Cancelar</Button>
                <Button type="submit" className="w-32 bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 rounded">Crear</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClienteForm;
