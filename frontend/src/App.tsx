import {
  Box,
  Button,
  Card,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const glassMorphic = {
  background: "rgba( 255, 193, 213, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 7px )",
  "-webkit-backdrop-filter": "blur( 4px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

export default function App() {
  return (
    <Stack px={20}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        py={12}
      >
        <VStack display="flex" flexDirection="row" alignItems="flex-end">
          <Image
            width="3.5rem"
            height="3.5rem"
            src="https://img.icons8.com/color/96/wedding-gift.png"
            alt="wedding-gift"
          />
          <Text
            fontSize="2.5rem"
            color="#252527"
            fontFamily="Great Vibes"
            mb="-10px"
          >
            Mavi's Sweet Home
          </Text>
        </VStack>
        <Button bg="#fc6998" color="#f9f9f9" _hover={{ bg: "#f74780" }}>
          Login
        </Button>
      </Box>

      <Box>
        <VStack>
          <Heading>Lista de presentes</Heading>
          <Divider my="2rem" borderColor="#fa9fb1" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere
            incidunt, tempora qui maiores quaerat, tenetur eaque impedit
            distinctio enim atque repudiandae in magnam quidem voluptatibus quia
            repellendus quas fuga!
          </Text>
        </VStack>

        <Card
          variant="elevated"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="1rem"
          mt="2rem"
          {...glassMorphic}
        >
          <HStack>
            <Button bg="#fc6998" color="#f9f9f9" _hover={{ bg: "#f74780" }}>
              Todos
            </Button>
            <Button bg="#fc6998" color="#f9f9f9" _hover={{ bg: "#f74780" }}>
              Itens não presenteados
            </Button>
          </HStack>

          <HStack>
            <Button bg="#fc6998" color="#f9f9f9" _hover={{ bg: "#f74780" }}>
              Adicionar sugestão
            </Button>
            <Input
              placeholder="Pesquisar presente pelo nome"
              width="20rem"
              bg="#fff"
              borderColor="#fa9fb1"
              _hover={{ borderColor: "#fc6998" }}
              _focusVisible={{ borderColor: "#f74780" }}
            />
          </HStack>
        </Card>

        <SimpleGrid minChildWidth="250px" spacing={6} mt="2rem">
          <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="1rem"
          >
            <Image
              src="https://m.media-amazon.com/images/I/61en3E5zx9L._AC_SL1250_.jpg"
              maxWidth="14rem"
            />
            <Text
              as="h4"
              mb="0.5rem"
              fontSize="1.25rem"
              textAlign="start"
              width="100%"
            >
              Kit 15 Utensílios De Cozinha Com Cabo De Inox e Silicone Premium
              (Creme)
            </Text>
            <Button
              width="100%"
              bg="#fc6998"
              color="#f9f9f9"
              _hover={{ bg: "#f74780" }}
            >
              Presentear
            </Button>
          </Card>
          <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="1rem"
          >
            <Image
              src="https://m.media-amazon.com/images/I/61en3E5zx9L._AC_SL1250_.jpg"
              maxWidth="14rem"
            />
            <Text
              as="h4"
              mb="0.5rem"
              fontSize="1.25rem"
              textAlign="start"
              width="100%"
            >
              Kit 15 Utensílios De Cozinha Com Cabo De Inox e Silicone Premium
              (Creme)
            </Text>
            <Button
              width="100%"
              bg="#fc6998"
              color="#f9f9f9"
              _hover={{ bg: "#f74780" }}
            >
              Presentear
            </Button>
          </Card>
          <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="1rem"
          >
            <Image
              src="https://m.media-amazon.com/images/I/61en3E5zx9L._AC_SL1250_.jpg"
              maxWidth="14rem"
            />
            <Text
              as="h4"
              mb="0.5rem"
              fontSize="1.25rem"
              textAlign="start"
              width="100%"
            >
              Kit 15 Utensílios De Cozinha Com Cabo De Inox e Silicone Premium
              (Creme)
            </Text>
            <Button
              width="100%"
              bg="#fc6998"
              color="#f9f9f9"
              _hover={{ bg: "#f74780" }}
            >
              Presentear
            </Button>
          </Card>
          <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="1rem"
          >
            <Image
              src="https://m.media-amazon.com/images/I/61en3E5zx9L._AC_SL1250_.jpg"
              maxWidth="14rem"
            />
            <Text
              as="h4"
              mb="0.5rem"
              fontSize="1.25rem"
              textAlign="start"
              width="100%"
            >
              Kit 15 Utensílios De Cozinha Com Cabo De Inox e Silicone Premium
              (Creme)
            </Text>
            <Button
              width="100%"
              bg="#fc6998"
              color="#f9f9f9"
              _hover={{ bg: "#f74780" }}
            >
              Presentear
            </Button>
          </Card>
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
