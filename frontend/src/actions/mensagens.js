export const inserir = (mensagem) =>{
    return {
        type: 'inserir',
        payload: mensagem
    }
}