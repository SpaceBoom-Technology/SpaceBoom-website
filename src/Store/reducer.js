const initialState = {
    isMobile: window.innerWidth >= 768 ? true : false
}

const Reducer = (state = initialState, action) => {
    if (action.type === "CHANGE") {
        return (
            state = {
                ...state, isMobile: window.innerWidth >= 768 ? true : false
            }
        )
    }
    return state;
}

export default Reducer;