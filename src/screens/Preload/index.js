import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import BarberLogo from '../../assets/barber.svg';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');

        if(!token){
            navigation.navigate('Login');
        } else{
            await AsyncStorage.setItem('token', 'token123');

            navigation.reset({
                routes:[{name: 'MainTab'}]
            });
        }
    };

    return (
        <Container>
            <BarberLogo
                width='100%'
                height='160'
            />
            <LoadingIcon
                size='large'
                color='#FFF'
            />
        </Container>
    );
};