# Le damos formato a una cadena (String)
nombre = 'Yair'
edad = 28
direccion = 'los pampanos 322'
mensaje_con_formato = 'Mi nombre es %s y tengo %d años vivo en %s' % (nombre, edad, direccion)

# Vamos a crear una tupla
persona = ('Nabila', 'Mathez', 60.000)
mensaje_con_formato = 'Hola %s %s . Tu sueldo es %.2f' % persona
print(mensaje_con_formato)

nombre = 'Farid'
edad = 20
sueldo = 3000
mensaje_con_formato = 'Nombre {} Edad {} Sueldo {:.2f}'.format(nombre, edad, sueldo)
print(mensaje_con_formato)

# mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre,edad,sueldo)
# print(mensaje)

mensaje = 'Nombre{n} Edad {e} Sueldo {s:.2f}'.format(n=nombre, e=edad, s=sueldo)
# print(mensaje)

dictionary = {'nombre': 'IVAN', 'edad': 35, 'sueldo': 80.000}
mensaje4 = 'Nombre {dic[nombre]} Edad {dic[edad]} Sueldo {dic[sueldo]:.2f}'.format(dic=dictionary)
print(mensaje4)
