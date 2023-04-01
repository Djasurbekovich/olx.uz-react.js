const initialState = {
    email: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SEND_EMAIL':
            return {email: action.email}
        default:
            return state
    }
}

export { authReducer }