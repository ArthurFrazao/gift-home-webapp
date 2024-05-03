import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";

export function HouseholdApplianceInformation() {
  return (
    <Box>
      <Center mt="1rem">
        <Icon as={WarningTwoIcon} color="#fc6998" fontSize={24} />
      </Center>
      <Flex flexDirection="column" gap="1rem" mt="0.5rem">
        <Text as="span" fontSize="0.875rem">
          Informações importantes para aparelhos eletronicos e eletrodomesticos:
        </Text>
        <Center as="p" fontSize="1.125rem" fontWeight={500}>
          Voltagem: 220V
        </Center>
      </Flex>
    </Box>
  );
}
