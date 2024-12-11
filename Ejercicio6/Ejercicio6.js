const peso = parseFloat(prompt('ingrese su peso en kilogramos'));
const altura = parseFloat(prompt('ingrese su altura en metros'));

const bmi = perso / (altura ** 2);

console.log(`tu bmi es ${bmi.toFixed(2)}`);
