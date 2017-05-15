import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from '../actions';
import Modal from '../components/main';
import Header from '../components/modal-header';
import Body from '../components/modal-body';
import Footer from '../components/modal-footer';

const ComfirmationModal = props => {
  const {
    headerContent, headerClassName,
    bodyContent, bodyClassName,
    footerContent, footerClassName,
    closedByOverlay, onCloseCallback
  } = props;

  const onClose = () => {
    if (onCloseCallback) onCloseCallback();
    props.hideModal();
  };

  return (
    <Modal onClose={onClose} closedByOverlay={closedByOverlay} >
      <Header onClose={onClose} className={headerClassName}>
        {headerContent}
      </Header>
      <Body className={bodyClassName}>
        {bodyContent}
      </Body>
      <Footer className={footerClassName}>
        {footerContent}
      </Footer>
    </Modal>
  );
};

ComfirmationModal.propTypes = {
  headerContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  bodyContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  footerContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  onCloseCallback: PropTypes.func,
  hideModal: PropTypes.func,
  closedByOverlay: PropTypes.bool
};

ComfirmationModal.defaultProps = {
  closedByOverlay: true
};

export default connect(null, { hideModal })(ComfirmationModal);
