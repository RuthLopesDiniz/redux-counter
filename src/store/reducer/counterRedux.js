//aqui é criado o reducer, que é a função responsável por alterar o estado.

const INITIAL_STATE = {
    counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "INCREMENT_COUNTER":
            return{
                ...state,
                counter: state.counter + 1
            }
            default: return state;
    }
}

export default counterReducer;