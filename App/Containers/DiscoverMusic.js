import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'


import Recommend from '../Containers/Recommend'
import PlayList from '../Containers/PlayList'
import Radio from '../Containers/Radio'
import Top from '../Containers/Top'
import ListContainer from '../Containers/ListContainer'

// Styles
import styles from './Styles/DiscoverMusicStyle'
import {Colors} from '../Themes'
class DiscoverMusic extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }



  render () {
    const types = [
      {title: '个性推荐', component: ListContainer},
      {title: '歌单', component: PlayList},
      {title: '主播电台', component: Radio},
      {title: '排行榜', component: Top}
    ]
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TouchableOpacity style={styles.searchLeft}>
            <Icon name='ios-microphone-outline' size={30} color={Colors.silver} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchContent}>
            <Icon name='ios-search-outline' size={15} color={Colors.steel} />
            <Text style={styles.searchText}>搜索 音乐 歌词 电台</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchRight}>
            <Icon name='ios-stats-outline' size={30} color={Colors.silver} />
          </TouchableOpacity>
        </View>
        <ScrollableTabView style={styles.scrollableTab}
                           tabBarBackgroundColor={Colors.silver}
                           tabBarActiveTextColor={Colors.fire}
                           tabBarInactiveTextColor={Colors.black}
                           tabBarUnderlineStyle={styles.scrollableTabBarUnderlineStyle}
                           renderTabBar={() => <DefaultTabBar />}>
          {
            types.map((v, i) => {
              const Component = v.component
              return <Component key={i} tabLabel={v.title} navigation={this.props.navigation} />
            })
          }
        </ScrollableTabView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverMusic)
