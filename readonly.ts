interface Cachorro {
    nome: string,
    idade: number,
    parqueFavorito?: string
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro] - ?: Cachorro[K]
    // - ? remove parâmetros opcionais
}

class MeuCachorro implements CachorroSomenteLeitura {
    nome;
    idade;
    parqueFavorito;
    
    constructor(nome: string, idade: number, parqueFavorito: string){
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}

const cao = new MeuCachorro('Apollo', 14, 'Verde');
cao.idade = 8

console.log(cao)