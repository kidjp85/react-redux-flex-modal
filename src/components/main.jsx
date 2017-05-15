import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContent } from './base-components';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    onClose: PropTypes.func,
    closedByOverlay: PropTypes.bool,
  }

  static defaultProps = {
    closedByOverlay: true
  }

  constructor(props) {
    super(props);
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onDialogClick = this.onDialogClick.bind(this);
    this.listenKeyboard = this.listenKeyboard.bind(this);
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }

  onOverlayClick() {
    const { onClose, closedByOverlay } = this.props;
    if (closedByOverlay) onClose();
  }

  onDialogClick(event) {
    event.stopPropagation();
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <ModalWrapper>
        <ModalOverlay onClick={this.onOverlayClick} />
        <ModalContent onClick={this.onDialogClick}>
          {this.props.children}
        </ModalContent>
      </ModalWrapper>
    )
  }
}

export default withTheme(Modal);
