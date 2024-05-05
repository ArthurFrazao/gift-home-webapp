import { useState } from "react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";

import { HouseholdApplianceInformation } from "../HouseholdApplianceInformation";

import { useGift } from "../../context/GiftContext";
import api from "../../services/api";

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalProduct({ isOpen, onClose }: ModalProductProps) {
  const toast = useToast();
  const { giftSelected } = useGift();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showExtraInformation, setShowExtraInformation] = useState(true);

  const { links } = giftSelected;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputedValue = event.target.value;
    setInputValue(inputedValue);
  };

  const updateGift = async () => {
    setIsLoading(true);
    try {
      await api.post("/posts/confirm_gift", {
        id: giftSelected.id,
        namePerson: inputValue,
      });

      toast({
        duration: 3000,
        position: "top",
        status: "success",
        title: "Boa escolha! Muito obrigado pelo presente ❤️",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);

      toast({
        isClosable: true,
        duration: 3000,
        position: "top",
        status: "error",
        title: "Ops! Algo deu errado",
      });
    }
  };

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
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </FormControl>

                {links.length > 0 && (
                  <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    width="100%"
                    mt="1rem"
                  >
                    <Text as="span" fontSize="0.875rem">
                      Deixei aqui sugestões de lugares que você pode encontrar
                      esse item.
                    </Text>
                    <List mt="0.875rem">
                      {links.map((link: string, index: number) => {
                        return (
                          <ListItem key={index}>
                            <Link
                              href={link}
                              isExternal
                              _hover={{ color: "#fc6998" }}
                            >
                              Opção de link {index + 1}{" "}
                              <ExternalLinkIcon mx="2px" />
                            </Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Flex>
                )}
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
                  isLoading={isLoading}
                  onClick={updateGift}
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
