import sys
import os


def limpiar_pantalla():
    # Función para limpiar la pantalla
    if os.name == 'nt':  # Para Windows
        os.system('cls')
    else:  # Para Unix/Linux/MacOS
        os.system('clear')