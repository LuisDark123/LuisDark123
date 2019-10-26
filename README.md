# Hacer deploy de un repositorio en github a un hosting con cpanel

### Paso 1

#### Agregar el archivo .cpanel.yml a nuestro proyecto en Github
Tenemos que crear un archivo con el nombre ".cpanel.yml" y agregarlo en nuestro proyecto. La configuración del archivo es la siguiente:
```bash
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/USER/public_html/PATH/
    - /bin/cp -R * $DEPLOYPATH
```
Modifica lo siguiente:
* USER = Sustituyelo por tu usuario de cpanel. Lo encontraras en el Dashboard y dentro del sidebar de "Información General" o en "Administración de Archivos" en la ruta que aparece en la cabecera: "/home/USER"

* PATH = Sustituyelo por el directorio donde deseas instalar tu proyecto. Si quieres que tu proyecto se instale en la raiz del directorio public_html simplemente borra "PATH/".

#### Crear la carpeta de Deploy 
###### Si tu elección fue instalar el proyecto en la raiz de "public_html" puedes omitir este paso

Ahora accedemos a nuestro Cpanel y antes de clonar el repositorio en el hosting debemos crear la carpeta que le especificamos al archivo .cpanel.yml. 

Para hacer eso accedemos al dashboard de cpanel, luego a "Administrador de archivos", abrimos la carpeta "public_html" (La definimos en la linea 4) y creamos la carpeta manualmente con el nombre que colocamos en "PATH". 



### Paso 2
#### Acceder a Cpanel para crear el repositorio en el hosting
Ir a Cpanel, abrir la opcion "Git Version Control" y dar click en el boton "Crear".

Aparecerán dos opciones para crear un repositorio pero la que te recomiendo es clonar repositorio por que es más simple y sirve de más ya que tenemos nuestro proyecto ya desplegado en github:


#### Clonar Repositorio:

Para clonarlo copia la url de tu repo en github y pegala en el campo "Clone URL". Después te pedirá los siguientes campos "Repository Path" y "Repository Name". 

Por defecto autocompleta los campos asi:

* "Repository Path" = "repositorios/ELNOMBREDETUREPO".
* "Repository Name" = "ELNOMBREDETUREPO".

Puedes dejar los campos como los autocomplete cpanel ya que sirve completamente para el tutorial.

En caso de que no los autocomplete puedes simplemente poner el nombre de tu repositorio sustituyendo "ELNOMBREDETUREPOSITORIO"

Al terminar de completar todos los campos solo tendremos que dar click en crear y esperar a que clone el repositorio en nuestro hosting.

### Paso 3
Una vez que se termine de clonar el repositorio en nuestra lista aparecerá un botón con la opción de "Administrar". Accedemos a la opción mencionada y ahora seleccionamos la pestaña "Pull or Deploy"

Dentro se encontraran 2 botones que realizaran lo siguiente:
* Update From Remote = Actualizara el repositorio del hosting con el de github (realizara pull)

* Deploy Head Commit = Publicara tu proyecto desde el ultimo commit que realizaste (Realizara push)

Siguiendo este tutorial consideraremos que no has ejecutado ninguna de las tareas anteriores a si que solo tendremos que dar click en "Deploy Head Commit". Esto hara que nuestros archivos del repositorio del hosting se exporten a la carpeta "public_html" y se muestren al usuario final en la url.

Para revisar que todo salio bien entra a la url podria haber quedado asi:

* En la carpeta personalizada = "example.com/PATH/"
* En la carpeta raiz = "example.com/"


#### Consideraciones
Debes ejecutar las acciones "Update From Remote" o "Deploy Head Commit" dependiendo del estado en el que te encuentres. Si has realizado nuevos commits en tu github deberás realizar la acción "Update From Remote" y publicar los cambios con "Deploy Head Commit".

Aveces al realizar la clonación y hacer el primer Deploy los archivos no se exportan a la carpeta public. Si esto llegara a ocurrir solo tienes que hacer un commit más en tu proyecto en Github y volver a Cpanel para ejecutar las acciones "Update From Remote" y "Deploy Head Commit". Debería solucionarse el problema.

Debes tener en cuenta que por defecto se esta mostrando la rama master por lo que las otras ramas que uses en tu repositorio en github no se mostraran. Si quieres que se muestren los archivos de una rama especifica entra a Dashboard > Git Version Control > Administrar > Checked-Out Branch