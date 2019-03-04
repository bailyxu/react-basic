import React,{Component} from 'react';

import {Text,Button,View} from 'react-native'

export default class Demo05Component extends Component{
  constructor(){
    super();
    //完成状态的初始化
    this.state = {
      count:0
    };
  }

  handlePress=()=>{
    //alert('btn is clicked');
    //针对状态中的数据做一个自增操作
    var nowCount = this.state.count;
    nowCount++;
    this.setState({count:nowCount});

  }

  render(){
    return <View>
      <Text>{this.state.count}</Text>
      <Button 
      onPress={this.handlePress} title='clickMe'>
      </Button>
    </View>
  }

}