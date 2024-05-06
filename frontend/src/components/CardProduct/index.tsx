import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from "@chakra-ui/react";

import { ModalImage } from "../ModalImage";

import { ProductResponse } from "../../types/product";

interface CardProductProps {
  gift: ProductResponse;
  onConfirm: () => void;
}

export function CardProduct({ gift, onConfirm }: CardProductProps) {
  const { isAvailable } = gift.product;

  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="1rem"
      w="100%"
    >
      <CardHeader>
        {gift.product.imageUrl && <ModalImage gift={gift} />}
      </CardHeader>

      <CardBody>
        <Text as="h4" mb="0.5rem" width="fit-content">
          {gift.product.name}
        </Text>
      </CardBody>

      <CardFooter width="100%">
        <Button
          width="100%"
          bg="#fc6998"
          color="#f9f9f9"
          _hover={{ bg: "#f74780" }}
          onClick={onConfirm}
          isDisabled={!isAvailable}
        >
          Presentear
        </Button>
      </CardFooter>
    </Card>
  );
}
