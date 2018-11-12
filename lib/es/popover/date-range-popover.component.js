var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

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
import translate from '../translations/translate';

var PopoverSection = styled.div(_templateObject, theme.gutterWidth, theme.contentBackgroundColor);

var DateRangePopover = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    _classCallCheck(this, DateRangePopover);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var enabled = props.enabled;

    var selectedRangeType = enabled[props.selectedRangeType] ? props.selectedRangeType : Object.keys(enabled).find(function (key) {
      return enabled[key];
    });
    _this.state = {
      selectedRangeType: selectedRangeType
    };
    return _this;
  }

  return DateRangePopover;
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var selectedRangeType = e.target.value;
    var onRangeTypeChange = _this2.props.onRangeTypeChange;

    _this2.setState({ selectedRangeType: selectedRangeType });
    onRangeTypeChange({ selectedRangeType: selectedRangeType });
  };

  this.renderRangeComponent = function () {
    var _props = _this2.props,
        onChange = _props.onChange,
        translations = _props.translations;
    var selectedRangeType = _this2.state.selectedRangeType;

    var selectedRange = RangeTypes[selectedRangeType];
    return React.createElement(selectedRange.component, _extends({}, _this2.props[selectedRange.propsKey], {
      onChange: onChange,
      translations: translations
    }));
  };

  this.renderOptions = function () {
    var _props2 = _this2.props,
        enabled = _props2.enabled,
        translations = _props2.translations;
    var selectedRangeType = _this2.state.selectedRangeType;

    var enabledOptions = Object.keys(RangeTypes).filter(function (key) {
      return enabled[key];
    });
    return enabledOptions.length > 1 ? enabledOptions.map(function (type) {
      return React.createElement(
        Radio,
        {
          key: type,
          name: 'rangeType',
          value: type,
          onChange: _this2.handleChange,
          checked: selectedRangeType === type,
          inline: true
        },
        translate(translations, type)
      );
    }) : undefined;
  };

  this.renderRangeOptions = function () {
    var options = _this2.renderOptions();
    return options ? React.createElement(
      React.Fragment,
      null,
      React.createElement(
        FormGroup,
        null,
        options
      ),
      React.createElement('hr', null)
    ) : undefined;
  };

  this.render = function () {
    return React.createElement(
      PopoverSection,
      null,
      _this2.renderRangeOptions(),
      _this2.renderRangeComponent()
    );
  };
}, _temp);
export { DateRangePopover as default };


DateRangePopover.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiRm9ybUdyb3VwIiwiUmFkaW8iLCJ0aGVtZSIsIlJhbmdlVHlwZXMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJ0cmFuc2xhdGUiLCJQb3BvdmVyU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZVBvcG92ZXIiLCJwcm9wcyIsImVuYWJsZWQiLCJzZWxlY3RlZFJhbmdlVHlwZSIsIk9iamVjdCIsImtleXMiLCJmaW5kIiwia2V5Iiwic3RhdGUiLCJQdXJlQ29tcG9uZW50IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25SYW5nZVR5cGVDaGFuZ2UiLCJzZXRTdGF0ZSIsInJlbmRlclJhbmdlQ29tcG9uZW50Iiwib25DaGFuZ2UiLCJ0cmFuc2xhdGlvbnMiLCJzZWxlY3RlZFJhbmdlIiwicHJvcHNLZXkiLCJyZW5kZXJPcHRpb25zIiwiZW5hYmxlZE9wdGlvbnMiLCJmaWx0ZXIiLCJsZW5ndGgiLCJtYXAiLCJ0eXBlIiwidW5kZWZpbmVkIiwicmVuZGVyUmFuZ2VPcHRpb25zIiwib3B0aW9ucyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxLQUFwQixRQUFpQyxpQkFBakM7O0FBRUEsU0FBU0MsS0FBVCxRQUFzQixrQ0FBdEI7O0FBRUEsT0FBT0MsVUFBUCxNQUF1QixlQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsMkJBQXRCOztBQUVBLElBQU1D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bnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSYWRpbyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgUmFuZ2VUeXBlcyBmcm9tICcuL3JhbmdlLXR5cGVzJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBvcG92ZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfVxuICBociB7XG4gICAgY29sb3I6ICNDQ0M7XG4gICAgc2l6ZTogMC4xcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlUG9wb3ZlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IGVuYWJsZWQgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZW5hYmxlZFtwcm9wcy5zZWxlY3RlZFJhbmdlVHlwZV1cbiAgICAgID8gcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVcbiAgICAgIDogT2JqZWN0LmtleXMoZW5hYmxlZCkuZmluZChrZXkgPT4gZW5hYmxlZFtrZXldKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IG9uUmFuZ2VUeXBlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgICBvblJhbmdlVHlwZUNoYW5nZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICB9XG5cbiAgcmVuZGVyUmFuZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZSA9IFJhbmdlVHlwZXNbc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZW5hYmxlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhSYW5nZVR5cGVzKS5maWx0ZXIoa2V5ID0+IGVuYWJsZWRba2V5XSk7XG4gICAgcmV0dXJuIGVuYWJsZWRPcHRpb25zLmxlbmd0aCA+IDFcbiAgICAgID8gZW5hYmxlZE9wdGlvbnMubWFwKHR5cGUgPT4gKFxuICAgICAgICA8UmFkaW9cbiAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgbmFtZT1cInJhbmdlVHlwZVwiXG4gICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUmFuZ2VUeXBlID09PSB0eXBlfVxuICAgICAgICAgIGlubGluZVxuICAgICAgICA+XG4gICAgICAgICAge3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsIHR5cGUpfVxuICAgICAgICA8L1JhZGlvPikpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICByZW5kZXJSYW5nZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucmVuZGVyT3B0aW9ucygpO1xuICAgIHJldHVybiAoXG4gICAgICBvcHRpb25zID9cbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxQb3BvdmVyU2VjdGlvbj5cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlT3B0aW9ucygpfVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICA8L1BvcG92ZXJTZWN0aW9uPlxuICApO1xufVxuXG5EYXRlUmFuZ2VQb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuRGF0ZVJhbmdlUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=