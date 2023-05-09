import { usePicasso } from "@/hooks/usePicasso";
// import sendEvent from "@/utils/facebookConversionEvent";
import { Button, FlexProps } from "@chakra-ui/react";

export const PrimaryButton: React.FC<FlexProps> = ({ height }) => {
  const theme = usePicasso();
  const handleConversion = () => {
    fbq("track", "Purchase", { currency: "USD", value: 30.0 });
    window.open("https://pay.kiwify.com.br/5vk05Tc");
  };

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
      onClick={() => handleConversion()}
      zIndex="999"
    >
      QUERO RECEBER
    </Button>
  );
};
