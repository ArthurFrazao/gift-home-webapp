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
  useDisclosure,
} from "@chakra-ui/react";

import { useAuth } from "../../context/AuthContext";

const INITIAL_FORM_VALUES = {
  email: "",
  password: "",
};

export function ModalLogin() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isLoggedIn, handleLogin, handleLogout } = useAuth();

  const [fieldValues, setFieldValues] = useState(INITIAL_FORM_VALUES);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  const logout = () => {
    onClose();
    handleLogout();
  };

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    handleLogin(fieldValues);
  };

  if (isLoggedIn) {
    return (
      <Button
        bg="#fc6998"
        color="#f9f9f9"
        _hover={{ bg: "#f74780" }}
        onClick={logout}
      >
        Logout
      </Button>
    );
  }

  return (
    <>
      <Button
        bg="#fc6998"
        color="#f9f9f9"
        _hover={{ bg: "#f74780" }}
        onClick={onOpen}
      >
        Login
      </Button>
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
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="email@email.com"
                  bg="#fff"
                  borderColor="#fa9fb1"
                  _hover={{ borderColor: "#fc6998" }}
                  _focusVisible={{ borderColor: "#f74780" }}
                  name="email"
                  value={fieldValues.email}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input
                  placeholder="*******"
                  bg="#fff"
                  borderColor="#fa9fb1"
                  _hover={{ borderColor: "#fc6998" }}
                  _focusVisible={{ borderColor: "#f74780" }}
                  name="password"
                  type="password"
                  value={fieldValues.password}
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
