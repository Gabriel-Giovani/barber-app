import React, { useState, useContext } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText, RegisterMessageButton, RegisterMessageButtonText, RegisterMessageButtonTextBold } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';
import BarberLogo from '../../assets/barber.svg';
import LoginInput from '../../components/LoginInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    };

    const handleRegisterButtonCLick = async() => {
        if(name !== '' && email !== '' && password !== ''){
            await AsyncStorage.setItem('token', '123');

            navigation.reset({
                routes:[{name: 'MainTab'}]
            });
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
                    Icon={PersonIcon}
                    placeholder='Digite seu nome'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
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

                <CustomButton onPress={handleRegisterButtonCLick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <RegisterMessageButton onPress={handleMessageButtonClick}>
                <RegisterMessageButtonText>Já possui uma conta? </RegisterMessageButtonText>
                <RegisterMessageButtonTextBold>Faça login</RegisterMessageButtonTextBold>
            </RegisterMessageButton>
        </Container>
    );
};