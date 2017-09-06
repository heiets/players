export const search = arr => {
    return {
        type: 'SEARCH',
        result: arr
    }
}
export const loadData = () => {
    return dispatch => {
        dispatch({
            type: 'LOAD_INFO_REQUEST'
        });
        fetch('http://localhost:3000/data').then(function(response) {
            return response.json();
        })
            .then(function(json) {
                dispatch({
                    type: 'LOAD_DATA_OK',
                    data: json
                })
            })
    }
}
