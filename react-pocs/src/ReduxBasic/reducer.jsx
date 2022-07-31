const initialState = {
    name: 'teqstories',
    count: 0
};

const reducer = (state = initialState, action) => {

    console.log('action', action);

    if (action.type === 'STRING_CHANGE') {
        return {
            name: action.payload
        }
    }

    if (action.type === 'INCREMENT') {
        return {
            count: action.payload + 1
        }
    }

    else if (action.type === 'DECREMENT') {
        return {
            count: action.payload - 1
        }
    }
    
    return state;
}

export default reducer;
