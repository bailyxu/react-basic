import React,{Component} from 'react';
import {Button} from 'react-native';

export default class Demo04Component extends Component{
  
  handlePress(){
    console.log('btn is pressed');
  }

  render(){
    return <Button 
      onPress={this.handlePress}
      title='clickMe'>
    </Button>
  }
}