// Generic types

function adicionaApendiceALista<T>(array: T[], value: T){ // A letra 'T' é padrão pra tipos genéricos
    return array.map(() => value)
}

adicionaApendiceALista([1, 2, 3], 1)