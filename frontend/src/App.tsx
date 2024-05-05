import { useCallback, useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Show,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { CardProduct } from "./components/CardProduct";
import { ModalProduct } from "./components/ModalProduct";

import { Gift, useGift } from "./context/GiftContext";
import api from "./services/api";
import { ProductResponse } from "./types/product";

import { CardFilterStyle } from "./styles/CardFilter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [valueFiltered, setValueFilterd] = useState("");
  const [gifts, setGifts] = useState<ProductResponse[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setGiftSelected } = useGift();

  const getGifts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/get_items");
      const allGifts = response.data;

      setGifts(allGifts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputedValue = event.target.value.toLowerCase();
    setValueFilterd(inputedValue);
  };

  const filteredGifts = gifts.filter((gift) =>
    gift.product.name.toLowerCase().includes(valueFiltered)
  );

  const handleSelectGift = async (gift: Gift) => {
    setGiftSelected({
      id: gift.id,
      name: gift.name,
      imageUrl: gift.imageUrl,
      links: gift.links,
    });

    onOpen();
  };

  useEffect(() => {
    getGifts();
  }, [getGifts]);

  if (isLoading) {
    return (
      <Flex height="20rem" width="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#fa9fb1"
          size="xl"
          margin="auto"
        />
      </Flex>
    );
  }

  return (
    <Stack margin={"0 auto"} maxW="1440px" p="1rem">
      <ModalProduct isOpen={isOpen} onClose={onClose} />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="1rem"
        py={12}
      >
        <VStack display="flex" flexDirection="row" alignItems="flex-end">
          <Show above="md">
            <Image
              width="3.5rem"
              height="3.5rem"
              src="https://img.icons8.com/color/96/wedding-gift.png"
              loading="lazy"
              alt="wedding-gift"
            />
          </Show>
          <Text
            fontSize="2.5rem"
            color="#252527"
            fontFamily="Great Vibes"
            mb="-10px"
          >
            Mavi's Sweet Home
          </Text>
        </VStack>
        <Show above="md">
          <Button bg="#fc6998" color="#f9f9f9" _hover={{ bg: "#f74780" }}>
            Login
          </Button>
        </Show>
      </Box>

      <Box>
        <VStack>
          <Heading>Lista de presentes</Heading>
          <Divider my="2rem" borderColor="#fa9fb1" />
          <Text>
            Sonhar é bom, mas realizar sonhos com amigos queridos ao lado é bem
            melhor. <br />
            Se você está aqui, é porque eu desejo que você faça parte desse novo
            capítulo que estou escrevendo para a minha história. Por esse
            motivo, preparamos esse espaço com muito carinho para que você se
            sinta confortável ao escolher como presentear minha nova casinha,
            também estarei aberta a sugestões. Grande abraço!
          </Text>
        </VStack>

        <Card {...CardFilterStyle}>
          <Input
            value={valueFiltered}
            placeholder="Pesquisar presente pelo nome"
            bg="#fff"
            borderColor="#fa9fb1"
            _hover={{ borderColor: "#fc6998" }}
            _focusVisible={{ borderColor: "#f74780" }}
            onChange={handleInputChange}
          />
          <Flex justifyContent="space-between" gap="1rem" width="100%">
            <Button
              bg="#fc6998"
              color="#f9f9f9"
              fontSize=".875rem"
              _hover={{ bg: "#f74780" }}
            >
              Itens não presenteados
            </Button>
            <Button
              bg="#fc6998"
              color="#f9f9f9"
              fontSize=".875rem"
              _hover={{ bg: "#f74780" }}
            >
              Adicionar sugestão
            </Button>
          </Flex>
        </Card>

        <SimpleGrid
          minChildWidth="15.625rem"
          justifyItems="center"
          spacing={6}
          mt="2rem"
        >
          {filteredGifts.map((gift: ProductResponse, index: number) => {
            return (
              <CardProduct
                key={index}
                gift={gift}
                onConfirm={() => handleSelectGift(gift.product)}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
