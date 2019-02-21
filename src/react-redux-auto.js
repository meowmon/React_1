import {combineReducers, createStore} from "redux";
import {connect} from "react-redux";


/**
 * Get Reducers from objects form and then convert to Redux-compatible reducer function
 *
 * @param reducers: from reducers file: import * as todoReducers from './todos'
 * @param defaultState
 * @returns {Function}
 */
export var compatReducers = (reducers, defaultState) => {
    return (state = defaultState, action) => {
        if (!reducers[action.type]) return state;

        return reducers[action.type](state, ...action.data);
    }
};


/**
 * Get autoRedux store format then convert to Redux-compatible combined producers
 *
 */
export var compatCombineReducers = (appStore) => {
    let _reducers = {};

    Object.keys(appStore).forEach(storeName => {
        let storeReducer = appStore[storeName];

        if (!('reducers' in storeReducer)) {
            storeReducer = {reducers: storeReducer, default: undefined};
        }

        _reducers[storeName] = compatReducers(storeReducer.reducers, storeReducer.default);
    });

    return combineReducers(_reducers);
};


/**
 * autoReduxStore: Create a $store which can be used in code to call action or get state
 * @type {{get: handler.get}}
 *
 * @param appStore: store in auto-redux format
 * @param reduxStore (optional): original reduxStore, used to connect existing reduxStore without breaking app,
 *                               mainly used in phase of switching to auto-redux from redux without breaking.
 *                               It not given, then init reduxStore inside the function
 */
export var createAutoReduxStore = (appStore, reduxStore) => {
    const reducers = compatCombineReducers(appStore);

    if (!reduxStore) {
        reduxStore = createStore(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    }

    let _handler = {
        get: (appStore, name) => {
            // Special value for accessing to original redux store
            if (name === 'reduxStore') return reduxStore;

            let stateName, funcName, func;

            Object.keys(appStore).forEach(_attr => {
                if (name === _attr) {
                    stateName = _attr;
                }

                // Scan all function name in each reducer
                Object.keys(appStore[_attr].reducers).forEach(_funcName => {
                    if (_funcName === name) {
                        funcName = _funcName;
                        func = appStore[_attr].reducers[funcName];
                    }
                });

            });

            // If requested name is an attribute then return it from store
            if (name === stateName) return reduxStore.getState()[stateName];

            // If requested name is a function then call it
            if (!!func) {
                return (...args) => {
                    reduxStore.dispatch({
                        type: funcName,
                        data: args
                    });
                }
            }

            throw new Error(`${name} does not exist`);
        }
    };

    return [new Proxy(appStore, _handler), reduxStore];
};

/**
 * Listen on some stores by store name and re-render the component if these stores are changed
 * @param stores
 * @returns {function(*=)}
 */
export var listen = (...stores) => {
    let mapStateToProps = state => stores.reduce((listened, store) => {
        listened[store] = state[store];
        return listened;
    }, {});

    return Wrapped => connect(mapStateToProps)(Wrapped);
};
