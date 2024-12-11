let matricula = prompt('Ingresa la matricula del alumno');
let calificaciones = [];
let total = 0;

for(let i=1; i<=5; i++) {
    let calificacion = parseFloat(prompt(`Ingresa la calificacion ${i}:`));
}

let promedio = total / calificaciones.length;

let estado = promedio >= 7 ? 'aprobado' : 'no aprobado';

alert(`Matricula: ${matricula}\n Promedio: ${promedio.toFixed(2)}\n Estado: ${estado}`);