import sys
import os

ruta_crud = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","crud"))
sys.path.append(ruta_crud)

from alta import alta
from modificacion import modificacion
from baja import baja
from consulta import consultas

ruta_facturacion = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","facturacion"))
sys.path.append(ruta_facturacion)

from facturar import facturar1


ruta_impresion = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","impresion"))
sys.path.append(ruta_impresion)

from impresion import imprimir,generar_pdf

ruta_limpiar = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","utils"))
sys.path.append(ruta_limpiar)
from limpiar import limpiar_pantalla

# Función para mostrar el menú principal
def menu_principal():
    while True:
        limpiar_pantalla()
        print("\nMenú Principal:")
        print("1. Mantenimiento")
        print("2. Facturación")
        print("3. Impresión")
        print("4. Salir")
        
        opcion = input("Seleccione una opción: ")
        
        if opcion == "1":
            menu_mantenimiento()
        elif opcion == "2":
            facturar1()   
        elif opcion == "3":
            numero_factura = input("Ingrese el número de la factura: ")
            cabecera, lineas = imprimir(numero_factura)
            if cabecera and lineas:
                generar_pdf(cabecera, lineas, numero_factura)
            else:
                print("No se encontro la factura mencionada")

        elif opcion == "4":
            print("Saliendo del programa...")
            break
        else:
            print("Opción inválida. Por favor, seleccione una opción válida.")

# Función para mostrar el menú de mantenimiento
def menu_mantenimiento():
    while True: 
        limpiar_pantalla()
        print("\nMenú Mantenimiento:")
        print("1. Clientes")
        print("2. Codigo Postal")
        print("3. Poblacion")
        print("4. Provincias")
        print("5. Entidades Bancarias")
        print("6. Direcciones de Envío")
        print("7. Listado de Facturas")
        print("8. Volver al Menú Principal")

        opcion = input("Seleccione una opción: ")
        
        if opcion == "1":
            submenu_tabla("Clientes")
        if opcion == "2":
            submenu_tabla("Codigo Postal")
        if opcion == "3":
            submenu_tabla("Poblacion")
        if opcion == "4":
            submenu_tabla("Provincias")
        if opcion == "5":
            submenu_tabla("Entidades Bancarias")
        if opcion == "6":
            submenu_tabla("Direcciones de Envío")
        if opcion == "7":
            submenu_tabla("Listado de Facturas")
        if opcion == "8":
            break
        else:
            print("Opción inválida. Por favor, seleccione una opción válida.")

# Función para mostrar el submenú de una tabla específica
def submenu_tabla(tabla):
    while True:
        limpiar_pantalla()
        print(f"\nMenú {tabla}:")
        print("1. Alta")
        print("2. Baja")
        print("3. Modificación")
        print("4. Consulta")
        print("5. Volver al Menú Mantenimiento")
        
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            alta(tabla)
        if opcion == "2":
            baja(tabla)
        if opcion == "3":
            modificacion(tabla)
        if opcion == "4":
            consultas(tabla)
        if opcion == "5":
            break
        else:
            print("Opción inválida. Por favor, seleccione una opción válida.")

if __name__ == '__main__':
    menu_principal()