import React from 'react';

import { SWRConfig } from 'swr';
import { Router, Link } from '@reach/router';

import createCache from '@emotion/cache';
import { Global, CacheProvider } from '@emotion/core';

import { Text } from 'components/Text';
import { Icon } from 'components/Icon';
import { Title } from 'components/Title';
import { Footer } from 'components/Footer';
import { Loading } from 'components/Loading';
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
          <Link to="/dragons">Dragon Browser</Link>
        </Title>
        <SWRConfig value={{ revalidateOnFocus: true }}>
          <AuthProvider>
            <React.Suspense fallback={<Loading />}>
              <Router className="flex-1 container mx-auto p-4" primary>
                <Login path="login" default />
                <Dragons path="dragons/*" />
              </Router>
            </React.Suspense>
          </AuthProvider>
        </SWRConfig>
        <Footer className="p-4">
          <Text className="text-sm">
            Made with <i className="fas fa-heart text-red-700 mx-1"></i> by Andreo Vieira
          </Text>
          <a href="https://github.com/andreoav" title="Github">
            <Icon name="fab fa-github-square" />
          </a>
          <a href="https://instagram.com/andreoav" title="Instagram">
            <Icon name="fab fa-instagram" />
          </a>
        </Footer>
      </Container>
    </CacheProvider>
  );
}

export default App;
