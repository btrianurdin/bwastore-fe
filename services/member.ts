import callAPI from '../configs/api';

const API_VERSION = 'api/v1';

export const getMemberOverview = async (): Promise<any> => {
  const url = `/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getMemberTransactions = async (param?: string): Promise<any> => {
  let params = '';
  if (param === 'all') {
    params = '';
  } else {
    params = `?status=${param}`;
  }
  const url = `/${API_VERSION}/players/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getTransactionDetail = async (id: string, token: string): Promise<any> => {
  const url = `/${API_VERSION}/players/history/${id}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
    serverToken: token,
  });
};

export const updateProfile = async (data: FormData): Promise<any> => {
  const url = `/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};
