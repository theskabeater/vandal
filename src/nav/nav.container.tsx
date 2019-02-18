import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { button, centered } from '../core/core.styles';
import { routes } from '../root/root.routes';

interface IProps {
    navigation: NavigationScreenProp<NavigationParams>;
}

export const NavContainer: React.SFC<IProps> = ({ navigation }) => (
    <View style={centered}>
        {routes.map(route => (
            <Button
                title={route}
                type="outline"
                style={[button, styles.button]}
                key={route}
                onPress={() => {
                    navigation.navigate(route);
                }}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    },
});
