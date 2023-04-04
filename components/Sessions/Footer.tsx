import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  const theme = usePicasso();
  return (
    <Flex bg={theme.branding.secondary} px="10" h="16" align="center">
      <Text fontSize="xs">CB Beauty • Todos os Direitos Reservados.</Text>
    </Flex>
  );
};
