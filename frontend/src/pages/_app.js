import Theme from '../styles/theme';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from '../store';

import { CssBaseline, StyledEngineProvider } from '@material-ui/core';



const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>

      <Theme>
        {getLayout(<Component {...pageProps} />)}
      </Theme>

    </>
  );
}

export default App
