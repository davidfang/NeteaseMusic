import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, ListView } from 'react-native'
import { connect } from 'react-redux'

import  MenuIcon from '../Components/MenuIcon'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import BanerActions from '../Redux/BanerRedux'


import Baners from '../Components/Baners'

// Styles
import styles from './Styles/RecommendStyle'

class Recommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: [],
      refreshing: true,
      banner: []
    }
  }

  componentDidMount(){
    const { data } = this.props.baner
    if( null === data ){
      this.props.getBaner()
    }

  }

  render () {
    const { data } = this.props.baner

    return (
      <ScrollView style={styles.container}>
        <Baners data={data }  />
        <View style={styles.menus} >
          <MenuIcon name='radio' title='私人电台' />
          <MenuIcon name='calendar' title='私人电台' />
          <MenuIcon name='stats' title='排行榜' />
          <MenuIcon  />
        </View>

        <Text>Recommend Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { baner } = state
  return {
    baner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBaner: () => dispatch(BanerActions.banerRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
