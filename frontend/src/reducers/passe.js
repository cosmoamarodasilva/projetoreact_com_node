let estado_inicial = true

export const passe = (state = estado_inicial, action) =>{
    switch (action.type){
        case 'verdadeiro':
            estado_inicial = true
            return estado_inicial
        case 'falso':
            estado_inicial = false
            return estado_inicial
        default:
            return estado_inicial
    }
}