class Persona{

    static contadorPersonas = 0;

    constructor(nombre, appellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = appellido;
        this._edad = edad;
    }



    get _idPersona(){
        return this._idPersona;
    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido

    }

    get edad(){
        return this._edad;
   
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this._idPersona+' '+this._nombre+' '+this._apellido+' '+this._edad;
    }

}



