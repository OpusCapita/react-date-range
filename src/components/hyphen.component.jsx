import React from 'react';
import styled from 'styled-components';

import { theme } from '@opuscapita/oc-cm-common-layouts';

const HyphenSpan = styled.span`
  padding: 30px ${theme.gutterWidth} 8px ${theme.gutterWidth};
  align-self: flex-start;
  margin-bottom: calc(2 * ${theme.gutterWidth});
`;

export default () => <HyphenSpan>-</HyphenSpan>;
