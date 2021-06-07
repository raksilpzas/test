// components/login.js

import React, { Component } from 'react';
import { Text, View,ScrollView,Image,Dimensions,ActivityIndicator,Linking } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const image =[
  {"link":'http://pngimg.com/uploads/youtube/youtube_PNG22.png'
  ,"Web":'https://www.youtube.com/watch?v=AJEoJYgktb4'},
  {"link":'https://www.tripgether.com/wp-content/uploads/2021/01/MAPS-APK-1024x536.jpg'
  ,"Web":'google.navigation:q="nilecon"'},
  {"link":'https://variety.com/wp-content/uploads/2017/04/dailymotion1.png?resize=681,383'
  ,"Web":'https://www.dailymotion.com/video/x6eoldf'},

]
//https://www.google.co.th/maps
//https://www.google.com/maps/search/?api=1&query=address
//https://www.google.co.th/maps/dir/13.7885904,100.3300217/Nilecon+Thailand+Co.,+Ltd.+202+Leconcord+Tower+(2001+%E0%B8%96.+%E0%B8%A3%E0%B8%B1%E0%B8%8A%E0%B8%94%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B9%80%E0%B8%A9%E0%B8%81+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10310/@13.8035529,100.3827179,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x30e29dfd99764f5f:0xb3dfe1f5381377ee!2m2!1d100.5739769!2d13.7760766!3e0

const {width} = Dimensions.get("window");
const height = width*0.5;

export default class Homepage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
     
     
    }
  }
  
  render() {
    return (
    
      <View style={{alignContent:'center',alignItems:'center',marginVertical:200}} > 
        <ScrollView pagingEnabled horizontal style={{width,height}}>
          
        {
          image.map((item,i)=>(
            <TouchableHighlight onPress={() => Linking.openURL(item.Web)}>
              <Image key={i} source={{uri: item.link}}
                style={{height,width,resizeMode:'cover'}}
              
              />
            </TouchableHighlight>

            )
          )
        }
        

         
         </ScrollView>
        
        <View>
          <Text>เลื่อนแล้วกด</Text>
        </View>

        
                                    
      </View>
    
    );
  }
}

