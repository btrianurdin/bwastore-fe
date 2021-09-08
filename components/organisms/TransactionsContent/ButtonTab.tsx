import cx from 'classnames';

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function ButtonTab({ title, active, onClick }: Props): JSX.Element {
  const btnClass = cx('btn', 'btn-status', 'rounded-pill', 'text-sm', 'me-3', {
    'btn-active': active,
  });

  return (
    <button onClick={onClick} type="button" className={btnClass}>
      {title}
    </button>
  );
}
