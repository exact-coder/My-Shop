export const initialState ={
    profile: null,
}

export const reducer =(state,action) => {
    switch(action.type){
        case 'PRO':
            return{
                ...state,
                profile: action.value
            }
        default:
            return state;
    }
}