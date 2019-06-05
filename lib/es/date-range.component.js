function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      width: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  .form-control[readonly] {\n    background-color: ", ";\n    padding-right: 32px;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  display: flex;\n  svg {\n    margin: 9px 8px 9px -24px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import absoluteRangeDefaultProps from './components/absolute/default-props';
import absoluteRangePropTypes from './components/absolute/prop-types';
import Constants from './components/relative/constants';
import DateRangePopover from './popover/date-range-popover.component';
import formatPeriodLabel from './components/period/period-label.formatter';
import { getRelativeOption } from './components/relative/relative-options';
import periodDefaultProps from './components/period/default-props';
import { periodShape } from './components/period/prop-types';
import relativeRangeDefaultProps from './components/relative/default-props';
import { relativeDateValueShape } from './components/relative/prop-types';
import translate from './translations/translate';
import translationsDefaultProps from './translations/default-props';
import translationsPropTypes from './translations/prop-types';
var ReadOnlyInput = styled.div(_templateObject(), theme.contentBackgroundColor, theme.colors.grey9);

var DateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DateRange, _React$PureComponent);

  function DateRange(_props) {
    var _this;

    _this = _React$PureComponent.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.absoluteRange !== _this.props.absoluteRange || prevProps.relativeRange !== _this.props.relativeRange || prevProps.period !== _this.props.period) {
        var state = _this.initState(_this.props);

        if (state) {
          _this.setState(state);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAbsoluteState", function () {
      var absoluteRange = _this.state.absoluteRange;

      var _ref = absoluteRange || {},
          endDate = _ref.endDate,
          startDate = _ref.startDate;

      var dateFormat = _this.props.absoluteRange.dateFormat;

      if (startDate && endDate) {
        var from = moment.utc(startDate);
        var to = moment.utc(endDate);

        if (from.isValid() && to.isValid()) {
          return {
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString(),
            value: from.format(dateFormat) + " - " + to.format(dateFormat)
          };
        }
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPeriodState", function () {
      var translations = _this.props.translations;
      var period = _this.state.period;

      var _ref2 = period || {},
          endDate = _ref2.endDate,
          startDate = _ref2.startDate;

      if (endDate && startDate && startDate.value) {
        return {
          endDate: _extends({}, endDate, {
            moment: endDate.moment || Constants.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || Constants.START
          }),
          value: formatPeriodLabel(startDate, endDate, translations)
        };
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getRelativeState", function () {
      var relativeRange = _this.state.relativeRange;

      var _ref3 = relativeRange || {},
          endDate = _ref3.endDate,
          startDate = _ref3.startDate;

      if (endDate && startDate && endDate.value && startDate.value) {
        return {
          endDate: _extends({}, endDate.value, {
            moment: endDate.value.moment || Constants.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || Constants.START
          }),
          value: startDate.label + " - " + endDate.label
        };
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initState", function (props) {
      return _this.initAbsoluteRange(props) || _this.initRelativeRange(props) || _this.initPeriod(props);
    });

    _defineProperty(_assertThisInitialized(_this), "initAbsoluteRange", function (props) {
      var absoluteRange = props.absoluteRange;

      var _ref4 = absoluteRange || {},
          endDate = _ref4.endDate,
          startDate = _ref4.startDate,
          dateFormat = _ref4.dateFormat;

      var _ref5 = (_this.state || {}).absoluteRange || {},
          showOverlay = _ref5.showOverlay;

      if (startDate && endDate) {
        var from = moment.utc(startDate);
        var to = moment.utc(endDate);
        return {
          absoluteRange: {
            showOverlay: showOverlay,
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString()
          },
          selectedRangeType: 'absolute',
          value: from.isValid() && to.isValid() ? from.format(dateFormat) + " - " + to.format(dateFormat) : ''
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "initPeriod", function (props) {
      var enabled = props.enabled,
          period = props.period,
          translations = props.translations;

      var _ref6 = period || {},
          endDate = _ref6.endDate,
          startDate = _ref6.startDate;

      var selectedStartDate = getRelativeOption(startDate, translate(translations, 'dates'));
      return {
        period: {
          endDate: endDate,
          startDate: selectedStartDate
        },
        selectedRangeType: endDate && selectedStartDate ? 'period' : undefined,
        value: enabled.period && endDate && selectedStartDate ? formatPeriodLabel(selectedStartDate, endDate, translations) : ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initRelativeRange", function (props) {
      var enabled = props.enabled,
          relativeRange = props.relativeRange,
          translations = props.translations;

      var _ref7 = relativeRange || {},
          endDate = _ref7.endDate,
          startDate = _ref7.startDate;

      if (endDate && startDate) {
        var selectedStartDate = getRelativeOption(startDate, translate(translations, 'dates'));
        var selectedEndDate = getRelativeOption(endDate, translate(translations, 'dates'));
        return {
          relativeRange: {
            endDate: selectedEndDate,
            startDate: selectedStartDate
          },
          selectedRangeType: selectedEndDate && selectedStartDate ? 'relative' : undefined,
          value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + " - " + selectedEndDate.label : ''
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleRangeTypeChange", function (event) {
      var onChange = _this.props.onChange;
      var selectedRangeType = event.selectedRangeType;

      var state = _this["get" + selectedRangeType.replace(/\w/, function (c) {
        return c.toUpperCase();
      }) + "State"]();

      _this.setState(_extends({}, state, {
        selectedRangeType: selectedRangeType
      }));

      var startDate = state.startDate,
          endDate = state.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var onChange = _this.props.onChange;

      _this.setState(event);

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.setState({
        showOverlay: !_this.state.showOverlay
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHide", function (e) {
      return e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker') ? e.preventDefault() : _this.setState({
        showOverlay: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCaret", function () {
      var showOverlay = _this.state.showOverlay;
      return showOverlay ? React.createElement(FaCaretUp, {
        onClick: _this.handleClick
      }) : React.createElement(FaCaretDown, {
        onClick: _this.handleClick
      });
    });

    var _state = _this.initState(_props);

    _this.state = _extends({}, _state, {
      showOverlay: false
    });
    return _this;
  }

  var _proto = DateRange.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        enabled = _this$props.enabled,
        id = _this$props.id,
        _inputRef = _this$props.inputRef,
        inputProps = _this$props.inputProps,
        translations = _this$props.translations,
        width = _this$props.width;
    var _this$state = this.state,
        period = _this$state.period,
        relativeRange = _this$state.relativeRange,
        selectedRangeType = _this$state.selectedRangeType,
        showOverlay = _this$state.showOverlay,
        value = _this$state.value;

    var absoluteRange = _extends({}, this.props.absoluteRange, this.state.absoluteRange);

    var DateRangeSection = styled.div(_templateObject2(), width);
    return React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(DateRangeSection, {
      id: id,
      className: className
    }, React.createElement(ReadOnlyInput, {
      showOverlay: showOverlay
    }, React.createElement(FormControl, _extends({
      type: "text",
      inputRef: function inputRef(el) {
        _this2.input = el;

        _inputRef(el);
      }
    }, inputProps, {
      readOnly: "readonly",
      value: value,
      onClick: this.handleClick
    })), this.renderCaret()), React.createElement(Overlay, {
      show: showOverlay,
      onHide: this.handleHide,
      placement: "bottom",
      container: this,
      rootClose: true
    }, React.createElement(DateRangePopover, {
      absoluteRange: absoluteRange,
      enabled: enabled,
      onRangeTypeChange: this.handleRangeTypeChange,
      onChange: this.handleChange,
      period: period,
      selectedRangeType: selectedRangeType,
      relativeRange: relativeRange,
      translations: translations
    }))));
  };

  return DateRange;
}(React.PureComponent);

_defineProperty(DateRange, "defaultProps", {
  absoluteRange: absoluteRangeDefaultProps,
  className: '',
  enabled: {
    absolute: true,
    period: false,
    relative: false
  },
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  period: periodDefaultProps,
  relativeRange: relativeRangeDefaultProps,
  translations: translationsDefaultProps,
  width: '300px'
});

export { DateRange as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwiRmFDYXJldERvd24iLCJGYUNhcmV0VXAiLCJ0aGVtZSIsImFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzIiwiQ29uc3RhbnRzIiwiRGF0ZVJhbmdlUG9wb3ZlciIsImZvcm1hdFBlcmlvZExhYmVsIiwiZ2V0UmVsYXRpdmVPcHRpb24iLCJwZXJpb2REZWZhdWx0UHJvcHMiLCJwZXJpb2RTaGFwZSIsInJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMiLCJyZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIiwidHJhbnNsYXRlIiwidHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIiwidHJhbnNsYXRpb25zUHJvcFR5cGVzIiwiUmVhZE9ubHlJbnB1dCIsImRpdiIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJncmV5OSIsIkRhdGVSYW5nZSIsInByb3BzIiwicHJldlByb3BzIiwiYWJzb2x1dGVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJwZXJpb2QiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNldFN0YXRlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJ2YWx1ZSIsImZvcm1hdCIsInRyYW5zbGF0aW9ucyIsIkVORCIsIlNUQVJUIiwibGFiZWwiLCJpbml0QWJzb2x1dGVSYW5nZSIsImluaXRSZWxhdGl2ZVJhbmdlIiwiaW5pdFBlcmlvZCIsInNob3dPdmVybGF5Iiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJlbmFibGVkIiwic2VsZWN0ZWRTdGFydERhdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEVuZERhdGUiLCJyZWxhdGl2ZSIsImV2ZW50Iiwib25DaGFuZ2UiLCJyZXBsYWNlIiwiYyIsInRvVXBwZXJDYXNlIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xpY2siLCJyZW5kZXIiLCJpZCIsImlucHV0UmVmIiwiaW5wdXRQcm9wcyIsIndpZHRoIiwiRGF0ZVJhbmdlU2VjdGlvbiIsImVsIiwiaW5wdXQiLCJyZW5kZXJDYXJldCIsImhhbmRsZUhpZGUiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiYWJzb2x1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixRQUFzQyxtQkFBdEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsT0FBdEIsUUFBcUMsaUJBQXJDO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsU0FBdEIsUUFBdUMsZ0JBQXZDO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixrQ0FBdEI7QUFDQSxPQUFPQyx5QkFBUCxNQUFzQyxxQ0FBdEM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQyxrQ0FBbkM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGlDQUF0QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHdDQUE3QjtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLDRDQUE5QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLHdDQUFsQztBQUNBLE9BQU9DLGtCQUFQLE1BQStCLG1DQUEvQjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsZ0NBQTVCO0FBQ0EsT0FBT0MseUJBQVAsTUFBc0MscUNBQXRDO0FBQ0EsU0FBU0Msc0JB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RCxTLGtCQTJCRztBQUNwQkcsRUFBQUEsYUFBYSxFQUFFckIseUJBREs7QUFFcEI2RCxFQUFBQSxTQUFTLEVBQUUsRUFGUztBQUdwQmIsRUFBQUEsT0FBTyxFQUFFO0FBQ1A4QixJQUFBQSxRQUFRLEVBQUUsSUFESDtBQUVQdkQsSUFBQUEsTUFBTSxFQUFFLEtBRkQ7QUFHUDZCLElBQUFBLFFBQVEsRUFBRTtBQUhILEdBSFc7QUFRcEJnQixFQUFBQSxVQUFVLEVBQUUsRUFSUTtBQVNwQkQsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FURTtBQVVwQmIsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FWRTtBQVdwQi9CLEVBQUFBLE1BQU0sRUFBRWpCLGtCQVhZO0FBWXBCZ0IsRUFBQUEsYUFBYSxFQUFFZCx5QkFaSztBQWFwQitCLEVBQUFBLFlBQVksRUFBRTVCLHdCQWJNO0FBY3BCMEQsRUFBQUEsS0FBSyxFQUFFO0FBZGEsQzs7U0EzQkhuRCxTIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmFDYXJldERvd24sIEZhQ2FyZXRVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VQcm9wVHlwZXMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBmb3JtYXRQZXJpb2RMYWJlbCBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgcGVyaW9kRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBwZXJpb2RTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcHJvcC10eXBlcyc7XG5pbXBvcnQgcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGlvbnNQcm9wVHlwZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvcHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDlweCA4cHggOXB4IC0yNHB4O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5OX07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWJzb2x1dGVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKGFic29sdXRlUmFuZ2VQcm9wVHlwZXMpLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmFibGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcGVyaW9kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbGF0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9KSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcGVyaW9kU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgcmVsYXRpdmVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUodHJhbnNsYXRpb25zUHJvcFR5cGVzKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFic29sdXRlUmFuZ2U6IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBlbmFibGVkOiB7XG4gICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgIHBlcmlvZDogZmFsc2UsXG4gICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBlcmlvZDogcGVyaW9kRGVmYXVsdFByb3BzLFxuICAgIHJlbGF0aXZlUmFuZ2U6IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZShwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5hYnNvbHV0ZVJhbmdlICE9PSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnJlbGF0aXZlUmFuZ2UgIT09IHRoaXMucHJvcHMucmVsYXRpdmVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucGVyaW9kICE9PSB0aGlzLnByb3BzLnBlcmlvZCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UGVyaW9kU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUsIG1vbWVudDogZW5kRGF0ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBmb3JtYXRQZXJpb2RMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWxhdGl2ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UGVyaW9kKHByb3BzKVxuICApO1xuXG4gIGluaXRBYnNvbHV0ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSAodGhpcy5zdGF0ZSB8fCB7fSkuYWJzb2x1dGVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6ICdhYnNvbHV0ZScsXG4gICAgICAgIHZhbHVlOiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UGVyaW9kID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCBwZXJpb2QsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3BlcmlvZCcgOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZTogKGVuYWJsZWQucGVyaW9kICYmIGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRTdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucykgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHJlbGF0aXZlUmFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlOiBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/ICdyZWxhdGl2ZScgOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiAoZW5hYmxlZC5yZWxhdGl2ZSAmJiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgICBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzW2BnZXQke3NlbGVjdGVkUmFuZ2VUeXBlLnJlcGxhY2UoL1xcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBzdGF0ZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShldmVudCk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICogUm9vdCBjYXVzZTogZGF5LXBpY2tlciBpcyByZW5kZXJlZCB0byByb290IGVsZW1lbnQsIG5vdCBpbnNpZGUgcG9wb3ZlciBlbGVlbW50LlxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxuICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgKiBPbmUgc29sdXRpb24gaXMgcGFzc2luZyBhdCBsZWFzdCB0cmVlIGNhbGxiYWNrcyBmb3IgcmVhY3QtZGF0ZXRpbWU6IG9uV2Vla0NsaWNrLFxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxuICAgKi9cbiAgaGFuZGxlSGlkZSA9IGUgPT4gKFxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA6XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6IGZhbHNlIH0pXG4gICk7XG5cbiAgcmVuZGVyQ2FyZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gc2hvd092ZXJsYXlcbiAgICAgID8gPEZhQ2FyZXRVcCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgOiA8RmFDYXJldERvd24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlLFxuICAgICAgLi4udGhpcy5zdGF0ZS5hYnNvbHV0ZVJhbmdlLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0IHNob3dPdmVybGF5PXtzaG93T3ZlcmxheX0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZXQoKX1cbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3Nob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=