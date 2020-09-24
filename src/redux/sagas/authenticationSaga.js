import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
// Url da API
const backendUrl = 'https://southamerica-east1-social-network-5d30f.cloudfunctions.net/api';

//Worker
function* signupSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        const res = yield call(axios.post, `${backendUrl}/signup`, action.payload);
        const message = res.data.message;
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        const errors = err.response.data;
        console.error(err);
        yield put({ type: 'SET_ERRORS', payload: errors });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher
export function* watchSignup() {
    yield takeLatest('SIGNUP_SAGA', signupSaga);
}