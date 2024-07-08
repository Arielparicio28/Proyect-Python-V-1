import Cliente from "../interfaces/cliente";

interface ClienteTableProps {
  clientes: Cliente[];

}
 
const ClienteTable: React.FC<ClienteTableProps> = ({ clientes}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Código Postal</th>
          <th>CIF-NIE</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente => (
          <tr key={cliente.codigo_cliente}>
            <td>{cliente.codigo_cliente}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.codigo_postal}</td>
            <td>{cliente.cif_nie}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
 
export default ClienteTable;