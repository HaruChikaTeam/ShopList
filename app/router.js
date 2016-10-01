import React, { Component } from 'react';
import {
  Actions, 
  Scene, 
  Router, 
  NavBar,
  TabBar
} from 'react-native-router-flux';

import ShopList from './componets/ShopList';
import ShopAdd from './componets/ShopAdd';
import showShop from './componets/DeatilShop';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Shop"  
           navigationBarStyle={{backgroundColor:'yellowgreen'}} 
           titleStyle={{color:'snow'}}>
      <Scene key="list" 
             component={ShopList} 
             title="Shop List" 
             initial={true} />
      <Scene key="add" 
              component={ShopAdd} 
              title="Shop Add" />
      <Scene key="detail"
             component={showShop} 
             title="Shop Detail" />
    </Scene>
  </Scene>
);

export default scenes;