import axios from "axios";

const sendEvent = async (eventData: Record<string, any>) => {
  const { FACEBOOK_AD_ACCOUNT_ID, FACEBOOK_ACCESS_TOKEN } = process.env;

  const apiUrl = `https://graph.facebook.com/v12.0/${FACEBOOK_AD_ACCOUNT_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`;

  try {
    const response = await axios.post(apiUrl, eventData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default sendEvent;
