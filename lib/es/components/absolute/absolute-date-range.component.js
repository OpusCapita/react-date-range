var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-return-assign */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { DateInput } from '@opuscapita/react-datetime';
import { Content } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Overlays from './overlays';
import translate from '../../translations/translate';

var AbsoluteRangeSection = styled.div(_templateObject);

var AbsoluteDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(AbsoluteDateRange, _React$PureComponent);

  function AbsoluteDateRange(props) {
    _classCallCheck(this, AbsoluteDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate;

    var utcStartDate = moment(startDate).isValid() ? moment.utc(startDate).startOf('day').toISOString() : startDate;
    var utcEndDate = moment(endDate).isValid() ? moment.utc(endDate).startOf('day').toISOString() : endDate;
    utcEndDate = moment(utcStartDate).isValid() && moment(utcEndDate).isValid() && moment(utcEndDate).isBefore(moment(utcStartDate)) ? utcStartDate : utcEndDate;
    var disabledStartDays = moment(utcEndDate).isValid() ? { after: new Date(utcEndDate) } : null;
    var disabledEndDays = moment(utcStartDate).isValid() ? { before: new Date(utcStartDate) } : null;
    _this.state = {
      startDate: utcStartDate,
      endDate: utcEndDate,
      disabledStartDays: disabledStartDays,
      disabledEndDays: disabledEndDays
    };
    return _this;
  }

  AbsoluteDateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        region = _props.region,
        dateFormat = _props.dateFormat,
        numberOfMonths = _props.numberOfMonths,
        showWeekNumbers = _props.showWeekNumbers,
        translations = _props.translations;
    var _state = this.state,
        disabledEndDays = _state.disabledEndDays,
        disabledStartDays = _state.disabledStartDays,
        startDate = _state.startDate,
        endDate = _state.endDate;

    var from = new Date(startDate);
    var to = new Date(endDate);
    var modifiers = { start: from, end: to };
    return React.createElement(
      AbsoluteRangeSection,
      null,
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'absolute-start-date',
            id: 'absoluteStartDate',
            label: translate(translations, 'startDate')
          },
          React.createElement(DateInput, {
            className: className + ' start-date',
            dateFormat: dateFormat,
            disabledDays: disabledStartDays,
            locale: region,
            modifiers: modifiers,
            numberOfMonths: numberOfMonths,
            onChange: this.handleStartDateChange,
            inputRef: function inputRef(el) {
              return _this2.from = el;
            },
            selectedDays: [from, { from: from, to: to }],
            showWeekNumbers: showWeekNumbers,
            toMonth: to,
            value: startDate
          })
        )
      ),
      React.createElement(Hyphen, null),
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'absolute-end-date',
            id: 'absoluteEndDate',
            label: translate(translations, 'endDate')
          },
          React.createElement(DateInput, {
            className: className + ' end-date',
            dateFormat: dateFormat,
            disabledDays: disabledEndDays,
            fromMonth: from,
            locale: region,
            modifiers: modifiers,
            month: from,
            numberOfMonths: numberOfMonths,
            onChange: this.handleEndDateChange,
            inputRef: function inputRef(el) {
              return _this2.to = el;
            },
            selectedDays: [from, { from: from, to: to }],
            showWeekNumbers: showWeekNumbers,
            value: endDate
          })
        )
      )
    );
  };

  return AbsoluteDateRange;
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidMount = function () {
    var showOverlay = _this3.props.showOverlay;

    if (_this3.from && showOverlay === Overlays.START) {
      _this3.from.focus();
    } else if (_this3.to && showOverlay === Overlays.END) {
      _this3.to.focus();
    }
  };

  this.handleStartDayClick = function () {
    _this3.from = undefined;
  };

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = moment.utc(startDate);
    if (!from.isValid()) {
      return;
    }

    var endDate = _this3.state.endDate;

    var absoluteRange = {
      startDate: startDate,
      showOverlay: Overlays.START
    };
    var state = void 0;
    if (!endDate) {
      state = {
        startDate: startDate,
        absoluteRange: absoluteRange
      };
    } else {
      var to = moment.utc(endDate);
      if (from.isAfter(to)) {
        startDate = endDate;
        from = to;
      }
      state = {
        startDate: startDate,
        endDate: to.endOf('day').toISOString(),
        value: from.format(_this3.props.dateFormat) + ' - ' + to.format(_this3.props.dateFormat),
        absoluteRange: _extends({}, absoluteRange, {
          startDate: startDate,
          endDate: endDate
        })
      };
    }
    var disabledEndDays = { before: new Date(startDate) };
    _this3.setState({ startDate: startDate, disabledEndDays: disabledEndDays });
    _this3.props.onChange(state);
  };

  this.handleEndDayClick = function () {
    _this3.to = undefined;
  };

  this.handleEndDateChange = function (date) {
    var endDate = date;
    var to = moment.utc(endDate);
    if (!to.isValid()) {
      return;
    }

    var startDate = _this3.state.startDate;

    var absoluteRange = {
      endDate: endDate,
      showOverlay: Overlays.END
    };

    var state = void 0;
    if (!startDate) {
      state = {
        endDate: endDate,
        absoluteRange: absoluteRange
      };
    } else {
      var from = moment.utc(startDate);
      if (to.isBefore(from)) {
        endDate = startDate;
        to = from;
      }
      state = {
        startDate: from.startOf('day').toISOString(),
        endDate: to.endOf('day').toISOString(),
        value: from.format(_this3.props.dateFormat) + ' - ' + to.format(_this3.props.dateFormat),
        absoluteRange: _extends({}, absoluteRange, {
          endDate: endDate,
          startDate: startDate
        })
      };
    }
    var disabledStartDays = { after: new Date(endDate) };
    _this3.setState({ endDate: endDate, disabledStartDays: disabledStartDays });
    _this3.props.onChange(state);
  };
}, _temp);
export { AbsoluteDateRange as default };


AbsoluteDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkNvbnRlbnQiLCJEYXRlU2VjdGlvbiIsIkh5cGhlbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIk92ZXJsYXlzIiwidHJhbnNsYXRlIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidG9JU09TdHJpbmciLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwicmVnaW9uIiwiZGF0ZUZvcm1hdCIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwidHJhbnNsYXRpb25zIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJlbCIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJzaG93T3ZlcmxheSIsIlNUQVJUIiwiZm9jdXMiLCJFTkQiLCJoYW5kbGVTdGFydERheUNsaWNrIiwidW5kZWZpbmVkIiwiZGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ2YWx1ZSIsImZvcm1hdCIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJoYW5kbGVFbmREYXlDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFr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SixFQUF1QjtBQUNyQnJCLGtCQUFVRCxTQUFWO0FBQ0F1QixhQUFLRCxJQUFMO0FBQ0Q7QUFDRFIsY0FBUTtBQUNOZCxtQkFBV3NCLEtBQUtqQixPQUFMLENBQWEsS0FBYixFQUFvQkMsV0FBcEIsRUFETDtBQUVOTCxpQkFBU3NCLEdBQUdrQixLQUFILENBQVMsS0FBVCxFQUFnQm5DLFdBQWhCLEVBRkg7QUFHTm9DLGVBQVVwQixLQUFLcUIsTUFBTCxDQUFZLE9BQUs1QyxLQUFMLENBQVdtQixVQUF2QixDQUFWLFdBQWtESyxHQUFHb0IsTUFBSCxDQUFVLE9BQUs1QyxLQUFMLENBQVdtQixVQUFyQixDQUg1QztBQUlOcUIsb0NBQ0tBLGFBREw7QUFFRXRDLDBCQUZGO0FBR0VEO0FBSEY7QUFKTSxPQUFSO0FBVUQ7QUFDRCxRQUFNUyxvQkFBb0IsRUFBRUMsT0FBTyxJQUFJQyxJQUFKLENBQVNWLE9BQVQsQ0FBVCxFQUExQjtBQUNBLFdBQUsyQyxRQUFMLENBQWMsRUFBRTNDLGdCQUFGLEVBQVdRLG9DQUFYLEVBQWQ7QUFDQSxXQUFLVixLQUFMLENBQVc4QyxRQUFYLENBQW9CL0IsS0FBcEI7QUFDRCxHOztTQXJIa0JoQixpQjs7O0FBZ01yQkEsa0JBQWtCTCxZQUFsQixHQUFpQ0EsWUFBakMiLCJmaWxlIjoiYWJzb2x1dGUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IE92ZXJsYXlzIGZyb20gJy4vb3ZlcmxheXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xuICAgICAgdXRjU3RhcnREYXRlIDpcbiAgICAgIHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVCkge1xuICAgICAgdGhpcy5mcm9tLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkQpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgc3RhcnREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLlNUQVJULFxuICAgIH07XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5FTkQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLmZyb20gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtlbCA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L0Fic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=