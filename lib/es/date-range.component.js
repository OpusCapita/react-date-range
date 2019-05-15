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
var ReadOnlyInput = styled.div(_templateObject(), theme.contentBackgroundColor, function (props) {
  return props.showOverlay ? "" + theme.colors.grey9 : "" + theme.colors.grey3;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwiRmFDYXJldERvd24iLCJGYUNhcmV0VXAiLCJ0aGVtZSIsImFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzIiwiQ29uc3RhbnRzIiwiRGF0ZVJhbmdlUG9wb3ZlciIsImZvcm1hdFBlcmlvZExhYmVsIiwiZ2V0UmVsYXRpdmVPcHRpb24iLCJwZXJpb2REZWZhdWx0UHJvcHMiLCJwZXJpb2RTaGFwZSIsInJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMiLCJyZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIiwidHJhbnNsYXRlIiwidHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIiwidHJhbnNsYXRpb25zUHJvcFR5cGVzIiwiUmVhZE9ubHlJbnB1dCIsImRpdiIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJwcm9wcyIsInNob3dPdmVybGF5IiwiY29sb3JzIiwiZ3JleTkiLCJncmV5MyIsIkRhdGVSYW5nZSIsInByZXZQcm9wcyIsImFic29sdXRlUmFuZ2UiLCJyZWxhdGl2ZVJhbmdlIiwicGVyaW9kIiwic3RhdGUiLCJpbml0U3RhdGUiLCJzZXRTdGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGUiLCJkYXRlRm9ybWF0IiwiZnJvbSIsInV0YyIsInRvIiwiaXNWYWxpZCIsImVuZE9mIiwidG9JU09TdHJpbmciLCJzdGFydE9mIiwidmFsdWUiLCJmb3JtYXQiLCJ0cmFuc2xhdGlvbnMiLCJFTkQiLCJTVEFSVCIsImxhYmVsIiwiaW5pdEFic29sdXRlUmFuZ2UiLCJpbml0UmVsYXRpdmVSYW5nZSIsImluaXRQZXJpb2QiLCJzZWxlY3RlZFJhbmdlVHlwZSIsImVuYWJsZWQiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkRW5kRGF0ZSIsInJlbGF0aXZlIiwiZXZlbnQiLCJvbkNoYW5nZSIsInJlcGxhY2UiLCJjIiwidG9VcHBlckNhc2UiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbGljayIsInJlbmRlciIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwid2lkdGgiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsInJlbmRlckNhcmV0IiwiaGFuZGxlSGlkZSIsImhhbmRsZVJhbmdlVHlwZUNoYW5nZSIsImhhbmRsZUNoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJhYnNvbHV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLFFBQXNDLG1CQUF0QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxPQUF0QixRQUFxQyxpQkFBckM7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxTQUF0QixRQUF1QyxnQkFBdkM7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0QjtBQUNBLE9BQU9DLHlCQUFQLE1BQXNDLHFDQUF0QztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLGtDQUFuQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsaUNBQXRCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsd0NBQTdCO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIsNENBQTlCO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0Msd0NBQWxDO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsbUNBQS9CO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixnQ0FBNUI7QUFDQSxPQUFPQyx5QkFBUCxNQUFzQyxxQ0FBdEM7QUFDQSxT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UGpCO0FBUUUsTUFBQSxZQUFZLEVBQUVpQjtBQVJoQixNQVBGLENBZkYsQ0FERixDQURGO0FBc0NELEc7OztFQTNSb0NuRCxLQUFLLENBQUN3RixhOztnQkFBeEJ6RCxTLGtCQTJCRztBQUNwQkUsRUFBQUEsYUFBYSxFQUFFdkIseUJBREs7QUFFcEI4RCxFQUFBQSxTQUFTLEVBQUUsRUFGUztBQUdwQmIsRUFBQUEsT0FBTyxFQUFFO0FBQ1A4QixJQUFBQSxRQUFRLEVBQUUsSUFESDtBQUVQdEQsSUFBQUEsTUFBTSxFQUFFLEtBRkQ7QUFHUDRCLElBQUFBLFFBQVEsRUFBRTtBQUhILEdBSFc7QUFRcEJnQixFQUFBQSxVQUFVLEVBQUUsRUFSUTtBQVNwQkQsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FURTtBQVVwQmIsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FWRTtBQVdwQjlCLEVBQUFBLE1BQU0sRUFBRW5CLGtCQVhZO0FBWXBCa0IsRUFBQUEsYUFBYSxFQUFFaEIseUJBWks7QUFhcEJpQyxFQUFBQSxZQUFZLEVBQUU5Qix3QkFiTTtBQWNwQjJELEVBQUFBLEtBQUssRUFBRTtBQWRhLEM7O1NBM0JIakQsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBPdmVybGF5IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IEZhQ2FyZXREb3duLCBGYUNhcmV0VXAgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9hYnNvbHV0ZS9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzIGZyb20gJy4vY29tcG9uZW50cy9hYnNvbHV0ZS9wcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgRGF0ZVJhbmdlUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgZm9ybWF0UGVyaW9kTGFiZWwgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyJztcbmltcG9ydCB7IGdldFJlbGF0aXZlT3B0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHBlcmlvZERlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcGVyaW9kU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9wcm9wLXR5cGVzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcbmltcG9ydCB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zUHJvcFR5cGVzIGZyb20gJy4vdHJhbnNsYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZWFkT25seUlucHV0ID0gc3R5bGVkLmRpdmBcbiAgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiA5cHggOHB4IDlweCAtMjRweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuc2hvd092ZXJsYXkgPyBgJHt0aGVtZS5jb2xvcnMuZ3JleTl9YCA6IGAke3RoZW1lLmNvbG9ycy5ncmV5M31gKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWJzb2x1dGVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKGFic29sdXRlUmFuZ2VQcm9wVHlwZXMpLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmFibGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcGVyaW9kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbGF0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9KSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcGVyaW9kU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgcmVsYXRpdmVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUodHJhbnNsYXRpb25zUHJvcFR5cGVzKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFic29sdXRlUmFuZ2U6IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBlbmFibGVkOiB7XG4gICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgIHBlcmlvZDogZmFsc2UsXG4gICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBlcmlvZDogcGVyaW9kRGVmYXVsdFByb3BzLFxuICAgIHJlbGF0aXZlUmFuZ2U6IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZShwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5hYnNvbHV0ZVJhbmdlICE9PSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnJlbGF0aXZlUmFuZ2UgIT09IHRoaXMucHJvcHMucmVsYXRpdmVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucGVyaW9kICE9PSB0aGlzLnByb3BzLnBlcmlvZCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UGVyaW9kU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUsIG1vbWVudDogZW5kRGF0ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBmb3JtYXRQZXJpb2RMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWxhdGl2ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UGVyaW9kKHByb3BzKVxuICApO1xuXG4gIGluaXRBYnNvbHV0ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSAodGhpcy5zdGF0ZSB8fCB7fSkuYWJzb2x1dGVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6ICdhYnNvbHV0ZScsXG4gICAgICAgIHZhbHVlOiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UGVyaW9kID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCBwZXJpb2QsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3BlcmlvZCcgOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZTogKGVuYWJsZWQucGVyaW9kICYmIGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRTdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucykgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHJlbGF0aXZlUmFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlOiBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/ICdyZWxhdGl2ZScgOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiAoZW5hYmxlZC5yZWxhdGl2ZSAmJiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgICBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzW2BnZXQke3NlbGVjdGVkUmFuZ2VUeXBlLnJlcGxhY2UoL1xcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBzdGF0ZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShldmVudCk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICogUm9vdCBjYXVzZTogZGF5LXBpY2tlciBpcyByZW5kZXJlZCB0byByb290IGVsZW1lbnQsIG5vdCBpbnNpZGUgcG9wb3ZlciBlbGVlbW50LlxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxuICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgKiBPbmUgc29sdXRpb24gaXMgcGFzc2luZyBhdCBsZWFzdCB0cmVlIGNhbGxiYWNrcyBmb3IgcmVhY3QtZGF0ZXRpbWU6IG9uV2Vla0NsaWNrLFxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxuICAgKi9cbiAgaGFuZGxlSGlkZSA9IGUgPT4gKFxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA6XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6IGZhbHNlIH0pXG4gICk7XG5cbiAgcmVuZGVyQ2FyZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gc2hvd092ZXJsYXlcbiAgICAgID8gPEZhQ2FyZXRVcCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgOiA8RmFDYXJldERvd24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlLFxuICAgICAgLi4udGhpcy5zdGF0ZS5hYnNvbHV0ZVJhbmdlLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0IHNob3dPdmVybGF5PXtzaG93T3ZlcmxheX0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZXQoKX1cbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3Nob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=