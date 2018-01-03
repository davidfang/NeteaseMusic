import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  appState: require('./AppStateRedux').reducer,
  chat: require('./ChatRedux').reducer,
  // ignite-jhipster-redux-store-import-needle
  account: require('./AccountRedux').reducer,
  login: require('./LoginRedux').reducer,
  register: require('./RegisterRedux').reducer,
  password: require('./PasswordRedux').reducer,
  search: require('./SearchRedux').reducer,
  baner: require('./BanerRedux').reducer,
  personalized: require('./PersonalizedRedux').reducer,
  playList: require('./PlayListRedux').reducer
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)
      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
