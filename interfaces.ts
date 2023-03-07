// Types
// Interfaces

interface Ianimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}



interface Ifelino extends Ianimal {
    visaoNoturna: boolean;
}

interface ICanino extends Ianimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = Ifelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}

// console.log(animal.executarRugido(5));


// type Ianimal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     executarRugido(alturaEmDecibeis: number): void;
// }