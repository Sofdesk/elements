import '@stoplight/elements-core/styles.css';

import { API } from '@stoplight/elements';
import { Box } from '@stoplight/mosaic';
import React, { useContext } from 'react';

import { GlobalContext } from '../context';

export const ElementsAPI: React.FC = () => {
  const { apiDescriptionUrl, layout } = useContext(GlobalContext);

  const specUrlWithProxy =
    apiDescriptionUrl && window.location.origin === 'https://elements-demo.stoplight.io'
      ? `https://stoplight.io/cors-proxy/${apiDescriptionUrl}`
      : apiDescriptionUrl;

  return (
    <Box flex={1} overflowY={layout !== 'stacked' ? 'hidden' : undefined}>
      <API
        apiDescriptionUrl={specUrlWithProxy}
        router="hash"
        logo={'https://www.solargraf.com/wp-content/uploads/2020/11/sg-logo.png'}
        logoLink={'https://www.solargraf.com/'}
      />
    </Box>
  );
};
