import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../componants/ImageDetail';


const ImageScreen = () => {

    return (
        <View>
            <ImageDetail 
                title="beach" 
                imageSource={require('../../../assets/beach.jpg')}
                score={5}
            />
            <ImageDetail 
                title="forest" 
                imageSource={require('../../../assets/forest.jpg')}
                score={7}
            />
            <ImageDetail 
                title="mountain" 
                imageSource={require('../../../assets/mountain.jpg')}
                score={10}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;

