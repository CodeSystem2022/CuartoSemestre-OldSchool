import logging

from capa_datos_persona.Usuario import Usuario
from capa_datos_persona.cursor_del_pool import CursorDelPool
from logger_base import log


class UsuarioDao:
    '''
    DAO -> Data Access Object Para la tabla de usuario
    CRUD -> Create - Read - Update - Delete
    '''

    _SELECT = 'SELECT * FROM usuario ORDER BY id_usuario'
    _INSERTAR = 'INSERT INTO usuario(username,password) VALUE(%s,%s)'
    -ACTUALIZAR = 'UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s'
    _ELIMINAR = 'DELETE FROM usuario WHERE id_usuario=%s'

    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            logging.debug('Seleccionando usuarios')
            cursor.execute(cls._SELECT)
            registros = cursor.fetchall()
            usuarios = []
            for registro in registros:
                usuario = Usuario(registro[0], registro[1], registro[2])
                usuarios.append(usuario)
                return usuarios

    @classmethod
    def insertar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a insertar: {usuario}')
            valores = (usuario.username, usuario.password)
            cursor.execute(cls._INSERTAR, valores)
            return cursor.rowcount

    @classmethod
    def actualizar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a actualizar: {usuario}')
            valores = (usuario.username, usuario.password, usuario.id_usuario)
            return cursor.rowcount

    @classmethod
    def eliminar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a eliminar: {usuario}')
            valores = (usuario.id_usuario,)
            cursor.execute(cls._ELIMINAR, valores)
            return cursor.rowcount


if __name__ == '__main__':
    # Eliminar Usuario
    usuario = Usuario(id_usuario=3)
    usuario_eliminado = UsuarioDao.eliminar(usuario)
    log.debug(f'Usuario Eliminado: {usuario_eliminado}')

    # Actualizar usuario
    usuario = Usuario(id_usuario=1, username='', password='369')
    usuario_modificado = UsuarioDao.actualizar(usuario)
    log.debug(f'Usuario modificado: {usuario_modificado}')

    # Insertar Usuario
    usuario = Usuario(username='kely', password='321')
    usuario_insertado = UsuarioDao.insertar(usuario)
    log.debug(f'Usuario Insertado: {usuario_insertado}')

    # Listar o Seleccionar
    usuarios = UsuarioDao.seleccionar()
    for usuario in usuarios:
        log.debug(usuario)