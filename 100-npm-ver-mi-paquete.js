
//  MODULO: cualquier archivo o directorio que esta en el directorio:
//   node_modules
//          que puede ser importado con require().

//  PAQUETE: un módulo (file or dir) descrito por un archivo:
//  package.json

//  Para poder incluir un módulo con require(), deber ser:
//  un .js
//  una carpeta con archivo package.json que contiene una propiedad "main"

//  DEPENDENCIA: es un paquete que otro paquete necesita para funcionar

// para instalar el npm:
       npm init
//  esto crea el package.json
//
//
// para instalar paquetes
       npm install <pkg -nombre del paquete->

//  para instalarlo con los valores por defecto:
       npm init --yes
//
//  si quiero instalar express:
//   npm install express <otropkg>  <otropkg>

//  la carpeta   PACKAGE.LOCK.JSON:
//  muestra la historia de instalaciones y modificaciones.
//  Se genera automáticamente cuando npm modifica
//  el árbol de node_modules o package.json
//  Describe el árbol generado para que futuras instalaciones
//  puedan generar el mismo árbol.  Otros desarrolladores pueden
//  usar el mismo paquete

// para ver lo que está instalado:
"dependencies": {
    "express": "^4.19.2"
  }


//   Para desinstalar, por ejemplo express:
    npm  uninstall  express

// Para instalar una versión en particular de algo
    npm install express@4.15.1

// Para guardarla como parte del desarrollo
    npm install express --save-dev
// en el package.json, aparecerá en la categoria de DevDependencies
    "devDependencies": {
      "express": "^4.19.2"
  }