import React, { Component } from 'react'
import { View, StatusBar} from 'react-native'
import { connect } from 'react-redux'

import NavigationMain from '../Navigation/NavigationMain'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainContainerStyle'

class MainContainer extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar />
        <NavigationMain />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
