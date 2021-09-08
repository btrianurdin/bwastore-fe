import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import axios from '../Axios';

interface CallApiProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: CallApiProps): Promise<void> {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response: AxiosResponse = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) return response.data;
  return response.data.data;
}
