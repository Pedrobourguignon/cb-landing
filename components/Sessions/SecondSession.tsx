import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Text, Img } from "@chakra-ui/react";
import { PrimaryButton } from "../PrimaryButton";

export const SecondSession = () => {
  const theme = usePicasso();
  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      bg={theme.branding.secondary}
      py="14"
      position="relative"
    >
      <Img
        src="/images/ellipse2.png"
        position="absolute"
        top="-30"
        left="-70"
        boxSize="28"
      />
      <Img
        src="/images/ellipse1.png"
        position="absolute"
        right="2"
        top="10"
        boxSize="32"
      />
      <Flex direction="column" w="72" gap="4" align="center" textAlign="center">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textShadow="0px 3px 4px rgba(0, 0, 0, 0.15)"
        >
          Bem-vindo à sua nova fonte de lucro!
        </Text>
        <Text>
          Tenha uma lista com 25 fornecedores de marcas nacionais e acesso a uma
          ampla variedade de produtos com margens de lucro que variam de 35% a
          110%.
        </Text>
        <PrimaryButton height="14" />
      </Flex>
      <Img
        src="/images/ellipse2.png"
        position="absolute"
        bottom="-3"
        left="5"
        boxSize="14"
      />
      <Img
        src="/images/ellipse1.png"
        position="absolute"
        left="30"
        bottom="-10"
        boxSize="16"
      />
    </Flex>
  );
};
