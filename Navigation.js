
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import getApi from "./src/getApi";
import Foodlist from "./src/Foodlist";
import foodForm from "./src/foodForm";
class Navigation extends React.Component {
    render() {
     
      return <NavigationComponents />;
    }
  }
  const RootStack = createStackNavigator({
    foodForm: {
      screen: foodForm,
      },

    postScreen: {
      screen: getApi,
      navigationOptions: { header: null }
     },
   

    
    

     Foodlist: {
      screen: Foodlist,
     
     }

    
    });

    const NavigationComponents = createAppContainer(RootStack);
    export default Navigation;