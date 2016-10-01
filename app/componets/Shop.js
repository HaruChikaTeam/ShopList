import React, { Component, PropTypes  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux';

class Shop extends Component{

  showDetailShop(shop){
    this.props.onAddClick();
    Actions.detail({shop: shop})
  }

  render(){
    return(
      <TouchableHighlight onPress={() => this.showDetailShop(this.props)}>
        <View style={styles.shop_container}>
          <View style={styles.icon}>
            <Icon name="shopping-bag" size={40} color="snow" />
          </View>
          <View style={styles.shop}>
            <Text style={styles.shop_name}>{this.props.shop_name}</Text>
            <Text style={styles.shop_adress}>{this.props.address}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var styles = StyleSheet.create({
  shop_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'cadetblue',
    marginBottom: 1,
    width: width,
    height: 75
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  shop:{
    flex: 4,
    justifyContent: 'center',
  },
  shop_name: {
    color: "snow",
    fontSize: 25,
    marginBottom: 2,
  },
  shop_adress: {
    color: "snow",
    fontSize: 15
  }
});

export default Shop;