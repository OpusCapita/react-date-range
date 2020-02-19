function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

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
import { theme, Primitive } from '@opuscapita/oc-cm-common-layouts';
import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';
import translate from '../translations/translate';
var PopoverSection = styled.div(_templateObject(), theme.colors.grey3, theme.gutterWidth, theme.contentBackgroundColor, theme.colors.grey3);
var RadioButton = styled(Radio)(_templateObject2());
var OkButtonContainer = styled.div(_templateObject3());

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

    _defineProperty(_assertThisInitialized(_this), "renderOkButton", function () {
      var _this$props3 = _this.props,
          translations = _this$props3.translations,
          hidePopover = _this$props3.hidePopover;
      return React.createElement(OkButtonContainer, null, React.createElement(Primitive.Button, {
        onClick: hidePopover
      }, translate(translations, 'ok')));
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return React.createElement(PopoverSection, null, _this.renderRangeOptions(), _this.renderRangeComponent(), _this.renderOkButton());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiRm9ybUdyb3VwIiwiUmFkaW8iLCJ0aGVtZSIsIlByaW1pdGl2ZSIsIlJhbmdlVHlwZXMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJ0cmFuc2xhdGUiLCJQb3BvdmVyU2VjdGlvbiIsImRpdiIsImNvbG9ycyIsImdyZXkzIiwiZ3V0dGVyV2lkdGgiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiUmFkaW9CdXR0b24iLCJPa0J1dHRvbkNvbnRhaW5lciIsIkRhdGVSYW5nZVBvcG92ZXIiLCJwcm9wcyIsImUiLCJzZWxlY3RlZFJhbmdlVHlwZSIsInRhcmdldCIsInZhbHVlIiwib25SYW5nZVR5cGVDaGFuZ2UiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwidHJhbnNsYXRpb25zIiwic3RhdGUiLCJzZWxlY3RlZFJhbmdlIiwicHJvcHNLZXkiLCJlbmFibGVkIiwiZW5hYmxlZE9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwibGVuZ3RoIiwibWFwIiwidHlwZSIsImhhbmRsZUNoYW5nZSIsInVuZGVmaW5lZCIsIm9wdGlvbnMiLCJyZW5kZXJPcHRpb25zIiwiaGlkZVBvcG92ZXIiLCJyZW5kZXJSYW5nZU9wdGlvbnMiLCJyZW5kZXJSYW5nZUNvbXBvbmVudCIsInJlbmRlck9rQnV0dG9uIiwiZmluZCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxLQUFwQixRQUFpQyxpQkFBakM7QUFFQSxTQUFTQyxLQUFULEVBQWdCQyxTQUFoQixRQUFpQyxrQ0FBakM7QUFF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R0FTSEQsU0FWTjtBQVlELEtBakVrQjs7QUFBQSxxRUFtRUYsWUFBTTtBQUFBLHlCQUNpQixNQUFLdEIsS0FEdEI7QUFBQSxVQUNiUSxZQURhLGdCQUNiQSxZQURhO0FBQUEsVUFDQ2lCLFdBREQsZ0JBQ0NBLFdBREQ7QUFFckIsYUFDRSxvQkFBQyxpQkFBRCxRQUNFLG9CQUFDLFNBQUQsQ0FBVyxNQUFYO0FBQ0UsUUFBQSxPQUFPLEVBQUVBO0FBRFgsU0FHR25DLFNBQVMsQ0FBQ2tCLFlBQUQsRUFBZSxJQUFmLENBSFosQ0FERixDQURGO0FBU0QsS0E5RWtCOztBQUFBLDZEQWdGVjtBQUFBLGFBQ1Asb0JBQUMsY0FBRCxRQUNHLE1BQUtrQixrQkFBTCxFQURILEVBRUcsTUFBS0Msb0JBQUwsRUFGSCxFQUdHLE1BQUtDLGNBQUwsRUFISCxDQURPO0FBQUEsS0FoRlU7O0FBQUEsUUFFVGhCLFFBRlMsR0FFR1osS0FGSCxDQUVUWSxPQUZTOztBQUdqQixRQUFNVixrQkFBaUIsR0FBR1UsUUFBTyxDQUFDWixLQUFLLENBQUNFLGlCQUFQLENBQVAsR0FDdEJGLEtBQUssQ0FBQ0UsaUJBRGdCLEdBRXRCWSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsUUFBWixFQUFxQmlCLElBQXJCLENBQTBCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTTCxRQUFPLENBQUNLLEdBQUQsQ0FBaEI7QUFBQSxLQUExQixDQUZKOztBQUdBLFVBQUtSLEtBQUwsR0FBYTtBQUNYUCxNQUFBQSxpQkFBaUIsRUFBakJBO0FBRFcsS0FBYjtBQU5pQjtBQVNsQjs7O0VBVjJDckIsS0FBSyxDQUFDaUQsYTs7U0FBL0IvQixnQjtBQTRGckJBLGdCQUFnQixDQUFDVixZQUFqQixHQUFnQ0EsWUFBaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJhZGlvIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgdGhlbWUsIFByaW1pdGl2ZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IFJhbmdlVHlwZXMgZnJvbSAnLi9yYW5nZS10eXBlcyc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQb3BvdmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTN9O1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgei1pbmRleDogMTtcbiAgaHIge1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgc2l6ZTogMC4xcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgUmFkaW9CdXR0b24gPSBzdHlsZWQoUmFkaW8pYFxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAwIC0yMHB4O1xuICB9XG5gO1xuXG5jb25zdCBPa0J1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZVBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBlbmFibGVkIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IGVuYWJsZWRbcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVdXG4gICAgICA/IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlXG4gICAgICA6IE9iamVjdC5rZXlzKGVuYWJsZWQpLmZpbmQoKGtleSkgPT4gZW5hYmxlZFtrZXldKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IG9uUmFuZ2VUeXBlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgICBvblJhbmdlVHlwZUNoYW5nZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICB9XG5cbiAgcmVuZGVyUmFuZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZSA9IFJhbmdlVHlwZXNbc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBlbmFibGVkT3B0aW9ucyA9IE9iamVjdC5rZXlzKFJhbmdlVHlwZXMpLmZpbHRlcigoa2V5KSA9PiBlbmFibGVkW2tleV0pO1xuICAgIHJldHVybiBlbmFibGVkT3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IGVuYWJsZWRPcHRpb25zLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgbmFtZT1cInJhbmdlVHlwZVwiXG4gICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUmFuZ2VUeXBlID09PSB0eXBlfVxuICAgICAgICAgIGlubGluZVxuICAgICAgICA+XG4gICAgICAgICAge3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsIHR5cGUpfVxuICAgICAgICA8L1JhZGlvQnV0dG9uPlxuICAgICAgKSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJlbmRlclJhbmdlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5yZW5kZXJPcHRpb25zKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIG9wdGlvbnNcbiAgICAgICAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICByZW5kZXJPa0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucywgaGlkZVBvcG92ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxPa0J1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgPFByaW1pdGl2ZS5CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoaWRlUG9wb3Zlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnb2snKX1cbiAgICAgICAgPC9QcmltaXRpdmUuQnV0dG9uPlxuICAgICAgPC9Pa0J1dHRvbkNvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxQb3BvdmVyU2VjdGlvbj5cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlT3B0aW9ucygpfVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICAgIHt0aGlzLnJlbmRlck9rQnV0dG9uKCl9XG4gICAgPC9Qb3BvdmVyU2VjdGlvbj5cbiAgKTtcbn1cblxuRGF0ZVJhbmdlUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkRhdGVSYW5nZVBvcG92ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19