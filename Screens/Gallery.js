import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {Icon, Card, ListItem, Button } from 'react-native-elements'

export default class Gallery extends React.Component {
    static navigationOptions = {
        title: 'Gallery'
    };

    constructor (props) {
      super(props);
  
      this.state = {
        isLoading: true,
        images: [],
        errors: null,
      };
    }

    componentDidMount () {
      fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
        .then(res=> res.json())
        .then(images => {
          this.setState({
            isLoading:false,
            images
          });
        })
        .catch(errors => {
          this.setState({
            isLoading:false,
            errors
          })
          console.log(errors)
          
        })
        
    }
    renderLander(){
      var {navigate} = this.props.navigation;
      return (
        
        <ScrollView>
        <View style={styles.container}>
          {this.state.images.map((userData) => {
            return(
              <TouchableOpacity key={userData.id} onPress={() => navigate("Photo", {url:userData.urls.full})}>
              <Card >
                <Image  style={styles.image} source={{uri:userData.urls.full}} />
                <View style={styles.text}>
                <Icon name='camera'/><Text style={styles.text}>{userData.user.username}</Text>
                </View>  
              </Card>
              </TouchableOpacity>
            )
          })}
          </View>
          </ScrollView>
      )
    }
  
    renderError(){
      return
        (
          <Card key={userData.id} >
                <Icon name='error'/>
                <Text style={styles.text}>{this.state.errors}</Text>
              </Card>
        )
    }
    render() {
      return (
        <SafeAreaView style={styles.safeArea}>  
        {this.renderLander()}
      </SafeAreaView>    
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      marginLeft: 3,
      marginBottom: 5,
      width: 150,
      height: 150,
      alignSelf: 'center'
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#ddd'
    },
    text: {
      flexDirection: 'row',
      alignSelf:'center'
    }
  });
  