import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, ListView } from 'react-native'
import { connect } from 'react-redux'

import  MenuIcon from '../Components/MenuIcon'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import BanerActions from '../Redux/BanerRedux'


import Baners from '../Components/Baners'

// Styles
import styles from './Styles/RecommendStyle'

class Recommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: [],
      refreshing: true,
      banner: []
    }
  }

  /*componentWillMount() {
    this.setState({
        dataList: [
            {
                type: 'playlist',
                title: '推荐音乐',
                data: [{title: '听完这些歌我觉得自己变成了祥林嫂', image: require('../imgs/img/slider4.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../imgs/img/19145795974784949.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../imgs/img/528865105234307.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../imgs/img/528865105234307.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../imgs/img/19145795974784949.jpg')},
                    {title: '听完这些歌我觉得自己变成了祥林嫂', image: require('../imgs/img/slider4.jpg')},]
            },
            {
                type: 'special',
                title: '独家放送',
                data: [{title: '软萌小姐姐原创曲弹唱，全程微笑甜到飞起！', image: require('../imgs/img/slider4.jpg'), width: 0.49},
                    {title: '清新小调 喜欢这种刚刚好', image: require('../imgs/img/19145795974784949.jpg'), width: 0.49},
                    {title: '⚡️17年8月新热电音推送。', image: require('../imgs/img/528865105234307.jpg'), width: 1}, ]
            },
            {
                type: 'newsongs',
                title: '最新音乐',
                data: [{title: '忘不掉', subTitle: '孙俪', image: require('../imgs/img/slider4.jpg')},
                    {title: '初梦', subTitle: '初音ミク  /  MusikM', image: require('../imgs/img/19074327718953837.jpg')},
                    {title: '初梦', subTitle: '初音ミク  /  MusikM', image: require('../imgs/img/109951162819638071.jpg')},]
            },
            {
                type: 'mv',
                title: '推荐MV',
                data: [{title: '给大家的歌', subTitle: '鹿先森乐队', image: require('../imgs/img/slider4.jpg'), width: 0.49},
                    {title: '英雄归来', subTitle: 'PG One', image: require('../imgs/img/19074327718953837.jpg'), width: 0.49},
                    {title: '清白之年', subTitle: '朴树', image: require('../imgs/img/109951162819638071.jpg'), width: 0.49},
                    {title: 'Papillon', subTitle: '王嘉尔 - (Jackson of GOT7)', image: require('../imgs/img/109951163013685863.jpg'), width: 0.49},]
            }
        ]
    })
  }*/

  componentDidMount(){
    const { data } = this.props.baner
    if( null === data ){
      this.props.getBaner()
    }

  }


  render () {
    const { data } = this.props.baner

    return (
      <ScrollView style={styles.container}>
        <Baners data={data }  />
        <View style={styles.menus} >
          <MenuIcon name='radio' title='私人电台' />
          <MenuIcon name='calendar' title='私人电台' />
          <MenuIcon name='stats' title='排行榜' />
          <MenuIcon style={styles.menu} />
        </View>

        <Text>Recommend Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { baner } = state
  return {
    baner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBaner: () => dispatch(BanerActions.banerRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
