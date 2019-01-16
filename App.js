import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Gallery from './Screens/Gallery'
import Photo from './Screens/Photo'

const Navigation = createStackNavigator({
    Gallery: {screen: Gallery},
    Photo: {screen: Photo}
});

export default createAppContainer(Navigation);