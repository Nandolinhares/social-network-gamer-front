import { all } from 'redux-saga/effects';

//Sagas
import { watchSignup } from '../sagas/authenticationSaga';

export default function* rootSaga() {
    yield all([
        watchSignup(),
    ]);
}