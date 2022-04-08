import React from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native'

function Input({placeholder, onType}) {
    return (
        <View style={styles.container}>
            <TextInput placeholder= {placeholder}
            onChangeText={(val)=> onType(val)} />
        </View>
    );
    
}
export {Input};

const styles =StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
});

