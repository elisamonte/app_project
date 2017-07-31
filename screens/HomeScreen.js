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

import { SearchBar, Button, Header} from 'react-native-elements';

import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    let cookiePage = () => {
      navigate('Cookies');
      console.log('clicked');
    }
    return (

        <View style={styles.container}>

          



          <ScrollView
            style={styles.scrollStyle}
            contentContainerStyle={styles.contentContainer}>

            <View style={styles.welcomeContainer}>
              <Image
              source={require('../assets/images/bite-cookie.png')}
              style={styles.welcomeImage}
            />
            </View>
            <View>
              <Button
                  large
                  icon={{name: 'heart-o', type: 'font-awesome'}}
                  title='COOKIES'
                  color="#ffffff"
                  backgroundColor='#E1C0C0'
                  onPress={cookiePage}
                buttonStyle={{marginBottom:20}} />
            </View>
            <View>


            </View>
          </ScrollView>

          <View>
            <SearchBar
              lightTheme
              placeholder='Search Cookies...'
              />
          </View>

        </View>


    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  scrollStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:100

  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
