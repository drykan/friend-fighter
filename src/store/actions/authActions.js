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

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const fire = getFirebase();

        fire.auth().signOut().then(() =>{
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fire      = getFirebase();
        const firestore = getFirestore();

        fire.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                username: newUser.username
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })

    }
}