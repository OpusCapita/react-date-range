function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  input[type=\"radio\"] {\n    height: 100%;\n    line-height: 100%;\n    margin: 0 0 0 -20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid ", ";\n  padding: ", ";\n  background-color: ", ";\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  hr {\n    color: ", ";\n    size: 0.1rem;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';
import translate from '../translations/translate';
var PopoverSection = styled.div(_templateObject(), theme.colors.grey3, theme.gutterWidth, theme.contentBackgroundColor, theme.colors.grey3);
var RadioButton = styled(Radio)(_templateObject2());

var DateRangePopover =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var selectedRangeType = e.target.value;
      var onRangeTypeChange = _this.props.onRangeTypeChange;

      _this.setState({
        selectedRangeType: selectedRangeType
      });

      onRangeTypeChange({
        selectedRangeType: selectedRangeType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderRangeComponent", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          translations = _this$props.translations;
      var selectedRangeType = _this.state.selectedRangeType;
      var selectedRange = RangeTypes[selectedRangeType];
      return React.createElement(selectedRange.component, _extends({}, _this.props[selectedRange.propsKey], {
        onChange: onChange,
        translations: translations
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
      var _this$props2 = _this.props,
          enabled = _this$props2.enabled,
          translations = _this$props2.translations;
      var selectedRangeType = _this.state.selectedRangeType;
      var enabledOptions = Object.keys(RangeTypes).filter(function (key) {
        return enabled[key];
      });
      return enabledOptions.length > 1 ? enabledOptions.map(function (type) {
        return React.createElement(RadioButton, {
          key: type,
          name: "rangeType",
          value: type,
          onChange: _this.handleChange,
          checked: selectedRangeType === type,
          inline: true
        }, translate(translations, type));
      }) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "renderRangeOptions", function () {
      var options = _this.renderOptions();

      return options ? React.createElement(React.Fragment, null, React.createElement(FormGroup, null, options), React.createElement("hr", null)) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return React.createElement(PopoverSection, null, _this.renderRangeOptions(), _this.renderRangeComponent());
    });

    var _enabled = props.enabled;

    var _selectedRangeType = _enabled[props.selectedRangeType] ? props.selectedRangeType : Object.keys(_enabled).find(function (key) {
      return _enabled[key];
    });

    _this.state = {
      selectedRangeType: _selectedRangeType
    };
    return _this;
  }

  return DateRangePopover;
}(React.PureComponent);

export { DateRangePopover as default };
DateRangePopover.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiRm9ybUdyb3VwIiwiUmFkaW8iLCJ0aGVtZSIsIlJhbmdlVHlwZXMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJ0cmFuc2xhdGUiLCJQb3BvdmVyU2VjdGlvbiIsImRpdiIsImNvbG9ycyIsImdyZXkzIiwiZ3V0dGVyV2lkdGgiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiUmFkaW9CdXR0b24iLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uUmFuZ2VUeXBlQ2hhbmdlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsInRyYW5zbGF0aW9ucyIsInN0YXRlIiwic2VsZWN0ZWRSYW5nZSIsInByb3BzS2V5IiwiZW5hYmxlZCIsImVuYWJsZWRPcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImxlbmd0aCIsIm1hcCIsInR5cGUiLCJoYW5kbGVDaGFuZ2UiLCJ1bmRlZmluZWQiLCJvcHRpb25zIiwicmVuZGVyT3B0aW9ucyIsInJlbmRlclJhbmdlT3B0aW9ucyIsInJlbmRlclJhbmdlQ29tcG9uZW50IiwiZmluZCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLEtBQXBCLFFBQWlDLGlCQUFqQztBQUVBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCO0FBRUEsT0FBT0MsVUFBUCxNQUF1QixlQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNB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UUFFVGQsUUFGUyxHQUVHWixLQUZILENBRVRZLE9BRlM7O0FBR2pCLFFBQU1WLGtCQUFpQixHQUFHVSxRQUFPLENBQUNaLEtBQUssQ0FBQ0UsaUJBQVAsQ0FBUCxHQUN0QkYsS0FBSyxDQUFDRSxpQkFEZ0IsR0FFdEJZLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxRQUFaLEVBQXFCZSxJQUFyQixDQUEwQixVQUFBVixHQUFHO0FBQUEsYUFBSUwsUUFBTyxDQUFDSyxHQUFELENBQVg7QUFBQSxLQUE3QixDQUZKOztBQUdBLFVBQUtSLEtBQUwsR0FBYTtBQUNYUCxNQUFBQSxpQkFBaUIsRUFBakJBO0FBRFcsS0FBYjtBQU5pQjtBQVNsQjs7O0VBVjJDbkIsS0FBSyxDQUFDNkMsYTs7U0FBL0I3QixnQjtBQTJFckJBLGdCQUFnQixDQUFDVCxZQUFqQixHQUFnQ0EsWUFBaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJhZGlvIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBSYW5nZVR5cGVzIGZyb20gJy4vcmFuZ2UtdHlwZXMnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUG9wb3ZlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGhyIHtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTN9O1xuICAgIHNpemU6IDAuMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFJhZGlvQnV0dG9uID0gc3R5bGVkKFJhZGlvKWBcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMCAtMjBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlUG9wb3ZlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IGVuYWJsZWQgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZW5hYmxlZFtwcm9wcy5zZWxlY3RlZFJhbmdlVHlwZV1cbiAgICAgID8gcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVcbiAgICAgIDogT2JqZWN0LmtleXMoZW5hYmxlZCkuZmluZChrZXkgPT4gZW5hYmxlZFtrZXldKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IG9uUmFuZ2VUeXBlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgICBvblJhbmdlVHlwZUNoYW5nZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICB9XG5cbiAgcmVuZGVyUmFuZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZSA9IFJhbmdlVHlwZXNbc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZW5hYmxlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhSYW5nZVR5cGVzKS5maWx0ZXIoa2V5ID0+IGVuYWJsZWRba2V5XSk7XG4gICAgcmV0dXJuIGVuYWJsZWRPcHRpb25zLmxlbmd0aCA+IDFcbiAgICAgID8gZW5hYmxlZE9wdGlvbnMubWFwKHR5cGUgPT4gKFxuICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgbmFtZT1cInJhbmdlVHlwZVwiXG4gICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUmFuZ2VUeXBlID09PSB0eXBlfVxuICAgICAgICAgIGlubGluZVxuICAgICAgICA+XG4gICAgICAgICAge3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsIHR5cGUpfVxuICAgICAgICA8L1JhZGlvQnV0dG9uPikpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICByZW5kZXJSYW5nZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucmVuZGVyT3B0aW9ucygpO1xuICAgIHJldHVybiAoXG4gICAgICBvcHRpb25zID9cbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxQb3BvdmVyU2VjdGlvbj5cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlT3B0aW9ucygpfVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICA8L1BvcG92ZXJTZWN0aW9uPlxuICApO1xufVxuXG5EYXRlUmFuZ2VQb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuRGF0ZVJhbmdlUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=