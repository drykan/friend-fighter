const initState = {
    characters: [
        {id: '1', title: "Tibby Starks", img: "", description: "Tibby is super powerful. Her super power is the Attack Dog."},
        {id: '2', title: "Daniel Starks", img: "", description: "Daniel is super powerful. His super power is Repair."},
        {id: '3', title: "Drayton Starks", img: "", description: "Drayton is super powerful. Her super power is the Stare."}
    ]
};

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CHARACTER':
            console.log('created character', action.character);
            return state;
        case 'CREATE_CHARACTER_ERROR':
            console.log('create character error', action.err);
            return state;
        default:
            return state;
    }
};

export default characterReducer; 