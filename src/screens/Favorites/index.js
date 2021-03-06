import React, { useState } from 'react';
import { Container, BackButton, Header, HeaderText } from './styles';
import { ListArea, LoadingIcon, Scroller } from '../Home/styles';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';
import BackIcon from '../../assets/back.svg';
import BarberCard from '../../components/BarberCard';

const barberAvatar = require('../../assets/barber-shop-logo.png');

export default() => {
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleBackButtonClick = () => {
        navigation.goBack();
    };

    const handleRefresh = () => {
        setIsRefreshing(false);
    };

    return(
        <Container>
            <Scroller
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                }
            >
                <Header>
                    <HeaderText>Favoritos</HeaderText>
                </Header>

                {
                    isLoading && <LoadingIcon size='large' color='#FFF' />
                }

                <ListArea>
                    <BarberCard
                        key={1}
                        data={{
                            id: 1,
                            avatar: barberAvatar,
                            name: 'Gabriel Freitas',
                            stars: 4
                        }}
                    />
                    <BarberCard
                        key={2}
                        data={{
                            id: 2,
                            avatar: barberAvatar,
                            name: 'Leonardo Silva',
                            stars: 4.5
                        }}
                    />
                    <BarberCard
                        key={3}
                        data={{
                            id: 3,
                            avatar: barberAvatar,
                            name: 'Caio Maturano',
                            stars: 4
                        }}
                    />
                    <BarberCard
                        key={4}
                        data={{
                            id: 4,
                            avatar: barberAvatar,
                            name: 'Hugo Vin??cius',
                            stars: 5
                        }}
                    />
                    <BarberCard
                        key={5}
                        data={{
                            id: 5,
                            avatar: barberAvatar,
                            name: 'Guilherme Pereira',
                            stars: 4.5
                        }}
                    />
                    <BarberCard
                        key={6}
                        data={{
                            id: 6,
                            avatar: barberAvatar,
                            name: 'Bruno Gon??alves',
                            stars: 3.5
                        }}
                    />
                </ListArea>
            </Scroller>

            <BackButton onPress={handleBackButtonClick}>
                <BackIcon width='44' height='44' fill='#FFF' />
            </BackButton>
        </Container>
    );
}