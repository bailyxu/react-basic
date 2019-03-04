import React,{Component} from 'react';
import {View,Image} from 'react-native';
//  <img src=""/>
export default class Demo03Component extends Component{
  constructor(){
    super();
    //状态的初始化
    this.state = {
      imgUrl:'http://172.163.100.139/ajia_code/img/product/lg/57ad8846N64ac3c79.jpg',
      imgName:'img/product/lg/57ad8846N64ac3c79.jpg',
      myImgName:'1.jpg'
    };
  }

  render(){
    return <View>
      <Image 
      style={{width:60,height:60}}
      source={require('../../1.jpg')} ></Image>
    
      <Image 
       style={{width:60,height:60}}
       source={{uri:this.state.imgUrl}}>
      </Image>

      <Image 
       style={{width:60,height:60}}
       source={{uri:'http://172.163.100.139/ajia_code/'+this.state.imgName}}></Image>
    </View>
  }
}