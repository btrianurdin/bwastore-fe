import cx from 'classnames';

interface Props {
  title: string;
  active: boolean;
}

export default function ButtonTab({ title, active }: Props): JSX.Element {
  const btnClass = cx('btn', 'btn-status', 'rounded-pill', 'text-sm', 'me-3', {
    'btn-active': active,
  });

  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}
