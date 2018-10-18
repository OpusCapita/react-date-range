var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: ', ';\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: ', ';\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';

import { theme } from '@opuscapita/oc-cm-common-layouts';

import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';

var PopoverSection = styled.div(_templateObject, theme.gutterWidth, theme.contentBackgroundColor);

var DateRangePopover = function (_React$PureComponent) {
  _inherits(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    _classCallCheck(this, DateRangePopover);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleChange = function (e) {
      var selectedRangeType = e.target.value;
      _this.setState({ selectedRangeType: selectedRangeType });
      _this.props.onRangeTypeChange({
        popoverProps: {
          selectedRangeType: selectedRangeType
        }
      });
    };

    _this.renderRangeComponent = function () {
      var selectedRange = RangeTypes[_this.state.selectedRangeType];
      return React.createElement(selectedRange.component, _extends({}, _this.props[selectedRange.propsKey], {
        onChange: _this.props.onChange,
        translations: _this.props.translations
      }));
    };

    _this.renderOptions = function () {
      return Object.keys(RangeTypes).map(function (type) {
        return React.createElement(
          Radio,
          {
            key: type,
            name: 'rangeType',
            value: type,
            onChange: _this.handleChange,
            checked: _this.state.selectedRangeType === type,
            inline: true
          },
          _this.props.translations[type]
        );
      });
    };

    _this.render = function () {
      return React.createElement(
        PopoverSection,
        null,
        _this.props.isRelativeEnabled && React.createElement(
          React.Fragment,
          null,
          React.createElement(
            FormGroup,
            null,
            _this.renderOptions()
          ),
          React.createElement('hr', null)
        ),
        _this.renderRangeComponent()
      );
    };

    _this.state = {
      selectedRangeType: props.selectedRangeType
    };
    return _this;
  }

  return DateRangePopover;
}(React.PureComponent);

export { DateRangePopover as default };


