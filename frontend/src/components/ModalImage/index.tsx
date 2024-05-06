import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { ProductResponse } from "../../types/product";

interface ModalImage {
  gift: ProductResponse;
}

export function ModalImage({ gift }: ModalImage) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { imageUrl, name } = gift.product;

  return (
    <>
      <Image
        width="13.75rem"
        height="11.25rem"
        objectFit="cover"
        src={imageUrl}
        onClick={onOpen}
      />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imageUrl} alt="product image" />
          </ModalBody>

          <ModalFooter>
            <Button
              width="100%"
              bg="#fc6998"
              color="#f9f9f9"
              _hover={{ bg: "#f74780" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
