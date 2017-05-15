import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../components/main';
import { hideModal } from '../actions';
import { connect } from 'react-redux';

const DefaultModal = ({ closedByOverlay, onCloseCallback, children }) => {
  const onClose = () => {
    if (onCloseCallback) onCloseCallback();
    hideModal();
  };

  return (
    <Modal onClose={onClose} closedByOverlay={closedByOverlay} >
      {children}
    </Modal>
  );
};

DefaultModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  onCloseCallback: PropTypes.func,
  hideModal: PropTypes.func,
  closedByOverlay: PropTypes.bool,
};

DefaultModal.defaultProps = {
  closedByOverlay: true
};

export default connect(null, { hideModal })(DefaultModal);
