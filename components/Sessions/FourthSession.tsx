import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Img, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../PrimaryButton";

export const FourthSession = () => {
  const theme = usePicasso();
  return (
    <Flex bg="white" w="100%" justify="center">
      <Flex
        w="60"
        direction="column"
        gap="6"
        pb="8"
        pt="60"
        position="relative"
        align="center"
      >
        <Text color={theme.branding.secondary}>
          Não espere mais para aumentar suas vendas e melhorar seus lucros.
          Adquira agora a lista de fornecedores da Celia Bourguignon e comece a
          oferecer os melhores produtos para seus clientes hoje mesmo!
        </Text>
        <PrimaryButton height="14" />
        <Img
          src="/images/ellipse1.png"
          boxSize="32"
          position="absolute"
          bottom="-28"
        />
      </Flex>
    </Flex>
  );
};
