import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.silver
  },
  row: {
    width: Metrics.images.doubleLarge,
    //height: 100,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    //alignItems: 'center',
    //margin: Metrics.smallMargin,
    marginVertical: Metrics.smallMargin,
    //backgroundColor: Colors.fire,
    borderRadius: Metrics.smallMargin
  },
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: 'transparent',
    borderColor: Colors.fire,
    borderLeftWidth: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.black,
    textAlign: 'center',
    marginLeft: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin
  },
  label: {
    ...Fonts.style.description,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'left'
  },
  imageContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  textTrip: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 5
  },
  image: {
    width: Metrics.images.doubleLarge,
    height: Metrics.images.doubleLarge
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menus: {
    flex: 1,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
