1- He creado un entorno virtual de python para solo usar las dependencias en este proyecto este es el comando de creación python -m virtualenv nombre_entorno, en mi caso siempre uso el que recomienda pyhton como nombre.

2- Hay que tener en cuenta de que se tiene que cambiar el modo de ejecución en powershell de Restricted a RemoteSigned para poder activar el entorno virtual y tenes que ejecutar la terminal como administrador.

2.1- Get-ExecutionPolicy esto mostrará la política de ejecución actual, que probablemente sea Restricted.

2.2- Set-ExecutionPolicy RemoteSigned  cambia la política de ejecución a RemoteSigned.Si se te solicita confirmación, escribe Y y presiona Enter.

