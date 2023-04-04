import { usePicasso } from "@/hooks/usePicasso";
import { Button, FlexProps } from "@chakra-ui/react";

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
    >
      QUERO RECEBER
    </Button>
  );
};
