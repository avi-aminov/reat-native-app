import React, { useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ColorCounter from '../componants/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action)=>{
    // state === { red: number, green: number, blue: number }
    // action === { type: 'red || 'green' || 'blue', payload: 15 || -15}
    switch (action.type){
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) 
                    ? state : { ...state, red: state.red + action.payload };
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) 
                    ? state : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) 
                    ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const ColorScreenByReducer = () => {
 
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return (
        <View>
            <ColorCounter
                color="Red" 
                onIncrease={()=>{ dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) }}
                onDecrease={()=>{ dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) }}
            />

            <ColorCounter 
                color="Green" 
                onIncrease={()=>{ dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }}
                onDecrease={()=>{ dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) }}
            />
 
            <ColorCounter
                color="Blue" 
                onIncrease={()=>{ dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }}
                onDecrease={()=>{ dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) }}
            />

            <Text style={{ margin: 5, height: 50, width:50, backgroundColor:  `rgb(${state.red}, ${state.green}, ${state.blue})` }}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonMarging: {
        margin: 5,
    }
});

export default ColorScreenByReducer;