import * as React from 'react';
import { colors, ThemeProvider } from 'react-native-elements';

import { Provider } from 'react-redux';
import { AppContainer } from './app/app.container';
import { store } from './root/root.store';

export const EntryContainer = () => (
    <Provider store={store}>
        <ThemeProvider theme={colors}>
            <AppContainer />
        </ThemeProvider>
    </Provider>
);
