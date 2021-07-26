import React from 'react';
import { Area, Avatar, InfoArea, UserName, SeeProfileButton, SeeProfileButtonText } from './styles';
import StarsNote from '../StarsNote';
import { useNavigation } from '@react-navigation/native'

export default ({data}) => {
    const navigation = useNavigation();

    const handleBarberClick = () => {
        navigation.navigate('Barber', {
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            stars: data.stars
        });
    };

    return(
        <Area onPress={handleBarberClick}>
            <Avatar source={data.avatar} />
            <InfoArea>
                <UserName>{data.name}</UserName>
                <StarsNote stars={data.stars} showNumber={true} />
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}