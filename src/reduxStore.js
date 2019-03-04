import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagaCoordinator from './sagas';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaCoordinator);


// Enable Webpack hot module replacement for reducers
if (!process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}


export default store;
