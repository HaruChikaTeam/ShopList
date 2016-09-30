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
  editSHOP
} from '../action/action';
import AddShop from '../componets/AddShop';

class ShopModalEdit extends Component{

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  editshop(shop_ID, shop, place){
    const { dispatch } = this.props;
    dispatch(editSHOP(shop_ID, shop, place));
    this.setModalVisible(!this.state.modalVisible);
  }

   render(){
    return(
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
        >
         <View style={styles.container}>
          <View style={styles.main}>
            
            <AddShop
              onAddClick={(shop_name, place) =>
               this.editshop(this.props.shop.rowID, shop_name, place)
              }
            />

          </View>
         </View>
        </Modal>

        <View style={styles.mesagee}>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
            <View>
              <View style={styles.plus_icon}>
                <Icon name="pencil" size={40} color="white" />
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  mesagee: {

  },
  add_titile: {
    color: "white",
    fontSize: 10,
  },
  plus_icon: {
    margin: 5
  }

});

export default connect()(ShopModalEdit);