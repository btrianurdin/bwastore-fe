/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  icon: string;
  active?: boolean;
  href?: string;
  onClick?: () => void
}

export default function MenuItem({
  title, icon, active, href = '/', onClick,
}: Partial<Props>): JSX.Element {
  const ItemClass = cx('item', 'mb-25', {
    active,
  });

  return (
    <div className={ItemClass} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0 mb-2">
        {!onClick ? (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        ) : (
          <a className="text-lg text-decoration-none" style={{ cursor: 'pointer' }}>{title}</a>
        )}
      </p>
    </div>
  );
}
