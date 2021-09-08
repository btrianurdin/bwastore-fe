import callAPI from '../configs/api';
import { LoginTypes } from './data-types';

const API_VERSION = 'api/v1';

export const setSignUp = async (data: FormData): Promise<any> => {
  const url = `/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};

export const setSignIn = async (data: LoginTypes): Promise<any> => {
  const url = `/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
