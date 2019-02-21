import {AsyncStorage} from 'react-native';


export var authSetUser = (state, user) => {
    AsyncStorage.setItem('user', JSON.stringify(user));

    return {...state, user};
};

export var authClearUser = (state) => {
    AsyncStorage.removeItem('user');

    delete state.user;
    return {...state};
};