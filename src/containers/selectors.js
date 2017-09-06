import { createStructuredSelector } from 'reselect';

const REDUCER = 'App';

const list = state => state[REDUCER].result;
// const list = (state) => state.list;
export default createStructuredSelector({
    list
});