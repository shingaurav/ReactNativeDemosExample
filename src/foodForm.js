import React, { Component, } from 'react';
import { View, Text,StyleSheet ,TextInput ,ImageBackground,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {addFood} from './actions/food'
 class foodForm extends Component {
  
    
      state = {
        food: null,
       
      }




  render() {
    return (
      <ImageBackground style = {styles.container}
      source ={require('./images/fl.png')}>
         <Text style={styles.title}>Enter your Food Name here !!</Text>
        <TextInput
        style = {styles.foodInput}
          value={this.state.food}
          placeholder='Name'
          color={"white"}
          placeholderTextColor="white" 
          style={styles.foodInput}
          onChangeText={(food) => this.setState({ food })}
        />
      <TouchableOpacity
          style={{ marginBottom: 16 ,backgroundColor:'blue',borderWidth:1,borderRadius:10 }}
       
        onPress={()=> {this.props.add(this.state.food)}}>
        <Text style={{ fontSize: 22, color: '#5fc9f8',padding:10 }}>Submit</Text>
       
        </TouchableOpacity>
        <TouchableOpacity
         style={{ marginBottom: 16,backgroundColor:'grey',borderWidth:1,borderRadius:10  }}
      
        onPress ={() => this.props.navigation.navigate("Foodlist")}>
           <Text style={{ fontSize: 22,padding:10   }}>Go to FoodList</Text>
      </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 28,
      marginBottom: 48,
      color :'white'
    },
    foodInput: {
      fontSize: 32,
      marginBottom: 32,
      borderWidth: 3,
      padding: 8,
      width: '80%',
      borderRadius: 10,
      borderColor:'white'
    }
  });
  const mapStateToProps = (state) => {
    console.log(state);
    return {
    foods : state.foodReducer.foodList
    }
   }
  const mapDispatchtoProps = (dispatch) => {
    return{
      add : (food) => dispatch(addFood(food))
    }
   }
   
  
  export default connect(mapStateToProps , mapDispatchtoProps) (foodForm);