import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps {

}

const Input: React.FC = () => <Container />;

export default Input;
