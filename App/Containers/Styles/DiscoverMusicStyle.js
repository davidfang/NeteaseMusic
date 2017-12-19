import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  /* 搜索 */
  search: {
    height: 40,
    backgroundColor: Colors.fire,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchContent: {
    width: Metrics.screenWidth / 3 * 2,
    height: Metrics.screenHeight / 20,
    borderRadius: 30,
    backgroundColor: Colors.silver,
    color: Colors.steel,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchText: {
    color: Colors.steel
  },
  searchLeft: {
    flex: 1,
    alignItems: 'center'
  },
  searchRight: {
    flex: 1,
    alignItems: 'center'
  },
  /* scrollableTab  */
  scrollableTab: {
    flex: 1,
    backgroundColor: Colors.silver
  },
  scrollableTabBarUnderlineStyle: {
    backgroundColor: Colors.fire
  }
})
