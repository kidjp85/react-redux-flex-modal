import React from 'react';
import PropTypes from 'prop-types';
import { ModalContentHeader, CloseButton } from './base-components';

const ModalHeader = ({ isHidden = false, children, onClose, className = '' }) => {
  if (!children || isHidden) return false

  const renderCloseButton = () => {
    if (!onClose) return false
    return <CloseButton onClick={onClose} />
  }

  return (
    <ModalContentHeader className={className}>
      {children}
      {renderCloseButton()}
    </ModalContentHeader>
  )
};

ModalHeader.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired
};

export default ModalHeader;

