import React, { useState } from 'react';
import { Container, SearchArea, SearchInput, BackButton } from './styles';
import { ListArea, LoadingIcon, Scroller } from '../Home/styles';
import BackIcon from '../../assets/back.svg';
import BarberCard from '../../components/BarberCard';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const barberAvatar = require('../../assets/barber-shop-logo.png');

export default() => {
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');

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
                <SearchArea>
                    <SearchInput
                        placeholder='Digite o nome do barbeiro'
                        placeholderTextColor='#999'
                        value={searchText}
                        onChangeText={(e) => setSearchText(e)}
                    />
                </SearchArea>

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
                </ListArea>
            </Scroller>

            <BackButton onPress={handleBackButtonClick}>
                <BackIcon width='44' height='44' fill='#FFF' />
            </BackButton>
        </Container>
    );
}