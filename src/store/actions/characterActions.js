export const createCharacter = (character) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('characters').add({
            ...character,
            authorFirstName: 'Dan',
            authorLastName: 'Starks',
            authorID: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CHARACTER', character });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CHARACTER_ERROR', err});
        });

    }
};

export const createEquipment = (equipment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('equipment').add({
            ...equipment,
            authorFirstName: 'Dan',
            authorLastName: 'Starks',
            authorID: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EQUIPMENT', equipment });
        }).catch((err) => {
            dispatch({ type: 'CREATE_EQUIPMENT_ERROR', err});
        });

    }
};