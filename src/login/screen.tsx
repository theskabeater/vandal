import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { button, centered } from '../core/styles';
import { Action } from './action';
import { IRequest } from './model';

interface IPropTypes {
    dispatch: Dispatch;
}

interface IState extends IRequest {
    email: string;
    password: string;
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
    },
});

export const LoginScreen = connect()(
    class extends React.Component<IPropTypes, IState> {
        public static navigationOptions: NavigationScreenOptions = {
            title: 'Login',
        };

        public state: IState = {
            email: '',
            password: '',
        };

        public render = () => (
            <View style={centered}>
                <Input
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                />
                <Input
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                />
                <Button
                    title="Submit"
                    style={[styles.button, button]}
                    onPress={this.onSubmitPress}
                />
            </View>
        )

        private onSubmitPress = () => {
            this.props.dispatch(Action.loginRequest(this.state));
        }
    },
);
