import { combineReducers, createStore, applyMiddleware } from 'redux';
import { userReducer } from './user/reducers';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
    const middlewares = [createLogger({})];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, middleWareEnhancer);
    return store;
}