import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #331A1A;
`;

export const SearchArea = styled.View`
    background-color: #FFF;
    height: 40px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin: 10px 10px 10px 30px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #999;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 27px;
    z-index: 9;
`;