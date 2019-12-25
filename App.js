import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import IndexPage from './src/lesson1/screens/HomeScreen';
import ListScreen from './src/lesson1/screens/ListScreen';
import ImageScreen from './src/lesson1/screens/ImageScreen';
import CounterScreen from './src/lesson1/screens/CounterScreen';
import ColorScreenByReducer from './src/lesson1/screens/ColorScreenByReducer';
import TextScreen from './src/lesson1/screens/TextScreen';


import SearchScreen from './src/lesson2/screens/SearchScreen';
import ResultShowScreen from './src/lesson2/screens/ResultShowScreen';
import ReviewsShowScreen from './src/lesson2/screens/ReviewsShowScreen';


import { BlogProvider } from './src/lesson3/context/BlogContext';
import HomeScreen from './src/lesson3/screens/HomeScreen';


const navigator = createStackNavigator({
  index: IndexPage,
  Home: HomeScreen,
  Listen: ListScreen,
  ImageScreen: ImageScreen,
  Counter: CounterScreen,
  Color: ColorScreenByReducer,
  Text: TextScreen,
  Search: SearchScreen,
  ResultShow: ResultShowScreen,
  Reviews: ReviewsShowScreen,
},{
  initialRouteName: 'index',
  defaultNavigationOptions: {
    title: 'Tutorial',
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

