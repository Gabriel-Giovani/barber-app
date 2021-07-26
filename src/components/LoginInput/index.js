import React from 'react';
import { InputArea, Input } from './styles';

export default ({ Icon, placeholder, value, onChangeText, type, password }) => {
    return (
        <InputArea>
            <Icon width='24' height='24' fill='#331918' />
            <Input
                placeholder={placeholder}
                placeholderTextColor='#331918'
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}