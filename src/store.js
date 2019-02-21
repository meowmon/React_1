import {createAutoReduxStore} from "./react-redux-auto";
import * as authReducers from './reducers/auth';

let appStore = {
    auth: {reducers: authReducers, default: {}},
};

let [_$store, _reduxStore] = createAutoReduxStore(appStore);

export default _$store;
export var reduxStore = _reduxStore;

