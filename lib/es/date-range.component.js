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
        period = _state.period,
        relativeRange = _state.relativeRange,
        selectedRangeType = _state.selectedRangeType,
        showOverlay = _state.showOverlay,
        value = _state.value;

    var absoluteRange = _extends({}, this.props.absoluteRange, this.state.absoluteRange);

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
        React.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwidGhlbWUiLCJhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIiwiYWJzb2x1dGVSYW5nZVByb3BUeXBlcyIsIkNvbnN0YW50cyIsIkRhdGVSYW5nZVBvcG92ZXIiLCJmb3JtYXRQZXJpb2RMYWJlbCIsImdldFJlbGF0aXZlT3B0aW9uIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicGVyaW9kU2hhcGUiLCJyZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIiwicmVsYXRpdmVEYXRlVmFsdWVTaGFwZSIsInRyYW5zbGF0ZSIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc1Byb3BUeXBlcyIsIlJlYWRPbmx5SW5wdXQiLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNob3dPdmVybGF5IiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiZW5hYmxlZCIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwidHJhbnNsYXRpb25zIiwid2lkdGgiLCJwZXJpb2QiLCJyZWxhdGl2ZVJhbmdlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ2YWx1ZSIsImFic29sdXRlUmFuZ2UiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlSGlkZSIsImhhbmRsZVJhbmdlVHlwZUNoYW5nZSIsImhhbmRsZUNoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZSIsInJlbGF0aXZlIiwib25DaGFuZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImdldEFic29sdXRlU3RhdGUiLCJlbmREYXRlIiwic3RhcnREYXRlIiwiZGF0ZUZvcm1hdCIsImZyb20iLCJ1dGMiLCJ0byIsImlzVmFsaWQiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwic3RhcnRPZiIsImZvcm1hdCIsImdldFBlcmlvZFN0YXRlIiwiRU5EIiwiU1RBUlQiLCJnZXRSZWxhdGl2ZVN0YXRlIiwibGFiZWwiLCJpbml0QWJzb2x1dGVSYW5nZSIsImluaXRSZWxhdGl2ZVJhbmdlIiwiaW5pdFBlcmlvZCIsInNlbGVjdGVkU3RhcnREYXRlIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRFbmREYXRlIiwiZXZlbnQiLCJyZXBsYWNlIiwiYyIsInRvVXBwZXJDYXNlIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsUUFBc0MsbUJBQXRDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLE9BQXRCLFFBQXFDLGlCQUFyQztBQUNBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCO0FBQ0EsT0FBT0MseUJBQVAsTUFBc0MscUNBQXRDO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsa0NBQW5DO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixpQ0FBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qix3Q0FBN0I7QUFDQSxPQUFPQyxpQkFBUCxNQUE4Qiw0Q0FBOUI7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyx3Q0FBbEM7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixtQ0FBL0I7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGdDQUE1QjtBQUNBLE9BQU9DLHlCQUFQLE1BQXNDLHFDQUF0QztBQUNBLFNBQVNDLHNCQUFULFFBQXVDLGtDQUF2QztBQUNBLE9B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QVQ7QUFDRDtBQUNGLEc7O09BRURWLFksR0FBZSxVQUFDZ0MsS0FBRCxFQUFXO0FBQUEsUUFDaEIzQixRQURnQixHQUNILE9BQUs1QixLQURGLENBQ2hCNEIsUUFEZ0I7O0FBRXhCLFdBQUtHLFFBQUwsQ0FBY3dCLEtBQWQ7O0FBRndCLFFBSWhCckIsU0FKZ0IsR0FJT3FCLEtBSlAsQ0FJaEJyQixTQUpnQjtBQUFBLFFBSUxELE9BSkssR0FJT3NCLEtBSlAsQ0FJTHRCLE9BSks7O0FBS3hCLFFBQUlDLGFBQWFELE9BQWpCLEVBQTBCO0FBQ3hCTCxlQUFTLEVBQUVNLG9CQUFGLEVBQWFELGdCQUFiLEVBQVQ7QUFDRDtBQUNGLEc7O09BRURiLFcsR0FBYztBQUFBLFdBQU0sT0FBS1csUUFBTCxDQUFjLEVBQUU1QixhQUFhLENBQUMsT0FBS0YsS0FBTCxDQUFXRSxXQUEzQixFQUFkLENBQU47QUFBQSxHOztPQVVka0IsVSxHQUFhO0FBQUEsV0FDWHNDLEVBQUVDLE1BQUYsSUFBWUQsRUFBRUMsTUFBRixDQUFTQyxVQUFyQixJQUFtQ0YsRUFBRUMsTUFBRixDQUFTQyxVQUFULENBQW9CeEQsU0FBdkQsSUFBb0VzRCxFQUFFQyxNQUFGLENBQVNDLFVBQVQsQ0FBb0J4RCxTQUFwQixDQUE4QnlELFFBQTlCLENBQXVDLFdBQXZDLENBQXBFLEdBQ0VILEVBQUVJLGNBQUYsRUFERixHQUVFLE9BQUtoQyxRQUFMLENBQWMsRUFBRTVCLGFBQWEsS0FBZixFQUFkLENBSFM7QUFBQSxHOztTQTlNTUosUyIsImZpbGUiOiJkYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBPdmVybGF5IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VQcm9wVHlwZXMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBmb3JtYXRQZXJpb2RMYWJlbCBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgcGVyaW9kRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBwZXJpb2RTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcHJvcC10eXBlcyc7XG5pbXBvcnQgcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGlvbnNQcm9wVHlwZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvcHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhYnNvbHV0ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoYWJzb2x1dGVSYW5nZVByb3BUeXBlcyksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuYWJsZWQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhYnNvbHV0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBwZXJpb2Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcmVsYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIH0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwZXJpb2Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiBwZXJpb2RTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICByZWxhdGl2ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh0cmFuc2xhdGlvbnNQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWJzb2x1dGVSYW5nZTogYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVuYWJsZWQ6IHtcbiAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgcGVyaW9kOiBmYWxzZSxcbiAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcGVyaW9kOiBwZXJpb2REZWZhdWx0UHJvcHMsXG4gICAgcmVsYXRpdmVSYW5nZTogcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICB0cmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzMwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLmFic29sdXRlUmFuZ2UgIT09IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucmVsYXRpdmVSYW5nZSAhPT0gdGhpcy5wcm9wcy5yZWxhdGl2ZVJhbmdlIHx8XG4gICAgICAgIHByZXZQcm9wcy5wZXJpb2QgIT09IHRoaXMucHJvcHMucGVyaW9kKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFic29sdXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRQZXJpb2RTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBlcmlvZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZSwgbW9tZW50OiBlbmREYXRlLm1vbWVudCB8fCBDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZTogeyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuU1RBUlQgfSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdFBlcmlvZExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlbGF0aXZlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIGVuZERhdGUudmFsdWUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogZW5kRGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGluaXRTdGF0ZSA9IHByb3BzID0+IChcbiAgICB0aGlzLmluaXRBYnNvbHV0ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRSZWxhdGl2ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRQZXJpb2QocHJvcHMpXG4gICk7XG5cbiAgaW5pdEFic29sdXRlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9ICh0aGlzLnN0YXRlIHx8IHt9KS5hYnNvbHV0ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIHNob3dPdmVybGF5LFxuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogJ2Fic29sdXRlJyxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpID9cbiAgICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRQZXJpb2QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHBlcmlvZCwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUgPyAncGVyaW9kJyA6IHVuZGVmaW5lZCxcbiAgICAgIHZhbHVlOiAoZW5hYmxlZC5wZXJpb2QgJiYgZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSA6ICcnLFxuICAgIH07XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcmVsYXRpdmVSYW5nZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKGVuZERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3JlbGF0aXZlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IChlbmFibGVkLnJlbGF0aXZlICYmIHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICAgIGAke3NlbGVjdGVkU3RhcnREYXRlLmxhYmVsfSAtICR7c2VsZWN0ZWRFbmREYXRlLmxhYmVsfWAgOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSBldmVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXNbYGdldCR7c2VsZWN0ZWRSYW5nZVR5cGUucmVwbGFjZSgvXFx3LywgYyA9PiBjLnRvVXBwZXJDYXNlKCkpfVN0YXRlYF0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHN0YXRlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKGV2ZW50KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlLFxuICAgICAgLi4udGhpcy5zdGF0ZS5hYnNvbHV0ZVJhbmdlLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICByZWFkT25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3Nob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=