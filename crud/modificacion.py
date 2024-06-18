import sys
import os


ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","conexion"))
sys.path.append(ruta_conexion_bd)
from conexion import obtener_conexion

def modificacion(tabla):
    conexion = obtener_conexion()
    cursor = conexion.cursor()
    #Clientes
    if tabla == "Clientes":
        id_cliente = input("Ingrese el ID del cliente a modificar: ")
        nombre = input("Ingrese el nombre del cliente: ")
        apellido = input("Ingrese el apellido del cliente: ")
        nif = input("Introduce tu Nif/Nie: ")
        direccion = input("Introduce tu dirección: ")
        codigoPostal = input("Introduce tu codigo postal: ")
        provincia = input("Introduce tu provinica: ")

        sql = "UPDATE Clientes SET nombre = %s, apellido = %s, nif_nie = %s, direccion = %s, codigopostal = %s, provincia = %s WHERE id = %s"
        valores = (nombre, apellido, nif, direccion, codigoPostal, provincia, id_cliente)
        cursor.execute(sql, valores)
        conexion.commit()
        print("Cliente modificado exitosamente.")
    #Codigo Postal
    if tabla == "Codigo Postal":
        id_codigo_postal = input("Ingrese el ID del código postal a modificar: ")
        codigo = input("Escriba un código postal: ")
        descripcion = input("Escriba una descripción: ")

        sql = "UPDATE CodigosPostales SET codigo = %s, descripcion = %s WHERE id = %s"
        valores = (codigo, descripcion, id_codigo_postal)
        cursor.execute(sql, valores)
        conexion.commit()
        print("Código postal modificado exitosamente.")
    #Poblacion
    if tabla == "Poblacion":
        id_poblacion = input("Ingrese el ID de la población a modificar: ")
        codigoP = input("Escriba un código postal: ")
        descripcionP = input("Escriba una descripción: ")

        sql = "UPDATE Poblaciones SET codigo = %s, descripcion = %s WHERE id = %s"
        valores = (codigoP, descripcionP, id_poblacion)
        cursor.execute(sql, valores)
        conexion.commit()
        print("Población modificada exitosamente.")
    #Provincias
    if tabla == "Provincias":
        id_provincia = input("Ingrese el ID de la provincia a modificar: ")
        codigoPro = input("Escriba un código postal: ")
        descripcionPro = input("Escriba una descripción: ")

        sql = "UPDATE Provincias SET codigo = %s, descripcion = %s WHERE id = %s"
        valores = (codigoPro, descripcionPro, id_provincia)
        cursor.execute(sql, valores)
        conexion.commit()
        print("Provincia modificada exitosamente.")
    #Entidades Bancarias
    if tabla == "Entidades Bancarias":
        id_banco = input("Ingrese el ID del banco a modificar: ")
        nombreBanco = input("Escriba el nombre de su banco: ")
        iban = input("Escriba el número de cuenta: ")
        swift = input("Escriba el código internacional: ")

        sql = "UPDATE Bancos SET nombre_entidad = %s, codigo_iban = %s, codigo_swift = %s WHERE id = %s"
        valores = (nombreBanco, iban, swift, id_banco)
        cursor.execute(sql, valores)
        conexion.commit()
        print("Banco modificado exitosamente.")
    #Direccion de envío
    if tabla == "Direcciones de Envío":
        id_direccion_envio = input("Ingrese el ID de la dirección de envío a modificar: ")
        codigoPosenvio = input("Escriba el código postal de envío: ")
        poblacionenvio = input("Escriba la población de envío: ")
        provinciaenvio = input("Escriba la provincia de envío: ")

        sql = "UPDATE DireccionesEnvio SET codigo_postal = %s, poblacion = %s, provincia = %s WHERE id = %s"
        valores = (codigoPosenvio, poblacionenvio, provinciaenvio, id_direccion_envio)
        cursor.execute(sql, valores)
        conexion.commit()
        print("Dirección de envío modificada exitosamente.")

    cursor.close()
    conexion.close()
    input("Presione Enter para continuar...")