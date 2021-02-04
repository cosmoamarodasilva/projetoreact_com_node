import{combineReducers} from 'redux'

import mensagens from './mensagens'

import {passe} from './passe'

const estados = combineReducers({
    mensagens: mensagens,
    passe: passe
})

export default estados