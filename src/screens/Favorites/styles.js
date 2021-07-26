import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #331A1A;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 27px;
    z-index: 9;
`;

export const Header = styled.View`
    flex: 1;
    margin-left: 30px;
    margin-top: 15px;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;