function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import absoluteRangeDefaultProps from './components/absolute/default-props';
import absoluteRangePropTypes from './components/absolute/prop-types';
import RelativeConstants from './components/relative/constants';
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
var DateRangeSection = styled.div(_templateObject2(), function (props) {
  return props.width;
});
var Constants = Object.freeze({
  ABSOLUTE: 'absolute',
  PERIOD: 'period',
  RELATIVE: 'relative'
});

var DateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DateRange, _React$PureComponent);

  function DateRange(_props) {
    var _this;

    _this = _React$PureComponent.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      var _this$props = _this.props,
          absoluteRange = _this$props.absoluteRange,
          relativeRange = _this$props.relativeRange,
          period = _this$props.period;

      if (prevProps.absoluteRange !== absoluteRange || prevProps.relativeRange !== relativeRange || prevProps.period !== period) {
        var state = _this.initState(_this.props);

        if (state) {
          _this.setState(state);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAbsoluteState", function () {
      var dateFormat = _this.props.absoluteRange.dateFormat;
      var absoluteRange = _this.state.absoluteRange;

      var _ref = absoluteRange || {},
          endDate = _ref.endDate,
          startDate = _ref.startDate;

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
            moment: endDate.moment || RelativeConstants.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || RelativeConstants.START
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
            moment: endDate.value.moment || RelativeConstants.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || RelativeConstants.START
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
          selectedRangeType: Constants.ABSOLUTE,
          value: from.isValid() && to.isValid() ? from.format(dateFormat) + " - " + to.format(dateFormat) : '',
          lastValidRange: Constants.ABSOLUTE
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
      var selectedRangeType = endDate && selectedStartDate ? Constants.PERIOD : undefined;
      return {
        period: {
          endDate: endDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedRangeType,
        value: enabled.period && endDate && selectedStartDate ? formatPeriodLabel(selectedStartDate, endDate, translations) : '',
        lastValidRange: selectedRangeType
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
        var selectedRangeType = selectedEndDate && selectedStartDate ? Constants.RELATIVE : undefined;
        return {
          relativeRange: {
            endDate: selectedEndDate,
            startDate: selectedStartDate
          },
          selectedRangeType: selectedRangeType,
          value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + " - " + selectedEndDate.label : '',
          lastValidRange: selectedRangeType
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

        _this.setState({
          lastValidRange: selectedRangeType
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var onChange = _this.props.onChange;
      var lastValidRange = _this.state.selectedRangeType;

      _this.setState(event);

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });

        _this.setState({
          lastValidRange: lastValidRange
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.setState(function (prevState) {
        return {
          showOverlay: !prevState.showOverlay
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHide", function (e) {
      /**
       * This if is dirty solution and c/should be fixed.
       * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
       * Therefore click coming form day-picker are considers as outside click of popover
       * and popover would be close without event preventDefault.
       * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
       * onCaptionClick and custom onClick for custom caption of react-datetime.
       */
      if (e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes && (e.target.parentNode.className.includes('DayPicker') || e.target.parentNode.className.includes('daterange-select'))) {
        e.preventDefault();
        return;
      }

      var _this$state = _this.state,
          value = _this$state.value,
          lastValidRange = _this$state.lastValidRange;
      var state = !value && lastValidRange ? _extends({}, _this["get" + lastValidRange.replace(/\w/, function (c) {
        return c.toUpperCase();
      }) + "State"](), {
        selectedRangeType: lastValidRange,
        showOverlay: false
      }) : {
        showOverlay: false
      };

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "renderCaret", function () {
      var showOverlay = _this.state.showOverlay;
      return showOverlay ? React.createElement(FaCaretUp, {
        onClick: _this.handleClick
      }) : React.createElement(FaCaretDown, {
        onClick: _this.handleClick
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputRef", function (el) {
      var inputRef = _this.props.inputRef;
      _this.input = el;
      inputRef(el);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayTargetRef", function (el) {
      _this.overlayTarget = el;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayTarget", function () {
      return ReactDOM.findDOMNode(_this.overlayTarget);
    });

    var _state = _this.initState(_props);

    _this.state = _extends({}, _state, {
      showOverlay: false
    });
    return _this;
  }

  var _proto = DateRange.prototype;

  // eslint-disable-line
  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        enabled = _this$props2.enabled,
        id = _this$props2.id,
        inputProps = _this$props2.inputProps,
        translations = _this$props2.translations,
        absoluteRangeProp = _this$props2.absoluteRange;
    var _this$state2 = this.state,
        period = _this$state2.period,
        relativeRange = _this$state2.relativeRange,
        selectedRangeType = _this$state2.selectedRangeType,
        showOverlay = _this$state2.showOverlay,
        value = _this$state2.value,
        absoluteRangeState = _this$state2.absoluteRange;

    var absoluteRange = _extends({}, absoluteRangeProp, {}, absoluteRangeState);

    return React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(DateRangeSection, {
      id: id,
      className: className,
      ref: this.handleOverlayTargetRef
    }, React.createElement(ReadOnlyInput, {
      showOverlay: showOverlay
    }, React.createElement(FormControl, _extends({
      type: "text",
      inputRef: this.handleInputRef
    }, inputProps, {
      readOnly: "readonly",
      value: value,
      onClick: this.handleClick
    })), this.renderCaret()), React.createElement(Overlay, {
      show: showOverlay,
      onHide: this.handleHide,
      placement: "bottom",
      container: this,
      rootClose: true,
      target: this.handleOverlayTarget
    }, React.createElement(DateRangePopover, {
      absoluteRange: absoluteRange,
      enabled: enabled,
      onRangeTypeChange: this.handleRangeTypeChange,
      onChange: this.handleChange,
      period: period,
      selectedRangeType: selectedRangeType,
      relativeRange: relativeRange,
      translations: translations,
      hidePopover: this.handleClick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJtb21lbnQiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXkiLCJGYUNhcmV0RG93biIsIkZhQ2FyZXRVcCIsInRoZW1lIiwiYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyIsImFic29sdXRlUmFuZ2VQcm9wVHlwZXMiLCJSZWxhdGl2ZUNvbnN0YW50cyIsIkRhdGVSYW5nZVBvcG92ZXIiLCJmb3JtYXRQZXJpb2RMYWJlbCIsImdldFJlbGF0aXZlT3B0aW9uIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicGVyaW9kU2hhcGUiLCJyZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIiwicmVsYXRpdmVEYXRlVmFsdWVTaGFwZSIsInRyYW5zbGF0ZSIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc1Byb3BUeXBlcyIsIlJlYWRPbmx5SW5wdXQiLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiZ3JleTkiLCJEYXRlUmFuZ2VTZWN0aW9uIiwicHJvcHMiLCJ3aWR0aCIsIkNvbnN0YW50cyIsIk9iamVjdCIsImZyZWV6ZSIsIkFCU09MVVRFIiwiUEVSSU9EIiwiUkVMQVRJVkUiLCJEYXRlUmFuZ2UiLCJwcmV2UHJvcHMiLCJhYnNvbHV0ZVJhbmdlIiwicmVsYXRpdmVSYW5nZSIsInBlcmlvZCIsInN0YXRlIiwiaW5pdFN0YXRlIiwic2V0U3RhdGUiLCJkYXRlRm9ybWF0IiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImZyb20iLCJ1dGMiLCJ0byIsImlzVmFsaWQiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwic3RhcnRPZiIsInZhbHVlIiwiZm9ybWF0IiwidHJhbnNsYXRpb25zIiwiRU5EIiwiU1RBUlQiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZFJhbmdlVHlwZSIsImxhc3RWYWxpZFJhbmdlIiwiZW5hYmxlZCIsInNlbGVjdGVkU3RhcnREYXRlIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRFbmREYXRlIiwicmVsYXRpdmUiLCJldmVudCIsIm9uQ2hhbmdlIiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsInByZXZTdGF0ZSIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwiZWwiLCJpbnB1dFJlZiIsImlucHV0Iiwib3ZlcmxheVRhcmdldCIsImZpbmRET01Ob2RlIiwicmVuZGVyIiwiaWQiLCJpbnB1dFByb3BzIiwiYWJzb2x1dGVSYW5nZVByb3AiLCJhYnNvbHV0ZVJhbmdlU3RhdGUiLCJoYW5kbGVPdmVybGF5VGFyZ2V0UmVmIiwiaGFuZGxlSW5wdXRSZWYiLCJyZW5kZXJDYXJldCIsImhhbmRsZUhpZGUiLCJoYW5kbGVPdmVybGF5VGFyZ2V0IiwiaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsImFic29sdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLFFBQXNDLG1CQUF0QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxPQUF0QixRQUFxQyxpQkFBckM7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxTQUF0QixRQUF1QyxnQkFBdkM7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0QjtBQUNBLE9BQU9D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SDtBQUVQOUQsSUFBQUEsTUFBTSxFQUFFLEtBRkQ7QUFHUDhCLElBQUFBLFFBQVEsRUFBRTtBQUhILEdBSFc7QUFRcEJxQixFQUFBQSxVQUFVLEVBQUUsRUFSUTtBQVNwQk4sRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FURTtBQVVwQmIsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FWRTtBQVdwQmhDLEVBQUFBLE1BQU0sRUFBRXpCLGtCQVhZO0FBWXBCd0IsRUFBQUEsYUFBYSxFQUFFdEIseUJBWks7QUFhcEJ1QyxFQUFBQSxZQUFZLEVBQUVwQyx3QkFiTTtBQWNwQlMsRUFBQUEsS0FBSyxFQUFFO0FBZGEsQzs7U0EzQkhPLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBPdmVybGF5IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IEZhQ2FyZXREb3duLCBGYUNhcmV0VXAgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9hYnNvbHV0ZS9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzIGZyb20gJy4vY29tcG9uZW50cy9hYnNvbHV0ZS9wcm9wLXR5cGVzJztcbmltcG9ydCBSZWxhdGl2ZUNvbnN0YW50cyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBmb3JtYXRQZXJpb2RMYWJlbCBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgcGVyaW9kRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBwZXJpb2RTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcHJvcC10eXBlcyc7XG5pbXBvcnQgcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGlvbnNQcm9wVHlwZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvcHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDlweCA4cHggOXB4IC0yNHB4O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5OX07XG4gIH1cbmA7XG5cbmNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRofTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgQ29uc3RhbnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEFCU09MVVRFOiAnYWJzb2x1dGUnLFxuICBQRVJJT0Q6ICdwZXJpb2QnLFxuICBSRUxBVElWRTogJ3JlbGF0aXZlJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFic29sdXRlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZShhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5hYmxlZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFic29sdXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHBlcmlvZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICByZWxhdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgfSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBlcmlvZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHBlcmlvZFNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHJlbGF0aXZlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHRyYW5zbGF0aW9uc1Byb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhYnNvbHV0ZVJhbmdlOiBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZW5hYmxlZDoge1xuICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICBwZXJpb2Q6IGZhbHNlLFxuICAgICAgcmVsYXRpdmU6IGZhbHNlLFxuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWY6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBwZXJpb2Q6IHBlcmlvZERlZmF1bHRQcm9wcyxcbiAgICByZWxhdGl2ZVJhbmdlOiByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIHRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMzAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSwgcmVsYXRpdmVSYW5nZSwgcGVyaW9kIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwcmV2UHJvcHMuYWJzb2x1dGVSYW5nZSAhPT0gYWJzb2x1dGVSYW5nZVxuICAgICAgICB8fCBwcmV2UHJvcHMucmVsYXRpdmVSYW5nZSAhPT0gcmVsYXRpdmVSYW5nZVxuICAgICAgICB8fCBwcmV2UHJvcHMucGVyaW9kICE9PSBwZXJpb2QpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUodGhpcy5wcm9wcyk7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWJzb2x1dGVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2U6IHsgZGF0ZUZvcm1hdCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UGVyaW9kU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUsIG1vbWVudDogZW5kRGF0ZS5tb21lbnQgfHwgUmVsYXRpdmVDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZToge1xuICAgICAgICAgIC4uLnN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBmb3JtYXRQZXJpb2RMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWxhdGl2ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBpbml0U3RhdGUgPSAocHJvcHMpID0+IChcbiAgICB0aGlzLmluaXRBYnNvbHV0ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRSZWxhdGl2ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRQZXJpb2QocHJvcHMpXG4gICk7XG5cbiAgaW5pdEFic29sdXRlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9ICh0aGlzLnN0YXRlIHx8IHt9KS5hYnNvbHV0ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIHNob3dPdmVybGF5LFxuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogQ29uc3RhbnRzLkFCU09MVVRFLFxuICAgICAgICB2YWx1ZTogKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSlcbiAgICAgICAgICA/IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAgOiAnJyxcbiAgICAgICAgbGFzdFZhbGlkUmFuZ2U6IENvbnN0YW50cy5BQlNPTFVURSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdFBlcmlvZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcGVyaW9kLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUgPyBDb25zdGFudHMuUEVSSU9EIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgdmFsdWU6IChlbmFibGVkLnBlcmlvZCAmJiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKVxuICAgICAgICA/IGZvcm1hdFBlcmlvZExhYmVsKHNlbGVjdGVkU3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpIDogJycsXG4gICAgICBsYXN0VmFsaWRSYW5nZTogc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGluaXRSZWxhdGl2ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCByZWxhdGl2ZVJhbmdlLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oZW5kRGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGVcbiAgICAgICAgPyBDb25zdGFudHMuUkVMQVRJVkUgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlOiBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICAgIHZhbHVlOiAoZW5hYmxlZC5yZWxhdGl2ZSAmJiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpXG4gICAgICAgICAgPyBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgICAgIGxhc3RWYWxpZFJhbmdlOiBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSBldmVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXNbYGdldCR7c2VsZWN0ZWRSYW5nZVR5cGUucmVwbGFjZSgvXFx3LywgKGMpID0+IGMudG9VcHBlckNhc2UoKSl9U3RhdGVgXSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gc3RhdGU7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0VmFsaWRSYW5nZTogc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlOiBsYXN0VmFsaWRSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKGV2ZW50KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RWYWxpZFJhbmdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgc2hvd092ZXJsYXk6ICFwcmV2U3RhdGUuc2hvd092ZXJsYXkgfSkpO1xuXG4gIGhhbmRsZUhpZGUgPSAoZSkgPT4ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgaWYgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgICAqIFJvb3QgY2F1c2U6IGRheS1waWNrZXIgaXMgcmVuZGVyZWQgdG8gcm9vdCBlbGVtZW50LCBub3QgaW5zaWRlIHBvcG92ZXIgZWxlZW1udC5cbiAgICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxuICAgICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAgICogT25lIHNvbHV0aW9uIGlzIHBhc3NpbmcgYXQgbGVhc3QgdHJlZSBjYWxsYmFja3MgZm9yIHJlYWN0LWRhdGV0aW1lOiBvbldlZWtDbGljayxcbiAgICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxuICAgICAqL1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5wYXJlbnROb2RlXG4gICAgICAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZVxuICAgICAgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXNcbiAgICAgICYmIChcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpXG4gICAgICAgIHx8IGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdkYXRlcmFuZ2Utc2VsZWN0JylcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB2YWx1ZSwgbGFzdFZhbGlkUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3RhdGUgPSAhdmFsdWUgJiYgbGFzdFZhbGlkUmFuZ2VcbiAgICAgID8ge1xuICAgICAgICAuLi50aGlzW2BnZXQke2xhc3RWYWxpZFJhbmdlLnJlcGxhY2UoL1xcdy8sIChjKSA9PiBjLnRvVXBwZXJDYXNlKCkpfVN0YXRlYF0oKSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IGxhc3RWYWxpZFJhbmdlLFxuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfTtcblxuICByZW5kZXJDYXJldCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiBzaG93T3ZlcmxheVxuICAgICAgPyA8RmFDYXJldFVwIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICA6IDxGYUNhcmV0RG93biBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPjtcbiAgfVxuXG4gIGhhbmRsZUlucHV0UmVmID0gKGVsKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dFJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgaW5wdXRSZWYoZWwpO1xuICB9XG5cbiAgaGFuZGxlT3ZlcmxheVRhcmdldFJlZiA9IChlbCkgPT4ge1xuICAgIHRoaXMub3ZlcmxheVRhcmdldCA9IGVsO1xuICB9XG5cbiAgaGFuZGxlT3ZlcmxheVRhcmdldCA9ICgpID0+IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMub3ZlcmxheVRhcmdldCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIGFic29sdXRlUmFuZ2U6IGFic29sdXRlUmFuZ2VQcm9wLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBlcmlvZCxcbiAgICAgIHJlbGF0aXZlUmFuZ2UsXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICAgIHNob3dPdmVybGF5LFxuICAgICAgdmFsdWUsXG4gICAgICBhYnNvbHV0ZVJhbmdlOiBhYnNvbHV0ZVJhbmdlU3RhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIC4uLmFic29sdXRlUmFuZ2VQcm9wLFxuICAgICAgLi4uYWJzb2x1dGVSYW5nZVN0YXRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb25cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgcmVmPXt0aGlzLmhhbmRsZU92ZXJsYXlUYXJnZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhZE9ubHlJbnB1dCBzaG93T3ZlcmxheT17c2hvd092ZXJsYXl9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaW5wdXRSZWY9e3RoaXMuaGFuZGxlSW5wdXRSZWZ9XG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICByZWFkT25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmV0KCl9XG4gICAgICAgICAgPC9SZWFkT25seUlucHV0PlxuICAgICAgICAgIDxPdmVybGF5XG4gICAgICAgICAgICBzaG93PXtzaG93T3ZlcmxheX1cbiAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVIaWRlfVxuICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgIGNvbnRhaW5lcj17dGhpc31cbiAgICAgICAgICAgIHJvb3RDbG9zZVxuICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLmhhbmRsZU92ZXJsYXlUYXJnZXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgICBoaWRlUG9wb3Zlcj17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICA8L0RhdGVSYW5nZVNlY3Rpb24+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19