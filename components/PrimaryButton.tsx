import { usePicasso } from "@/hooks/usePicasso";
import { Button, FlexProps, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const PrimaryButton: React.FC<FlexProps> = ({ height }) => {
  const theme = usePicasso();
  return (
    <Button
      bg={theme.button.pink}
      fontSize="2xl"
      color="white"
      rounded="full"
      h={height}
      w="60"
      boxShadow="xl"
      _hover={{}}
      onClick={() => window.open("https://pay.kiwify.com.br/5vk05Tc")}
      zIndex="999"
    >
      QUERO RECEBER
    </Button>
  );
};
