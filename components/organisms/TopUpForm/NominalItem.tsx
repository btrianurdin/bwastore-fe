/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import NumberFormat from 'react-number-format';
import { NominalTypes } from '../../../services/data-types';

interface Props extends NominalTypes {
  onChange: () => void;
}

export default function NominalItem({
  _id, coinQuantity, coinName, price, onChange,
}: Props): JSX.Element {
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={_id}
      onChange={onChange}
    >
      <input className="d-none" type="radio" id={_id} name="topup" value={_id} />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0 d-flex flex-wrap align-items-center">
            <span className="fw-medium me-2">{coinQuantity}</span>
            {' '}
            <small className="text-xl">{coinName}</small>
          </p>
          <svg
            id="icon-check"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
            <path
              d="M5.83301 10L8.46459 12.5L14.1663 7.5"
              stroke="#00BAFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg color-palette-1 m-0">
          <NumberFormat value={price} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," />
        </p>
      </div>
    </label>
  );
}
