import React, { useState, useContext } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText, RegisterMessageButton, RegisterMessageButtonText, RegisterMessageButtonTextBold } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';
import BarberLogo from '../../assets/barber.svg';
import LoginInput from '../../components/LoginInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Register' }]
        });
    };

    const handleLoginButtonCLick = async() => {
        if(email !== '' && password !== ''){
            if(email === 'user@user.com' && password === 'user123'){
                await AsyncStorage.setItem('token', '123');

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                });
            } else
                alert('E-mail e/ou senha incorreto(s)!');
        } else
            alert('Preencha os campos!');
    };

    return (
        <Container>
            <BarberLogo
                width='100%'
                height='160'
            />

            <InputArea>
                <LoginInput
                    Icon={EmailIcon}
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <LoginInput
                    Icon={LockIcon}
                    placeholder='Digite sua senha'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    password
                />

                <CustomButton onPress={handleLoginButtonCLick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <RegisterMessageButton onPress={handleMessageButtonClick}>
                <RegisterMessageButtonText>Ainda não possui uma conta? </RegisterMessageButtonText>
                <RegisterMessageButtonTextBold>Cadastre-se</RegisterMessageButtonTextBold>
            </RegisterMessageButton>
        </Container>
    );
};