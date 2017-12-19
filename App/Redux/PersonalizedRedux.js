import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  personalizedRequest: ['category'],
  personalizedSuccess: ['result'],
  personalizedFailure: null
})

export const PersonalizedTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  result: [],
  error: null
})

/* ------------- Selectors ------------- */

export const PersonalizedSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { category }) =>
  state.merge({ fetching: true, result: null })

// successful api lookup
export const success = (state, action) => {
  const { result } = action
  //let resultTemp = [...state.result, {category:result.category, data:result.result}]
  //return state.merge({ fetching: false, error: null, result: [...resultTemp] })
  return state.merge({ fetching: false, error: null, result: [{category:result.category, data:result.result}]  })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, result: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PERSONALIZED_REQUEST]: request,
  [Types.PERSONALIZED_SUCCESS]: success,
  [Types.PERSONALIZED_FAILURE]: failure
})
