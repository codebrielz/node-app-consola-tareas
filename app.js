// Importaciones de terceros
require('colors');

// Importaciones nuestras
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis, 
    siete, } = require('./types/types');

const main = async() => {
    let opt;
    // do while crea un bucle infinito hasta que la condicion se cumpla.
    const tareas = new Tareas();
    do {
        console.clear();
        opt = await inquirerMenu();
        switch (opt) {
            case uno:
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case dos:
                console.log(tareas._listado);
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
}

main();





