export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface UserTypes {
  _id: string;
  name: string;
  phoneNumber: string;
  username?: string;
  avatar?: string;
  status?: string;
  email?: string;
  role?: string;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface DataDetailTypes {
  _id?: string;
  nominals?: NominalTypes;
  name?: string;
  thumbnail?: string;
  category?: CategoryTypes;
  isFeatured?: boolean;
  user?: UserTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  noRekening?: string;
  bankName: string;
}

export interface PaymentTypes {
  _id: string;
  status: string;
  banks: BankTypes[];
  type: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface DataCheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface OverviewCountTypes {
  _id: string;
  name: string;
  value: number;
}

export interface HistoryTypes {
  [key: string]: string | any;
}
