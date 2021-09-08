import callAPI from '../configs/api';
import axios from '../configs/Axios';
import { CategoryTypes, DataCheckoutTypes, GameItemTypes } from './data-types';

const API_VERSION = 'api/v1';

export const getFeaturedGame = async (): Promise<GameItemTypes[]> => {
  const ENDPOINT = 'players/landingPage';
  const response = await axios.get(`/${API_VERSION}/${ENDPOINT}`);
  const resData = response.data;

  return resData.data;
};

export const getDetailVoucher = async (id: string): Promise<any> => {
  const ENDPOINT = `players/${id}/detail`;
  const response = await axios.get(`/${API_VERSION}/${ENDPOINT}`);
  const resData = response.data;

  return resData.data;
};

export const getGameCategory = async (): Promise<CategoryTypes[]> => {
  const ENDPOINT = 'players/category';
  const response = await axios.get(`/${API_VERSION}/${ENDPOINT}`);
  const resData = response.data;

  return resData.data;
};

export const setCheckout = async (data: DataCheckoutTypes): Promise<any> => {
  const url = `/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
};
