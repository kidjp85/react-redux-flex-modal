export default {
  modalWrapper: {
    zIndex: '999'
  },
  modalOverlay: {
    color: 'rgba(10,10,10,0.86)'
  },
  modalContent: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0px',
    shadow: 'none',
    margin: '0 20px',
    marginByMediaQuery: '0 auto',
    maxHeight: 'calc(100vh - 160px)',
    maxHeightByMediaQuery: 'calc(100vh - 40px)',
    width: '100%',
    widthByMediaQuery: '640px',
    maxWidth: '800px',
    overflow: 'auto'
  },
  modalContentHeader: {
    backgroundColor: '#fff',
    border: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: '1px solid #ccc',
    borderLeft: 'none',
    borderRadius: '6px',
    padding: '20px'
  },
  modalContentBody: {
    backgroundColor: '#fff',
    overflow: 'auto',
    padding: '20px'
  },
  modalContentFooter: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: 'none',
    borderTop: '1px solid #ccc',
    borderRight: 'none',
    borderBottom: 'none'
  },
  closeButton: {
    color: '#333',
    position: 'absolute',
    right: '10px',
    top: '10px'
  }
};