DateRangePopover.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiRm9ybUdyb3VwIiwiUmFkaW8iLCJ0aGVtZSIsIlJhbmdlVHlwZXMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJQb3BvdmVyU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZVBvcG92ZXIiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImUiLCJzZWxlY3RlZFJhbmdlVHlwZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJvblJhbmdlVHlwZUNoYW5nZSIsInBvcG92ZXJQcm9wcyIsInJlbmRlclJhbmdlQ29tcG9uZW50Iiwic2VsZWN0ZWRSYW5nZSIsInN0YXRlIiwicHJvcHNLZXkiLCJvbkNoYW5nZSIsInRyYW5zbGF0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidHlwZSIsInJlbmRlciIsImlzUmVsYXRpdmVFbmFibGVkIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsS0FBcEIsUUFBaUMsaUJBQWpDOztBQUVBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCOztBQUVBLE9BQU9DLFVBQVAsTUFBdUIsZUFBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixpQkFBekI7O0FBRUEsSUFBTUMsaUJBQWlCUCxPQUFPUSxHQUF4QixrQkFLT0wsTUFBTU0sV0FMYixFQU1nQk4sTUFBTU8sc0JBTnRCLENBQU47O0lBY3FCQyxnQjs7O0FBQ25CLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CQyxZQVBtQixHQU9KLFVBQUNDLENBQUQsRUFBTztBQUNwQixVQUFNQyxvQkFBb0JELEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkM7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBRUgsb0NBQUYsRUFBZDtBQUNBLFlBQUtILEtBQUwsQ0FBV08saUJBQVgsQ0FBNkI7QUFDM0JDLHNCQUFjO0FBQ1pMO0FBRFk7QUFEYSxPQUE3QjtBQUtELEtBZmtCOztBQUFBLFVBaUJuQk0sb0JBakJtQixHQWlCSSxZQUFNO0FBQzNCLFVBQU1DLGdCQUFnQmxCLFdBQVcsTUFBS21CLEtBQUwsQ0FBV1IsaUJBQXRCLENBQXRCO0FBQ0EsYUFDRSxvQkFBQyxhQUFELENBQWUsU0FBZixlQUNNLE1BQUtILEtBQUwsQ0FBV1UsY0FBY0UsUUFBekIsQ0FETjtBQUVFLGtCQUFVLE1BQUtaLEtBQUwsQ0FBV2EsUUFGdkI7QUFHRSxzQkFBYyxNQUFLYixLQUFMLENBQVdjO0FBSDNCLFNBREY7QUFPRCxLQTFCa0I7O0FBQUEsVUE0Qm5CQyxhQTVCbUIsR0E0Qkg7QUFBQSxhQUNkQyxPQUFPQyxJQUFQLENBQVl6QixVQUFaLEVBQXdCMEIsR0FBeEIsQ0FBNEI7QUFBQSxlQUMxQjtBQUFDLGVBQUQ7QUFBQTtBQUNFLGlCQUFLQyxJQURQO0FBRUUsa0JBQUssV0FGUDtBQUdFLG1CQUFPQSxJQUhUO0FBSUUsc0JBQVUsTUFBS2xCLFlBSmpCO0FBS0UscUJBQVMsTUFBS1UsS0FBTCxDQUFXUixpQkFBWCxLQUFpQ2dCLElBTDVDO0FBTUU7QUFORjtBQVFHLGdCQUFLbkIsS0FBTCxDQUFXYyxZQUFYLENBQXdCSyxJQUF4QjtBQVJILFNBRDBCO0FBQUEsT0FBNUIsQ0FEYztBQUFBLEtBNUJHOztBQUFBLFVBMENuQkMsTUExQ21CLEdBMENWO0FBQUEsYUFDUDtBQUFDLHNCQUFEO0FBQUE7QUFDRyxjQUFLcEIsS0FBTCxDQUFXcUIsaUJBQVgsSUFDRDtBQUFDLGVBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRyxrQkFBS04sYUFBTDtBQURILFdBREY7QUFJRTtBQUpGLFNBRkY7QUFRRyxjQUFLTixvQkFBTDtBQVJILE9BRE87QUFBQSxLQTFDVTs7QUFFakIsVUFBS0UsS0FBTCxHQUFhO0FBQ1hSLHlCQUFtQkgsTUFBTUc7QUFEZCxLQUFiO0FBRmlCO0FBS2xCOzs7RUFOMkNoQixNQUFNbUMsYTs7U0FBL0J2QixnQjs7O0FBMkRyQkEsaUJBQWlCTCxZQUFqQixHQUFnQ0EsWUFBaEMiLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgUmFkaW8gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IFJhbmdlVHlwZXMgZnJvbSAnLi9yYW5nZS10eXBlcyc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IFBvcG92ZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfVxuICBociB7XG4gICAgY29sb3I6ICNDQ0M7XG4gICAgc2l6ZTogMC4xcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlUG9wb3ZlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICAgIHRoaXMucHJvcHMub25SYW5nZVR5cGVDaGFuZ2Uoe1xuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3RoaXMuc3RhdGUuc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICB0cmFuc2xhdGlvbnM9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9ICgpID0+IChcbiAgICBPYmplY3Qua2V5cyhSYW5nZVR5cGVzKS5tYXAodHlwZSA9PiAoXG4gICAgICA8UmFkaW9cbiAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICBuYW1lPVwicmFuZ2VUeXBlXCJcbiAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgaW5saW5lXG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9uc1t0eXBlXX1cbiAgICAgIDwvUmFkaW8+KSlcbiAgKTtcblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPFBvcG92ZXJTZWN0aW9uPlxuICAgICAge3RoaXMucHJvcHMuaXNSZWxhdGl2ZUVuYWJsZWQgJiZcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25zKCl9XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICA8L1BvcG92ZXJTZWN0aW9uPlxuICApO1xufVxuXG5EYXRlUmFuZ2VQb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuRGF0ZVJhbmdlUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=