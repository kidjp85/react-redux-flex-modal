import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Confirmation from './confirmation';
import Default from './default';
import defaultTheme from '../theme';
import { MODAL_TYPE_CONFIRMATION, MODAL_TYPE_DEFAULT } from '../constant';
import merge from 'lodash.merge';

const Modal = ({ modal, theme = {} }) => {
  const MODAL_COMPONENTS = {
    [MODAL_TYPE_CONFIRMATION]: Confirmation,
    [MODAL_TYPE_DEFAULT]: Default
  };

  if (!modal.type) return false;

  const baseTheme = merge(defaultTheme, theme);

  const ModalComponent = MODAL_COMPONENTS[modal.type];

  if (!ModalComponent) return false;

  return (
    <ThemeProvider theme={baseTheme} >
      <ModalComponent {...modal.props} />
    </ThemeProvider>
  );
};

Modal.propTypes = {
  modal: PropTypes.object,
  theme: PropTypes.object
}

export default connect(({ modal }) => ({ modal }))(Modal);
