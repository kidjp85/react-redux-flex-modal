import React from 'react';
import PropTypes from 'prop-types';
import { ModalContentBody } from './base-components';

const ModalBody = ({ children, isHidden = false, className = '' }) => {
  if (!children || isHidden) return false;

  return (
    <ModalContentBody className={className}>
      {children}
    </ModalContentBody>
  );
};

ModalBody.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired
};

export default ModalBody;
