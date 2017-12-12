/**
 * Created by admin on 17/12/11.
 */
import React, { Component } from 'react'
import { Drawer, Scene, Router, Stack } from 'react-native-router-flux'

import TabIcon from '../Components/TabIcon'

import DiscoverMusic from '../Containers/DiscoverMusic'
import MyMusic from '../Containers/MyMusic'
import Friends from '../Containers/Friends'
import Account from '../Containers/Account'


class NavigationMain extends Component {
  render () {
    return (
      <Router>
        <Stack key='root' tabs={true} >
          <Scene key='discoverMusic' component={DiscoverMusic} title='发现音乐' icon={TabIcon} iconName='disc-outline' initial hideNavBar />
          <Scene key='myMusic' component={MyMusic} title='我的音乐' icon={TabIcon} iconName='musical-notes-outline' />
          <Scene key='friends' component={Friends} title='朋友' icon={TabIcon} iconName='contacts-outline' />
          <Scene key='account' component={Account} title='账号' icon={TabIcon} iconName='person-outline' />
        </Stack>
      </Router>
    )
  }
}

export default NavigationMain
