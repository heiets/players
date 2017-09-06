import { combineReducers } from 'redux';

const initialState = {
    initialData: [],
    filteredResult: []
};

const result = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state, filteredResult: action.result };
        case 'LOAD_DATA_OK':
            return { ...state, initialData: action.data, filteredResult: action.data };
        default:
            return state;
    }
}

export default combineReducers({
    result
})
