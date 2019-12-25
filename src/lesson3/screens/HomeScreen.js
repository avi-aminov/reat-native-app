import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import BlogContext from '../context/BlogContext';

const HomeScreen = () => {
    
    const {data, addBlogPosts} = useContext(BlogContext);

    return (
        <View>
            <Text>Home Screen </Text>
            <Text onPress={()=>{addBlogPosts()}}>Add Blog</Text>
            <FlatList 
                data={data}
                keyExtractor = {blogPost => blogPost.title}
                renderItem = {( { item } ) => {
                    return (
                        <Text>
                            {item.title}
                        </Text>
                    )
                }}
            />
        </View>
    );
}; 

const styles = StyleSheet.create({
    
});

export default HomeScreen;