import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Dimensions,
  Modal
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { 
  addPRODUCT
} from '../action/action';
import AddProduct from '../componets/AddProduct';

class ProductModalAdd extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  addproduct(shop_ID, shop_name, product){
    const { dispatch } = this.props;
    dispatch(addPRODUCT(shop_ID, shop_name, product));
    this.setModalVisible(!this.state.modalVisible);
  }

   render(){
    return(
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
        >
         <View style={styles.container}>
      
          <View style={styles.main}>
            
            <AddProduct
              onAddClick={(shop_name, product) =>
               this.addproduct(this.props.shop.shop_ID, shop_name, product)
              }
            />

          </View>
          <View style={styles.times_circle}>
            <TouchableHighlight
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <View>
               <Icon name="times-circle" size={50} color="#FF4081" />
              </View>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>

        <View style={styles.mesagee}>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
            <View>
              <View style={styles.plus_icon}>
                <Icon name="plus" size={40} color="white" />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  main:{
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  times_circle: {
    position: 'absolute',
    right: 10,
    top: width / 2 - 10

  },
  mesagee: {

  },
  add_titile: {
    color: "white",
    fontSize: 10,
  },
  plus_icon: {
    marginLeft: 15
  }

});

export default connect()(ProductModalAdd);