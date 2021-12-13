# FOLDER MODELS
#### Será el encargado de contener las clases encargadas de trabajar la logica de mi negocio.

* /models/tarea.js

```
class Tarea {

}

module.exports = Tarea;
```

* Vamos a trabajar las clases como en muchos otros lenguajes de programación, asi tambien tenemos una buena practica general. 
* Una buena practica es definir las variables dentro de la propia clase y despues definir el constructor
* El constructor es lo que se va a ejecutar cuando creemos una nueva instancia de nuestra tarea
* Todas las tareas tendrían que tener un identificador unico y una descripcion
* En el constructor voy a pedir solamente la descripcion de la tarea
* this. hace referencia a la instancia de la clase que se esté utilizando y será igual a la descripcion que recibamos como argumento a la hora de crear nuestra instancia de Tarea.
```
class Tarea {
    // Definimos variables 
    id = '';
    desc = '';
    completadoEn = null;

    // Creamos constructor
    constructor(desc){
        this.desc = desc;
    }
}
```

#### Para generar un id unico vamos a utilizar un paquete llamado uuid
```
path: https://www.npmjs.com/package/uuid
install: npm install uuid
```

### La forma para manejar UNA TAREA es como vemos en la siguiente estructura:
```
const {v4: uuidv4} = require('uuid');

class Tarea {
    id='';
    desc='';
    completadoEn=null;
    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn=null;
    }
}

module.exports = Tarea;
```

### Si queremos manejar VARIAS tareas, tenemos que hacer lo siguiente:
* Creamos un nuevo archivo llamado tareas.js
* Creamos una clase dentro de tareas.js
```
class Tareas {

}

module.exports = Tareas;
```
* Voy a crear un objeto que contenga el listado de mis tareas y en el constructor solamente lo voy a inicializar.
```
class Tareas {
    _listado = {};
    
    constructor(){
        this._listado = {};
    }

}

module.exports = Tareas;
```
#### Así como está nuestra logica tenemos todo lo que nosotros utilizamos por el momento, faltan crear metodos para insertar, actualizar, listar...
#### Vamos a probar nuestra clase
* Vamos a app.js
* Nos creamos una nueva tarea
```
const Tarea = require('./models/tarea');

do{
    ...
const tarea = new Tarea('Comprar comida');
        console.log(tarea);
    ...
}while(opt !== '6 Salir')
```
* Una vez probado, borramos el codigo e importamos el archivo de tareas.js
```
const Tareas = require('./models/tareas');
```
# CREAR TAREAS Y LISTAR
### Vamos a nuestro app.js y vamos a comenzar con la logica
* Comenzamos creando la instancia de nuestras tareas por fuera de nuestro do/while, ya que do/while es un bucle infinito y así evitamos que se vayan creando nuevas instancias en cada loop del bucle.
```
    const Tareas = require('./models/tareas');
    const main = async() => {
    const tareas = new Tareas();
    ...
    }
```
* Nos dirigimos a nuestro archivo de tareas.js y vamos a crear un metodo que será el encargado de crear nuestra tarea en nuestra clase.
* Para crear el metodo que va a crear nuestra tarea, tenemos que crear una instancia de nuestra clase Tarea(), y está clase nos pide una descripcion, le mandamos la descripcion que recibimos como argumento
```
const Tarea = require("./tarea");

crearTarea( desc = '' ){
    const tarea = new Tarea();
} 
```
* Entonces ahora quiero almacenarlo en mi objeto _listado, y para eso tenemos que hacer referencia a una propiedad del objeto, y para eso tenemos que ponerlo entre llaves cuadradas.
+ EJEMPLO, así es como se haría normalmente:
```
_listado = {
    'abc': 123
}
constructor(){
    this._listado = {};
}

crearTarea(desc=''){
    const tarea = new Tarea(desc)
    this._listado.abc = tarea 
}

```
* Obtenemos la propiedad de nuestra tarea y la pasamos al objeto _listado:
```
_listado = {}
constructor(){
    this._listado = {};
}

crearTarea(desc=''){
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea //[tarea.id es generado por nuestro uuid]
}
```
### Para listar las tareas o hacer las opciones, vamos a dirigirnos a app.js y vamos a trabajar con la opcion seleccionada y para eso vamos a utilizar un Switch, para manejar los casos de cada opcion.
```
    do {
        console.clear();
        opt = await inquirerMenu();
        switch (opt) {
            case uno:
                break;
            case dos:
                break;
            case tres:
                break;
            case cuatro:
                break;
            case cinco:
                break;
            case seis:
                break;
            case siete:
                break;
            default:
                break;
        }
        if(opt !== '6 Salir') await pausa();
   } while (opt !== '6 Salir');
```

* Para crear la opcion, tenemos que preguntar al usuario por el valor de su tarea que quiere agregar a la lista de tareas, para eso tenemos que utilizar nuevamente el inquirer
* Como es logico, yo voy a necesitar mostrarle prompts para obtener el valor.
* Entonces vamos a crear un metodo que me sirva a mi para mandar el argumento de lo que quiero imprimir y que me regrese el valor.
* Nos dirigimos a inquirer.js
* Nos creamos una nueva funcion que se llame: leerInput():
```
const leerInput = async(mensaje) => {
    const question = [
        {
            type: 'input',
            name:'desc',
            message:mensaje,
            // Validar que me envie un valor por obligación a mi input
            validate(value){
                if(value.length === 0) return 'Por favor ingrese un valor'
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = { inquirerMenu, pausa, leerInput };
```

* Vamos a utilizar nuestro leerInput(mensaje: any) en nuestro archivo principal app.js
* Para guardar las tareas en mi objeto listado tengo que llamar a mi metodo crearTarea mandandole la tarea que acabo de crear:
```
            case uno:
                const desc = await leerInput('Descripción: '); // Sale el mensaje Descripción: y seguidamente nuestro prompt que hemos creado.
                tareas.crearTarea(desc);
                break;
            case dos:
                console.log(tareas._listado); //Mostramos tareas listadas
                break;
```

