// LA PALABRA ASYNC NO ES NECESARIA EN LAS FUCNIONES POR QUE YA SON ASINCRONICAS 
//IGUAL PROYECTAN UNA SINCRONIA VISUAL
async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola' + nombre);
            resolve(nombre);

        }, 1000);        
        });
}


async function hablar(nombre) {
    return new Promise((resolve, reject) =>{ //Usamos la sintaxsis ES6
        setTimeout(function () {
            console.log('hola');
           // resolve(nombre);
           reject('Hay un error');
        }, 1000);

    });
   

}


async function adios(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function () {
            console.log('Adios' + nombre);
            resolve();
    }, 1000);
   
    });
}

//await hola('Yair');}

async function main(){
    await hola('Yair');
    await hablar('Yair');
    await adios('Yair');
}
console.log('Empezamos el proceso...');
main();
console.log ('Esta va a ser la segunda instruccion...');