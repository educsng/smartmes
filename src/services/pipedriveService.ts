import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PIPEDRIVE_API_URL = 'https://api.pipedrive.com/v1';
const PIPEDRIVE_API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;

const createDeal = async (deal: any) => {
  try {
    const response = await axios.post(`${PIPEDRIVE_API_URL}/deals?api_token=${PIPEDRIVE_API_TOKEN}`, deal);
    return response.data;
  } catch (error) {
    console.error('Error creating Pipedrive deal:', error);
    throw error;
  }
};

export default { createDeal };
