// Login user service

import axios from 'axios';
import { DEMO_USERS } from './demoData';

export async function loginUserApi(credentials) {
  try {
    // Make a POST request to the /api/login endpoint with the user credentials
    // const response = await axios.post('/api/login', credentials);
    // Return the response data
    // return response.data;

    return DEMO_USERS[0];
  } catch (error) {
    return error.response.data;
  }
}
