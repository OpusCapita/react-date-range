import React from 'react';

import { DateInput } from '@opuscapita/react-datetime';

import propTypes from './prop-types';
import defaultProps from './default-props';

export default class AbsoluteDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //first day, last day
  render() {
    return (
      <React.Fragment>
        <DateInput />
        <DateInput />
      </React.Fragment>
    );
  }
}

AbsoluteDateRange.propTypes = {
  ...propTypes,
};

AbsoluteDateRange.defaultProps = {
  ...defaultProps,
};
