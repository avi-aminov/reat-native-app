import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return (
        <View>
            <Text>{color}</Text>
            <View style={styles.buttonMarging}>
                <Button 
                    title={`Add More ${color}`} 
                    onPress={()=>{ onIncrease() }}
                />
            </View>

            <View style={styles.buttonMarging}>
                <Button 
                    title={`Add Less ${color}`}
                    onPress={()=>{ onDecrease() }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonMarging: {
        margin: 5,
    }
});

export default ColorCounter;