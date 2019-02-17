import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { loginRequest } from './login.action';

type IDispatchProps = ReturnType<typeof mapDispatchToProps>;
const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchLoginRequest: (
        payload: ReturnType<typeof loginRequest>['payload'],
    ) => dispatch(loginRequest(payload)),
});

const loginScreen: React.SFC<IDispatchProps> = ({ dispatchLoginRequest }) => (
    <View style={styles.container}>
        <Button
            onPress={() =>
                dispatchLoginRequest({
                    email: 'admin@test.com',
                    password: 'admins',
                })
            }
            title="Login"
        />
    </View>
);

export const LoginScreen = connect<null, IDispatchProps>(
    null,
    mapDispatchToProps,
)(loginScreen);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
});
