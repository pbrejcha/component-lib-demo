import { AppProps } from 'next/app';
import './styles.css';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { styletron } from '../styletron';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default CustomApp;
