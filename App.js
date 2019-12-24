import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';

import HomeScreen from './src/screens/HomeScreen';


const navigator = createStackNavigator({
  Home: HomeScreen,
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Client Management',
  }
});

const App = createAppContainer(navigator);

export default ()=>{
  return (
    <BlogProvider> 
      <App />
    </BlogProvider>
  )
};

