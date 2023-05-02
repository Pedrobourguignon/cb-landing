import { usePicasso } from "@/hooks/usePicasso";
import sendEvent from "@/utils/facebookConversionEvent";
import { Button, FlexProps, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const PrimaryButton: React.FC<FlexProps> = ({ height }) => {
  const theme = usePicasso();
  const handleConversion = () => {
    sendEvent({
      event_name: "Purchase",
      event_time: Math.floor(Date.now() / 1000),
      user_data: {
        email: "john.doe@example.com",
      },
      custom_data: {
        currency: "USD",
        value: "100.00",
      },
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
      onClick={() => handleConversion()}
      zIndex="999"
    >
      QUERO RECEBER
    </Button>
  );
};
