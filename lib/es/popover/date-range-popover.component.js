var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: 1rem;\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: 1rem;\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n']);

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

var PopoverSection = styled.div(_templateObject, theme.contentBackgroundColor);

var DateRangePopover = function (_React$PureComponent) {
  _inherits(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    _classCallCheck(this, DateRangePopover);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleChange = function (e) {
      var selectedRangeType = e.target.value;
      _this.setState({ selectedRangeType: selectedRangeType });
      _this.props.onChange({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiRm9ybUdyb3VwIiwiUmFkaW8iLCJ0aGVtZSIsIlJhbmdlVHlwZXMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJQb3BvdmVyU2VjdGlvbiIsImRpdiIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJwb3BvdmVyUHJvcHMiLCJyZW5kZXJSYW5nZUNvbXBvbmVudCIsInNlbGVjdGVkUmFuZ2UiLCJzdGF0ZSIsInByb3BzS2V5IiwidHJhbnNsYXRpb25zIiwicmVuZGVyT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0eXBlIiwicmVuZGVyIiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxLQUFwQixRQUFpQyxpQkFBakM7O0FBRUEsU0FBU0MsS0FBVCxRQUFzQixrQ0FBdEI7O0FBRUEsT0FBT0MsVUFBUCxNQUF1QixlQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6Qjs7QUFFQSxJQUFNQyxpQkFBaUJQLE9BQU9RLEdBQXhCLGtCQU1nQkwsTUFBTU0sc0JBTnRCLENBQU47O0lBY3FCQyxnQjs7O0FBQ25CLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CQyxZQVBtQixHQU9KLFVBQUNDLENBQUQsRUFBTztBQUNwQixVQUFNQyxvQkFBb0JELEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkM7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBRUgsb0NBQUYsRUFBZDtBQUNBLFlBQUtILEtBQUwsQ0FBV08sUUFBWCxDQUFvQjtBQUNsQkMsc0JBQWM7QUFDWkw7QUFEWTtBQURJLE9BQXBCO0FBS0QsS0Fma0I7O0FBQUEsVUFpQm5CTSxvQkFqQm1CLEdBaUJJLFlBQU07QUFDM0IsVUFBTUMsZ0JBQWdCakIsV0FBVyxNQUFLa0IsS0FBTCxDQUFXUixpQkFBdEIsQ0FBdEI7QUFDQSxhQUNFLG9CQUFDLGFBQUQsQ0FBZSxTQUFmLGVBQ00sTUFBS0gsS0FBTCxDQUFXVSxjQUFjRSxRQUF6QixDQUROO0FBRUUsa0JBQVUsTUFBS1osS0FBTCxDQUFXTyxRQUZ2QjtBQUdFLHNCQUFjLE1BQUtQLEtBQUwsQ0FBV2E7QUFIM0IsU0FERjtBQU9ELEtBMUJrQjs7QUFBQSxVQTRCbkJDLGFBNUJtQixHQTRCSDtBQUFBLGFBQ2RDLE9BQU9DLElBQVAsQ0FBWXZCLFVBQVosRUFBd0J3QixHQUF4QixDQUE0QjtBQUFBLGVBQzFCO0FBQUMsZUFBRDtBQUFBO0FBQ0UsaUJBQUtDLElBRFA7QUFFRSxrQkFBSyxXQUZQO0FBR0UsbUJBQU9BLElBSFQ7QUFJRSxzQkFBVSxNQUFLakIsWUFKakI7QUFLRSxxQkFBUyxNQUFLVSxLQUFMLENBQVdSLGlCQUFYLEtBQWlDZSxJQUw1QztBQU1FO0FBTkY7QUFRRyxnQkFBS2xCLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QkssSUFBeEI7QUFSSCxTQUQwQjtBQUFBLE9BQTVCLENBRGM7QUFBQSxLQTVCRzs7QUFBQSxVQTBDbkJDLE1BMUNtQixHQTBDVjtBQUFBLGFBQ1A7QUFBQyxzQkFBRDtBQUFBO0FBQ0csY0FBS25CLEtBQUwsQ0FBV29CLGlCQUFYLElBQ0Q7QUFBQyxlQUFELENBQU8sUUFBUDtBQUFBO0FBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0csa0JBQUtOLGFBQUw7QUFESCxXQURGO0FBSUU7QUFKRixTQUZGO0FBUUcsY0FBS0wsb0JBQUw7QUFSSCxPQURPO0FBQUEsS0ExQ1U7O0FBRWpCLFVBQUtFLEtBQUwsR0FBYTtBQUNYUix5QkFBbUJILE1BQU1HO0FBRGQsS0FBYjtBQUZpQjtBQUtsQjs7O0VBTjJDZixNQUFNaUMsYTs7U0FBL0J0QixnQjs7O0FBMkRyQkEsaUJBQWlCSixZQUFqQixHQUFnQ0EsWUFBaEMiLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgUmFkaW8gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IFJhbmdlVHlwZXMgZnJvbSAnLi9yYW5nZS10eXBlcyc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IFBvcG92ZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9XG4gIGhyIHtcbiAgICBjb2xvcjogI0NDQztcbiAgICBzaXplOiAwLjFyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2VQb3BvdmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZTogcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUmFuZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZSA9IFJhbmdlVHlwZXNbdGhpcy5zdGF0ZS5zZWxlY3RlZFJhbmdlVHlwZV07XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3RlZFJhbmdlLmNvbXBvbmVudFxuICAgICAgICB7Li4udGhpcy5wcm9wc1tzZWxlY3RlZFJhbmdlLnByb3BzS2V5XX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgIHRyYW5zbGF0aW9ucz17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJPcHRpb25zID0gKCkgPT4gKFxuICAgIE9iamVjdC5rZXlzKFJhbmdlVHlwZXMpLm1hcCh0eXBlID0+IChcbiAgICAgIDxSYWRpb1xuICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgIG5hbWU9XCJyYW5nZVR5cGVcIlxuICAgICAgICB2YWx1ZT17dHlwZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUmFuZ2VUeXBlID09PSB0eXBlfVxuICAgICAgICBpbmxpbmVcbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zW3R5cGVdfVxuICAgICAgPC9SYWRpbz4pKVxuICApO1xuXG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8UG9wb3ZlclNlY3Rpb24+XG4gICAgICB7dGhpcy5wcm9wcy5pc1JlbGF0aXZlRW5hYmxlZCAmJlxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD59XG4gICAgICB7dGhpcy5yZW5kZXJSYW5nZUNvbXBvbmVudCgpfVxuICAgIDwvUG9wb3ZlclNlY3Rpb24+XG4gICk7XG59XG5cbkRhdGVSYW5nZVBvcG92ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5EYXRlUmFuZ2VQb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==