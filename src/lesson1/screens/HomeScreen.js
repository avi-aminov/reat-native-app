import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>

      <Text style={styles.text}>Home Screen</Text>

          <Text>
            Lesson 1
          </Text>

          <View style={styles.buttonMarging}>
            <Button style={styles.backgroundColor}
              title="Go to Listen Demo"
              onPress={()=>{
                navigation.navigate('Listen');
              }} 
            />
          </View>

          <View style={styles.buttonMarging}>
            <Button
              title="Go to Image Demo"
              onPress={()=>{
                navigation.navigate('ImageScreen');
              }} 
            />
          </View>

          <View style={styles.buttonMarging}>
            <Button
              title="Go to Counter Demo"
              onPress={()=>{
                navigation.navigate('Counter');
              }} 
            />
          </View>

          <View style={styles.buttonMarging}>
            <Button
              title="Go to Color By Reducer Demo"
              onPress={()=>{
                navigation.navigate('Color');
              }} 
            />
          </View>

          <View style={styles.buttonMarging}>
            <Button
              title="Go to Text Demo"
              onPress={()=>{
                navigation.navigate('Text');
              }} 
            />
          </View>



          <Text>
            Lesson 2
          </Text> 

          <View style={styles.buttonMarging}>
            <Button style={styles.backgroundColor}
              title="Go to Search Demo"
              onPress={()=>{
                navigation.navigate('Search');
              }}  
            />
          </View>



          <Text>
            Lesson 3
          </Text>
          
          <View style={styles.buttonMarging}>
            <Button style={styles.backgroundColor}
              title="Go to Blog Demo"
              onPress={()=>{
                navigation.navigate('Home');
              }}  
            />
          </View>


    </View>
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonMarging: {
    margin: 5,
  },
  buttonBG: {
    backgroundColor: '#ffffff',
    color: '#ffffff'
  }
});

export default HomeScreen;
