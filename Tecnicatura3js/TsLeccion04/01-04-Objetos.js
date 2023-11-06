let x = 10;// Variable de tipo primitiva
console.log (x.length);

//Objeto
let persona = {
    nombre: 'Yair',
    apellido: 'Mathez',
    email: 'mathezyair@gmail.com',
    edad : '28',
    idioma: 'ES',
    
    
    nombreCompleto:function(){
        return this.nombre+' '+this.apellido;

    },
    get nombreEdad(){
        return this.nombre+' edad:'+this.edad;

    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
}

    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.email);
    console.log(persona.edad);
    console.log(persona.nombreCompleto());

    let persona2 = new Object(); //Debe crear un nuevo objeto en memmoria
    persona2.nombre = 'Matias';
    persona2.direccion ='Richarlison';
    persona2.email ='richard@gmail.com';
    console.log(persona2.email);
    
    
    console.log(persona['apellido']);
    
    // for in

    for(propiedad in persona){
        console.log(propiedad);
        console.log(persona[propiedad]);


    }

    persona.apellido = 'Mathez'; //Cambiamos dinamicamente un valor del objeto
    console.log(persona);
    // Disitintas formas de imprimir un objeto
    //Numero 1
    console.log('distintas formas de imprimir un objeto: forma 1');
    console.log(persona.nombre+' '+persona.apellido);

    //Numero 2: A traves del ciclo for in
    console.log('distintas formas de imprimir un objeto: forma 2');
    for(nombrePropiedad in persona){
        console.log(persona[nombrePropiedad]);

    } 

    //Numero 3: La funcion Object.values()
    console.log('distintas formas de imprimir un objeto: forma 3');
    let personaArray = Object.values(persona);
    console.log(personaArray);
    
    //Numero 4 : Utilizaremos el metodo JSON.stringify
    console.log('distintas formas de imprimir un objeto: forma 4');
    let personaString = JSON.stringify(persona);
    console.log(personaString);

    console.log('Comenzamos a ultilizar el metodo get');
    console.log(persona.nombreEdad);
    console.log('Comenzammos a utilizar el metodo get para idiomas');
    persona.lang = 'en';
    console.log(persona.lang);

    function Persona3(nombre , apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nombreCompleto = function(){
            return this.nombre+' '+this.apellido;

        }
    }
    let padre = new Persona3('Yair', 'Mathez', 'yair@gmail.com');
    padre.nombre ='Ricardo'
    padre.telefono = '54212365432';
    console.log(padre);
    console.log(padre.nombreCompleto());
    
    let madre = new Persona3('Laura', 'Mathez','yair@gmail.com');
    console.log(madre);
    console.log(madre.telefono);
    console.log(madre.nombreCompleto());

    let miObjeto = new Object(); //Esta es una opcion formal

    let miObjeto2 = {};

    let miCadena1 = new String('Hola')

    let miCadena2 = 'Hola';

    let miNumero = new Number(1);

    let miNumero2 = 1;

    let miBoolean1 = new Boolean(false);

    let miBoolean2 = false;

    let miArreglo1 = new Array();

    let miArreglo2 = [];


    let miFuncion1 = new function(){};

    let miFuncion2 = new function(){};

    //Uso de prototype
    Persona3.prototype.telefono = '2604584356';
    console.log(padre);
    console.log(madre.telefono);
    console.log (madre.telefono);'2604591803';

    //Uso de call
    let persona4 = {
        nombre: 'Ricardo',
        apellido: 'lopez',
        nombreCompleto2: function(titulo, telefono){
            return this.nombre+' '+this.apellido+ ''+telefono;
          // return this.nombre+' '+this.apellido;

        }
}
    let persona5 = {
        nombre: 'Ruben',
        apellido: 'Lara',
}

    console.log(persona4.nombreCompleto2('Lic.','5401457852132'));
    console.log(persona4.nombreCompleto2.call(persona5,'Ing.', '542677424855'));


    //Metodo Apply
    let arreglo = ['Ing.', '54267851231'];
    console.log(persona4.nombreCompleto2.apply(persona5,arreglo));
    







