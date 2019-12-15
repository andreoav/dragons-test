import React from 'react';

import { SWRConfig } from 'swr';
import { Router, Link } from '@reach/router';

import createCache from '@emotion/cache';
import { Global, CacheProvider } from '@emotion/core';

import { Title } from 'components/Title';
import { Footer } from 'components/Footer';
import { Container } from 'components/Container';
import { globalStyles } from 'components/GlobalStyles';

import { Login } from 'containers/Login';
import { Dragons } from 'containers/Dragons';
import { AuthProvider } from 'providers/Auth';

const stylesCache = createCache({ prepend: true });

function App() {
  return (
    <CacheProvider value={stylesCache}>
      <Global styles={globalStyles} />
      <Container>
        <Title className="p-4 text-center">
          <Link to="/dragons">Dragons Browser</Link>
        </Title>
        <SWRConfig value={{ revalidateOnFocus: true }}>
          <AuthProvider>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Router className="flex-1 container mx-auto p-4" primary>
                <Login path="login" default />
                <Dragons path="dragons/*" />
              </Router>
            </React.Suspense>
          </AuthProvider>
        </SWRConfig>
        <Footer className="p-4">
          <p className="text-sm mr-2">
            Made with <i className="fas fa-heart text-red-700 mx-1"></i> by Andreo Vieira
          </p>
          <a href="https://github.com/andreoav" className="mr-2">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="/#">
            <i className="fab fa-instagram"></i>
          </a>
        </Footer>
      </Container>
    </CacheProvider>
  );
}

export default App;
