import React, { useState } from 'react';
import {
    Container,
    BackButton,
    UserInfo,
    WelcomeUserText,
    WelcomeText,
    UserNameText,
    UserAvatar,
    UserPhoto,
    LogoutButton,
    LogoutButtonText,
    ProfileMenu
} from './styles';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';
import { RefreshControl } from 'react-native';
import { Scroller, LoadingIcon } from '../Home/styles';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import Swiper from 'react-native-swiper';
import BarberCard from '../../components/BarberCard';
import MenuItemCard from '../../components/MenuItemCard';

const chatIcon = require('../../assets/chat.png');
const notificationIcon = require('../../assets/notification.png');
const walletIcon = require('../../assets/wallet.png');
const couponIcon = require('../../assets/coupons.png');
const favoriteIcon = require('../../assets/heart.png');
const cardIcon = require('../../assets/credit-card.png');
const dataIcon = require('../../assets/data-people.png');

export default() => {
    const navigation = useNavigation();

    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(false);
    };

    const handleLogoutClick = async() => {
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    };

    return(
        <Container>
            <Scroller
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                }
            >
                <UserInfo>
                    <WelcomeUserText>
                        <WelcomeText>Olá,</WelcomeText>
                        <UserNameText>Gabriel Giovani</UserNameText>
                    </WelcomeUserText>
                    <UserAvatar>
                        <UserPhoto source={require('../../assets/user.png')} />
                    </UserAvatar>
                </UserInfo>

                <ProfileMenu>
                    <MenuItemCard
                        icon={chatIcon}
                        title={'Chats'}
                        subtitle={'Minhas conversas'}
                        qtdNotifications={'3'}
                    />
                    <MenuItemCard
                        icon={notificationIcon}
                        title={'Notificações'}
                        subtitle={'Minha central de notificações'}
                        qtdNotifications={'2'}
                    />
                    <MenuItemCard
                        icon={chatIcon}
                        title={'Carteira'}
                        subtitle={'Meu saldo e QR code'}
                    />
                    <MenuItemCard
                        icon={couponIcon}
                        title={'Cupons'}
                        subtitle={'Meus cupons de desconto'}
                        qtdNotifications={'1'}
                    />
                    <MenuItemCard
                        icon={favoriteIcon}
                        title={'Favoritos'}
                        subtitle={'Meus barbeiros favoritos'}
                    />
                    <MenuItemCard
                        icon={cardIcon}
                        title={'Formas de pagamento'}
                        subtitle={'Minhas formas de pagamento'}
                    />
                    <MenuItemCard
                        icon={dataIcon}
                        title={'Dados pessoais'}
                        subtitle={'Minhas informações da conta'}
                    />
                </ProfileMenu>

                <LogoutButton onPress={handleLogoutClick}>
                    <LogoutButtonText>SAIR</LogoutButtonText>
                </LogoutButton>
            </Scroller>
        </Container>
    );
}