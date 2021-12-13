# INQUIRER MENU DE CONSOLA INTERACTIVO
#### Inquirer nos ayuda a crear un menu interactivo más amistoso por parte del usuario
* Manejar el menu con flechas direccionales
* Seleccionar la opcion con el numero de la opcion indicado
* Cambiar de menú dependiendo de la respuesta del usuario
* Cambiar opcion dependiendo del estado de la misma

#### Antes que nada vamos a instalar inquirer
```
repo: https://www.npmjs.com/package/inquirer
install: npm install inquirer
```
* Creamos un nuevo file llamado helpers/inquirer.js
* Importamos inquirer
```
const inquirer = require('inquirer');
```

* Entonces vamos a crear la interfaz del menu, copiamos y pegamos algunos codigos ya creados de nuestro anterior menu
```
const inquirerMenu = async() => {
        console.log('====================='.yellow);
        console.log('Seleccione una opcion'.blue);
        console.log('=====================\n'.yellow);
}
```

* Para realizar una pregunta con inquirer, utilizamos el metodo .prompt([{}])
* Vamos a crearnos las preguntas fuera de nuestra funcion inquirerMenu
```
const menuOpts = [
    {
        type:'list',
        name:'opcion',
        message: '¿Que desea hacer?',
        choices: ['opt1','opt2','opt3','opt4','opt5','opt6']
    }
]
const inquirerMenu = async() => {
        console.log('====================='.yellow);
        console.log('Seleccione una opcion'.blue);
        console.log('=====================\n'.yellow);

        const opt = await inquirer.prompt(menuOpts);
        return opt;
}
```
* Entonces vamos a importarlo en nuestro app.js