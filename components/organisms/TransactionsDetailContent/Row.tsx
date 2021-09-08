import NumberFormat from 'react-number-format';

interface Props {
  label: string;
  value: string | number;
  className?: string;
}

export default function Row({ label, value, className }: Partial<Props>): JSX.Element {
  let val;

  if (typeof value === 'number') {
    val = <NumberFormat value={value} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," />;
  } else if (typeof value === 'string') {
    val = value;
  }

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span
        className={`purchase-details ${className}`}
      >
        { val }
      </span>
    </p>
  );
}
