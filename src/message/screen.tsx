import * as React from 'react';
import { View } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { centered } from '../core/styles';
import { IState as IRootState } from '../root/reducer';
import { IState as IUserState } from '../user/reducer';
import { Action } from './action';

interface IProps {
    dispatch: Dispatch;
    userState: IUserState;
}

const mapStateToProps = (state: IRootState) => ({
    userState: state.user,
});

export const MessageScreen = connect(mapStateToProps)(
    class extends React.Component<IProps> {
        public static navigationOptions: NavigationScreenOptions = {
            title: 'Messages',
        };

        public componentDidMount(): void {
            this.props.dispatch(
                Action.messageRequest({
                    apiToken: this.props.userState.user.apiToken,
                }),
            );
        }

        public render = () => <View style={centered} />;
    },
);
