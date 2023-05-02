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
import sendEvent from "@/utils/facebookConversionEvent";
import { Flex, Img } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  const handlePageView = () => {
    sendEvent({
      event_name: "Page View",
      event_time: Math.floor(Date.now() / 1000),
      user_data: {
        email: "john.doe@example.com",
      },
      custom_data: {
        currency: "none",
        value: "0",
      },
    });
  };

  useEffect(() => {
    handlePageView();
  }, []);
  return (
    <Flex direction="column" color="white">
      <FirstSession />
      <Img src="/images/cb-bg1.png" zIndex="10" />
      <SecondSession />
      <ThirdSession />
      <FourthSession />
      <FifthSession />
      <SixthSession />
      <Footer />
    </Flex>
  );
}
