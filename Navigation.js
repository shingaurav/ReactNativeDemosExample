
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import getApi from "./src/getApi";
class Navigation extends React.Component {
    render() {
     
      return <NavigationComponents />;
    }
  }
  const RootStack = createStackNavigator({
    
    postScreen: {
      screen: getApi,
      navigationOptions: { header: null }
     },


    });

    const NavigationComponents = createAppContainer(RootStack);
    export default Navigation;