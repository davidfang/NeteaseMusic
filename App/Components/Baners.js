import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image} from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './Styles/BanersStyle'

export default class Baners extends Component {
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
    const  data  = this.props.data

    return (
      data && (<View style={styles.container}>
        <Swiper autoplay={true} >
          {
            data.map((v, i) => {
              const uri = v.pic + '?param=500y200'
              return (<View key={i}>
                        <Image style={styles.image} source={{uri: uri}}/>
                    </View>)
            })
          }
        </Swiper>
      </View>)
    )
  }
}
