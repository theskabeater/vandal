import { isEqual } from 'lodash';
import * as React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IMessage } from '../message/model';
import { IState as IMessageState } from '../message/reducer';
import { IState as IRootState } from '../root/reducer';
import { IState as IUserState } from '../user/reducer';
import { Action } from './action';

interface IProps {
    dispatch: Dispatch;
    userState: IUserState;
    messageState: IMessageState;
}

interface IState {
    messages: IMessage[];
}

const mapStateToProps = (state: IRootState) => ({
    userState: state.user,
    messageState: state.message,
});

export const MessageScreen = connect(mapStateToProps)(
    class extends React.Component<IProps, IState> {
        public static navigationOptions: NavigationScreenOptions = {
            title: 'Messages',
        };

        public state: IState = {
            messages: [],
        };

        public componentDidMount = () => {
            this.props.dispatch(
                Action.messageRequest({
                    apiToken: this.props.userState.user.apiToken,
                }),
            );
        }

        public componentDidUpdate = (prevProps: IProps) => {
            const messages = this.props.messageState.messages;
            if (!isEqual(messages, prevProps.messageState.messages)) {
                this.setState({
                    messages,
                });
            }
        }

        public render = () => (
            <FlatList
                data={this.state.messages}
                keyExtractor={({ id, createdAt }) =>
                    `${id}-${createdAt.toString()}`
                }
                renderItem={({ item }) => <ListItem title={item.text} />}
            />
        )
    },
);
