import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { TabArea, TabItem, TabItemCenter } from './styles';
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import ScheduleIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import ProfileIcon from '../../assets/account.svg';

export default({ state, navigation }) => {
    const { state: user } = useContext(UserContext);

    const handleIconPress = (screenName) => {
        navigation.navigate(screenName);
    };

    const isActive = (indexScreen) => {
        let opacity = 0.5;

        if(state.index === indexScreen) opacity = 1;

        return { opacity };
    };

    return (
        <TabArea>
            <TabItem onPress={() => handleIconPress('Home')}>
                <HomeIcon width='24' height='24' fill='#FFF' style={isActive(0)} />
            </TabItem>
            <TabItem onPress={() => handleIconPress('Search')}>
                <SearchIcon width='24' height='24' fill='#FFF' style={isActive(1)} />
            </TabItem>
            <TabItemCenter onPress={() => handleIconPress('Appointments')}>
                <ScheduleIcon width='32' height='32' fill='#462628' />
            </TabItemCenter>
            <TabItem onPress={() => handleIconPress('Favorites')}>
                <FavoriteIcon width='24' height='24' fill='#FFF' style={isActive(3)} />
            </TabItem>
            <TabItem onPress={() => handleIconPress('Profile')}>
                <ProfileIcon width='24' height='24' fill='#FFF' style={isActive(4)} />
            </TabItem>
        </TabArea>
    );
}