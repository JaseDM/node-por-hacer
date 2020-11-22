
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente las tareas',
    type: 'boolean'
}



const argv = require('yargs')
                .command('crear', 'Crea una nueva tarea', {
                    descripcion
                })
                .command('actualizar', 'Crea una nueva tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Elimina una tarea de la base de datos', {
                    descripcion
                })
                .command('listar', 'Crea una nueva tarea')
                .help()
                .argv;





module.exports = {
    argv
}