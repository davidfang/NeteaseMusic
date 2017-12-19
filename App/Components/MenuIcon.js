import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/MenuIconStyle'

import {Colors} from '../Themes'

export default class MenuIcon extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    let name = this.props.name  || 'person-outline'
    name = Platform.OS === 'ios' ? 'ios-' + name : 'md-' + name
    return (
      <View style={styles.container}>
        <Icon name={name} color={Colors.fire} size={30} />
        <Text >{this.props.title || 'title'}</Text>
      </View>
    )
  }
}
