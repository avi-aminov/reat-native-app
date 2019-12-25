import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue)=>{
                    setPassword(newValue)
                }}
            />
            {password.length < 4 ? <Text>password be must > 4 charecter</Text> : false}
        </View> 
    );
};

const styles = StyleSheet.create({
    inputStyle:{
        borderColor: '#000',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        fontSize: 18
    }
});

export default TextScreen;