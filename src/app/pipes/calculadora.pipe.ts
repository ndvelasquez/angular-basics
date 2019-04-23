import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {
    // dato | calculadora: otroDato
    // param1              param2
    transform(value: any, valueTwo: any) {
        const calculo = `
        Suma: ${value + valueTwo}
        Resta: ${value - valueTwo}
        Multiplicacion: ${value * valueTwo}
        Division: ${value / valueTwo}
        `;
        return calculo;
    }
}
