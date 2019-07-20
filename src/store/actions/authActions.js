export const signIn = (creds) => {
    return (dispatch, getState, { getFirebase }) => {
        const fire = getFirebase();

        fire.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}