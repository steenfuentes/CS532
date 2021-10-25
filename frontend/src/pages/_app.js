import Theme from '../styles/theme';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from '../store';

import { CssBaseline, StyledEngineProvider } from '@material-ui/core';
import themes from '../themes';



const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  // const customization = useSelector((state) => state.customization);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <CssBaseline />
          <Theme>
            {getLayout(<Provider store={store}><Component {...pageProps} /></Provider>)}
          </Theme>
        </ThemeProvider>
      </StyledEngineProvider>

    </>
  );
}

export default App
