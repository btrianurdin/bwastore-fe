import cx from 'classnames';
import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  active?: boolean;
}

export default function Menu({ title, active, href = '/' }: Partial<Props>): JSX.Element {
  const classTitle = cx('nav-link', {
    active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">{title}</a>
      </Link>
    </li>
  );
}
