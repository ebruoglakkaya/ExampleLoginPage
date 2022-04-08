import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import {Input, Button} from './components';

function Main(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <Input placeholder = "E-posta adresiniz"/>
            <Input placeholder = "Parolanız.."/>
            <Button title="Giriş Yap"/>
            </View>
        </SafeAreaView>
    );
}

const styles =StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#c8e6c9',
    },
});

export default Main;