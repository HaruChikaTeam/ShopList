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

import Button from 'react-native-button';

import { Actions } from 'react-native-router-flux';

var styles = StyleSheet.create({
  text_container: {
    margin: 20,
    height: 40, 
    width: 250
  },
  productfield: {
    height: 28,  // have to do it on iOS
    margin: 5
  },
  pextfieldWithFloatingLabel: {
    height: 28,  // have to do it on iOS
    margin: 5,
  },
  price_input: {
    margin: 20
  },
  add_button: {
    margin: 15,
  }
});

const ProductTextfield = mdl.Textfield.textfield()
  .withPlaceholder('Shop Name...')
  .withStyle(styles.productfield)
  .withTintColor(MKColor.DeepOrange)
  .withTextInputStyle({color: MKColor.DeepOrange})
  .build();

const PriceTextfield = MKTextField.textfield()
  .withPlaceholder('Pirce...')
  .withStyle(styles.productfield)
  .withTintColor(MKColor.DeepOrange)
  .withTextInputStyle({color: MKColor.DeepOrange})
  .withKeyboardType('numeric')
  .build();

const AddButton = MKButton.accentColoredButton()
  .withText('Add')
  .build();

var AddProduct = React.createClass({

  propTypes: {
    onAddClick: React.PropTypes.func.isRequired
  },

  componentDidMount: function() {
    setTimeout((() => {
      if (this.refs.defaultInput) {
        this.refs.defaultInput.focus();
      }
    }), 1000);
  },

  getInitialState: function() {
    return { 
      product: "",
      price: ""
    };
  },

  _handlePress: function(){
    if (this.state.product !== "" && this.state.price !== "") {
      this.props.onAddClick(this.state.product, this.state.price);
      this.setState({product: "", price: ""});
    } 
  },

  render: function() {
    return(
      <View>
        <View style={styles.text_container}>
          <Text>Product Nmae : </Text>
          <ProductTextfield 
            onChangeText={(product) => this.setState({product})}
            value={this.state.product}
          />
        </View>
        <View style={styles.text_container}>
          <Text>Price : </Text>
          <View>
            <PriceTextfield 
              onChangeText={(price) => this.setState({price})}
              value={this.state.price}
            />
          </View>
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

export default AddProduct;
