import twilio from 'twilio';

const twilioConfig = {
    accountSid: process.env.REACT_APP_TWILIO_ACCOUNT_SID,
    apiKey: process.env.REACT_APP_TWILIO_API_KEY,
    apiSecret: process.env.REACT_APP_TWILIO_API_SECRET
  }

export const getToken = async ({identity, room }) => {
    
    const accessToken = new twilio.jwt.AccessToken(twilioConfig.accountSid, twilioConfig.apiKey, twilioConfig.apiSecret);
    accessToken.identity = identity;

    const grant = new twilio.jwt.AccessToken.VideoGrant({
        room
    })

    accessToken.addGrant(grant);
    
    return accessToken.toJwt()
}