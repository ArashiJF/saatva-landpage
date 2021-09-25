import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const BaseModal = ({ isOpen, hideModal, Title, Content, ...rest }) => {
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={hideModal}
      scrollBehavior="inside"
      isCentered={true}
      {...rest}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          color="white"
          backgroundColor="secondary"
          borderTopRadius="4"
        >
          {Title}
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody padding={0}>
          {Content}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
