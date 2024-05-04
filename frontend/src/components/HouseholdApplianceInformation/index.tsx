import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";

export function HouseholdApplianceInformation() {
  return (
    <Box>
      <Center>
        <Icon as={WarningTwoIcon} color="#fc6998" fontSize={40} />
      </Center>
      <Flex flexDirection="column" gap="0.5rem" mt="2rem">
        <Text as="span" fontSize="0.875rem">
          Informações importantes para aparelhos eletrônicos e eletrodomésticos:
        </Text>
        <Center as="p" fontSize="1.125rem" fontWeight={500}>
          Voltagem: 220V
        </Center>
      </Flex>
    </Box>
  );
}
