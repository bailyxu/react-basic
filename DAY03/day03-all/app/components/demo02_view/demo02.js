import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Demo02Component extends Component{
  render(){
    return <View>
      <Text style={{color:'red'}}>hello</Text>
      <Text style={myStyles.myText}>reactNative</Text>
    </View>
  }
}

const myStyles = StyleSheet.create({
   myText:{
     color:'blue',
     fontSize:25
   }
})
