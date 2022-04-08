import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from "react-native";

import {Input, Button} from './components';

function Main(props) {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signIn() {
        alert(email)
    } 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image 
                style={styles.image}
                source={require('./assets/cart.png')}
                resizeMode="contain"
                />
            <Input
             placeholder = "E-posta adresiniz" 
             onType={(text) => setEmail(text)}
             />
            <Input 
            placeholder = "Parolanız.."
            onType={(text) => setPassword(text)}

            />
            <Button title="Giriş Yap" variant="sign_in" onClick={signIn}/>
            <Button title="Kayıt Ol" variant="sign_up" onClick={signIn}/>
            </View>
        </SafeAreaView>
    );
}

const styles =StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#c8e6c9',
    },
    image: {
        height: Dimensions.get('window').height * 0.3,
        // width: Dimensions.get('window').width,
        marginVertical: 20,
    },
});

export default Main;