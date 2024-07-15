from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
import os
app = Flask(__name__)
#Intercambio de Recursos de Origen Cruzado (CORS) es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador.
CORS(app)

ruta_conexion_bd = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', './backend/conexion'))
sys.path.append(ruta_conexion_bd)
from conexion import obtener_conexion, cerrar

ruta_crud = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', './backend/crud'))
sys.path.append(ruta_crud)
from crud.consulta import consultas

@app.route('/')
def home():
    return "MySQL con python backend y React frontend"
 
@app.route('/clientes', methods=['GET'])
def obtener_clientes():
    resultado = consultas("Clientes")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})


@app.route('/cliente', methods=['POST'])
def agregar_cliente():
    datos = request.json
    conexion = obtener_conexion()
    if conexion is None:
        return jsonify({"error": "No se pudo establecer la conexión a la base de datos."}), 500

    try:
        cursor = conexion.cursor()
        # Verifico si el código postal existe
        cursor.execute("SELECT codigo FROM codigo_postal WHERE codigo = %s", (datos['codigo_postal'],))
        codigo_postal = cursor.fetchone()
        if codigo_postal is None:
            return jsonify({"error": "Código postal no válido."}), 400

        sql = "INSERT INTO clientes (nombre, apellido, codigo_postal, cif_nie) VALUES (%s, %s, %s, %s)"
        valores = (datos['nombre'], datos['apellido'], datos['codigo_postal'], datos['cif_nie'])
        cursor.execute(sql, valores)
        conexion.commit()
        return jsonify({"mensaje": "Cliente agregado exitosamente."}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
 
 
 
 
 
@app.route('/cp', methods=['GET'])
def obtener_codigo_postal():
    resultado = consultas("Codigo Postal")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})

@app.route('/poblacion', methods=['GET'])
def obtener_poblacion():
    resultado = consultas("Poblacion")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})
 

@app.route('/provincias', methods=['GET'])
def obtener_provincias():
    resultado = consultas("Provincias")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})


@app.route('/bancos', methods=['GET'])
def obtener_bancos():
    resultado = consultas("Entidades Bancarias")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})

@app.route('/direcciones_envio', methods=['GET'])
def obtener_direcciones_envio():
    resultado = consultas("Direcciones de Envío")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})

@app.route('/facturas', methods=['GET'])
def obtener_listado_facturas():
    resultado = consultas("Listado de Facturas")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})

@app.route('/productos', methods=['GET'])
def obtener_productos():
    resultado = consultas("Productos")
    if "error" in resultado:
        return jsonify({"error": resultado["error"]}), 500
    return jsonify({"encabezados": resultado["encabezados"], "resultados": resultado["resultados"]})

if __name__ == '__main__':
    app.run(debug=True)