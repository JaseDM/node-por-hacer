


const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');


const comando = argv._[0];



switch (comando) {
    case 'crear':
        let nuevaTarea = crear(argv.descripcion);
        
        break;
    case 'listar':
        
        let tareas = getListado();
        for (const tarea of tareas) {
            console.log('============================='.america);
            console.log(`Tarea: ${tarea.descripcion}`.underline.brightGreen);
            console.log(`Completado: ${tarea.completado}`.underline.brightGreen);
            console.log('============================='.america);
            

            
        }
        
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        

        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log(`El comando ${comando} no es valido` );
        break;
}
 
