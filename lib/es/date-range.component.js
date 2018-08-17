var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n'], ['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormControl, Overlay } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import DateRangePopover from './popover/date-range-popover.component';
import popoverPropTypes from './popover/prop-types';
import popoverDefaultProps from './popover/default-props';

var ReadOnlyInput = styled.div(_templateObject, theme.contentBackgroundColor);

var DateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRange, _React$PureComponent);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.mergePopoverProps = function () {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object.assign({}, target, source, {
        absoluteRange: _extends({}, target.absoluteRange || {}, source.absoluteRange || {}),
        relativeRange: _extends({}, target.relativeRange || {}, source.relativeRange || {})
      });
    };

    _this.handleChange = function (event) {
      _this.setState({
        popoverProps: _this.mergePopoverProps(_this.state.popoverProps, event.popoverProps),
        value: event.value
      });

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate || endDate) {
        _this.props.onChange({ startDate: startDate, endDate: endDate });
      }
    };

    _this.handleClick = function () {
      return _this.setState({ showOverlay: !_this.state.showOverlay });
    };

    _this.handleHide = function () {
      _this.setState({ showOverlay: false });
    };

    _this.state = {
      showOverlay: false,
      value: undefined,
      popoverProps: undefined
    };
    return _this;
  }

  DateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        id = _props.id,
        _inputRef = _props.inputRef,
        inputProps = _props.inputProps,
        width = _props.width;


    var DateRangeSection = styled.div(_templateObject2, width);

    return React.createElement(
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
          value: this.state.value,
          onClick: this.handleClick
        }))
      ),
      this.state.showOverlay && React.createElement(
        Overlay,
        {
          show: this.state.showOverlay,
          onHide: this.handleHide,
          placement: 'bottom',
          container: this,
          rootClose: true
        },
        React.createElement(DateRangePopover, _extends({}, this.mergePopoverProps(this.props.popoverProps, this.state.popoverProps), {
          onChange: this.handleChange
        }))
      )
    );
  };

  return DateRange;
}(React.PureComponent), _class.defaultProps = {
  className: '',
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  popoverProps: popoverDefaultProps,
  width: '200px'
}, _temp);
export { DateRange as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXkiLCJ0aGVtZSIsIkRhdGVSYW5nZVBvcG92ZXIiLCJwb3BvdmVyUHJvcFR5cGVzIiwicG9wb3ZlckRlZmF1bHRQcm9wcyIsIlJlYWRPbmx5SW5wdXQiLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiRGF0ZVJhbmdlIiwicHJvcHMiLCJtZXJnZVBvcG92ZXJQcm9wcyIsInRhcmdldCIsInNvdXJjZSIsIk9iamVjdCIsImFzc2lnbiIsImFic29sdXRlUmFuZ2UiLCJyZWxhdGl2ZVJhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInBvcG92ZXJQcm9wcyIsInN0YXRlIiwidmFsdWUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwib25DaGFuZ2UiLCJoYW5kbGVDbGljayIsInNob3dPdmVybGF5IiwiaGFuZGxlSGlkZSIsInVuZGVmaW5lZCIsInJlbmRlciIsImNsYXNzTmFtZSIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwid2lkdGgiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLE9BQXRCLFFBQXFDLGlCQUFyQztBQUNBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsd0NBQTdCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsc0JBQTdCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MseUJBQWhDOztBQUVBLElBQU1DLGdCQUFnQlAsT0FBT1EsR0FBdkIsa0JBRWtCTCxNQUFNTSxzQkFGeEIsQ0FBTjs7SUFNcUJDLFM7OztBQW9CbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFTbkJDLGlCQVRtQixHQVNDO0FBQUEsVUFBQ0MsTUFBRCx1RUFBVSxFQUFWO0FBQUEsVUFBY0MsTUFBZCx1RUFBdUIsRUFBdkI7QUFBQSxhQUNsQkMsT0FBT0MsTUFBUCxDQUNFLEVBREYsRUFFRUgsTUFGRixFQUdFQyxNQUhGLEVBSUU7QUFDRUcsb0NBQ0tKLE9BQU9JLGFBQVAsSUFBd0IsRUFEN0IsRUFFS0gsT0FBT0csYUFBUCxJQUF3QixFQUY3QixDQURGO0FBS0VDLG9DQUNLTCxPQUFPSyxhQUFQLElBQXdCLEVBRDdCLEVBRUtKLE9BQU9JLGFBQVAsSUFBd0IsRUFGN0I7QUFMRixPQUpGLENBRGtCO0FBQUEsS0FURDs7QUFBQSxVQTBCbkJDLFlBMUJtQixHQTBCSixVQUFDQyxLQUFELEVBQVc7QUFDeEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLHNCQUFjLE1BQUtWLGlCQUFMLENBQXVCLE1BQUtXLEtBQUwsQ0FBV0QsWUFBbEMsRUFBZ0RGLE1BQU1FLFlBQXRELENBREY7QUFFWkUsZUFBT0osTUFBTUk7QUFGRCxPQUFkOztBQUR3QixVQU1oQkMsU0FOZ0IsR0FNT0wsS0FOUCxDQU1oQkssU0FOZ0I7QUFBQSxVQU1MQyxPQU5LLEdBTU9OLEtBTlAsQ0FNTE0sT0FOSzs7QUFPeEIsVUFBSUQsYUFBYUMsT0FBakIsRUFBMEI7QUFDeEIsY0FBS2YsS0FBTCxDQUFXZ0IsUUFBWCxDQUFvQixFQUFFRixvQkFBRixFQUFhQyxnQkFBYixFQUFwQjtBQUNEO0FBQ0YsS0FwQ2tCOztBQUFBLFVBc0NuQkUsV0F0Q21CLEdBc0NMO0FBQUEsYUFBTSxNQUFLUCxRQUFMLENBQWMsRUFBRVEsYUFBYSxDQUFDLE1BQUtOLEtBQUwsQ0FBV00sV0FBM0IsRUFBZCxDQUFOO0FBQUEsS0F0Q0s7O0FBQUEsVUF3Q25CQyxVQXhDbUIsR0F3Q04sWUFBTTtBQUNqQixZQUFLVCxRQUFMLENBQWMsRUFBRVEsYUFBYSxLQUFmLEVBQWQ7QUFDRCxLQTFDa0I7O0FBRWpCLFVBQUtOLEtBQUwsR0FBYTtBQUNYTSxtQkFBYSxLQURGO0FBRVhMLGFBQU9PLFNBRkk7QUFHWFQsb0JBQWNTO0FBSEgsS0FBYjtBQUZpQjtBQU9sQjs7c0JBcUNEQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBT0gsS0FBS3JCLEtBUEY7QUFBQSxRQUVMc0IsU0FGSyxVQUVMQSxTQUZLO0FBQUEsUUFHTEMsRUFISyxVQUdMQSxFQUhLO0FBQUEsUUFJTEMsU0FKSyxVQUlMQSxRQUpLO0FBQUEsUUFLTEMsVUFMSyxVQUtMQSxVQUxLO0FBQUEsUUFNTEMsS0FOSyxVQU1MQSxLQU5LOzs7QUFTUCxRQUFNQyxtQkFBbUJ0QyxPQUFPUSxHQUExQixtQkFDSzZCLEtBREwsQ0FBTjs7QUFJQSxXQUNFO0FBQUMsc0JBQUQ7QUFBQSxRQUFrQixJQUFJSCxFQUF0QixFQUEwQixXQUFXRCxTQUFyQztBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLDRCQUFDLFdBQUQ7QUFDRSxnQkFBSyxNQURQO0FBRUUsb0JBQVUsa0JBQUNNLEVBQUQsRUFBUTtBQUNoQixtQkFBS0MsS0FBTCxHQUFhRCxFQUFiO0FBQ0FKLHNCQUFTSSxFQUFUO0FBQ0Q7QUFMSCxXQU1NSCxVQU5OO0FBT0Usb0JBQVMsVUFQWDtBQVFFLGlCQUFPLEtBQUtiLEtBQUwsQ0FBV0MsS0FScEI7QUFTRSxtQkFBUyxLQUFLSTtBQVRoQjtBQURGLE9BREY7QUFjRyxXQUFLTCxLQUFMLENBQVdNLFdBQVgsSUFDRDtBQUFDLGVBQUQ7QUFBQTtBQUNFLGdCQUFNLEtBQUtOLEtBQUwsQ0FBV00sV0FEbkI7QUFFRSxrQkFBUSxLQUFLQyxVQUZmO0FBR0UscUJBQVUsUUFIWjtBQUlFLHFCQUFXLElBSmI7QUFLRTtBQUxGO0FBT0UsNEJBQUMsZ0JBQUQsZUFDTSxLQUFLbEIsaUJBQUwsQ0FBdUIsS0FBS0QsS0FBTCxDQUFXVyxZQUFsQyxFQUFnRCxLQUFLQyxLQUFMLENBQVdELFlBQTNELENBRE47QUFFRSxvQkFBVSxLQUFLSDtBQUZqQjtBQVBGO0FBZkYsS0FERjtBQThCRCxHOzs7RUEzR29DckIsTUFBTTJDLGEsVUFXcENDLFksR0FBZTtBQUNwQlQsYUFBVyxFQURTO0FBRXBCRyxjQUFZLEVBRlE7QUFHcEJELFlBQVUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCUixZQUFVLG9CQUFNLENBQUUsQ0FKRTtBQUtwQkwsZ0JBQWNoQixtQkFMTTtBQU1wQitCLFNBQU87QUFOYSxDO1NBWEgzQixTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgT3ZlcmxheSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBwb3BvdmVyUHJvcFR5cGVzIGZyb20gJy4vcG9wb3Zlci9wcm9wLXR5cGVzJztcbmltcG9ydCBwb3BvdmVyRGVmYXVsdFByb3BzIGZyb20gJy4vcG9wb3Zlci9kZWZhdWx0LXByb3BzJztcblxuY29uc3QgUmVhZE9ubHlJbnB1dCA9IHN0eWxlZC5kaXZgXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMuc2hhcGUocG9wb3ZlclByb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcG9wb3ZlclByb3BzOiBwb3BvdmVyRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMjAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgcG9wb3ZlclByb3BzOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIG1lcmdlUG9wb3ZlclByb3BzID0gKHRhcmdldCA9IHt9LCBzb3VyY2UgPSB7fSkgPT4gKFxuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLnRhcmdldC5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICAgIC4uLnNvdXJjZS5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4udGFyZ2V0LnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgICAgLi4uc291cmNlLnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICkpO1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wb3ZlclByb3BzOiB0aGlzLm1lcmdlUG9wb3ZlclByb3BzKHRoaXMuc3RhdGUucG9wb3ZlclByb3BzLCBldmVudC5wb3BvdmVyUHJvcHMpLFxuICAgICAgdmFsdWU6IGV2ZW50LnZhbHVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGV2ZW50O1xuICAgIGlmIChzdGFydERhdGUgfHwgZW5kRGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xuXG4gIGhhbmRsZUhpZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgRGF0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgICB3aWR0aDogJHt3aWR0aH07XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGF0ZVJhbmdlU2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgcmVhZE9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SZWFkT25seUlucHV0PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd092ZXJsYXl9XG4gICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgID5cbiAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgey4uLnRoaXMubWVyZ2VQb3BvdmVyUHJvcHModGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMsIHRoaXMuc3RhdGUucG9wb3ZlclByb3BzKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L092ZXJsYXk+fVxuICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==