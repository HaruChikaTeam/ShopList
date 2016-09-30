import React, { Component, PropTypes  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  ScrollView
} from 'react-native';
import {
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme
} from 'react-native-material-kit';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

setTheme({checkboxStyle: {
  fillColor: MKColor.Pink,
  borderOnColor: MKColor.Pink,
  borderOffColor: MKColor.Pink,
  rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
}});

class ProductList extends Component{

  constructor(props) {
    super(props);
    
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    
    if (this.props.products) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(
        this.getShopsWithTemplate(this.props.products));
    } 

  }

  getShopsWithTemplate(products) {
    return products.concat([{template: true}]);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.products !== this.props.products) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          this.getShopsWithTemplate(nextProps.products)
        )
      });
    }
  }

  _onChecked(event, price) {
    var product_price = Number(price);
    console.log(product_price,product_price !== product_price);
    if(product_price === product_price){
      if (event.checked) {
        this.props.addPirce(product_price);
      } else {
        this.props.addPirce(- product_price);
      }    
    }
  }

  renderProducts(product, sectionID: number, rowID: number ) {
    if (product.template) { return <View /> }
      return (
        <View style={styles.product_container}>
          <View style={styles.name_container}>
            <Text style={styles.product_name}>{product.product_name}</Text>
          </View>
          <View style={styles.price_container}>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          <View style={styles.checkbox}>
            <MKCheckbox 
              onCheckedChange={(event) => this._onChecked(event, product.price)}
            />
          </View>
        </View>
      );
    
  }

  render(){
    return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderProducts.bind(this)}
        />
    );
  }
};

var width = Dimensions.get('window').width; //full width

const getProductFilter = (state) => {
  return {
    products: state.products.filter(product => {
      if(product.shop_ID === state.filtersShop.productsOfShop) {        
        return true; 
      }
    })
  }
}

var styles = StyleSheet.create({
  product_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightsalmon',
    marginBottom: 1,
    width: width,
    height: 50
  },
  name_container: {
    flex: 4,
    marginLeft: 10,
    justifyContent: 'center',
  },
  product_name: {
    color: "white",
    fontSize: 20,
  },
  price_container: {
    flex: 2,
    justifyContent: 'center',
  },
  price: {
    color: "white",
    fontSize: 20,
  },
  checkbox: {
    flex: 1,
    margin: 5
  }
})

export default connect(getProductFilter)(ProductList);