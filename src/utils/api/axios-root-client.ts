
// axios-root-client.ts
import axios from 'axios';
const backendUrl =process.env.NEXT_PUBLIC_API_URL;

const axiosClient = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
