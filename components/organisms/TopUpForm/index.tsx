import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { BankTypes, NominalTypes, PaymentTypes } from '../../../services/data-types';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';

interface Props {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm({ nominals, payments }: Props): JSX.Element {
  const [verifyID, setVerifyID] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [nominalItem, setNominalItem] = useState<NominalTypes | any>({});
  const [paymentItem, setPaymentItem] = useState<any>({});
  const router = useRouter();

  const nominalChange = (data: NominalTypes) => {
    setNominalItem(data);
  };

  const paymentChange = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const continueClick = () => {
    if (
      verifyID.trim() === ''
      || bankAccount.trim() === ''
      || Object.keys(nominalItem).length < 1
      || Object.keys(paymentItem).length < 1
    ) {
      toast.error('There is an empty form!');
    } else {
      const data = {
        verifyID,
        bankAccount,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem('data-topup', JSON.stringify(data));
      router.push('/checkout');
    }
  };

  return (
    <form action="" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(e) => setVerifyID(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {
            nominals.map((nominal: NominalTypes) => (
              <NominalItem
                key={nominal._id}
                _id={nominal._id}
                coinName={nominal.coinName}
                coinQuantity={nominal.coinQuantity}
                price={nominal.price}
                onChange={() => nominalChange(nominal)}
              />
            ))
          }
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {
              payments.map((payment: PaymentTypes) => (
                payment.banks.map((bank: BankTypes) => (
                  <PaymentItem
                    key={bank._id}
                    BankId={bank._id}
                    type={payment.type}
                    bankName={bank.bankName}
                    onChange={() => paymentChange(payment, bank)}
                  />
                ))
              ))
            }
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={continueClick}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
