
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola' + nombre);
        miCallback(nombre);

    }, 1000);



}


function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('hola');
        callbackHablar();
    }, 1000);

}


function adios(nombre, otroCallBack) {
    setTimeout(function () {
        console.log('Adios' + nombre);
        otroCallBack();

    }, 1000);
}


//Funcion recursiva
function conversacion(nombre, veces, callBack){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callBack);

    })
    
    } else{
        callBack(nombre,callBack);
    }
}  


//--Proceso principal

console.log('Iniciando el proceso...');
hola('Yair',function(nombre){
    conversacion(nombre, 4, function (){
        console.log("Terminando el proceso");
    });
});
    //adios(nombre,function(){
      //  console.log('Terminamos');
    //});
//});
//hola('Yair', function (nombre) {
  //  hablar(function () {
    //    hablar(function () {
      //      hablar(function () {
        //        adios(nombre, function () {
          //          console.log('Terminando el proceso...');
            //    });
            //});






       // });


    //});
//});

hola('Yair', function () { });
adios('Yair', function () { });
