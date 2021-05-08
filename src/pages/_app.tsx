import type { AppProps } from 'next/app';
//
import { ThemeProvider } from 'styled-components';
// styled-component // theme 테마 적용 
import { Provider } from 'mobx-react';
// mobex Provider 적용
import GlobalStyle from '../../styles/reset';
// 전체 스타일 초기화
import theme from '../../styles/theme';
// styled-component // theme 테마 적용 
import store from '../store/Rootstore';
// store provid 해주기 위한 전체적용 store
import FooterContainer from '../containers/Footer'
import HeaderContainer from '../containers/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider {...store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer/>
      <Component {...pageProps} />
      <FooterContainer />
    </ThemeProvider>
    </Provider>
  );
}



export default MyApp;