import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
