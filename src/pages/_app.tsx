import '../styles/global.css';

import {ChallengeProvider} from '../contexts/ChallangeContext';

function MyApp({ Component, pageProps }) {

  return(
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  ) 
  
}

export default MyApp
