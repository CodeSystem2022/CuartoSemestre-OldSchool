
function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola' + nombre);
            resolve(nombre);

        }, 1000);        
        });
}


function hablar(nombre) {
    return new Promise((resolve, reject) =>{ //Usamos la sintaxsis ES6
        setTimeout(function () {
            console.log('hola');
           // resolve(nombre);
           reject('Hay un error');
        }, 1000);

    });
   

}


function adios(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function () {
            console.log('Adios' + nombre);
            resolve();
    }, 1000);
   
    });
}

//Llamamos a la funcion
console.log('Empezamos el proceso');
hola('Yair')
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)

    .then((nombre) => {
        console.log('Terminamos el proceso');
    })
    .catch(error => {
        console.log('Hubo un error: ');
        console.log(error);

    })
