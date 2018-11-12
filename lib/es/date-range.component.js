var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n'], ['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
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

var ReadOnlyInput = styled.div(_templateObject, theme.contentBackgroundColor);

var DateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRange, _React$PureComponent);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var state = _this.initState(props);
    _this.state = _extends({}, state, {
      showOverlay: false
    });
    return _this;
  }

  /**
   * This is dirty solution and c/should be fixed.
   * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
   * Therefore click coming form day-picker are considers as outside click of popover
   * and popover would be close without event preventDefault.
   * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
   * onCaptionClick and custom onClick for custom caption of react-datetime.
   */


  DateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        enabled = _props.enabled,
        id = _props.id,
        _inputRef = _props.inputRef,
        inputProps = _props.inputProps,
        translations = _props.translations,
        width = _props.width;
    var _state = this.state,
        absoluteRange = _state.absoluteRange,
        period = _state.period,
        relativeRange = _state.relativeRange,
        selectedRangeType = _state.selectedRangeType,
        showOverlay = _state.showOverlay,
        value = _state.value;


    var DateRangeSection = styled.div(_templateObject2, width);

    return React.createElement(
      ThemeProvider,
      { theme: theme },
      React.createElement(
        DateRangeSection,
        { id: id, className: className },
        React.createElement(
          ReadOnlyInput,
          null,
          React.createElement(FormControl, _extends({
            type: 'text',
            inputRef: function inputRef(el) {
              _this2.input = el;
              _inputRef(el);
            }
          }, inputProps, {
            readOnly: 'readonly',
            value: value,
            onClick: this.handleClick
          }))
        ),
        showOverlay && React.createElement(
          Overlay,
          {
            show: showOverlay,
            onHide: this.handleHide,
            placement: 'bottom',
            container: this,
            rootClose: true
          },
          React.createElement(DateRangePopover, {
            absoluteRange: absoluteRange,
            enabled: enabled,
            onRangeTypeChange: this.handleRangeTypeChange,
            onChange: this.handleChange,
            period: period,
            selectedRangeType: selectedRangeType,
            relativeRange: relativeRange,
            translations: translations
          })
        )
      )
    );
  };

  return DateRange;
}(React.PureComponent), _class.defaultProps = {
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
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidUpdate = function (prevProps) {
    if (prevProps.absoluteRange !== _this3.props.absoluteRange || prevProps.relativeRange !== _this3.props.relativeRange || prevProps.period !== _this3.props.period) {
      var state = _this3.initState(_this3.props);
      if (state) {
        _this3.setState(state);
      }
    }
  };

  this.getAbsoluteState = function () {
    var absoluteRange = _this3.state.absoluteRange;

    var _ref = absoluteRange || {},
        endDate = _ref.endDate,
        startDate = _ref.startDate;

    var dateFormat = _this3.props.absoluteRange.dateFormat;

    if (startDate && endDate) {
      var from = moment.utc(startDate);
      var to = moment.utc(endDate);
      if (from.isValid() && to.isValid()) {
        return {
          endDate: to.endOf('day').toISOString(),
          startDate: from.startOf('day').toISOString(),
          value: from.format(dateFormat) + ' - ' + to.format(dateFormat)
        };
      }
    }
    return { value: '' };
  };

  this.getPeriodState = function () {
    var translations = _this3.props.translations;
    var period = _this3.state.period;

    var _ref2 = period || {},
        endDate = _ref2.endDate,
        startDate = _ref2.startDate;

    if (endDate && startDate && startDate.value) {
      return {
        endDate: _extends({}, endDate, { moment: endDate.moment || Constants.END }),
        startDate: _extends({}, startDate.value, { moment: startDate.value.moment || Constants.START }),
        value: formatPeriodLabel(startDate, endDate, translations)
      };
    }
    return { value: '' };
  };

  this.getRelativeState = function () {
    var relativeRange = _this3.state.relativeRange;

    var _ref3 = relativeRange || {},
        endDate = _ref3.endDate,
        startDate = _ref3.startDate;

    if (endDate && startDate && endDate.value && startDate.value) {
      return {
        endDate: _extends({}, endDate.value, { moment: endDate.value.moment || Constants.END }),
        startDate: _extends({}, startDate.value, { moment: startDate.value.moment || Constants.START }),
        value: startDate.label + ' - ' + endDate.label
      };
    }
    return { value: '' };
  };

  this.initState = function (props) {
    return _this3.initAbsoluteRange(props) || _this3.initRelativeRange(props) || _this3.initPeriod(props);
  };

  this.initAbsoluteRange = function (props) {
    var absoluteRange = props.absoluteRange;

    var _ref4 = absoluteRange || {},
        endDate = _ref4.endDate,
        startDate = _ref4.startDate,
        dateFormat = _ref4.dateFormat;

    var _ref5 = (_this3.state || {}).absoluteRange || {},
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
        value: from.isValid() && to.isValid() ? from.format(dateFormat) + ' - ' + to.format(dateFormat) : ''
      };
    }
    return null;
  };

  this.initPeriod = function (props) {
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
  };

  this.initRelativeRange = function (props) {
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
        value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + ' - ' + selectedEndDate.label : ''
      };
    }
    return null;
  };

  this.handleRangeTypeChange = function (event) {
    var onChange = _this3.props.onChange;
    var selectedRangeType = event.selectedRangeType;

    var state = _this3['get' + selectedRangeType.replace(/\w/, function (c) {
      return c.toUpperCase();
    }) + 'State']();
    _this3.setState(_extends({}, state, {
      selectedRangeType: selectedRangeType
    }));
    var startDate = state.startDate,
        endDate = state.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleChange = function (event) {
    var onChange = _this3.props.onChange;

    _this3.setState(event);

    var startDate = event.startDate,
        endDate = event.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleClick = function () {
    return _this3.setState({ showOverlay: !_this3.state.showOverlay });
  };

  this.handleHide = function (e) {
    return e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker') ? e.preventDefault() : _this3.setState({ showOverlay: false });
  };
}, _temp);
export { DateRange as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwidGhlbWUiLCJhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIiwiYWJzb2x1dGVSYW5nZVByb3BUeXBlcyIsIkNvbnN0YW50cyIsIkRhdGVSYW5nZVBvcG92ZXIiLCJmb3JtYXRQZXJpb2RMYWJlbCIsImdldFJlbGF0aXZlT3B0aW9uIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicGVyaW9kU2hhcGUiLCJyZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIiwicmVsYXRpdmVEYXRlVmFsdWVTaGFwZSIsInRyYW5zbGF0ZSIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc1Byb3BUeXBlcyIsIlJlYWRPbmx5SW5wdXQiLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNob3dPdmVybGF5IiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiZW5hYmxlZCIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwidHJhbnNsYXRpb25zIiwid2lkdGgiLCJhYnNvbHV0ZVJhbmdlIiwicGVyaW9kIiwicmVsYXRpdmVSYW5nZSIsInNlbGVjdGVkUmFuZ2VUeXBlIiwidmFsdWUiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlSGlkZSIsImhhbmRsZVJhbmdlVHlwZUNoYW5nZSIsImhhbmRsZUNoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZSIsInJlbGF0aXZlIiwib25DaGFuZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImdldEFic29sdXRlU3RhdGUiLCJlbmREYXRlIiwic3RhcnREYXRlIiwiZGF0ZUZvcm1hdCIsImZyb20iLCJ1dGMiLCJ0byIsImlzVmFsaWQiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwic3RhcnRPZiIsImZvcm1hdCIsImdldFBlcmlvZFN0YXRlIiwiRU5EIiwiU1RBUlQiLCJnZXRSZWxhdGl2ZVN0YXRlIiwibGFiZWwiLCJpbml0QWJzb2x1dGVSYW5nZSIsImluaXRSZWxhdGl2ZVJhbmdlIiwiaW5pdFBlcmlvZCIsInNlbGVjdGVkU3RhcnREYXRlIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRFbmREYXRlIiwiZXZlbnQiLCJyZXBsYWNlIiwiYyIsInRvVXBwZXJDYXNlIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsUUFBc0MsbUJBQXRDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLE9BQXRCLFFBQXFDLGlCQUFyQztBQUNBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCO0FBQ0EsT0FBT0MseUJBQVAsTUFBc0MscUNBQXRDO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsa0NBQW5DO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixpQ0FBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qix3Q0FBN0I7QUFDQSxPQUFPQyxpQkFBUCxNQUE4Qiw0Q0FBOUI7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyx3Q0FBbEM7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixtQ0FBL0I7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGdDQUE1QjtBQUNBLE9BQU9DLHlCQUFQLE1BQXNDLHFDQUF0QztBQUNBLFNBQVNDLHNCQUFULFFBQXVDLGtDQUF2QztBQUNBLE9B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LEVBQVc7QUFBQSxRQUNoQjNCLFFBRGdCLEdBQ0gsT0FBSzVCLEtBREYsQ0FDaEI0QixRQURnQjs7QUFFeEIsV0FBS0csUUFBTCxDQUFjd0IsS0FBZDs7QUFGd0IsUUFJaEJyQixTQUpnQixHQUlPcUIsS0FKUCxDQUloQnJCLFNBSmdCO0FBQUEsUUFJTEQsT0FKSyxHQUlPc0IsS0FKUCxDQUlMdEIsT0FKSzs7QUFLeEIsUUFBSUMsYUFBYUQsT0FBakIsRUFBMEI7QUFDeEJMLGVBQVMsRUFBRU0sb0JBQUYsRUFBYUQsZ0JBQWIsRUFBVDtBQUNEO0FBQ0YsRzs7T0FFRGIsVyxHQUFjO0FBQUEsV0FBTSxPQUFLVyxRQUFMLENBQWMsRUFBRTVCLGFBQWEsQ0FBQyxPQUFLRixLQUFMLENBQVdFLFdBQTNCLEVBQWQsQ0FBTjtBQUFBLEc7O09BVWRrQixVLEdBQWE7QUFBQSxXQUNYc0MsRUFBRUMsTUFBRixJQUFZRCxFQUFFQyxNQUFGLENBQVNDLFVBQXJCLElBQW1DRixFQUFFQyxNQUFGLENBQVNDLFVBQVQsQ0FBb0J4RCxTQUF2RCxJQUFvRXNELEVBQUVDLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQnhELFNBQXBCLENBQThCeUQsUUFBOUIsQ0FBdUMsV0FBdkMsQ0FBcEUsR0FDRUgsRUFBRUksY0FBRixFQURGLEdBRUUsT0FBS2hDLFFBQUwsQ0FBYyxFQUFFNUIsYUFBYSxLQUFmLEVBQWQsQ0FIUztBQUFBLEc7O1NBOU1NSixTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZVByb3BUeXBlcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvcHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IGZvcm1hdFBlcmlvZExhYmVsIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBnZXRSZWxhdGl2ZU9wdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCBwZXJpb2REZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IHBlcmlvZFNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wcm9wLXR5cGVzJztcbmltcG9ydCByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcHJvcC10eXBlcyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc1Byb3BUeXBlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9wcm9wLXR5cGVzJztcblxuY29uc3QgUmVhZE9ubHlJbnB1dCA9IHN0eWxlZC5kaXZgXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFic29sdXRlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZShhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5hYmxlZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFic29sdXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHBlcmlvZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICByZWxhdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgfSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBlcmlvZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHBlcmlvZFNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHJlbGF0aXZlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHRyYW5zbGF0aW9uc1Byb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhYnNvbHV0ZVJhbmdlOiBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZW5hYmxlZDoge1xuICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICBwZXJpb2Q6IGZhbHNlLFxuICAgICAgcmVsYXRpdmU6IGZhbHNlLFxuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWY6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBwZXJpb2Q6IHBlcmlvZERlZmF1bHRQcm9wcyxcbiAgICByZWxhdGl2ZVJhbmdlOiByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIHRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMzAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGlmIChwcmV2UHJvcHMuYWJzb2x1dGVSYW5nZSAhPT0gdGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlIHx8XG4gICAgICAgIHByZXZQcm9wcy5yZWxhdGl2ZVJhbmdlICE9PSB0aGlzLnByb3BzLnJlbGF0aXZlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnBlcmlvZCAhPT0gdGhpcy5wcm9wcy5wZXJpb2QpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUodGhpcy5wcm9wcyk7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWJzb2x1dGVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2U7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFBlcmlvZFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLCBtb21lbnQ6IGVuZERhdGUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogZm9ybWF0UGVyaW9kTGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRSZWxhdGl2ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVsYXRpdmVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgZW5kRGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBlbmREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZTogeyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuU1RBUlQgfSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgaW5pdFN0YXRlID0gcHJvcHMgPT4gKFxuICAgIHRoaXMuaW5pdEFic29sdXRlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFJlbGF0aXZlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFBlcmlvZChwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIGRhdGVGb3JtYXQgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gKHRoaXMuc3RhdGUgfHwge30pLmFic29sdXRlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgc2hvd092ZXJsYXksXG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiAnYWJzb2x1dGUnLFxuICAgICAgICB2YWx1ZTogKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkgP1xuICAgICAgICAgIGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAgOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdFBlcmlvZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcGVyaW9kLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZTogZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/ICdwZXJpb2QnIDogdW5kZWZpbmVkLFxuICAgICAgdmFsdWU6IChlbmFibGVkLnBlcmlvZCAmJiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKSA/XG4gICAgICAgIGZvcm1hdFBlcmlvZExhYmVsKHNlbGVjdGVkU3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIGluaXRSZWxhdGl2ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCByZWxhdGl2ZVJhbmdlLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oZW5kRGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUgPyAncmVsYXRpdmUnIDogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogKGVuYWJsZWQucmVsYXRpdmUgJiYgc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKSA/XG4gICAgICAgICAgYCR7c2VsZWN0ZWRTdGFydERhdGUubGFiZWx9IC0gJHtzZWxlY3RlZEVuZERhdGUubGFiZWx9YCA6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYW5kbGVSYW5nZVR5cGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpc1tgZ2V0JHtzZWxlY3RlZFJhbmdlVHlwZS5yZXBsYWNlKC9cXHcvLCBjID0+IGMudG9VcHBlckNhc2UoKSl9U3RhdGVgXSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gc3RhdGU7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoZXZlbnQpO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGV2ZW50O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiAhdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSB9KTtcblxuICAvKipcbiAgICogVGhpcyBpcyBkaXJ0eSBzb2x1dGlvbiBhbmQgYy9zaG91bGQgYmUgZml4ZWQuXG4gICAqIFJvb3QgY2F1c2U6IGRheS1waWNrZXIgaXMgcmVuZGVyZWQgdG8gcm9vdCBlbGVtZW50LCBub3QgaW5zaWRlIHBvcG92ZXIgZWxlZW1udC5cbiAgICogVGhlcmVmb3JlIGNsaWNrIGNvbWluZyBmb3JtIGRheS1waWNrZXIgYXJlIGNvbnNpZGVycyBhcyBvdXRzaWRlIGNsaWNrIG9mIHBvcG92ZXJcbiAgICogYW5kIHBvcG92ZXIgd291bGQgYmUgY2xvc2Ugd2l0aG91dCBldmVudCBwcmV2ZW50RGVmYXVsdC5cbiAgICogT25lIHNvbHV0aW9uIGlzIHBhc3NpbmcgYXQgbGVhc3QgdHJlZSBjYWxsYmFja3MgZm9yIHJlYWN0LWRhdGV0aW1lOiBvbldlZWtDbGljayxcbiAgICogb25DYXB0aW9uQ2xpY2sgYW5kIGN1c3RvbSBvbkNsaWNrIGZvciBjdXN0b20gY2FwdGlvbiBvZiByZWFjdC1kYXRldGltZS5cbiAgICovXG4gIGhhbmRsZUhpZGUgPSBlID0+IChcbiAgICBlLnRhcmdldCAmJiBlLnRhcmdldC5wYXJlbnROb2RlICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdEYXlQaWNrZXInKSA/XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCkgOlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiBmYWxzZSB9KVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBlbmFibGVkLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICB7c2hvd092ZXJsYXkgJiZcbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgc2hvdz17c2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICBhYnNvbHV0ZVJhbmdlPXthYnNvbHV0ZVJhbmdlfVxuICAgICAgICAgICAgICBlbmFibGVkPXtlbmFibGVkfVxuICAgICAgICAgICAgICBvblJhbmdlVHlwZUNoYW5nZT17dGhpcy5oYW5kbGVSYW5nZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGVyaW9kPXtwZXJpb2R9XG4gICAgICAgICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlPXtzZWxlY3RlZFJhbmdlVHlwZX1cbiAgICAgICAgICAgICAgcmVsYXRpdmVSYW5nZT17cmVsYXRpdmVSYW5nZX1cbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvT3ZlcmxheT59XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=