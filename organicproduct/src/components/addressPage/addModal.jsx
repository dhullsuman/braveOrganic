// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import AddForm from './AddForm';

export default function AddModal({show,onHide }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function isShow() {
    if (show) onOpen();
    else {onClose();onHide(false)}
 }
  useEffect(() => {
    isShow();
},[show])
  return (<>
          <Text as="p" onClick={onOpen} cursor="pointer">+ Add Address</Text>
    
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={`outside`} size={"2xl"} isCentered>
    <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add New Address</ModalHeader>
        <ModalCloseButton onClick={() => onHide(false)} />
        <ModalBody>
          <AddForm onClick={onClose} onHide={onHide} />
        </ModalBody>
        </ModalContent>
    </Modal>
    </>
  );
}