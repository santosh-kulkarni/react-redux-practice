const initialState = {
    items: 10,
    array: "Santosh Kulkarni"
}

export const reducer =  function (state = initialState, actions) {
    switch (actions.type) {
        case "INCREASE": return {
            ...state,
            items: state.items + 1
        }
        case "DECREASE": return {
            ...state,
            items: state.items - 1
        }
        case "RESET": return {
            ...state,
            items: 10,
            array: "Santosh Kulkarni"
        }
        case "AXIOS": return {
            ...state,
            array: actions.payload
        }
        default: return state;
    }
}