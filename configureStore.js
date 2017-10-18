import { createStore, applyMiddleware } from 'redux';
import app from './app/reducers';

import createSagaMiddleware from 'redux-saga';
import dataSaga from './app/sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(app, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(dataSaga);
    return store;
}