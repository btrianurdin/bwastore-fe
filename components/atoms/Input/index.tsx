import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  [key: string]: any;
}

export default function Input({ label, ...nativeProps }: Props): JSX.Element {
  return (
    <>
      <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        {...nativeProps}
      />
    </>
  );
}
