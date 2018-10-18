import React from 'react';
import styled from 'styled-components';

import { theme } from '@opuscapita/oc-cm-common-layouts';

const HyphenSpan = styled.span`
  padding: 0 0.3rem 8px 0.3rem;
  align-self: flex-end;
  margin-bottom: calc(2 * ${theme.gutterWidth});
`;

export default () => <HyphenSpan>-</HyphenSpan>;
