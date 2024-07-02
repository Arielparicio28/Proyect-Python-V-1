import sys
import os

ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "conexion"))
sys.path.append(ruta_conexion_bd)
from conexion import obtener_conexion

def pedir_input(mensaje):
    return input(f"{mensaje:60} : ")

def obtener_valores_actuales(tabla, codigo, columna_id):
    conexion = obtener_conexion()
    cursor = conexion.cursor()
    
    sql = f"SELECT * FROM {tabla} WHERE {columna_id} = %s"
    cursor.execute(sql, (codigo,))
    resultado = cursor.fetchone()
    
    cursor.close()
    conexion.close()
    return resultado

def modificacion(tabla):
    conexion = obtener_conexion()
    cursor = conexion.cursor()
    
    try:
        if tabla == "Clientes":
            codigo_cliente = pedir_input("Ingrese el código del cliente a modificar")
            valores_actuales = obtener_valores_actuales("clientes", codigo_cliente, "codigo_cliente")
            
            nombre = pedir_input("Ingrese el nombre del cliente") or valores_actuales[1]
            apellido = pedir_input("Ingrese el apellido del cliente") or valores_actuales[2]
            codigo_postal = pedir_input("Modifique su código postal") or valores_actuales[3]
            cif_nie = pedir_input("Nif/Nie") or valores_actuales[4]
        
            sql = "UPDATE clientes SET nombre = %s, apellido = %s, codigo_postal = %s, cif_nie = %s WHERE codigo_cliente = %s"
            valores = (nombre, apellido, codigo_postal, cif_nie, codigo_cliente)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Cliente modificado exitosamente.")
        
        elif tabla == "Codigo Postal":
            codigo_de_codigo_postal = pedir_input("Escriba el código postal a modificar")
            valores_actuales = obtener_valores_actuales("codigo_postal", codigo_de_codigo_postal, "codigo")
            
            descripcion = pedir_input("Escriba su nueva dirección") or valores_actuales[1]

            sql = "UPDATE codigo_postal SET descripcion = %s WHERE codigo = %s"
            valores = (descripcion, codigo_de_codigo_postal)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Código postal modificado exitosamente.")
        
        elif tabla == "Poblacion":
            codigo_poblacion = pedir_input("Escriba el código de población a modificar")
            valores_actuales = obtener_valores_actuales("poblaciones", codigo_poblacion, "codigo")
            
            descripcion_poblacion = pedir_input("Escriba su nueva población") or valores_actuales[1]

            sql = "UPDATE poblaciones SET descripcion = %s WHERE codigo = %s"
            valores = (descripcion_poblacion, codigo_poblacion)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Población modificada exitosamente.")
        
        elif tabla == "Provincias":
            codigo_provincia = pedir_input("Escriba el código de provincia a modificar")
            valores_actuales = obtener_valores_actuales("provincias", codigo_provincia, "codigo")
            
            descripcion_provincia = pedir_input("Escriba su nueva provincia") or valores_actuales[1]

            sql = "UPDATE provincias SET descripcion = %s WHERE codigo = %s"
            valores = (descripcion_provincia, codigo_provincia)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Provincia modificada exitosamente.")
        
        elif tabla == "Entidades Bancarias":
            codigo_banco = pedir_input("Ingrese el código del banco a modificar")
            valores_actuales = obtener_valores_actuales("bancos", codigo_banco, "codigo_banco")
            
            iban = pedir_input("Escriba su nuevo número de cuenta") or valores_actuales[1]
            nombre_banco = pedir_input("Escriba su nuevo nombre del banco") or valores_actuales[2]
            swift = pedir_input("Escriba su nuevo código internacional") or valores_actuales[3]

            sql = "UPDATE bancos SET iban = %s, nombre_banco = %s, swift_bci = %s WHERE codigo_banco = %s"
            valores = (iban, nombre_banco, swift, codigo_banco)
            cursor.execute(sql, valores)
            conexion.commit()
            print("Banco modificado exitosamente.")
        
        elif tabla == "Direcciones de Envío":
            codigo_cliente_envio = pedir_input("Ingrese el código del cliente de la dirección de envío a modificar")
            valores_actuales = obtener_valores_actuales("direccion_envio", codigo_cliente_envio, "codigo_cliente")
            
            direccion_envio = pedir_input("Modifique su dirección de envío") or valores_actuales[1]
            codigo_postal_envio = pedir_input("Modifique su código postal de envío") or valores_actuales[2]
            nombre_cliente_envio = pedir_input("Escriba el nombre de la persona que recibe su envío") or valores_actuales[3]
            poblacion_envio = pedir_input("Introduzca o modifique el código postal de su población") or valores_actuales[4]
            provincia_envio = pedir_input("Introduzca o Modifique los dos dígitos de su provincia") or valores_actuales[5]

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

