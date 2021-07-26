import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #331A1A;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    color: #FFF;
    font-weight: bold;
    width: 250px;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: #FFF;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #999;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    margin-top: -10px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const PromoCard = styled.View`
    margin: 20px 10px 0px 10px;
    padding: 15px;
    border-radius: 10px;
    flex-direction: row;
    background-color: #E4C5AE;
`;

export const PromoTextView = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;

export const PromoTextPercentage = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: #351C19;
    margin-right: 5px;
`;

export const PromoDescription = styled.View`

`;

export const PromoDescriptionTextBold = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #351C19;
    margin-bottom: -5px;
`;

export const PromoDescriptionText = styled.Text`
    font-size: 18px;
    color: #C54E17;
`;

export const PromoImageView = styled.View`
    align-items: center;
    justify-content: center;
`;

export const PromoImage = styled.Image`
    width: 90px;
    height: 90px;
`;