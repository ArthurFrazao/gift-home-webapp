import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useGift } from "../../context/GiftContext";
import { HouseholdApplianceInformation } from "../HouseholdApplianceInformation";

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalProduct({ isOpen, onClose }: ModalProductProps) {
  const { giftSelected } = useGift();

  const [showExtraInformation, setShowExtraInformation] = useState(true);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar presente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {showExtraInformation ? (
              <HouseholdApplianceInformation />
            ) : (
              <VStack>
                <Flex gap="1rem">
                  <Avatar size="lg" src={giftSelected.imageUrl} />
                  <Box>
                    <Text as="p" fontSize="1rem" fontWeight={600}>
                      Presente escolhido:
                    </Text>
                    <Text as="span" fontSize="0.75rem">
                      {giftSelected.name}
                    </Text>
                  </Box>
                </Flex>

                <FormControl pt="2rem">
                  <FormLabel>Quem está presenteando?</FormLabel>
                  <Input
                    placeholder="Digite seu nome e sobrenome"
                    bg="#fff"
                    borderColor="#fa9fb1"
                    _hover={{ borderColor: "#fc6998" }}
                    _focusVisible={{ borderColor: "#f74780" }}
                  />
                </FormControl>
              </VStack>
            )}
          </ModalBody>

          <ModalFooter>
            {showExtraInformation ? (
              <Button
                mr={3}
                bg="#fc6998"
                color="#f9f9f9"
                _hover={{ bg: "#f74780" }}
                onClick={() => setShowExtraInformation(false)}
              >
                Continuar
              </Button>
            ) : (
              <ButtonGroup>
                <Button
                  mr={3}
                  bg="#fc6998"
                  color="#f9f9f9"
                  _hover={{ bg: "#f74780" }}
                >
                  Confirmar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ButtonGroup>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
