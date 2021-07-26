import React from 'react';
import {
    ProfileMenuItem,
    ProfileMenuItemIcon,
    ProfileMenuItemQtd,
    ProfileMenuItemText,
    ProfileMenuItemTextSub,
    ProfileMenuItemTextTitle,
    ProfileMenuItemTextContent,
    ProfileMenuItemQtdText
} from './styles';

export default ({ icon, title, subtitle, qtdNotifications }) => {
    return (
        <ProfileMenuItem>
            <ProfileMenuItemText>
                <ProfileMenuItemIcon source={icon} />
                <ProfileMenuItemTextContent>
                    <ProfileMenuItemTextTitle>{title}</ProfileMenuItemTextTitle>
                    <ProfileMenuItemTextSub>{subtitle}</ProfileMenuItemTextSub>
                </ProfileMenuItemTextContent>
            </ProfileMenuItemText>
            {
                qtdNotifications &&
                    <ProfileMenuItemQtd>
                        <ProfileMenuItemQtdText>{qtdNotifications}</ProfileMenuItemQtdText>
                    </ProfileMenuItemQtd>
            }
        </ProfileMenuItem>
    );
}