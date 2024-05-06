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
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

const INITIAL_FORM_VALUES = {
  name: "",
  link: "",
  image: undefined,
};

export function ModalSuggestion() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [fieldValues, setFieldValues] = useState(INITIAL_FORM_VALUES);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
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
              onSubmit={handleSubmit}
            >
              <FormControl>
                <FormLabel>Nome do item</FormLabel>
                <Input
                  placeholder="Cafeteira Espresso"
                  bg="#fff"
                  borderColor="#fa9fb1"
                  _hover={{ borderColor: "#fc6998" }}
                  _focusVisible={{ borderColor: "#f74780" }}
                  name="name"
                  value={fieldValues.name}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input
                  placeholder="http://"
                  bg="#fff"
                  borderColor="#fa9fb1"
                  _hover={{ borderColor: "#fc6998" }}
                  _focusVisible={{ borderColor: "#f74780" }}
                  name="link"
                  type="url"
                  value={fieldValues.link}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Imagem do item</FormLabel>
                <Input
                  placeholder="http://"
                  bg="#fff"
                  borderColor="#fa9fb1"
                  _hover={{ borderColor: "#fc6998" }}
                  _focusVisible={{ borderColor: "#f74780" }}
                  name="image"
                  value={fieldValues.image}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Button
                bg="#fc6998"
                color="#f9f9f9"
                _hover={{ bg: "#f74780" }}
                type="submit"
                my="1rem"
              >
                Entrar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
