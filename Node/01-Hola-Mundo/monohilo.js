console.log('Hola a toda la cohoerte 2022');

var i = 0;
setInterval(function(){
    console.log('Muestre el iterador');
    i++;


    if(i === 5){
        console.log('Forzamos un error');
        var a = 3 + z;
    }
}, 1000);
console.log('Segunda instruccion');