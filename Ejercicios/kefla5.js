
class Calculadora {
    sumar (num1,num2) {
        return parseInt(num1) + parseInt(num2);
    } 
    restar (num1,num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir (num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar (num1,num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar (num1,num2) {
        return parseInt(num1)**parseInt(num2); 
    }
    raizCuadrada (num1) {
        return Math.sqrt(parseInt(num1));
    }
    raizCubica (num1) {
        return Math.cbrt(parseInt(num1));
    }
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt(" 1: suma, 2: resta, 3: división, 4: multiplicación, 5: potenciación, 6: raizCuadrada, 7: raizCubica ");

if ( operacion == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("El numero base");
    let numero2 = prompt("El numero exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Raiz cuadrada de");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Raiz cubica de");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
} else {
    alert("No se ha encontrado la operación")
}