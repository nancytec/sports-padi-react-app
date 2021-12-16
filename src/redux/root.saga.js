import { all, call } from 'redux-saga/effects';
import { userSagas } from "./user/user.sagas";
import { settingSagas } from "./setting/setting.sagas";
import { contactSagas } from "./newsletter/contact.sagas";


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(settingSagas),
        call(contactSagas)
    ])
}