import React, {PureComponent} from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Gallery from './Screens/Gallery'
import Photo from './Screens/Photo'
import reducer from './redux/reducer'
import { createStackNavigator, createAppContainer, StackActions, addNavigationHelpers } from 'react-navigation';

const Stack = createStackNavigator({
   Gallery:{screen: Gallery},
   Photo:{screen: Photo}
  });

export default class App extends React.Component {
  store = createStore(reducer, applyMiddleware(thunk));
  render() {
    return (
      <Provider store={this.store}>
        <Stack></Stack>
      </Provider>
    );
  }
}

