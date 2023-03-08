// Operador '?'

interface IUsuario{
    id: string,
    usuario: string,
    cargo?: 'gerente' | 'coordenador' | 'supervisor'
}
// Variáveis terminadas com "?" são opcionais

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        // redirecionar(usuario.cargo)
    }

    // Redirecionar p/ área do usuário
}