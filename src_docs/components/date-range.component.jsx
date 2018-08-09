import React from 'react';
import DateRange from '../../src/index';

export default class DateRangeView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ padding: '20px' }}>
          <h4>Absolute time period (default)</h4>
          <DateRange id="example1" />
        </div>
        <div style={{ padding: '20px' }}>
          <h4>Absolute or relative time period</h4>
          <DateRange id="example2" popoverProps={{ isRelativeEnabled: true }} />
        </div>
      </React.Fragment>
    );
  }
}
