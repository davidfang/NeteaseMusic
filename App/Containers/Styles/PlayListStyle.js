import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    //flex: 1,
    //backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'flex-start',
    width: Metrics.screenWidth * 0.475,
    margin: 5,
    padding: 5,
    paddingVertical: 3,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  imageContainer: {
    //justifyContent:'flex-end',
    alignItems: 'flex-end'
  },
  textTrip: {
    flexDirection: 'row',
    //alignItems: 'flex-end',
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  header: {

  },
  category: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: Metrics.screenWidth,
    //alignItems: 'center',
    alignContent: 'center',
    margin: Metrics.baseMargin
    //justifyContent: 'center'

  },
  categorySelect: {
    borderColor: Colors.snow,
    borderWidth: Metrics.horizontalLineHeight,
    //backgroundColor: Colors.facebook,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
    //width: 100,
    //height: 30
  },
  categoryItem: {
   // flex: 1
    marginLeft: 15
  }
})
