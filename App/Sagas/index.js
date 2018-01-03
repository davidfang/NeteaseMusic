import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { RegisterTypes } from '../Redux/RegisterRedux'
import { PasswordTypes } from '../Redux/PasswordRedux'
import { AccountTypes } from '../Redux/AccountRedux'

import { BanerTypes } from '../Redux/BanerRedux'
import { PersonalizedTypes } from '../Redux/PersonalizedRedux'
import {PlayListTypes} from '../Redux/PlayListRedux'
// ignite-jhipster-saga-redux-import-needle

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login, logout, loginLoad } from './LoginSagas'
import { register } from './RegisterSagas'
import { forgotPassword, changePassword } from './PasswordSagas'
import { getAccount, updateAccount } from './AccountSagas'
import { getPlayList } from './PlayListSagas'

import { getBaner } from './BanerSagas'
import { getPersonalized } from './PersonalizedSagas'
// ignite-jhipster-saga-method-import-needle

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
//const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const api =  API.create() //:FixtureAPI
//console.log(api)
/* ------------- Connect Types To Sagas ------------- */

export default function * root () {

  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // JHipster accounts
    // takeLatest(LoginTypes.LOGIN_LOAD, loginLoad, api),
    // takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    // takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api),
    // takeLatest(RegisterTypes.REGISTER_REQUEST, register, api),
    // takeLatest(PasswordTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, api),
    // takeLatest(PasswordTypes.CHANGE_PASSWORD_REQUEST, changePassword, api),
    // ignite-jhipster-saga-redux-connect-needle

    // takeLatest(AccountTypes.ACCOUNT_REQUEST, getAccount, api),
    // takeLatest(AccountTypes.ACCOUNT_UPDATE_REQUEST, updateAccount, api),

    takeLatest(BanerTypes.BANER_REQUEST, getBaner, api),
    takeEvery(PersonalizedTypes.PERSONALIZED_REQUEST, getPersonalized, api),
    takeLatest(PlayListTypes.PLAY_LIST_REQUEST, getPlayList, api)
  ])
}
