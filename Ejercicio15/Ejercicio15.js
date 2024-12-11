let categoria = parseInt(prompt('Ingresa la categoria del trabajador (1,2,3 o 4):'));
let sueldo = parseInt(prompt('Ingrese el sueldo del trabajador:'));

let aumento = 0;

switch (categoria) {
    case 1:
        aumento = 0.15; //15%
        break;
    case 2:
        aumento = 0.10; //10%
        break;
    case 3:
        aumento = 0.8; //8%
        break;
    case 4:
        aumento = 0.5 //5%
        break;
    default:
        aumento = null; // sin aumento
}
if(aumento !== null) {
    let nuevoSueldo = sueldo + (sueldo * aumento);
    alert(`Categoria: ${categoria}\n Nuevo sueldo: $${nuevoSueldo.toFixed(2)}`);
}