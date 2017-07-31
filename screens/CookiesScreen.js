import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SwipeDeck, Card } from 'react-native-elements';

export default class CookiesScreen extends React.Component {

  static navigationOptions = {
    // title: 'Links',
    header:null,
  };
  renderCard(card) {
    return (
      <Card
        key={card.id}
        containerStyle={{borderRadius: 10, width: 275, height: 300}}
        featuredTitle={`${card.text}`}
        featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
        image={{ uri: card.uri }}
        imageStyle={{borderRadius: 10, width: 275, height: 295, position:'center'}}
      />
    )
  }
  //
  onSwipeRight(card) {
    console.log("Card liked: " + card.text);
  }

  onSwipeLeft(card) {
    console.log("Card disliked: " + card.text);
  }

  renderNoMoreCards() {
    return (
      <Card
        containerStyle={{borderRadius: 10, width: 275, height: 300}}
        featuredTitle="No more sweets left"
        featuredTitleStyle={{fontSize: 25}}
        image={{ uri: 'https://vignette3.wikia.nocookie.net/nickelodeon/images/1/16/Rugrats_Angelica_Orders_Out.jpg/revision/latest?cb=20140915002014' }}
        imageStyle={{borderRadius: 10, width: 275, height: 300}}
      />
    );
  }

  render() {
    const DATA = [
      { id: 1, text: 'Chocolate Chip', uri: 'https://cdn.averiecooks.com/wp-content/uploads/2016/11/chocchipcookies-6-650x975.jpg' },
      { id: 2, text: 'Sugar', uri: 'http://www.onceuponachef.com/images/2013/02/cooling-cookies.jpg' },
      { id: 3, text: 'Peanut Butter', uri: 'http://www.cocinatipo.com/wp-content/uploads/2014/03/deliciosas-galletas-galletas-de-mantequilla-de-mani-y-lino-01.jpg' },
      { id: 4, text: 'M&M', uri: 'http://whatsgabycooking.com/wp-content/uploads/IMG_7935.jpg' },
      { id: 5, text: 'Snickerdoodle', uri: 'http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/97/49/6/N4RvBXiYSwuoHfj9wkJw_snickerdoodles-3.jpg' },
      { id: 6, text: 'Oatmeal Raisin', uri: 'https://images-gmi-pmc.edge-generalmills.com/8dd9bd18-54db-48eb-b8cd-aa634fed89a6.jpg' },
      { id: 7, text: 'White Chocolate Macadamia Nut', uri: 'http://cookdiary.net/wp-content/uploads/images/White-Chocolate-Macadamia-Nut-Cookies_3062.jpg' },
    ];
    return (
      <SwipeDeck
        data={DATA}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards}
        onSwipeRight={this.onSwipeRight}
        onSwipeLeft={this.onSwipeLeft}
      />

    );
  }
}
