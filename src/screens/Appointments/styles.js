import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #331A1A;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const AppointmentAgain = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFF;
`;

export const AppointmentAgainTitle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AppointmentAgainText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const AppointmentAgainBarberAvatar = styled.Image`
    width: 60px;
    height: 60px;
`;

export const AppointmentDetails = styled.View`
`;

export const AppointmentDetailsText = styled.Text`
    font-size: 16px;
    color: #777;
    margin-bottom: 5px;
`;

export const AppointmentAgainButton = styled.TouchableOpacity`
    margin-top: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #E07119;

`;

export const AppointmentAgainButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;

export const ListTitle = styled.Text`
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;