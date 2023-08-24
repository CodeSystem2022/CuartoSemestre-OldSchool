from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion
from capa_datos_persona.cursor_del_pool import CursorDelPool
from logger_base import log


class PersonaDAO:
    """
    DAO SIGINIFA DATA ACCES OBJECT
    CRUD SIGNIFCA:
    cREATE = iNSERTAR
    READ = SELECCIONAR
    UPDATE = ACTUALIZAR
    DELETE = ELIMINAR
    """

    _SELECCIONAR = 'SELECE * FROM persona PRDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'

    # Definimos los metodos de clase
    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []
            for registro in registros:
                persona = Persona(registro[0], registro[1], registro[2], registro[3])
                personas.append(persona)
            return personas

    @classmethod
    def insertar(cls, persona):
        with CursorDelPool as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona Insertada:{persona}')
            return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with CursorDelPool as cursor:
            valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f'Persona Actualizada: {persona}')
            return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with CursorDelPool as cursor:
            valores = (persona.id_persona,)
            cursor.execute(cls._ELIMINAR, valores)
            log.debug(f'Los objetos eliminados son: {persona}')
            return cursor.rowcount


if __name__ == '__main__':
    # Eliminar un registro
    persona1 = Persona(id_persona=5)
    personas_eliminadas = PersonaDAO.eliminar(persona1)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')

    # Actualizar un registro
    persona1 = Persona(1, 'Juan Jose', 'Pena', 'jjpena@gmail.com')
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas Actualizadas: {personas_actualizadas}')
    log.debug(f'Personas Actualizadas: {personas_actualizadas}')

    # Insertar un registro
    persona1 = Persona(nombre='Roberto', apellido='GARDEL', email='ricar@gmail.com')
    personas_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f'Personas Insertadas: {personas_insertadas}')

# Seleccionar un objeto
personas = PersonaDAO.seleccionar()
for persona in personas:
    log.debug(persona)
