import sys
import os


ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","conexion"))
sys.path.append(ruta_conexion_bd)
from conexion import obtener_conexion, cerrar

ruta_limpiar = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","utils"))
sys.path.append(ruta_limpiar)
from limpiar import limpiar_pantalla


def baja(tabla):
    conexion = obtener_conexion()
    print(f"Valor de tabla, {tabla}")
    if conexion is None:
        print("No se pudo establecer la conexión a la base de datos.")
        return

    try:
        cursor = conexion.cursor()

        limpiar_pantalla()

    # Tabla Clientes
        if tabla == "Clientes":
            print("Baja de Clientes")
            print("---------------- \n")
            codigo_cliente = input("Código de cliente a eliminar: ")
            sql = "DELETE FROM clientes WHERE codigo_cliente = %s"
            valores = (codigo_cliente,)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Cliente eliminado  samente.")
    
    # Tabla código postal
        if tabla == "Codigo Postal":
            print("Baja de Codigo Postal")
            print("---------------- \n")
            codigo_postal = input("Código Postal a eliminar: ")
            sql = "DELETE FROM codigo_postal WHERE codigo = %s"
            valores = (codigo_postal,)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Código Postal eliminado correctamente.")
    
    # Tabla población
        if tabla == "Poblacion":
            print("Baja de Población")
            print("---------------- \n")
            codigo_poblacion = input("Código Postal de la población a eliminar: ")
            sql = "DELETE FROM poblaciones WHERE codigo = %s"
            valores = (codigo_poblacion,)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Población eliminada correctamente.")

    # Tabla provincias
        if tabla == "Provincias":
            print("Baja de Provincias")
            print("---------------- \n")
            codigo_provincia = input("Código Postal de la provincia a eliminar: ")
            sql = "DELETE FROM provincias WHERE codigo = %s"
            valores = (codigo_provincia,)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Provincia eliminada correctamente.")
    
    # Tabla banco
        if tabla == "Entidades Bancarias":
            print("Baja de Entidades Bancarias")
            print("---------------- \n")
            iban = input("Número de cuenta (IBAN) del banco a eliminar: ")
            sql = "DELETE FROM bancos WHERE iban = %s"
            valores = (iban,)
            cursor.execute(sql, valores)
            conexion.commit()
            +print("Banco eliminado correctamente.")

    # Tabla dirección de envío 
        if tabla == "Direcciones de Envío":
            print("Baja de Direcciones de envío")
            print("---------------- \n")
            codigoPosenvio = input("Código Postal de envío a eliminar: ")
            sql = "DELETE FROM direccion_envio WHERE codigo_postal = %s"
            valores = (codigoPosenvio,)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Dirección de envío eliminada correctamente.")

    except Exception as e:
        print("Error al eliminar datos: ", e)
    finally:
        cursor.close()
        cerrar(conexion)

if __name__ == "__main__":
    tabla = input("Seleccione la tabla en la que desea eliminar datos: \n1. Clientes\n2. Codigo Postal\n3. Poblacion\n4. Provincias\n5. Banco\n6. Dirección de envio\n")
    baja(tabla)