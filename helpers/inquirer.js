const inquirer = require('inquirer');
const opciones = require('../data/opciones');
require('colors');

const menuOpts = [
    {
        type:'list',
        name:'opcion',
        message: '¿Que desea hacer?',
        choices: opciones.map((option,i)=>{
            return `${i} ${option.name}`
        })
    }
]
const inquirerMenu = async() => {
        console.log('====================='.yellow);
        console.log('Seleccione una opcion'.blue);
        console.log('=====================\n'.yellow);

        const {opcion} = await inquirer.prompt(menuOpts);
        
        return opcion;
}

const pausa = async() =>{
    // Creamos el objeto que contendrá el input para poder realizar la pausa de mi aplicación
    const question = [
        {
            type:'input',
            name:'enter',
            message: `\nPresione ${'ENTER'.white} para continuar`
        }
    ];
    await inquirer.prompt(question); //Útilizamos inquirer.prompt para realizar la pregunta
}

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