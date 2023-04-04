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
    <Flex direction="column">
      <FirstSession />
      <Img src="/images/cb-bg1.png" zIndex="10" />
      <SecondSession />
      <ThirdSession />
      <Img
        src="/images/celia_bourguignon.png"
        top="1770px"
        left="12"
        w="60"
        position="absolute"
      />
      <FourthSession />
      <FifthSession />
      <SixthSession />
      <Footer />
    </Flex>
  );
}
