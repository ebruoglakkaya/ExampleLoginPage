import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button(props) {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
    
}
export {Button};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8bc34a',
        padding: 5,
        margin: 15,
        borderRadius: 5,
    },
    title: {
        color:'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});