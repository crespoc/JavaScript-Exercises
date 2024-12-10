let anioNacimiento = prompt('Ingresa el anio de tu nacimiento');
let anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;

console.log('Tienes ' + edad + ' años');
