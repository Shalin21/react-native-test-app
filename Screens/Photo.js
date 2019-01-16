import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
export default class Gallery extends React.Component {

  static navigationOptions = {
    title: 'Photo'
  };

  render() {
    var { params } = this.props.navigation.state;
    return (

      <Image resizeMode='contain' style={styles.image} source={{ uri: params.url }} indicator={ProgressBar} ></Image>


    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: null,
  }
});
