class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return `idProducto : ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}//Fin de la clase producto


class Orden{
    static contadorOrdenes = 0;
    static getMAX_PRODUCTOS(){
        return 5;
    }


    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.getMAX_PRODUCTOS()){
            this._productos.push(producto); // Tenemos 2 tipos de sintaxis: 1
            //this.producto[this._contadorProductosAgregados++] = producto; // segunda sintaxis: 2
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }// Fin del metodo agregar producto


    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta+=producto.precio;
        }//Fin ciclo for
        return totalVenta;
    }//Fin del metodo calcularTotal

    mostrarOrden(){
        let productoOrden = '';
        for (let producto of this._productos){
            productoOrden+='\n{'+producto.toString()+'}';
    }
    console.log(`Orden: ${this._idOrden}, Total:$${this.calcularTotal()}, Productos:${productoOrden}`);
}
}// Fin de la clase Orden



let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 400);
let producto3 = new Producto('Cinturon',600);
let producto4 = new Producto('Remera',780);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
orden2.mostrarOrden();
