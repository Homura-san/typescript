// Types
// Interfaces

interface Ianimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface Ifelino extends Ianimal {
    visaoNoturna: boolean;
}

const animal: Ianimal = {
    nome: 'Elefante',
    tipo: 'aquatico',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

// console.log(animal.executarRugido(5));


