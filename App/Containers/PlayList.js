import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

import {calculateCount} from '../Lib'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html
import PlayListActions from '../Redux/PlayListRedux'

import Icon from 'react-native-vector-icons/Ionicons'

// Styles
import styles from './Styles/PlayListStyle'
import {Metrics} from '../Themes'

class PlayList extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  constructor (props) {
    super(props)
    const playlists = this.props.payload && this.props.payload.playlists || []
    this.state = {
      tag: 'all',
      dataObjects: [...playlists]
    }
  }
  componentWillMount(){
    if(! this.props.payload){
      this.props.getPlayList({})
    }
  }
  selectTag(tag = 'all'){
    const playlists = this.props.payload && this.props.payload.playlists || []

    if(tag == 'all'){
      this.setState({tag, dataObjects: playlists})
    }else{
      let dataObjects = playlists.filter((item) => item.tag == tag)
      this.setState({tag, dataObjects})
    }
  }
  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {

    return (
      <TouchableOpacity style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.coverImgUrl}} style={[{width: Metrics.screenWidth * 0.46, height: Metrics.screenWidth * 0.3}]}/>
          <View style={styles.textTrip}>
            <Icon name={Platform.OS == 'ios' ? 'ios-volume-down-outline' : 'md-volume-down-outline'} size={15} />
            <Text>{calculateCount(item.playCount)}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.boldLabel}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <View style={styles.header}>
      <View style={styles.category}>
        <TouchableOpacity style={[styles.categoryItem, (this.state.tag=='all' && styles.categorySelect)]} onPress={() => this.selectTag('all')}><Text style={{}}>全部</Text></TouchableOpacity>
        <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems:'center'}}>
          <TouchableOpacity style={[styles.categoryItem, (this.state.tag=='欧美' && styles.categorySelect)]}  onPress={() => this.selectTag('欧美')}><Text>欧美</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, (this.state.tag=='华语' && styles.categorySelect)]}  onPress={() => this.selectTag('华语')}><Text>华语</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, (this.state.tag=='经典' && styles.categorySelect)]}  onPress={() => this.selectTag('古典')}><Text>古典</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

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
    //const playlists = this.props.payload && this.props.payload.playlists || []
    const playlists = this.state.dataObjects
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={playlists}
          renderItem={this.renderRow}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          //ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { playList: { payload } } = state
  return {
    // ...redux state to props here
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayList: (data) => dispatch( PlayListActions.playListRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
