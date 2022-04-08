import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button(props) {
    return(
        <TouchableOpacity 
        style={styles['${props.variant}_container']}
        onPress={props.onClick}
        >
            <Text style={styles['${props.variant}_title']}>{props.title}</Text>
        </TouchableOpacity>
    );
    
}
export {Button};

const styles = StyleSheet.create({
    sign_in_container: {
        backgroundColor: '#8bc34a',
        padding: 5,
        margin: 15,
        borderRadius: 5,
    },
    sign_in_title: {
        color:'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    sign_up_container: {
        padding: 5,
        margin: 15,
    },
    sign_up_title: {
        color:'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});