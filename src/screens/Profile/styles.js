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

export const UserInfo = styled.View`
    margin-top: 20px;
    padding: 10px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const WelcomeUserText = styled.View`
    
`;

export const WelcomeText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const UserNameText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const UserAvatar = styled.View`
    
`;

export const UserPhoto = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Favorites = styled.View`
    margin-bottom: 10px;
`;

export const FavoritesTitle = styled.Text`
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;

export const LogoutButton = styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(224, 113, 25, .5);
`;

export const LogoutButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const ProfileMenu = styled.View`
    margin-top: 30px;
`;