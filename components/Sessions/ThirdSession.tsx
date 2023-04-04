import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Img, Text } from "@chakra-ui/react";
export const ThirdSession = () => {
  const theme = usePicasso();
  return (
    <Flex
      bg={theme.branding.salmon}
      align="center"
      pb="32"
      pt="10"
      direction="column"
    >
      <Flex direction="column" w="60" gap="5" position="relative">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textShadow="0px 3px 4px rgba(0, 0, 0, 0.15)"
          textAlign="center"
        >
          Confiabilidade & Qualidade
        </Text>
        <Text textAlign="center" lineHeight="base">
          Não perca mais tempo procurando por fornecedores confiáveis e de
          qualidade. Nós fizemos todo o trabalho para você, selecionando os
          melhores fornecedores do mercado para garantir que você possa oferecer
          os melhores produtos para seus clientes.
        </Text>
        <Img
          src="/images/ellipse1.png"
          position="absolute"
          left="40"
          top="24"
          boxSize="24"
        />
      </Flex>
    </Flex>
  );
};
