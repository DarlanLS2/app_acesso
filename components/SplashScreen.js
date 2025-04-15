import React, {useEffect} from 'react';
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => { 
            navigation.replace('Login)');
        }, 4000);
        
        return () => clearTimeout(timer);
    }, [navigation]);
    
    return (
        <View style={StyleSheet.splashContainer}>
            <Image source={{uri: 'https://www.google.com/imgres?q=cachorro%20de%20oculos%20meme&imgurl=https%3A%2F%2Fi.pinimg.com%2F236x%2Ff5%2F83%2Fbd%2Ff583bd4417533fa9d624981a9a33ec36.jpg&imgrefurl=https%3A%2F%2Fbr.pinterest.com%2Fvinicius4k%2Farte%2F&docid=tCf4oueW0Ft6SM&tbnid=GctHIz7XIBtBJM&vet=12ahUKEwiAhp6O5diMAxWspZUCHaebCmkQM3oECBYQAA..i&w=236&h=235&hcb=2&ved=2ahUKEwiAhp6O5diMAxWspZUCHaebCmkQM3oECBYQAA'}} style={styles.splashImage}/>
            <ActivityIndicator size="large" color="#0000ff" style={styles.loader}/>
        </View>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
})

export default SplashScreen;