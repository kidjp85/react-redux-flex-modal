import { showModal, hideModal } from './actions';
import reducer from './reducer';
import core from './containers';
import { SHOW_MODAL, HIDE_MODAL, MODAL_TYPE_DEFAULT, MODAL_TYPE_CONFIRMATION } from './constant';
import Header from './components/modal-header';
import Body from './components/modal-body';
import Footer from './components/modal-footer';

export {
  SHOW_MODAL,
  HIDE_MODAL,
  MODAL_TYPE_DEFAULT,
  MODAL_TYPE_CONFIRMATION,
  showModal,
  hideModal,
  reducer,
  Header,
  Body,
  Footer
};

export default core;
