import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { button, centered } from '../core/core.styles';
import { ILoginRequestPayload, loginRequest } from './login.action';

interface IPropTypes {
    dispatch: Dispatch;
}

interface IState {
    email: string;
    password: string;
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
    },
});

export const LoginContainer = connect()(
    class extends React.Component<IPropTypes, IState> {
        public state = {
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
            this.props.dispatch(
                loginRequest(this.state as ILoginRequestPayload),
            );
        }
    },
);
