import React from 'react';
import PropTypes from 'prop-types';
import { ModalContentFooter } from './base-components';

const ModalFooter = ({ isHidden, children, className }) => {
  if (!children || isHidden) return false;

  return (
    <ModalContentFooter className={className}>
      {children}
    </ModalContentFooter>
  );
};

ModalFooter.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
};

export default ModalFooter;
