import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #331A1A;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const PageBody = styled.View`
    background-color: #331A1A;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #FFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeActiveDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #E4C5AE;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`
    height: 240px;
    background-color: #E4C5AE;
`;

export const BarberInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const BarberInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const BarberAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFF;
`;

export const BarberInfoName = styled.Text`
    color: #E0D5D4;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const BarberFavoriteButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #FFF;
    border: 2px solid #999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ServiceArea = styled.View`
    margin-top: 40px;
`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ServiceInfo = styled.View`
    flex: 1;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #E0D5D4;
`;

export const ServicePrice = styled.Text`
    color: #E0D5D4;
    font-size: 14px;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
    background-color: #E19350;
    border-radius: 10px;
    padding: 10px 15px;
`;

export const ServiceChooseButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
`;

export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 30px;
    color: #E0D5D4;
`;

export const TestimonialArea = styled.View`
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const TestimonialCard = styled.View`
    background-color: #E4C5AE;
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
`;

export const TestimonialInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const TestimonialName = styled.Text`
    color: #321B1C;
    font-size: 14px;
    font-weight: bold;
`;

export const TestimonialBody = styled.Text`
    color: #321B1C;
    font-size: 13px;
`;