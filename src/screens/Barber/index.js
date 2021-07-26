import React, { useState } from 'react';
import {
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    BarberInfoArea,
    ServiceArea,
    TestimonialArea,
    SwipeDot,
    SwipeActiveDot,
    SwipeItem,
    SwipeImage,
    BarberAvatar,
    BarberInfo,
    BarberInfoName,
    BarberFavoriteButton,
    BackButton,
    LoadingIcon,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChooseButton,
    ServiceChooseButtonText,
    ServicesTitle,
    TestimonialCard,
    TestimonialInfo,
    TestimonialName,
    TestimonialBody
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import StarsNote from '../../components/StarsNote';
import EmptyFavoriteIcon from '../../assets/favorite.svg';
import FullFavoriteIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import BarberModal from '../../components/BarberModal';

export default() => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id, avatar, name, photos, stars } = route.params;

    const [barberInfo, setBarberInfo] = useState({
        id,
        avatar,
        name,
        stars
    });
    const [isLoading, setIsLoading] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleBackButtonClick = () => {
        navigation.goBack();
    };

    const handleChangeFavorited = async() => {
        setFavorited(!favorited);
    };

    const handleServiceChoose = (keyService) => {
        setSelectedService(keyService);
        setShowModal(true);
    };

    return(
        <Container>
            <Scroller>
                {
                    photos && photos.length > 0 ?
                        <Swiper
                            style={{height: 240}}
                            dot={<SwipeDot />}
                            activeDot={<SwipeActiveDot />}
                            paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
                            autoplay
                        >
                            {
                                photos.map((photo, index) => (
                                    <SwipeItem key={index}>
                                        <SwipeImage source={photo.url} resizeMode='cover' />
                                    </SwipeItem>
                                ))
                            }
                        </Swiper>
                    :
                        <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <BarberInfoArea>
                        <BarberAvatar source={avatar} />
                        <BarberInfo>
                            <BarberInfoName>{name}</BarberInfoName>
                            <StarsNote stars={stars} showNumber={true} />
                        </BarberInfo>
                        <BarberFavoriteButton>
                            {
                                favorited ?
                                    <FullFavoriteIcon onPress={handleChangeFavorited} width='24' height='24' fill='#FF0000' />
                                :
                                    <EmptyFavoriteIcon onPress={handleChangeFavorited} width='24' height='24' fill='#FF0000' />
                            }
                        </BarberFavoriteButton>
                    </BarberInfoArea>
                    {
                        isLoading && <LoadingIcon size='large' color='#FFF' />
                    }
                    <ServiceArea>
                        <ServicesTitle>Lista de serviços</ServicesTitle>

                        <ServiceItem>
                            <ServiceInfo>
                                <ServiceName>Corte masculino</ServiceName>
                                <ServicePrice>R$ 29,90</ServicePrice>
                            </ServiceInfo>
                            <ServiceChooseButton onPress={handleServiceChoose}>
                                <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                            </ServiceChooseButton>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceInfo>
                                <ServiceName>Corte masculino</ServiceName>
                                <ServicePrice>R$ 29,90</ServicePrice>
                            </ServiceInfo>
                            <ServiceChooseButton onPress={handleServiceChoose}>
                                <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                            </ServiceChooseButton>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceInfo>
                                <ServiceName>Corte masculino</ServiceName>
                                <ServicePrice>R$ 29,90</ServicePrice>
                            </ServiceInfo>
                            <ServiceChooseButton onPress={handleServiceChoose}>
                                <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                            </ServiceChooseButton>
                        </ServiceItem>
                    </ServiceArea>
                    
                    <TestimonialArea>
                        <Swiper
                            style={{height: 110}}
                            showsPagination={false}
                            showsButtons
                            prevButton={<NavPrevIcon width='35' height='35' fill='#FFF' />}
                            nextButton={<NavNextIcon width='35' height='35' fill='#FFF' />}
                        >
                            <TestimonialCard>
                                <TestimonialInfo>
                                    <TestimonialName>Gabriel Giovani</TestimonialName>
                                    <StarsNote stars={5} showNumber={false} />
                                </TestimonialInfo>
                                <TestimonialBody>Excelente profissional!</TestimonialBody>
                            </TestimonialCard>
                            <TestimonialCard>
                                <TestimonialInfo>
                                    <TestimonialName>Lucas Wendell</TestimonialName>
                                    <StarsNote stars={5} showNumber={false} />
                                </TestimonialInfo>
                                <TestimonialBody>Corte perfeito. Nota 10!!</TestimonialBody>
                            </TestimonialCard>
                            <TestimonialCard>
                                <TestimonialInfo>
                                    <TestimonialName>Pedro Júnior</TestimonialName>
                                    <StarsNote stars={4.5} showNumber={false} />
                                </TestimonialInfo>
                                <TestimonialBody>Muito bom!</TestimonialBody>
                            </TestimonialCard>
                        </Swiper>
                    </TestimonialArea>
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButtonClick}>
                <BackIcon width='44' height='44' fill='#FFF' />
            </BackButton>

            <BarberModal
                visible={showModal}
                setShowModal={setShowModal}
                barber={{
                    available: [],
                    avatar,
                    name: 'Gabriel Freitas',
                }}
                service={{
                    name: 'Corte masculino',
                    price: 'RS 29,90'
                }}
            />
        </Container>
    );
}