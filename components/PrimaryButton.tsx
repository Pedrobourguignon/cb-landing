import { usePicasso } from "@/hooks/usePicasso";
import { fbEvent } from "@rivercode/facebook-conversion-api-nextjs";
// import sendEvent from "@/utils/facebookConversionEvent";
import { Button, FlexProps } from "@chakra-ui/react";

export const PrimaryButton: React.FC<FlexProps> = ({ height }) => {
  const theme = usePicasso();
  const handleConversion = () => {
    fbEvent({
      eventName: "Purchase",
      value: 10,
      currency: "BRL",
    });

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
      onClick={handleConversion}
      zIndex="999"
    >
      QUERO RECEBER
    </Button>
  );
};
