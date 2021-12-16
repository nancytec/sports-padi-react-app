import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from "./user.types";

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    userSessionFailure
} from "./user.actions";
import Auth from "../../backend/Auth";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* isUserAuthenticated() {
    try {
        // Check User Authentication status
        const userAuth =  yield Auth.isUserLoggedIn();
        yield put(signInSuccess(userAuth.data));
    }catch (error) {
        yield put(userSessionFailure(error.response))
    }
}

export function* signIn({payload: { email, password }}) {
    try{
        const userAuth = yield Auth.authenticateUser(email, password);
        yield put(signInSuccess(userAuth.data));
        Swal.fire({
            icon: 'success',
            title: 'Logged In Successfully',
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 1500
        });
    }catch(error) {
        const { err, message } = error.response.data;
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: message,
            showConfirmButton: true,
        });
        yield put(signInFailure(error.response))
    }
}

export function* signOut() {
   try{
       yield Auth.logout();
       yield put(signInSuccess(null));
       notify.fire({
           icon: 'success',
           title: 'Logged Out Successfully',
           showConfirmButton: false,
           timerProgressBar: true,
           timer: 1000
       });
   }catch (error) {
       notify.fire({
           icon: 'success',
           title: 'Logging out error',
           text: error.response.message,
           showConfirmButton: false,
           timerProgressBar: true,
           timer: 1000
       });
   }
}

/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onSignInStart),
        call(onSignOut)
    ])
}