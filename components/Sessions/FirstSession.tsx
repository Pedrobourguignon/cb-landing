import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Img, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../PrimaryButton";

export const FirstSession = () => {
  const theme = usePicasso();
  return (
    <Flex
      bg={theme.branding.primary}
      direction="column"
      w="100%"
      align="center"
      py="5"
    >
      <Img src="/images/logotipo.png" boxSize="60" />
      <Flex
        direction="column"
        gap="8"
        px="10"
        w="100%"
        align="center"
        textAlign="center"
      >
        <Text
          fontSize="4xl"
          textShadow="0px 3px 4px rgba(0, 0, 0, 0.15)"
          fontWeight="bold"
        >
          Os melhores fornecedores, agora ao seu alcance.
        </Text>
        <PrimaryButton height="20" />
      </Flex>
    </Flex>
  );
};
