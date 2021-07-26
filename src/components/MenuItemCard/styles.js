import React from 'react';
import styled from 'styled-components/native';

export const ProfileMenuItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: #FFF;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const ProfileMenuItemIcon = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 20px;
`;

export const ProfileMenuItemTextContent = styled.View`
    
`;

export const ProfileMenuItemText = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const ProfileMenuItemTextTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const ProfileMenuItemTextSub = styled.Text`
    color: #777;
`;

export const ProfileMenuItemQtd = styled.View`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
    background-color: red;
`;

export const ProfileMenuItemQtdText = styled.Text`
    font-weight: bold;
    color: #FFF;
`;