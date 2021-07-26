import React from 'react';
import {
    AppointmentCard,
    BarberInfo,
    BarberAvatar,
    BarberName,
    AppointmentInfo,
    ServiceInfo,
    DateHourInfo,
    ServiceName,
    ServicePrice,
    DateHourText,
    CancelButton,
    CancelButtonText,
    FinishedButton,
    FinishedButtonText,
    Rating,
    RatingText
} from './styles';
import StarsNote from '../StarsNote';

export default ({ cancelable, appointment }) => {
    return (
        <AppointmentCard>
            <BarberInfo>
                <BarberAvatar source={require('../../assets/barber-shop-logo.png')} />
                <BarberName>{ appointment.barberName }</BarberName>
            </BarberInfo>
            <AppointmentInfo>
                <ServiceInfo>
                    <ServiceName>{ appointment.serviceName }</ServiceName>
                    <ServicePrice>{ appointment.servicePrice }</ServicePrice>
                </ServiceInfo>
                <DateHourInfo>
                    <DateHourText>{ appointment.serviceDate }</DateHourText>
                    <DateHourText>{ appointment.serviceHour }</DateHourText>
                </DateHourInfo>
                <Rating>
                    <RatingText>Avaliação</RatingText>
                    <StarsNote stars={4} showNumber={false} />
                </Rating>
            </AppointmentInfo>
            {
                cancelable ?
                    <CancelButton>
                        <CancelButtonText>Cancelar</CancelButtonText>
                    </CancelButton>
                :
                    <FinishedButton>
                        <FinishedButtonText>Finalizado</FinishedButtonText>
                    </FinishedButton>
            }
        </AppointmentCard>
    );
}