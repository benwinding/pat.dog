import { LoginWrapper } from '../shared/login-wrapper';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (Component.isPublic) {
    return <Component {...pageProps} />
  }
  return <LoginWrapper>
    <Component />
  </LoginWrapper>;
}

export default MyApp
