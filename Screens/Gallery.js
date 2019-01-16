import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Card, ListItem, Button } from 'react-native-elements'
import { getPhotos } from '../redux/store';
//import connect method connecting your component to have access to redux state and dispatchers
import { connect } from 'react-redux';


class Gallery extends React.Component {
  static navigationOptions = {
      title: 'Gallery'
  };
  componentDidMount() {
    //Dispatch your dispatcher
    this.props.getPhotos();

  }
  render() {
    const { navigate } = this.props.navigation;
    const { photos, loading } = this.props;
    if (!loading) {
      return (
        <SafeAreaView style={styles.safeArea}>
          <ScrollView>
            <View style={styles.container}>
              {photos.map((photo, i) => {
                return (
                   <TouchableOpacity key={i} onPress={() => navigate("Photo", {url:photo.urls.full})}>
                    <Card >
                      <Image style={styles.image} source={{ uri: photo.urls.small }} />
                      <View style={styles.text}>
                        <Icon name='camera' /><Text style={styles.text}>{photo.user.username}</Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                )
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else{
      return(
        <View style={styles.container}><Text>Loading.........</Text></View>
        
      )
    }
  }
}
//Map the redux state to your props.
const mapStateToProps = state => ({
  photos: state.photos,
  loading: state.loading,
})

//Map your action creators to your props.
const mapDispatchToProps = {
  getPhotos,
}

//export your list as a default export 
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
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
    alignSelf: 'center'
  }
});
