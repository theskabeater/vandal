import { map } from 'lodash';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import {
    NavigationParams,
    NavigationRouteConfigMap,
    NavigationScreenOptions,
    NavigationScreenProp,
} from 'react-navigation';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { Action as CoreAction } from '../core/action';
import { button, centered, cover } from '../core/styles';
import { getRoutes } from '../core/utils';
import { IState as IRootState } from '../root/reducer';
import { IState as IUserState } from '../user/reducer';

interface IProps {
    dispatch: Dispatch;
    navigation: NavigationScreenProp<NavigationParams>;
    userState: IUserState;
}

interface IState {
    routes: NavigationRouteConfigMap;
}

const mapStateToProps = (state: IRootState) => ({
    userState: state.user,
});

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    },
});

export const HomeScreen = connect(mapStateToProps)(
    class extends React.Component<IProps, IState> {
        public static navigationOptions: NavigationScreenOptions = {
            title: 'Home',
        };

        public state: IState = {
            routes: getRoutes(),
        };

        public componentWillMount = () => {
            this.props.dispatch(CoreAction.storedUserRequest());
        }

        public render = () => (
            <View style={cover}>
                <Text>
                    {!!this.props.userState.user.apiToken
                        ? 'Logged In'
                        : 'Not Logged In'}
                </Text>
                <View style={centered}>
                    {map(this.state.routes, (_, routeName) => routeName)
                        .filter(
                            routeName =>
                                routeName !==
                                this.props.navigation.state.routeName,
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
            </View>
        )
    },
);
