# Bool contiene los valores de True y  False
# Los tipos numeros, es false para el 0 , true para los demas valores

valor = 0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 10
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Tipo string -> False '', True demas valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Tipo colecciones -> False para colecciones vacias
# Tipo colecciones -> True para todas las demas
# Lista
valor = []
resultado = bool(valor)
print(f'valor de una lista vacia: {valor}, Resultado: {resultado}')

valor = [2, 3, 4]
resultado = bool(valor)
print(f'valor de una lista con elementos: {valor}, Resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = (1, 2, 3, 4)
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacio: {valor}, Resultado: {resultado}')

valor = {'Nombre': 'Yair', 'Apellido': 'Mathez'}
resultado = bool(valor)
print(f'El valor de un diccionario con elementos : {valor}, Resultado:{resultado}')

# Sentencias de control con bool
if '':
    print('Regresa verdadero')
else:
    print('Regresa Falso')

#Ciclos
variable = 5 
while variable:
    print('Regresa Verdadero')
    break
else:
    print('Regresa falso')