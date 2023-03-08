// Condicionais

interface IUsuario{
    id: string,
    usuario: string
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirect(usuario: IUsuario | IAdmin){
    if('usuario' in usuario) {
        // redirecionar para area de administração
    }

    // Redirecionar para área de usuário
}