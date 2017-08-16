const initialState = {
  initialData: [],
  filteredResult: []
};

export default function result(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, filteredResult: action.result }
    case 'LOAD_DATA_OK':
      return { ...state, initialData: action.data, filteredResult: action.data }
    default:
      return state;
  }
}
