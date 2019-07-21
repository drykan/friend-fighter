const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login Failed. Please check your username and password combination, you dummy.'
            };
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('Signup Error');
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }   
};

export default authReducer;