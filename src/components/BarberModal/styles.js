import React from 'react';
import styled from 'styled-components/native';

export const Modal = styled.Modal`

`;

export const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

export const ModalBody = styled.View`
    background-color: #331A1A;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const ModalItem = styled.View`
    background-color: #462628;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
`;

export const BarberInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BarberAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 15px;
`;

export const BarberName = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
`;

export const ServiceInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;

export const ServicePrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;

export const ScheduleButton = styled.TouchableOpacity`
    background-color: #E07119;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const ScheduleButtonText = styled.Text`
    color: #FFF;
    font-size: 17px;
    font-weight: bold;
`;

export const DateInfo = styled.View`
    flex-direction: row;
`;

export const DatePrevArea = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const DateNextArea = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-start;
`;

export const DateTitleArea = styled.View`
    width: 140px;
    justify-content: center;
    align-items: center;
`;

export const DateTitle = styled.Text`
    color: #DB945D;
    font-size: 17px;
    font-weight: bold;
`;

export const DateList = styled.ScrollView`
    margin-top: 20px;
`;

export const DateItem = styled.TouchableOpacity`
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 3px;
`;

export const DateItemWeekDay = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const DateItemNumber = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const HoursList = styled.ScrollView`

`;

export const HourItem = styled.TouchableOpacity`
    width: 75px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const HourItemText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;