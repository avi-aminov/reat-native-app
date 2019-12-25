import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action)=>{
    // state === { count: number }
    // action === { type: 'increase || 'decrease' , payload: 1}
    switch (action.type){
        case 'increase':
            return {...state, count: state.count + action.payload}
        case 'decrease':
            return {...state, count: state.count - action.payload}
        default:
            return state;
    }
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <View>
            <View style={styles.buttonMarging}>
                <Button title="Increase" onPress={()=>{
                    dispatch({type: 'increase', payload: 1})
                }}/>
            </View>

            <View style={styles.buttonMarging}>
                <Button title="Decrease" onPress={()=>{
                    dispatch({type: 'decrease', payload: 1})
                }}/>
            </View>

          <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonMarging: {
        margin: 5,
    }
});

export default CounterScreen;