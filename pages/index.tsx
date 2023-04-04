import {
  FifthSession,
  FirstSession,
  Footer,
  FourthSession,
  PrimaryButton,
  SecondSession,
  SixthSession,
  ThirdSession,
} from "@/components";
import { Flex, Img } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" color="white">
      <FirstSession />
      <Img src="/images/cb-bg1.png" zIndex="10" />
      <SecondSession />
      <Flex direction="column" position="relative">
        <ThirdSession />
        <Img
          src="/images/celia_bourguignon.png"
          left="12"
          w="60"
          top="96"
          position="absolute"
        />
        <FourthSession />
      </Flex>
      <FifthSession />
      <SixthSession />
      <Footer />
    </Flex>
  );
}
