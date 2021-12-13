# READLINE
#### Readline es propio de node y sirve para crear una interfaz de usuario, es decir, poder interactuar con el mismo, esto quiere decir, que nosotros podremos recibir la informacion por parte del usuario
```
const readline = require('readline').createInterface({
    input: process.stdin, // Esto pausa mi aplicación hasta recibir informacion
    output: process.stdout, // Esto es para mostrarle algun mensaje cuando yo le estoy pidiendo algo al usuario
})
```
* Entonces vamos a preguntarle algo al usuario de la siguiente manera.
```
readline.question('Seleccione una opcion: ', (opt) => { //recibo un callback de la opcion seleccionada
    console.log({opt});
    readline.close(); // Una vez seleccione una opcion, readline deja de ejecutarse (Si no lo indicamos se queda en bucle infinitamente)
}) 
```