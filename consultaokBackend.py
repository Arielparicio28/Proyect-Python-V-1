import sys
import os
from tabulate import tabulate

ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","conexion"))
sys.path.append(ruta_conexion_bd)
from conexion import obtener_conexion

ruta_limpiar = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","utils"))
sys.path.append(ruta_limpiar)
from limpiar import limpiar_pantalla

def consultas(tabla):
    conexion = obtener_conexion()
    if conexion is None:
        print("No se pudo establecer la conexión a la base de datos.")
        return
    
    try:
        cursor = conexion.cursor()
     
    # Tabla Clientes
        limpiar_pantalla()
        if tabla == "Clientes":
            print("Consulta de Clientes")
            print("---------------- \n")
            sql = "SELECT * FROM clientes"
            cursor.execute(sql)
            resultado = cursor.fetchall()
            encabezados_clientes = ["Código Cliente", "Nombre", "Apellido", "Código Postal", "CIF/NIE"]
            tabla_cliente = [list(cliente) for cliente in resultado]
            print(tabulate(tabla_cliente, headers=encabezados_clientes, tablefmt='grid'))
         
    
    # Tabla Código Postal
     
        if tabla == "Codigo Postal":
            print("Consulta de Codigo Postal")
            print("---------------- \n")
            sql = "SELECT * FROM codigo_postal"
            cursor.execute(sql)
            resultado = cursor.fetchall()
           
            encabezado_codigo = ["CP","Provincia"]
            tabla_codigo = [list(codigopostal) for codigopostal in resultado]
            print(tabulate(tabla_codigo,headers=encabezado_codigo,tablefmt='grid'))
    
    # Tabla Población
       
        if tabla == "Poblacion":
            print("Consulta de Población")
            print("---------------- \n")
            sql = "SELECT * FROM poblaciones"
            cursor.execute(sql)
            resultado = cursor.fetchall()

            encabezado_poblacion = ["CP", "Población"]
            tabla_poblacion = [list(poblacion) for poblacion in resultado]
            print(tabulate(tabla_poblacion, headers=encabezado_poblacion, tablefmt='grid'))

    # Tabla Provincias
        if tabla == "Provincias":
            print("Consulta de Provincias")
            print("---------------- \n")
            sql = "SELECT * FROM provincias"
            cursor.execute(sql)
            resultado = cursor.fetchall()

            encabezado_provincias = ["CP", "Provincias"]
            tabla_provincias = [list(provincias) for provincias in resultado]
            print(tabulate(tabla_provincias, headers=encabezado_provincias, tablefmt='grid'))

    # Tabla Banco
     
        if tabla == "Entidades Bancarias":
            print("Consulta de Entidades Bancarias")
            print("---------------- \n")
            sql = "SELECT `codigo_banco`, `iban`, `nombre_banco`, `swift_bci` FROM bancos"
            cursor.execute(sql)
            resultado = cursor.fetchall()

            encabezado_banco = ["Código", "IBAN", "Bancos", "SWIFT-BIC"]
            tabla_banco = [list(banco) for banco in resultado]
            print(tabulate(tabla_banco, headers=encabezado_banco, tablefmt='grid'))

    # Tabla Dirección 
     
        if tabla == "Direcciones de Envío":
            print("Consulta de Direcciones de envío")
            print("---------------- \n")
            sql = "SELECT `codigo_cliente`, `direccion_envio`, `codigo_postal`, `nombre_cliente`, `poblacion`, `provincia` FROM direccion_envio"
            cursor.execute(sql)
            resultado = cursor.fetchall()

            encabezado_direccion_envio = ["Codigo Cliente", "Direccion Envio", "Codigo Postal", "Nombre Cliente", "Poblacion", "Provincia"]
            tabla_direccion_envio = [list(direccion_envio) for direccion_envio in resultado]
            print(tabulate(tabla_direccion_envio, headers=encabezado_direccion_envio, tablefmt='grid'))

        
# Tabla Cabecera y Líneas
        if tabla == "Listado de Facturas":
            print("Listado de Facturas")
            sql = " SELECT numero_factura,codigo_cliente,nombre_cliente,fecha,total_factura FROM cabecera"
            cursor.execute(sql)
            resultado = cursor.fetchall()
            encabezados_cabecera = ["Numero Factura", "Codigo Cliente", "Nombre","Fecha","Total"]
            tabla_cabecera = [list(cabecera) for cabecera in resultado]
            total_general = sum(row[4] for row in resultado)
            print(tabulate(tabla_cabecera, headers=encabezados_cabecera, tablefmt='grid'))
            print(f"\nTotal General: {total_general}")
               
 

    except Exception as e:
        print("Error al consultar datos: ", e)
    finally:
        cursor.close()
        conexion.close()
    input("Presione Enter para continuar...")
