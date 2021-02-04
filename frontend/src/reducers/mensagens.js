let estado_inicial = []

const mensagens = (state = estado_inicial, action) =>{
    switch(action.type){
        case 'inserir':
            estado_inicial = action.payload
            return estado_inicial
        default:
            return estado_inicial
    }

}

export default mensagens