import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import {
  MKTextField,
  MKColor,
  MKButton,
  mdl,
} from 'react-native-material-kit';

import { Actions } from 'react-native-router-flux';

var styles = StyleSheet.create({
  text_container: {
    margin: 20,
    height: 40, 
  },
  shopnamefield: {
    height: 28,  // have to do it on iOS
    margin: 10
  },
  placefield: {
    height: 28,  // have to do it on iOS
    margin: 10
  },
  add_button: {
    margin: 15,
  }
});

const ShopNameTextfield = mdl.Textfield.textfield()
  .withPlaceholder('Shop Name...')
  .withStyle(styles.shopnamefield)
  .withTintColor(MKColor.DeepOrange)
  .withTextInputStyle({color: MKColor.DeepOrange})
  .build();

const PlaceTextfield = mdl.Textfield.textfield()
  .withPlaceholder('Place...')
  .withStyle(styles.placefield)
  .withTintColor(MKColor.DeepOrange)
  .withTextInputStyle({color: MKColor.DeepOrange})
  .build();

const AddButton = MKButton.accentColoredButton()
  .withText('Add')
  .build();

var AddShop = React.createClass({

  propTypes: {
    shop_name: React.PropTypes.string.isRequired,
    place: React.PropTypes.string.isRequired,
    onAddClick: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    console.log(this.props);
    return { 
      shop_name: this.props.shop_name,
      product: this.props.place
    };
  },

  _handlePress: function(){
    if (this.state.shop_name !== "" && this.state.product !== "") {
      this.props.onAddClick(this.state.shop_name, this.state.product);
      this.setState({shop_name: "", product: ""});
    } 
  },

  render: function() {
    return(
      <View>
        <View style={styles.text_container}>
          <Text>Shop Nmae : </Text>
          <ShopNameTextfield 
            onChangeText={(shop_name) => this.setState({shop_name})}
            value={this.state.shop_name}
          />
        </View>
        <View style={styles.text_container}>
          <Text>Shop Place : </Text>
          <PlaceTextfield 
            onChangeText={(product) => this.setState({product})}
            value={this.state.product}
          />
        </View>
        <View style={styles.add_button}>
          <AddButton 
             onPress={() => this._handlePress()}
          />
        </View>
      </View>
    );
  }
});

export default AddShop;
