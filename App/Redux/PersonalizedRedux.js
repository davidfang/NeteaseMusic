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
  result: null,
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
  //let resultTemp = state.result != null ? [...state.result, {category: result.category, data:result.result}] : [ {category:result.category, data:result.result}]
  let resultTemp = [ {category:result.category, data:result.result}]

  //let resultTemp = state.result != null ? state.result : []
  //let resultTemp = state.result
  //let resultTemp =  []
  // resultTemp.push({
  //   category: result.category,
  //   data:result.result.map(v => ({...v, title: v.name, picUrl: v.picUrl + '?param=140y140'}))
  // })

  //return state.merge({ fetching: false, error: null, result: resultTemp })
  return state.merge({ fetching: false, error: null, result: {...state.result,[result.category]: {category: result.category, data:result.result} } })
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
