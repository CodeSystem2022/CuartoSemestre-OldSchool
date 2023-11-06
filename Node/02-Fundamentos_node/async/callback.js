
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola'+nombre);
        miCallback(nombre);

    }, 1000);

}
function adios(nombre, otroCallBack) {
    setTimeout(function () {
        console.log('Adios'+nombre);
        otroCallBack();
        
},1000);
}


console.log('Iniciando el proceso...');
hola('Yair',function(nombre) {
    adios(nombre,function(){

    console.log('Terminando el proceso...');

});
});

hola('Yair',function(){});
adios('Yair',function(){});
