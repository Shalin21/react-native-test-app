import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Gallery extends React.Component {
    constructor (props) {
      super(props);
  
    }
    
    render() {
      var {params} = this.props.navigation.state;
      return (
        <Image style={styles.image} source={{uri:params.url}}></Image>     
      )
      }
  }
  
  const styles = StyleSheet.create({
    image:{
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
    }
  });
  