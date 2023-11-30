// Función para realizar la conversión de monedas
function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    const tipoDeCambio = {
        'dolares': {
            'euros': 0.91,
            'pesos': 17.28
        },
        'euros': {
            'dolares': 1.10
        },
        'pesos': {
            'dolares': 0.049
        }
    };

    let resultado = 'Seleccionar otro tipo de cambio';

    if (tipoDeCambio[monedaOrigen] && tipoDeCambio[monedaOrigen][monedaDestino]) {
        resultado = cantidad * tipoDeCambio[monedaOrigen][monedaDestino];
    }

    return resultado;
}
const cantidad = parseFloat(prompt('Ingrese la cantidad a convertir:'));
const monedaOrigen = prompt('Ingrese la moneda a convertir (dolares, euros o pesos):').toLowerCase();
const monedaDestino = prompt('Ingrese la moneda destino (dolares, euros o pesos):').toLowerCase();

const resultado = convertirMoneda(cantidad, monedaOrigen, monedaDestino);
console.log(`El resultado de la conversión es: ${resultado}`);
