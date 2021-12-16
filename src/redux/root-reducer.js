import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/userReducer";
import settingReducer from "./setting/settingReducer";
import contactReducer from "./newsletter/contactReducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    setting: settingReducer,
    contact: contactReducer
});

export default persistReducer(persistConfig, rootReducer);