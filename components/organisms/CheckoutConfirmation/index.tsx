import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { DataCheckoutTypes } from '../../../services/data-types';
import { setCheckout } from '../../../services/player';

export default function CheckoutConfirmation(): JSX.Element {
  const [checkbox, setCheckbox] = useState(false);
  const router = useRouter();

  const confirmClick = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopupLocal = localStorage.getItem('data-topup');

    const dataItem = JSON.parse(dataItemLocal || '');
    const dataTopup = JSON.parse(dataTopupLocal || '');

    if (!checkbox) {
      toast.error('You must transfer before confirm payment!');
    } else {
      const data: DataCheckoutTypes = {
        voucher: dataItem._id,
        nominal: dataTopup.nominalItem._id,
        payment: dataTopup.paymentItem.payment._id,
        bank: dataTopup.paymentItem.bank._id,
        name: dataTopup.bankAccount,
        accountUser: dataTopup.verifyID,
      };
      const res = await setCheckout(data);
      if (res.status === 'error') {
        toast.error(res.message, { autoClose: 3000 });
      } else {
        toast.success('Your checkout is success!', { autoClose: 3000 });
        setTimeout(() => {
          router.push('/complete-checkout');
        }, 3000);
      }
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={confirmClick}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
