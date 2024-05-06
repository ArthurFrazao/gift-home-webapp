import { ChangeEvent, FormEvent, useState } from "react";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Show,
  UseToastOptions,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { InputStyle } from "../../styles/Input";

import api from "../../services/api";

const toastSuccess: UseToastOptions = {
  isClosable: true,
  duration: 2000,
  position: "top",
  status: "success",
  title: "Novo presente adicionado",
  onCloseComplete: () => location.reload(),
};

const toastError: UseToastOptions = {
  isClosable: true,
  duration: 2000,
  position: "top",
  status: "error",
  title: "Ops! Algo deu errado",
};

const INITIAL_FORM_VALUES = {
  name: "",
  link: "",
  image_link: "",
};

export function ModalSuggestion() {
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [fieldValues, setFieldValues] = useState(INITIAL_FORM_VALUES);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  const createNewGift = async (event: FormEvent) => {
    event?.preventDefault();
    setIsLoading(true);

    const { image_link, link, name } = fieldValues;

    try {
      await api.post("/posts/add_gift", {
        name,
        link,
        image_link,
      });

      toast(toastSuccess);
    } catch (error) {
      toast(toastError);
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <Show above="md">
        <Button
          bg="#fc6998"
          color="#f9f9f9"
          fontSize=".875rem"
          _hover={{ bg: "#f74780" }}
          onClick={onOpen}
        >
          Adicionar sugestão
        </Button>
      </Show>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Entre com sua conta</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex
              as="form"
              direction="column"
              gap="1rem"
              justifyContent="flex-start"
              onSubmit={createNewGift}
            >
              <FormControl>
                <FormLabel>Nome do item</FormLabel>
                <Input
                  {...InputStyle}
                  placeholder="Cafeteira Espresso"
                  name="name"
                  value={fieldValues.name}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input
                  {...InputStyle}
                  placeholder="http://"
                  name="link"
                  type="url"
                  value={fieldValues.link}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Imagem do item</FormLabel>
                <Input
                  {...InputStyle}
                  placeholder="http://"
                  type="url"
                  name="image_link"
                  value={fieldValues.image_link}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Button
                bg="#fc6998"
                color="#f9f9f9"
                _hover={{ bg: "#f74780" }}
                type="submit"
                my="1rem"
                isLoading={isLoading}
              >
                Salvar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
