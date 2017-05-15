import styled from 'styled-components';

const overlay = (offset = 0) => `
  bottom: ${offset};
  left: ${offset};
  position: absolute;
  right: ${offset};
  top: ${offset};
`;

export const ModalWrapper = styled.div`
  ${overlay()}
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: ${({ theme: { modalWrapper } }) => modalWrapper.zIndex};
`;

export const ModalOverlay = styled.div`
  ${overlay()}
  background-color: ${({ theme: { modalOverlay } }) => modalOverlay.color};
`;

export const ModalContent = styled.div`
  background-color: ${({ theme: { modalContent } }) => modalContent.backgroundColor};
  border: ${({ theme: { modalContent } }) => modalContent.border};
  display: flex;
  flex-direction: column;
  margin: ${({ theme: { modalContent } }) => modalContent.margin};
  max-height: ${({ theme: { modalContent } }) => modalContent.maxHeight};
  max-width: ${({ theme: { modalContent } }) => modalContent.maxWidth};
  overflow: ${({ theme: { modalContent } }) => modalContent.overflow};
  position: relative;
  width: ${({ theme: { modalContent } }) => modalContent.width};

  @media screen and (min-width: 769px), print {
    margin: ${({ theme: { modalContent } }) => modalContent.marginByMediaQuery};
    max-height: ${({ theme: { modalContent } }) => modalContent.maxHeightByMediaQuery};
    width: ${({ theme: { modalContent } }) => modalContent.widthByMediaQuery};
  }
`;

export const ModalContentHeader = styled.div`
  background-color: ${({ theme: { modalContentHeader } }) => modalContentHeader.backgroundColor};
  border: ${({ theme: { modalContentHeader } }) => modalContentHeader.border};
  border-top: ${({ theme: { modalContentHeader } }) => modalContentHeader.borderTop};
  border-right: ${({ theme: { modalContentHeader } }) => modalContentHeader.borderRight};
  border-bottom: ${({ theme: { modalContentHeader } }) => modalContentHeader.borderBottom};
  border-left: ${({ theme: { modalContentHeader } }) => modalContentHeader.borderLeft};
  border-top-left-radius: ${({ theme: { modalContentHeader } }) => modalContentHeader.borderRadius};
  border-top-right-radius: ${({ theme: { modalContentHeader } }) => modalContentHeader.borderRadius};
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: ${({ theme: { modalContentHeader } }) => modalContentHeader.padding};
  position: relative;
`;

export const ModalContentBody = styled.div`
  background-color:  ${({ theme: { modalContentBody } }) => modalContentBody.backgroundColor};
  border: ${({ theme: { modalContentBody } }) => modalContentBody.border};
  border-top: ${({ theme: { modalContentBody } }) => modalContentBody.borderTop};
  border-right: ${({ theme: { modalContentBody } }) => modalContentBody.borderRight};
  border-bottom: ${({ theme: { modalContentBody } }) => modalContentBody.borderBottom};
  border-left: ${({ theme: { modalContentBody } }) => modalContentBody.borderLeft};
  flex-grow: 1;
  flex-shrink: 1;
  overflow: ${({ theme: { modalContentBody } }) => modalContentBody.overflow};;
  padding: ${({ theme: { modalContentBody } }) => modalContentBody.padding};;
`;

export const ModalContentFooter = styled.div`
  background-color:  ${({ theme: { modalContentFooter } }) => modalContentFooter.backgroundColor};
  border: ${({ theme: { modalContentFooter } }) => modalContentFooter.border};
  border-top: ${({ theme: { modalContentFooter } }) => modalContentFooter.borderTop};
  border-right: ${({ theme: { modalContentFooter } }) => modalContentFooter.borderRight};
  border-bottom: ${({ theme: { modalContentFooter } }) => modalContentFooter.borderBottom};
  border-left: ${({ theme: { modalContentFooter } }) => modalContentFooter.borderLeft};
  border-bottom-left-radius: ${({ theme: { modalContentFooter } }) => modalContentFooter.borderRadius};
  border-bottom-right-radius: ${({ theme: { modalContentFooter } }) => modalContentFooter.borderRadius};
  border-top: $base-border;
  align-items: center;
  background-color: $background;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;

  button {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const CloseButton = styled.i`
  position: ${props => (props.isFixed ? 'fixed' : props.theme.closeButton.position)};
  right: ${({ theme: { closeButton } }) => closeButton.right};
  top: ${({ theme: { closeButton } }) => closeButton.top};
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: ${({ theme: { closeButton } }) => closeButton.color};;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
