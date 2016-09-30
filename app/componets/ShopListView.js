import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ListView,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { 
  filterSHOP
} from '../action/action';

import Icon from 'react-native-vector-icons/FontAwesome';

import Shop from './Shop';
import Deatil from './DeatilShop';

class ShopListView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })

    };
    
    if (this.props.shops) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(
        this.getShopsWithTemplate(this.props.shops));
    } 

  }
  getShopsWithTemplate(shops) {
    return shops.concat([{template: true}]);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.shops !== this.props.shops) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          this.getShopsWithTemplate(nextProps.shops)
        )
      });
    }
  }

  _setshopID(shop_ID) {
    const { dispatch } = this.props;
    dispatch(filterSHOP(shop_ID));    
  }

  renderEntry(entry, sectionID: number, rowID: number){
    if (entry.template) { return <View /> }
  
    return(     
        <View style={styles.shop}>
          <Shop 
            {...entry} 
            rowID = {rowID}
            onAddClick = { () => this._setshopID(entry.shop_ID) }
          />
        </View>
    );
  }
  render() {
    return(
      <ScrollView>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderEntry.bind(this)}
        />
      </ScrollView>
    );
  }

}

ShopListView.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({
    shop_name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

var width = Dimensions.get('window').width;

var styles = StyleSheet.create({
  container: {
    top: 65
  },
  shop: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    marginBottom: 1,
    width: width,
    height: 70
  }
})

const mapStateToProps = (state) => {
  return {
    shops: state.shops
  }
}

export default connect(mapStateToProps)(ShopListView);