import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #331A1A;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    margin-top: 30px;
    padding: 40px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #E07119;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #E6E6E6;
`;

export const RegisterMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const RegisterMessageButtonText = styled.Text`
    font-size: 16px;
    color: #E6E6E6;
`;

export const RegisterMessageButtonTextBold = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #E6E6E6;
`;