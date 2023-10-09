# help(str.join)

tupla_str = ('Hola', 'Mundo', 'Tecnicatura Alumnos')
mensaje = ' '.join(tupla_str)
print(f'Mnesaje: {mensaje}')

lista_cursos = ['Java', 'Python', 'Angular', 'Spring']
mensaje = ','.join(lista_cursos)
print(f'Mensaje: {mensaje}')

cadena = 'Hola mundo'
mensaje = '.'.join(cadena)
print(f'Mensaje: {mensaje}')

diccionario = {'nombre': 'Juan', 'Apellido': 'Perez', 'edad': '18'}
llaves = '-'.join(diccionario)
valores = '-'.join(diccionario.values())
print(f'Llaves: {llaves}, Type: {type(llaves)}')
print(f'Valores: {valores}, Type: {type(valores)}')