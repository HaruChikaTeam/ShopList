import React, { Component, PropTypes  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  TouchableHighlight,
  Modal,
  ScrollView
} from 'react-native';
import { 
  editSHOP,
  deleteSHOP
} from '../action/action';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import ProductModalAdd from './ProductModalAdd';
import ShopModalEdit from './ShopModalEdit';
import ProductList from './ProductList';


class DetailShop extends Component{

  constructor(props) {
    super(props);

    this.state = { total_price: 0 };
  }

  totalPrice(price : number){
    this.setState({
      total_price : this.state.total_price += price
    });
  }

  deleteshop(){
    const { dispatch } = this.props;

    dispatch(deleteSHOP(this.props.shop.shop_ID, this.props.shop.rowID));
    Actions.pop();
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.product_container}>
          <ScrollView>
            <View style={styles.shop_modal}>
              <View style={styles.shop}>
                <ShopModalEdit
                  {...this.props}
                />
              </View>

              <View style={styles.addproduct}>
                <ProductModalAdd 
                  {...this.props}
                />
              </View>
            </View>
            <View style={styles.product}>
              <View style={styles.shop}>
                <Text style={styles.shop_adress}>Product/Price</Text>
              </View>
            </View>
            <View>
              <ProductList 
                shop_ID = {this.props.shop.shop_ID}
                addPirce={(price) => this.totalPrice(price)}       
              />
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.total}>
          <TouchableHighlight
            onPress={() => this.deleteshop()}
          >
            <View style={styles.total_icon}>
              <Icon name="trash" size={32} color="white" />
            </View>
          </TouchableHighlight>
          <View style={styles.tatal_shop}>
            <Text style={styles.shop_name}>Total :{this.state.total_price}</Text>
          </View>
        </View>

      </View>
      
    );
  }
};

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var styles = StyleSheet.create({
  container: {
    top: 64,
    flex: 1
  },
  product_container: {
    flex: 6
  },
  shop_modal: {
    flexDirection: 'row',
    backgroundColor: 'cadetblue',
    marginBottom: 1,
    width: width,
    height: 50
  },
  icon: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shop:{
    flex: 4,
    justifyContent: 'center',
  },
  product: {
    backgroundColor: 'yellowgreen',
    marginBottom: 1,
    padding: 10,
    width: width,
    height: 25
  },
  total: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellowgreen',
    marginBottom: 1,
    padding: 10,
    width: width,
    height: 20
  },
  tatal_icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tatal_shop: {
    flex: 4,
    alignItems: 'flex-end',
    margin: 5
  },
  addproduct:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shop_name: {
    color: "white",
    fontSize: 20,
    marginBottom: 2,
  },
  shop_adress: {
    color: "white",
    fontSize: 15
  },

});

export default connect()(DetailShop);