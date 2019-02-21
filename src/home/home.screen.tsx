import { map } from 'lodash';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import {
    NavigationParams,
    NavigationRouteConfigMap,
    NavigationScreenOptions,
    NavigationScreenProp,
} from 'react-navigation';
import { connect } from 'react-redux';

import { button, centered } from '../core/core.styles';
import { getRoutes } from '../core/core.utils';

interface IProps {
    navigation: NavigationScreenProp<NavigationParams>;
}

interface IState {
    routes: NavigationRouteConfigMap;
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    },
});

export const HomeScreen = connect()(
    class extends React.Component<IProps, IState> {
        public static navigationOptions: NavigationScreenOptions = {
            title: 'Home',
        };
        public state: IState = {
            routes: getRoutes(),
        };

        public render = () => (
            <View style={centered}>
                {map(this.state.routes, (screen, routeName) => routeName)
                    .filter(
                        routeName =>
                            routeName !== this.props.navigation.state.routeName,
                    )
                    .map(routeName => (
                        <Button
                            title={routeName}
                            type="outline"
                            style={[button, styles.button]}
                            key={routeName}
                            onPress={() => {
                                this.props.navigation.navigate(routeName);
                            }}
                        />
                    ))}
            </View>
        )
    },
);
