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
          <h4>Absolute period (default)</h4>
          <DateRange id="example1" />
          <h4>Absolute or relative</h4>
          <DateRange id="example2" enabled={{ absolute: true, relative: true }} />
          <h4>Absolute, relative or period</h4>
          <DateRange
            id="example3"
            enabled={{ absolute: true, relative: true, period: true }}
          />
        </div>
      </React.Fragment>
    );
  }
}
