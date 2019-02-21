import * as React from 'react';
import { View } from 'react-native';
import {
    NavigationParams,
    NavigationScreenOptions,
    NavigationScreenProp,
} from 'react-navigation';
import { connect } from 'react-redux';

import { centered } from '../core/core.styles';

interface IProps {
    navigation: NavigationScreenProp<NavigationParams>;
}

export const MessageScreen = connect()(
    class extends React.Component<IProps> {
        public static navigationOptions: NavigationScreenOptions = {
            title: 'Messages',
        };

        public render = () => <View style={centered} />;
    },
);
