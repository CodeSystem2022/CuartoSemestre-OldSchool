miFuncion(8, 2);// Le pasamos otro argumento a nuestra funcion (Hosting)

function miFuncion(a, b){
    //console.log("Sumamos: "+a+" "+b);
    return a + b;
}
//llamamos la funcion
miFuncion(5, 4);


let resultado = miFuncion(1, 2);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonima
let x = function(a, b){ return a + b; };//Necesita cierre con punto y coma
resultado = x(5 , 6);
console.log(resultado);
(function(a, b){
    console.log('Ejecutando la funciom: ' +( a + b));

})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){ return
    console.log(arguments.length);

}

miFuncionDos(5, 7, 3, 4, 5, 6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);
console.log(resultado);

let sumar = function (a = 4, b = 8){
    console.log(arguments[0]);//Muestra el parametro de a
    console.log(arguments[1]); //Muestra el parametro de b 
    console.log(arguments[2]);
    return a + b;
}
resultado = sumar(3, 5);
console.log(resultado);

let respuesta = sumarTodo (5, 4, 13, 19, 10, 9)
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


// Tipos primitivos
let k = 10;
function cambiarValor(k){ // Paso por valor 
    k = 20;
}

cambiarValor(k);
console.log(k);
//Paso Por Referencia
const persona = {
    nombre: 'Juan',
    apellido:'Lepez',
    
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.apellido = 'Perez';
    p1.nombre = 'Roberto';
    console.log(p1);
}
cambiarValorObjeto(persona);
console.log(persona); 
