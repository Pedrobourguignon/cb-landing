import { usePicasso } from "@/hooks/usePicasso";
import { Flex, Img, Text } from "@chakra-ui/react";

export const SixthSession = () => {
  const theme = usePicasso();
  return (
    <Flex
      bg={theme.branding.salmon}
      direction="column"
      align="center"
      position="relative"
      textAlign="center"
    >
      <Img
        src="/images/ellipse1.png"
        boxSize="16"
        position="absolute"
        right="2.5"
        top="14"
      />
      <Img
        src="/images/ellipse2.png"
        boxSize="12"
        position="absolute"
        right="7"
        top="8"
      />
      <Flex direction="column" w="60" gap="5" py="8">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textShadow="0px 3px 4px rgba(0, 0, 0, 0.15)"
        >
          Dúvidas? <Text>Fale conosco!</Text>
        </Text>
        <Text>
          Ficou com alguma dúvida? Deseja mais informações ou está com alguma
          dificuldade na hora da compra? Então entre em contato conosco.
        </Text>
        <Flex direction="column" gap="4">
          <Flex direction="column">
            <Text>E-mail</Text>
            <Text fontWeight="extrabold">suporte@cbbeauty.com.br</Text>
          </Flex>
          <Flex direction="column">
            <Text>WhatsApp</Text>
            <Text fontWeight="extrabold">(31) 9 99643603</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
