import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/TabIconStyle'
import {Colors} from '../Themes'
export default class TabIcon extends Component {
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
    if (Platform.OS === 'ios') {
      var iconName = 'ios-' + this.props.iconName
    } else if (Platform.OS === 'android') {
      var iconName = 'md-' + this.props.iconName
    }
    iconName = Platform.OS === 'ios' ? 'ios-' + this.props.iconName : 'md-' + this.props.iconName
    return (
        <Icon name={iconName} size={25} color={this.props.focused ? Colors.fire : Colors.facebook} />
    )
  }
}
