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
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid ", ";\n  padding: ", ";\n  background-color: ", ";\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  z-index: 1;\n  hr {\n    color: ", ";\n    size: 0.1rem;\n    margin: 0;\n  }\n"]);

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
        // eslint-disable-line
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiRm9ybUdyb3VwIiwiUmFkaW8iLCJ0aGVtZSIsIlJhbmdlVHlwZXMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJ0cmFuc2xhdGUiLCJQb3BvdmVyU2VjdGlvbiIsImRpdiIsImNvbG9ycyIsImdyZXkzIiwiZ3V0dGVyV2lkdGgiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiUmFkaW9CdXR0b24iLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uUmFuZ2VUeXBlQ2hhbmdlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsInRyYW5zbGF0aW9ucyIsInN0YXRlIiwic2VsZWN0ZWRSYW5nZSIsInByb3BzS2V5IiwiZW5hYmxlZCIsImVuYWJsZWRPcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImxlbmd0aCIsIm1hcCIsInR5cGUiLCJoYW5kbGVDaGFuZ2UiLCJ1bmRlZmluZWQiLCJvcHRpb25zIiwicmVuZGVyT3B0aW9ucyIsInJlbmRlclJhbmdlT3B0aW9ucyIsInJlbmRlclJhbmdlQ29tcG9uZW50IiwiZmluZCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLEtBQXBCLFFBQWlDLGlCQUFqQztBQUVBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCO0FBRUEsT0FBT0MsVUFBUCxNQUF1QixlQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNB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R0FFR1osS0FGSCxDQUVUWSxPQUZTOztBQUdqQixRQUFNVixrQkFBaUIsR0FBR1UsUUFBTyxDQUFDWixLQUFLLENBQUNFLGlCQUFQLENBQVAsR0FDdEJGLEtBQUssQ0FBQ0UsaUJBRGdCLEdBRXRCWSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsUUFBWixFQUFxQmUsSUFBckIsQ0FBMEIsVUFBQ1YsR0FBRDtBQUFBLGFBQVNMLFFBQU8sQ0FBQ0ssR0FBRCxDQUFoQjtBQUFBLEtBQTFCLENBRko7O0FBR0EsVUFBS1IsS0FBTCxHQUFhO0FBQ1hQLE1BQUFBLGlCQUFpQixFQUFqQkE7QUFEVyxLQUFiO0FBTmlCO0FBU2xCOzs7RUFWMkNuQixLQUFLLENBQUM2QyxhOztTQUEvQjdCLGdCO0FBOEVyQkEsZ0JBQWdCLENBQUNULFlBQWpCLEdBQWdDQSxZQUFoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgUmFkaW8gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IFJhbmdlVHlwZXMgZnJvbSAnLi9yYW5nZS10eXBlcyc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQb3BvdmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTN9O1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgei1pbmRleDogMTtcbiAgaHIge1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgc2l6ZTogMC4xcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgUmFkaW9CdXR0b24gPSBzdHlsZWQoUmFkaW8pYFxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAwIC0yMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2VQb3BvdmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgZW5hYmxlZCB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlbmFibGVkW3Byb3BzLnNlbGVjdGVkUmFuZ2VUeXBlXVxuICAgICAgPyBwcm9wcy5zZWxlY3RlZFJhbmdlVHlwZVxuICAgICAgOiBPYmplY3Qua2V5cyhlbmFibGVkKS5maW5kKChrZXkpID0+IGVuYWJsZWRba2V5XSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBvblJhbmdlVHlwZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgb25SYW5nZVR5cGVDaGFuZ2UoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3NlbGVjdGVkUmFuZ2VUeXBlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdGVkUmFuZ2UuY29tcG9uZW50XG4gICAgICAgIHsuLi50aGlzLnByb3BzW3NlbGVjdGVkUmFuZ2UucHJvcHNLZXldfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZW5hYmxlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhSYW5nZVR5cGVzKS5maWx0ZXIoKGtleSkgPT4gZW5hYmxlZFtrZXldKTtcbiAgICByZXR1cm4gZW5hYmxlZE9wdGlvbnMubGVuZ3RoID4gMVxuICAgICAgPyBlbmFibGVkT3B0aW9ucy5tYXAoKHR5cGUpID0+IChcbiAgICAgICAgPFJhZGlvQnV0dG9uXG4gICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgIG5hbWU9XCJyYW5nZVR5cGVcIlxuICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgICBpbmxpbmVcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCB0eXBlKX1cbiAgICAgICAgPC9SYWRpb0J1dHRvbj5cbiAgICAgICkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICByZW5kZXJSYW5nZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucmVuZGVyT3B0aW9ucygpO1xuICAgIHJldHVybiAoXG4gICAgICBvcHRpb25zXG4gICAgICAgID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxQb3BvdmVyU2VjdGlvbj5cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlT3B0aW9ucygpfVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICA8L1BvcG92ZXJTZWN0aW9uPlxuICApO1xufVxuXG5EYXRlUmFuZ2VQb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuRGF0ZVJhbmdlUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=