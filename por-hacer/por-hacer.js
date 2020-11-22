

const fs = require('fs');
let listadoPorHacer = [];
 

const guardarDatos = (  ) => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, function (err) {
        if (err) throw new Error('No se pudo guardar', err)
        console.log('Tarea guardada correctamente');
    });
}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];    
    }

    

    
    
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDatos();

    return porHacer;

}

const actualizar = (descripcion, completado) => {
    
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDatos();
        return true;
    }else{
        console.log('No ha traido nada');
        return false;
    }
    

}

const borrar = ( descripcion ) => {
    
    cargarDB();
    
    let nuevoListado = listadoPorHacer.filter( filtro => filtro.descripcion != descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDatos();
        return true;
    }
    


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}