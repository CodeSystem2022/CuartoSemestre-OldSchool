package presentacion;

import datos.EstudianteDAO;
import dominio.Estudiante;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in);
        //Se crea una instancia de la clase servicio, esto lo hacemos fuera del ciclo
        var estudianteDao = new EstudianteDAO(); //Esta instancia debe hacerse una vez
        while (!salir){
            try{
                mostrarMenu();//Este sera el metodo ejecutarOpciones que devolvera un booleano
                salir = ejecutarOpciones(consola, estudianteDao); //Este arroja una exception
            } catch (Exception e){
                System.out.println("Ocurrio un error al ejectura la operacion: "+e.getMessage());
            }
        }//FIN WHILE
    }//FIN MAIN

    private static void mostrarMenu(){
        System.out.println("""
                *** SISTEMA DE ESTUDIANTES ***
                1. Listar Estudiantes
                2. Buscar Estudiantes
                3. Agregar Estudiantes
                4. Modificar Estudiantes
                5. Eliminar Estudiantes
                6. Salir
                """);
    }//FIN METODO MOSTRAR MENU

    //Metodo para ejecutar las opciones, va aregresar un booleano ya que es el que puede modificar la variable salir.
    private  static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> { //LISTAR
                System.out.println("Listado de Estudiantes...");
                var estudiantes = estudianteDAO.listarEstudiantes();
                //AQUI ITERAMOS CADA OBJETO
                estudiantes.forEach(System.out::println);
            } //FIN 1
            case 2 -> { //BUSCADOR X ID
                System.out.println("Introduce el id: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if (encontrado)
                    System.out.println("Estudiante encontrado: "+estudiante);
                else
                    System.out.println("Estudiante No encontrado: "+estudiante);
            }//FIN 2
            case 3 -> { //AGREGAR
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //Crear objeto estudiante sin id
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if (agregado)
                    System.out.println("Estudiante agregado: " +estudiante);
                else
                    System.out.println("Estudiante NO agregado: "+estudiante);
            }//FIN 3
            case 4 -> { //MODIFICAR
                System.out.println("Modificar estuduiante: ");
                //Primero especificar cual es el id del objeto a modificar
                System.out.println("Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //Crea el objeto estudiante a modificar
                var estudiante = new Estudiante(idEstudiante, nombre, apellido, telefono, email);
                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if (modificado)
                    System.out.println("Estudiante modificado: "+estudiante);
                else
                    System.out.println("Estudiante no mofidicado: "+estudiante);
            }//FIN 4
            case 5 -> {//ELIMINAR
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if (eliminado)
                    System.out.println("Estudiante eliminado: "+estudiante);
                else
                    System.out.println("Estudiante NO eliminado "+estudiante);
            }//FIN 5
            case 6 -> { //SALIR
                System.out.println("Hasta pronto!!");
                salir = true;
            }//FIN 6
        }//FIN SWITCH
        return salir;
    }
}//FIN CLASE
