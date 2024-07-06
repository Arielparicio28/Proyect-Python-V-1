import sys
import os

ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "conexion"))
sys.path.append(ruta_conexion_bd)
from conexion import cerrar, obtener_conexion

ruta_limpiar = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","utils"))
sys.path.append(ruta_limpiar)
from limpiar import limpiar_pantalla

def alta(tabla):
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
            print("Alta de Clientes")
            print("---------------- \n")
            nombre = input("Nombre : ")
            apellido = input("Apellido : ")
            codigo_postal = input("Código Postal : ")
            cif_nie = input("CIF/NIE : ")
 

            sql = "INSERT INTO clientes (nombre, apellido, codigo_postal, cif_nie) VALUES ( %s, %s, %s, %s)"
            valores = (nombre, apellido,codigo_postal,cif_nie)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Cliente agregado exitosamente.")

        # Tabla Código Postal
        if tabla == "Codigo Postal":
            print("Alta de Codigo Postal")
            print("---------------- \n")
            codigo = input("Código Postal : ")
            descripcion = input("Descripción : ")

            sql = "INSERT INTO codigo_postal (codigo, descripcion) VALUES (%s, %s)"
            val = (codigo, descripcion)
            cursor.execute(sql, val)
            conexion.commit()
            print("Datos introducidos correctamente.")

        # Tabla Población
        if tabla == "Poblacion":
            print("Alta de Población")
            print("---------------- \n")
            codigo = input("Código Postal : ")
            descripcion = input("Descripción : ")

            sql = "INSERT INTO poblaciones (codigo, descripcion) VALUES (%s, %s)"
            val = (codigo, descripcion)
            cursor.execute(sql, val)
            conexion.commit()
            print("Datos introducidos correctamente.")

        # Tabla Provincias
        if tabla == "Provincias":
            print("Alta de Provincias")
            print("---------------- \n")
            codigo = input("Codigo de provincia : ")
            descripcion = input("Descripción : ")

            sql = "INSERT INTO provincias (codigo, descripcion) VALUES (%s, %s)"
            val = (codigo, descripcion)
            cursor.execute(sql, val)
            conexion.commit()
            print("Datos introducidos correctamente.")

        # Tabla Banco
        if tabla == "Entidades Bancarias":
            print("Alta de Entidades Bancarias")
            print("---------------- \n")
            codigo_banco = input("Código de su banco : ")
            iban = input("Número de cuenta : ")
            nombre_banco = input("Nombre banco : ")
            swift_bci = input("Código internacional: ")

            sql_update = "UPDATE bancos SET por_defecto = 0 WHERE codigo_banco = %s"
            cursor.execute(sql_update, (codigo_banco,))

            sql = "INSERT INTO bancos (codigo_banco , iban, nombre_banco, swift_bci, por_defecto) VALUES (%s, %s, %s, %s, %s)"
            val = (codigo_banco,iban,nombre_banco, swift_bci, 1)
            cursor.execute(sql, val)
            conexion.commit()
            print("Datos introducidos correctamente.")

        # Tabla Dirección Envío
        if tabla == "Direcciones de Envío":
            print("Alta de Direcciones de envío")
            print("---------------- \n")
            codigo_cliente_de_envio = input("Código de cliente : ")
            direccion_envio = input("Dirección de envío : ")
            codigo_postal_de_envio = input("Código Postal de envío : ")
            nombre_cliente = input("Nombre Cliente : ")
            poblacion_envio = input("Dígitos de Poblacion de envío : ")
            provincia_envio = input("Dígitos de Provincia de envío : ")

              # Establecer todas las direcciones anteriores del cliente a por_defecto = 0
            sql_update = "UPDATE direccion_envio SET por_defecto = 0 WHERE codigo_cliente = %s"
            cursor.execute(sql_update, (codigo_cliente_de_envio,))

    # Insertar la nueva dirección con por_defecto = 1

            sql = "INSERT INTO direccion_envio (codigo_cliente, direccion_envio, codigo_postal, nombre_cliente, poblacion, provincia, por_defecto) VALUES (%s, %s, %s , %s , %s , %s, %s)"
            val = (codigo_cliente_de_envio, direccion_envio, codigo_postal_de_envio,nombre_cliente,poblacion_envio,provincia_envio,1)
            cursor.execute(sql, val)
            conexion.commit()
            print("Datos introducidos correctamente.")

    except Exception as e:
        print("Error al insertar datos: ", e)
    finally:
        cursor.close()
        cerrar(conexion)

if __name__ == "__main__":
    tabla = input("Seleccione la tabla en la que desea insertar datos: \n1. Clientes\n2. Codigo Postal\n3. Poblacion\n4. Provincias\n5. Banco\n6. Dirección de envio\n")
    alta(tabla)
