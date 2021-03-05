import React, { Fragment } from 'React'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  )

}

export default MyApp
