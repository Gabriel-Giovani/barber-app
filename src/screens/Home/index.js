import React, { useState } from 'react';
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea,
    PromoCard,
    PromoTextView,
    PromoTextPercentage,
    PromoDescription,
    PromoDescriptionTextBold,
    PromoDescriptionText,
    PromoImageView,
    PromoImage,
} from './styles';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Platform, RefreshControl } from 'react-native';
import BarberCard from '../../components/BarberCard';

const barberAvatar = require('../../assets/barber-shop-logo.png');

export default() => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [barbers, setBarbers] = useState([]);

    const handleRefresh = () => {
        setIsRefreshing(false);
    };

    const handleLocationSearch = () => {
        setLocation({});
    };

    return(
        <Container>
            <Scroller
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                }
            >
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>
                        Encontre o seu barbeiro favorito
                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width='26' heght='26' fill='#FFF' />
                    </SearchButton>
                </HeaderArea>

                <PromoCard>
                    <PromoTextView>
                        <PromoTextPercentage>50%</PromoTextPercentage>
                        <PromoDescription>
                            <PromoDescriptionTextBold>OFF</PromoDescriptionTextBold>
                            <PromoDescriptionText>em qualquer corte</PromoDescriptionText>
                        </PromoDescription>
                    </PromoTextView>
                    <PromoImageView>
                        <PromoImage source={require('../../assets/promo.png')} />
                    </PromoImageView>
                </PromoCard>
                
                <LocationArea>
                    <LocationInput
                        placeholder='Onde você está?'
                        placeholderTextColor='#999'
                        value={locationText}
                        onChangeText={(e) => setLocationText(e)}
                        onEndEditing={handleLocationSearch}
                    />

                    <LocationFinder>
                        <MyLocationIcon width='24' heght='24' fill='#999' />
                    </LocationFinder>
                </LocationArea>

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
        </Container>
    );
}