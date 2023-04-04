import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Img, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../PrimaryButton";

export const FifthSession = () => {
  const theme = usePicasso();
  return (
    <Flex
      bg={theme.branding.gray}
      position="relative"
      justify="center"
      zIndex="hide"
    >
      <Img
        src="/images/ellipse2.png"
        boxSize="28"
        color="white"
        position="absolute"
        top="-14"
        left="14"
        zIndex="hide"
      />
      <Flex
        w="60"
        direction="column"
        pt="10"
        align="center"
        gap="6"
        textAlign="center"
        pb="14"
      >
        <Text
          fontSize="3xl"
          zIndex="999"
          textShadow="0px 3px 4px rgba(0, 0, 0, 0.15)"
          fontWeight="bold"
        >
          Bônus Especial
        </Text>
        <Text fontWeight="extrabold">
          Receba de bônus um fornecedor de cílios postiços com frete grátis e
          uma margem de lucro de até 300%.
        </Text>
        <Text>
          Isso mesmo,
          <Text as="span" fontWeight="extrabold" px="0.5">
            300% de lucro!
          </Text>
          Com essa oportunidade única, você não só aumentará seus lucros, como
          também surpreenderá seus clientes com os melhores produtos.
        </Text>
        <PrimaryButton height="14" />
      </Flex>
    </Flex>
  );
};
