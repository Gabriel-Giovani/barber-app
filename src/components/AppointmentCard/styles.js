import React from 'react';
import styled from 'styled-components/native';

export const AppointmentCard = styled.View`
    background-color: #FFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
`;

export const BarberInfo = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const BarberAvatar = styled.Image`
    width: 88px;
    height: 88px;
    margin-right: 10px;
`;

export const BarberName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #321718;
`;

export const AppointmentInfo = styled.View`
    
`;

export const ServiceInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const DateHourInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #321718;
`;

export const ServicePrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #321718;
`;

export const DateHourText = styled.Text`
    border-radius: 10px;
    font-size: 16px;
    color: #777;
`;

export const CancelButton = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #E29550;
    border-radius: 10px;
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
`;

export const CancelButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
`;

export const FinishedButton = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #999;
    border-radius: 10px;
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
`;

export const FinishedButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;

export const Rating = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const RatingText = styled.Text`
    font-size: 14px;
    color: #000;
`;