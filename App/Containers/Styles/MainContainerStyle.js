import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  applicationView: {
    flex: 1,
    marginTop: Metrics.doubleBaseMargin
  },
  container: {
    flex: 1,
    marginTop: Metrics.horizontalLineHeight,
    backgroundColor: Colors.background
  }
})
