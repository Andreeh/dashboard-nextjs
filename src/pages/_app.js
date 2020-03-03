import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import GlobalStyle from '../GlobalStyle';
import { customTheme } from '../theme';
import { installDevtools } from '../dev-tools';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <GlobalStyle />
            <Component {...pageProps} />
            {installDevtools()}
        </ThemeProvider>
    );
}
