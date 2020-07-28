/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Navigation from './Navigation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource : []
    }  }

  //    componentDidMount() {

  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource : responseJson
  //       })
  //     })
  //     .catch(error => console.log(error))
  //     }  



  //     render(){

  //    return(
  //         <View style = {{padding : 10 ,flex :1 ,backgroundColor :'pink'}}>
  //          <FlatList
  //          padding ={30}
  //          data = {this.state.dataSource}
  //            renderItem = {({item}) => 
  //                 <View style = {{height : 50}}>
  //                   <Text style = {{height : 50}}>{item.name}</Text> 
  //                    </View>
  //            }
             
             
  //            ></FlatList>
            
  //         </View>
  //    )

  //     }
  // }

  //  componentDidMount(){
  //    axios.get("https://jsonplaceholder.typicode.com/users")
  //         .then(response => {
  //           console.log("this is our response" , response.data);
  //           this.setState({
  //                  dataSource : response.data
  //           })
          

  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
     
  //       }
  render(){
    return (
      <View style = {{flex :1}}>
               {/* <FlatList
               padding ={30}
               data = {this.state.dataSource}
                 renderItem = {({item}) => 
                      <View style = {{height : 200}}>
                        <Text style = {{height : 50,}}>{item.id}</Text> 
                        <Text style = {{height : 50,marginTop:2}}>{item.name}</Text> 
                        <Text style = {{height : 50,marginTop:20}}>{item.username}</Text> 
                        <Text style = {{height : 50,marginTop:20}}>{item.phone}</Text> 
                         </View>
                 }
                 
                 
                 ></FlatList> */}
                <Navigation />
              </View>
    )
  }
}
export default App;
