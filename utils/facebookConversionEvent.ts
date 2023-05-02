import axios from "axios";

const sendEvent = async (eventData: Record<string, any>) => {
  const apiUrl = `https://graph.facebook.com/v12.0/${process.env.NEXT_PUBLIC_FACEBOOK_AD_ACCOUNT_ID}/events?access_token=${process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN}`;

  try {
    const response = await axios.post(apiUrl, eventData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default sendEvent;
