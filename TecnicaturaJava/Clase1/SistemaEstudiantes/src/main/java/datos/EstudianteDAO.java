package datos;

import dominio.Estudiante;

import static conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    //METODO LISTAR
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos ahora algunos objetos que son necesarios para comunicarnos con la base de datos
        PreparedStatement ps; //ENVIA LAS SENTENCIAS (QUERYS)
        ResultSet rs; //OBTENEMOS EL RESULTADO DE LA BASE DE DATOS (EJECUCION O INFORMACION QUE DEVOLVERIA LA BASE)
        //Creamos un objeto de tipo conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                estudiantes.add(estudiante);
            }
        } catch (Exception e){
            System.out.println("Ocurrio un error al seleccionar datos"+e.getMessage());
        }
        finally {
            try{
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion"+e.getMessage());
            }
        }
        return estudiantes;
    } //Fin metodo listar

    //Metodo por id -> fin by id

    public boolean buscarEstudiantePorId(Estudiante estudiante) {
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //SE ENCONTRO UN REGISTRO CON ESE ID
            } //Fin if
        } catch (Exception e){
            System.out.println("Ocurrio un error al buscar estudiante: "+e.getMessage());
        }// FIN CATCH
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la Conexion: "+e.getMessage());
            }//FIN CATCH
        } //FIN FINALLY
        return false;
    }//FIN METODO buscarEstudiantePorId

    //METODO AGREGAR UN ESTUDIANTE
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES(?, ?, ?, ?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;

        } catch(Exception e){
            System.out.println("Ocurrio un error al agregar un estudiante: "+e.getMessage());
        }//FIN CATCH
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexion: "+e.getMessage());
            }//FIN CATCH
        }//FIN FINALLY
        return false;
    }//FIN METODO agregarEstudiante

    //METODO PARA MODIFICAR ESTUDIANTE

    public boolean modificarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2022 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Error al modificar estudiante: " + e.getMessage());
        }//Fin CATCH
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Hubo un error al cerrar la conexion: "+ e.getMessage());
            } //FIN CATCH
        }//FIN FINALLY
        return false;
    }//FIN METODO modificarEstudiante

    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2022 WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Error al eliminar estudiante: "+e.getMessage());
        }
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Error al cerrar la conexion: "+e.getMessage());
            }
        }
        return false;
    }


    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();
        //MODIFICAR ESTUDIANTE
        var estudianteModificado = new Estudiante(1, "Sebastian", "Juarez", "1321235485", "sebas@gmail.com");
        var modificado = estudianteDao.modificarEstudiante(estudianteModificado);
        if(modificado)
            System.out.println("Estudiante modificado: "+estudianteModificado);
        else
            System.out.println("No se modifico el estudiante: "+estudianteModificado);

        //LISTAR LOS ESTUDIANTES
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); //FUNCIOON LAMBDA PARA IMPRIMIR

        //AGREGAR ESTUDIANTE

        /*
        var nuevoEstudiante = new Estudiante("Carlos","Lara", "3192391283", "carlos@gmail.com");
        var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        if(agregado)
            System.out.println("Estudiante agregado: "+nuevoEstudiante);
        else
            System.out.println("No se ha agregado estudiante: "+nuevoEstudiante);
        */

        //ELIMINAR ESTUDIANTE
        var estudianteEliminar = new Estudiante(3);
        var eliminado = estudianteDao.eliminarEstudiante(estudianteEliminar);
        if(eliminado)
            System.out.println("Estudiante eliminado: "+estudianteEliminar);
        else
            System.out.println("No se elimino estudiante: "+estudianteEliminar);

        //Buscar por id
        var estudiante1 = new Estudiante(1);
        System.out.println("Estudiantes antes de la busqueda"+estudiante1);
        var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        if(encontrado)
            System.out.println("Estudiante encontrado"+estudiante1);
        else
            System.out.println("No se encontro el estudiante"+estudiante1.getIdEstudiante());
    }
}



