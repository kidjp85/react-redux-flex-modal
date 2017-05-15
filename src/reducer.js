import { SHOW_MODAL, HIDE_MODAL } from './constant';

const initialState = {
  type: null,
  props: {}
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        type: payload.type,
        props: payload.props
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
