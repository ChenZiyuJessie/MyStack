import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import stack from './app/components/stack';

export default class MyStack extends Component {

state={
  stackArray:[{'stack':'teststack 1'}],
  stackText:'',

  }

  render() {

     let stack=this.state.stackArray.map((val,key)=>{
      return <stack key={key} keyval={key} val={val} deleteMethod={()=>this.deletestack(key)}/>
     });


    return (
      <View style={styles.container}>

         <View style={styles.header}>
        <Text style={styles.headerText}> - MyStack - </Text>
        
        </View>

        <ScrollView style={styles.scrollContainer}>
             {stack}
        </ScrollView>
        
        <View style={styles.footer}>

          <TouchableOpacity style={styles.popButton}>
           <Text style={styles.popButtonText}>POP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pushButton}>
          <Text style={styles.pushButtonText}>PUSH</Text>
        </TouchableOpacity>

        <TextInput style={styles.textInput}
           placeholder='input text here' placeholderTextColor='white' underlineColorAndroid='transparent'>
           </TextInput>
      </View>


     </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  
  },
  header:{
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:26,

  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    bottom:0,
    left:0,
    right:0,
  },
  pushButton:{
    backgroundColor:'#E91E63',
    width:90,
    height:90,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom: -45,
    zIndex: 10,
    position:'absolute',
    left:20,
    top:10,

  },
  pushButtonText:{
    color:'#fff',
    fontSize:24,
  },
  popButton:{
    backgroundColor:'#E91E63',
    width:90,
    height:90,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8 ,
    marginBottom: -45,
    zIndex: 10,
    position:'absolute',
    right:20,
    top:10,

  },
  popButtonText:{
   color:'#fff',
    fontSize:24,
  },
  textInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    paddingTop:120,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
  }
  
});

AppRegistry.registerComponent('MyStack', () => MyStack);
