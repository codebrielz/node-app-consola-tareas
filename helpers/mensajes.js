require('colors');

const opciones = require('../data/opciones');

const mostrarMenu = () => {
    return new Promise ( resolve => {
        console.log('====================='.yellow);
        console.log('Seleccione una opcion'.blue);
        console.log('=====================\n'.yellow);
        // opciones.filter((option) => {
        //     return console.log(`${option.value}. ${option.name}`);
        // })
        opciones.map((option,i)=>{
            return console.log(`${i}. ${option.name.green}`);
        })
        const readline = require('readline').createInterface({
            input: process.stdin, //esto pausa mi aplicación hasta recibir informacion
            output: process.stdout, // Esto es para mostrarle algun mensaje cuando yo le estoy pidiendo algo al usuario
        })
    
        readline.question('Seleccione una opcion: ', (opt) => { //recibo un callback de la opcion seleccionada
            readline.close(); // Una vez seleccione una opcion, readline deja de ejecutarse (Si no lo indicamos se queda en bucle infinitamente)
            resolve(opt); //Recibo respuesta del usuario con resolve
        }) 
    })

}

const pausa = () => {
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })
    
        readline.question(`\nPresione ${'ENTER'.white} para continuar`, (opt) => { 
            readline.close();
            resolve(); //Recibo el ENTER del usuario
        }) 
    })
}

module.exports = {mostrarMenu, pausa};