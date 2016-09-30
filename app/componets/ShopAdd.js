import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { 
  addSHOP
} from '../action/action';
import AddShop from '../componets/AddShop';

import { Actions } from 'react-native-router-flux';

class ShopAddApp extends Component{

  addshop(shop_name, product){
    const { dispatch } = this.props;
    dispatch(addSHOP(shop_name, product));
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
         <AddShop
          onAddClick={(shop_name, product) => this.addshop(shop_name, product)
          }
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 64,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
});

export default connect()(ShopAddApp);

