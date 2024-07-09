from conexion import obtener_conexion

def consultas(tabla):
    conexion = obtener_conexion()
    if conexion is None:
        return {"error": "No se pudo establecer la conexión a la base de datos."}
    
    try:
        cursor = conexion.cursor(dictionary=True)
        resultados = []
        encabezados = []
        
        if tabla == "Clientes":
            sql = "SELECT * FROM clientes"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["Código Cliente", "Nombre", "Apellido", "Código Postal", "CIF/NIE"]
        elif tabla == "Codigo Postal":
            sql = "SELECT * FROM codigo_postal"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["CP", "Provincia"]
        elif tabla == "Poblacion":
            sql = "SELECT * FROM poblaciones"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["CP", "Población"]
        elif tabla == "Provincias":
            sql = "SELECT * FROM provincias"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["CP", "Provincias"]
        elif tabla == "Entidades Bancarias":
            sql = "SELECT `codigo_banco`, `iban`, `nombre_banco`, `swift_bci` FROM bancos"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["Código", "IBAN", "Bancos", "SWIFT-BIC"]
        elif tabla == "Direcciones de Envío":
            sql = "SELECT `codigo_cliente`, `direccion_envio`, `codigo_postal`, `nombre_cliente`, `poblacion`, `provincia` FROM direccion_envio"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["Codigo Cliente", "Direccion Envio", "Codigo Postal", "Nombre Cliente", "Poblacion", "Provincia"]
        elif tabla == "Listado de Facturas":
            sql = "SELECT numero_factura, codigo_cliente, nombre_cliente, fecha, total_factura FROM cabecera"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["Numero Factura", "Codigo Cliente", "Nombre", "Fecha", "Total"]
            
        elif tabla == "Productos":
            sql = "SELECT codigo_producto, nombre_producto,valor_producto FROM productos"
            cursor.execute(sql)
            resultados = cursor.fetchall()
            encabezados = ["Código Producto","Nombre Producto","Valor"]
        
        return {"encabezados": encabezados, "resultados": resultados}
    except Exception as e:
        return {"error": f"Error al consultar datos: {e}"}
    finally:
        cursor.close()
        conexion.close()
#Funciona desde el backend pero no desde el frontend.