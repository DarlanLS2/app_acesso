import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={StyleSheet.container}>
        <Text>Bem0-vindo!</Text>
        <Image source={{uri: ''}} style={StyleSheet.image}/>
        <Button title="Perfil" onPress={() => navigation.navigate('Perfil')}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 20 
    }
});

export default HomeScreen;