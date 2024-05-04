import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";

import { ProductResponse } from "../../types/product";

interface CardProductProps {
  gift: ProductResponse;
  onConfirm: () => void;
}

export function CardProduct({ gift, onConfirm }: CardProductProps) {
  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="1rem"
      maxW="18.75rem"
    >
      <CardHeader>
        {gift.product.imageUrl && (
          <Image
            width="13.75rem"
            height="11.25rem"
            objectFit="cover"
            src={gift.product.imageUrl}
          />
        )}
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
        >
          Presentear
        </Button>
      </CardFooter>
    </Card>
  );
}
