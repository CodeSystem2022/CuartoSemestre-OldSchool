


class Persona{
    
    static contadorPersonas = 10; //Atributo estatico
    //email = 'Valor default email';


    static get MAX_OBJ() { //Este metodo simula una constante
        return 5;
    }
    
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el maximo de objetos permitidos');
        }
        //console.log('Se incrementa el contador:'+Persona.contadorObjetosPersonas); 
    }


    get nombre(){
        return this._nombre;
    }


    set nombre(nombre){
        this._nombre = nombre;




    }

    get apellido(){
        return this._apellido;

    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este metodo static');

    }

    static saludar2(persona){
        console.log(persona.nombre+''+persona.apellido);
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }


    get departamento(){
        return this._departamento;
    }
    
    set departamento(departamento){
        this._departamento = departamento;
    }
    //SobreEscritura
    nombreCompleto(){
        return this._nombre+','+this._apellido+','+this._departamento;
    }
}




    let persona1 = new Persona('Yair', 'Mathez');
    console.log(persona1.nombre);
    persona1.nombre = 'Robertones';
    console.log(persona1.nombre);


    let persona2 = new Persona('Farid', 'Mathez');
    console.log(persona2.nombre);
    persona2.nombre = 'Tito';
    console.log(persona2.nombre);

    let persona3 = new Persona('Carla', 'Ricciardo');

    let persona4 = new Persona('Carla', 'Lara');
    console.log(persona3.toString());
    console.log(Persona.contadorPersonas);
    

    let empleado1 = new Empleado ('Juanca', 'Richard', 'Sistemas');
    console.log(empleado1);
    console.log(empleado1.nombreCompleto());

   // Object.prototype.toString manera de acceder a tributos de manera dinamica
   console.log(empleado1.toString());

  // persona1.saludar(); no se utiliza desde el objeto. Si se utiliza desde la clase
  Persona.saludar();
  Persona.saludar2(persona1);

  Empleado.saludar();
  Empleado.saludar2(empleado1);

 // console.log(persona1.contadorObjetosPersonas);
 console.log(Persona.contadorObjetosPersonas);
 console.log(Empleado.contadorObjetosPersonas);0  
 //Console.log(Persona.email)
// console.log(persona1.email);
 console.log(empleado1.toString());
 console.log(persona2.toString());
 console.log(empleado1.toString());
 console.log(Persona.contadorPersonas);
 console.log(Persona.MAX_OBJ);


 let persona5 = new Persona('Franco', 'Diaz');
 console.log(persona5.toString());
 let persona6 = new Persona('Liliana', 'Duos');
 console.log(persona6.toString()); 
 
