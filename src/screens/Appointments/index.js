import React, { useState } from 'react';
import {
    Container,
    ListArea,
    AppointmentAgain,
    AppointmentAgainTitle,
    AppointmentAgainText,
    AppointmentAgainBarberAvatar,
    AppointmentDetails,
    AppointmentDetailsText,
    AppointmentAgainButton,
    AppointmentAgainButtonText,
    ListTitle
} from './styles';
import { Scroller, LoadingIcon } from '../Home/styles';
import { Header, HeaderText, BackButton } from '../Favorites/styles';
import BackIcon from '../../assets/back.svg';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppointmentCard from '../../components/AppointmentCard';
import Swiper from 'react-native-swiper';
import BarberCard from '../../components/BarberCard';
import { Favorites, FavoritesTitle } from '../Profile/styles';

const barberAvatar = require('../../assets/barber-shop-logo.png');

export default() => {
    const navigation = useNavigation();

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(false);
    };

    const handleBackButtonClick = () => {
        navigation.goBack();
    };

    return(
        <Container>
            <Scroller
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                }
            >
                <Header>
                    <HeaderText>Agendamentos</HeaderText>
                </Header>

                <AppointmentAgain>
                    <AppointmentAgainTitle>
                        <AppointmentAgainText>Agende de novo</AppointmentAgainText>
                        <AppointmentAgainBarberAvatar source={require('../../assets/barber-shop-logo.png')} />
                    </AppointmentAgainTitle>
                    <AppointmentDetails>
                        <AppointmentDetailsText>Corte masculino</AppointmentDetailsText>
                        <AppointmentDetailsText>R$ 29,90</AppointmentDetailsText>
                    </AppointmentDetails>

                    <AppointmentAgainButton>
                        <AppointmentAgainButtonText>Agendar novamente</AppointmentAgainButtonText>
                    </AppointmentAgainButton>
                </AppointmentAgain>

                <Favorites>
                    <FavoritesTitle>Mais agendados por você</FavoritesTitle>
                    <Swiper
                        style={{height: 120}}
                        showsPagination={false}
                        autoplay
                    >
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
                                name: 'Hugo Vinícius',
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
                                name: 'Bruno Gonçalves',
                                stars: 3.5
                            }}
                        />
                    </Swiper>
                </Favorites>

                {
                    isLoading && <LoadingIcon size='large' color='#FFF' />
                }

                <ListArea>
                    <ListTitle>Histórico</ListTitle>
                    <AppointmentCard
                        cancelable
                        appointment={{
                            barberName: 'Gabriel Freitas',
                            serviceName: 'Corte masculino',
                            servicePrice: '29,90',
                            serviceDate: '30/08/2021',
                            serviceHour: '13:00'
                        }}
                    />
                    <AppointmentCard
                        cancelable={false}
                        appointment={{
                            barberName: 'Gabriel Freitas',
                            serviceName: 'Sobrancelha',
                            servicePrice: '15,00',
                            serviceDate: '10/07/2021',
                            serviceHour: '18:00'
                        }}
                    />
                    <AppointmentCard
                        cancelable={false}
                        appointment={{
                            barberName: 'Gabriel Freitas',
                            serviceName: 'Corte masculino',
                            servicePrice: '29,90',
                            serviceDate: '30/06/2021',
                            serviceHour: '12:00'
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