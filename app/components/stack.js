import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class MyStack extends Component {

  
  render() {
    return (
      <View key={this.props.keyval} tyle={styles.stack}>

         <Text style={styles.stackText}>{this.props.val.stack}</Text>
         <Text style={styles.stackText}>{this.props.val.push}</Text>

         <TouchableOpacity onpress={this.props.deleteMethod} style={styles.stackDelete}>
          <Text style={styles.stackDeleteText}>D</Text>
         </TouchableOpacity> 


      </View>

    );
  }
}

const styles = StyleSheet.create({
  stack:{
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#ededed',
  },
  stackText:{
    paddingLeft:20,
    borderBottomWidth:10,
    borderBottomColor:'#E91E63',
  },
  stackDelete:{
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2980b9',
    padding:10,
    top:10,
    bottom:10,
    right:10,
  },
  stackDeleteText:{
    color:'white',
  }


  
});
