import {compose, legacy_createStore, applyMiddleware} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:"root",
    storage,
    whitelist:['cart'],
}

const PersistReducer = persistReducer(persistConfig, rootReducer);
const middleWare = [process.env.Node_Env ==="production" && logger].filter(Boolean);
const composeEnhancers = compose(applyMiddleware(...middleWare));
export const store = legacy_createStore(PersistReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
