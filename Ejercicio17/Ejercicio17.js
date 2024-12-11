let num1 = parseInt(prompt('Ingresa el primer numero:'));
let num2 = parseInt(prompt('Ingrese el segundo numero:'));
let num3 = parseInt(prompt('Ingresa el tercer numero:'));

if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    let mayor;

    if(num1 === num2 && num2 === num3) {
        mayor = num1;
        alert(`los tres numeros son iguales: ${mayor}`);
    } else {
        mayor = Math.max(num1, num2, num3);
        alert(`el numero mayor es: ${mayor}`);
    }
} else {
    alert('por favor, debe ingresar un numero valido');
}