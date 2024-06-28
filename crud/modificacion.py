import sys
import os

ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "conexion"))
sys.path.append(ruta_conexion_bd)
from conexion import obtener_conexion

ruta_limpiar = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","utils"))
sys.path.append(ruta_limpiar)
from limpiar import limpiar_pantalla

def pedir_input(mensaje):
    respuesta = input(f"{mensaje:60}: ")
    continuar = input("¿Quieres continuar? (s/n): ").strip().lower()
    if continuar == 's':
            return respuesta
    elif continuar == 'n':
            print("Operación cancelada.")
            sys.exit()
    else:
            print("Por favor, introduce 's' para sí o 'n' para no.") 
    

def modificacion(tabla):
    conexion = obtener_conexion()
    cursor = conexion.cursor()

    limpiar_pantalla()
    
    try:
        if tabla == "Clientes":
            print("Modificación de Clientes")
            print("---------------- \n")
            codigo_cliente = pedir_input("Código del cliente: ")
            nombre = pedir_input("Nombre del cliente: ")
            apellido = pedir_input("Apellido del cliente: ")
            codigo_postal = pedir_input("Código Postal: ")
            cif_nie = pedir_input("CIF/NIE: ")
        
            sql = "UPDATE clientes SET nombre = %s, apellido = %s, codigo_postal = %s, cif_nie = %s WHERE codigo_cliente = %s"
            valores = (nombre, apellido, codigo_postal, cif_nie, codigo_cliente)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Cliente modificado exitosamente.")
        
        elif tabla == "Codigo Postal":
            print("Modificación de Codigo Postal")
            print("---------------- \n")
            codigo_de_codigo_postal = pedir_input("Código Postal a modificar: ")
            descripcion = pedir_input("Nueva Dirección: ")

            sql = "UPDATE codigo_postal SET descripcion = %s WHERE codigo = %s"
            valores = (descripcion, codigo_de_codigo_postal)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Código postal modificado exitosamente.")
        
        elif tabla == "Poblacion":
            print("Modificación de Población")
            print("---------------- \n")
            codigo_poblacion = pedir_input("Código de Población: ")
            codigo2_poblacion = pedir_input("Nuevo Código de Población: ")
            """
            Pedir Descripción y poder Cambiarla"""

            descripcion_poblacion = pedir_input("Nueva Descripción: ")

            sql = "UPDATE poblaciones SET codigo = %s, descripcion = %s WHERE codigo = %s"
            valores = (codigo2_poblacion, descripcion_poblacion, codigo_poblacion )
            cursor.execute(sql, valores)
            conexion.commit()
            print("Población modificada exitosamente.")
        
        elif tabla == "Provincias":
            print("Modificación de Provincias")
            print("---------------- \n")
            codigo_provincia = pedir_input("Código de Provincia a modificar: ")
            descripcion_provincia = pedir_input("Nueva Provincia: ")

            sql = "UPDATE provincias SET descripcion = %s WHERE codigo = %s"
            valores = (descripcion_provincia, codigo_provincia)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Provincia modificada exitosamente.")
        
        elif tabla == "Entidades Bancarias":
            print("Modificación de Entidades Bancarias")
            print("---------------- \n")
            codigo_banco = pedir_input("Código del Banco a modificar: ")
            iban = pedir_input("Nuevo Número de Cuenta: ")
            nombre_banco = pedir_input("Nuevo Nombre del Banco: ")
            swift = pedir_input("Nuevo Código SWIFT")

            sql = "UPDATE bancos SET iban = %s, nombre_banco = %s, swift_bci = %s WHERE codigo_banco = %s"
            valores = (iban, nombre_banco, swift, codigo_banco)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Banco modificado exitosamente.")
        
        elif tabla == "Direcciones de Envío":
            print("Modificación de Direcciones de envio")
            print("---------------- \n")
            codigo_cliente_envio = pedir_input("Código del cliente de la dirección de envío a modificar: ")
            direccion_envio = pedir_input("Dirección de envío a modificar: ")
            codigo_postal_envio = pedir_input("Código Postal de envío a modificar: ")
            nombre_cliente_envio = pedir_input("Persona que recibe su envío: ")
            poblacion_envio = pedir_input("Código Postal de su población: ")
            provincia_envio = pedir_input("2 Dígitos de su provincia: ")

            sql = "UPDATE direccion_envio SET direccion_envio = %s, codigo_postal = %s, nombre_cliente = %s, poblacion = %s, provincia = %s WHERE codigo_cliente = %s"
            valores = (direccion_envio, codigo_postal_envio, nombre_cliente_envio, poblacion_envio, provincia_envio, codigo_cliente_envio)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Dirección de envío modificada exitosamente.")
        
    except Exception as e:
        print(f"Error al modificar {tabla}: {e}")
    
    finally:
        cursor.close()
        conexion.close()
        input("Presione Enter para continuar...")