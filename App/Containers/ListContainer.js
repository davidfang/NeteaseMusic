import React from 'react'
import { View, SectionList, Text, Image, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
// More info here: https://facebook.github.io/react-native/docs/sectionlist.html

import {calculateCount} from '../Lib'

import PersonalizedActions from '../Redux/PersonalizedRedux'
import BanerActions from '../Redux/BanerRedux'

// Styles
import styles from './Styles/ListContainerStyle'
import {Colors, Metrics } from '../Themes'

import MenuIcon from '../Components/MenuIcon'
import Baners from '../Components/Baners'

class ListContainer extends React.PureComponent {
  constructor (props) {
    super(props)

    /* ***********************************************************
     * STEP 1
     * This is an array of objects with the properties you desire
     * Usually this should come from Redux mapStateToProps
     *************************************************************/
    this.state = {
      refreshing: true,
      recommend: this.props.personalized,
      banner: []
    }
  }

  componentDidMount(){
    if(this.state.refreshing) {
      this.props.getPersonalized()
      this.props.getPersonalized('mv')
    }
    const { data } = this.props.baner
    if(null === data){
      this.props.getBaner()
    }
  }



  /* ***********************************************************
  * STEP 3
  * `renderItem` function - How each cell should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
  *   return <MyCustomCell title={item.title} description={item.description} />
  *
  * For sections with different cells (heterogeneous lists), you can do branch
  * logic here based on section.key OR at the data level, you can provide
  * `renderItem` functions in each section.
  *
  * Note: You can remove section/separator functions and jam them in here
  *************************************************************/
  renderItem ({section, item}) {
    const {width=section.category == 3 ? Metrics.screenWidth * 0.45 : Metrics.screenWidth * 0.325} = item
    return (
      <TouchableOpacity style={[styles.row,{width}]}>
        <View style={styles.imageContainer}>
          <Image style={[styles.image, {width}]} source={{uri:item.picUrl+'?param=140y140'}} />
          <View style={styles.textTrip}>
            <Icon name={Platform.OS == 'ios' ? 'ios-volume-down-outline' : 'md-volume-down-outline'} size={25} color={Colors.fire} />
            <Text style={{color:Colors.text}}>{calculateCount(item.playCount)}</Text>
          </View>
        </View>
        <View >
          <Text style={styles.label}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // Conditional branching for section headers, also see step 3
  renderSectionHeader ({section}) {
    const category = {
      0: '推荐音乐',
      3: '推荐MV'
    }
    return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>{`${category[section.category]} >>`}</Text></View>
  }

  /* ***********************************************************
  * STEP 2
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *
  * Removing a function here will make SectionList use default
  *************************************************************/
  // Render a header?
  renderHeader = () => {
    const { data } = this.props.baner
   return (
     <View>
       <Baners data={data}/>
       <View style={styles.menus}>
        <MenuIcon name='radio' title='私人电台'/>
        <MenuIcon name='calendar' title='私人电台'/>
        <MenuIcon name='stats' title='排行榜'/>
        <MenuIcon  />
       </View>
     </View>
       )
    //<Text style={[styles.label, styles.sectionHeader]}> - Full List Header - </Text>
  }
  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - 我们是有底线的 - </Text>

  // Does each section need a footer?
  renderSectionFooter = () =>
    <Text style={styles.label}> END SECTION!!!! </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  renderSectionSeparator = () =>
    <Text style={styles.label}> \/\/\/\/\/\/\/\/ </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    let data = this.props.personalized && Object.values(this.props.personalized) || []
    return (
      <View style={styles.container}>
        {
          data && (<SectionList
         renderSectionHeader={this.renderSectionHeader}
         sections={data}
         contentContainerStyle={styles.listContent}
         data={data}
         renderItem={this.renderItem}
         keyExtractor={this.keyExtractor}
         initialNumToRender={this.oneScreensWorth}
         ListHeaderComponent={this.renderHeader}
         //SectionSeparatorComponent={this.renderSectionSeparator}
         ListFooterComponent={this.renderFooter}
         ListEmptyComponent={this.renderEmpty}
         //ItemSeparatorComponent={this.renderSeparator}
         //renderSectionFooter={this.renderSectionFooter}
         />)

        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const {baner, personalized:{result:personalized}} = state
  return {
    personalized,
    baner
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBaner: () => dispatch(BanerActions.banerRequest()),
    getPersonalized: (category) => dispatch( PersonalizedActions.personalizedRequest(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
