import { StyleSheet } from 'react-native';

export const { centered, button, cover } = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 200,
    },
    cover: {
        width: '100%',
        height: '100%',
    },
});
