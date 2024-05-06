import { Center, Link, Text } from "@chakra-ui/react";

export function ContentFooter() {
  return (
    <Center gap="4px">
      <Text>Feito com ❤️ por </Text>
      <Link href="https://github.com/ArthurFrazao" isExternal fontWeight={600}>
        Arthur Frazão
      </Link>
      <Text>e</Text>
      <Link href="https://github.com/lucasfrazao" isExternal fontWeight={600}>
        Lucas Frazão
      </Link>
    </Center>
  );
}
