import * as React from 'react';
import { colors, ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';

import { AppNavigation } from './app/navigation';
import { store } from './root/store';

export const EntryContainer = () => (
    <ThemeProvider theme={colors}>
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    </ThemeProvider>
);
