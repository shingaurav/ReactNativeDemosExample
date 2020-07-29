import React, { Component, } from 'react';
import { View, Text,StyleSheet ,TextInput ,Button,TouchableOpacity } from 'react-native';

 class foodForm extends Component {
    static navigationOptions = {
        title: 'Home',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#845cc3',
        },
      };
    
      state = {
        food: null,
        foodList:[]
      }


      submitFood =(food) => {
        this.setState(
          {
            foodList: [...this.state.foodList,{
              key : Math.random(),
              name : food
            }]
          }
        )
      }



      deleteFood = (key) => {
        this.setState({
          foodList: [...this.state.foodList.filter((item)=>
          item.key !== key)]
        }
         
        )
      }
  render() {
    return (
      <View style = {styles.container}>
         <Text style={styles.title}>Enter your Food Name here !!</Text>
        <TextInput
        style = {styles.foodInput}
          value={this.state.food}
          placeholder='Name'
          style={styles.foodInput}
          onChangeText={(food) => this.setState({ food })}
        />
      <TouchableOpacity
          style={{ marginBottom: 16 ,backgroundColor:'blue',borderWidth:1,borderRadius:10 }}
       
        onPress={()=> this.submitFood(this.state.food)}>
        <Text style={{ fontSize: 22, color: '#5fc9f8',padding:10 }}>Submit</Text>
       
        </TouchableOpacity>
        <TouchableOpacity
         style={{ marginBottom: 16,backgroundColor:'grey',borderWidth:1,borderRadius:10  }}
      
        onPress ={() => this.props.navigation.navigate("Foodlist",
        {
          foodList :this.state.foodList,
          deleteFood: this.deleteFood
        })}>
           <Text style={{ fontSize: 22,padding:10   }}>Go to FoodList</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 24,
      marginBottom: 48
    },
    foodInput: {
      fontSize: 32,
      marginBottom: 32,
      borderWidth: 1,
      padding: 8,
      width: '80%',
      borderRadius: 10,
    }
  });
  
  
export default foodForm;