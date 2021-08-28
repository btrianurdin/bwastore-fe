import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  icon: string;
  active?: boolean;
  href: string;
}

export default function MenuItem({
  title, icon, active, href = '/',
}: Partial<Props>): JSX.Element {
  const ItemClass = cx('item', 'mb-25', {
    active,
  });

  return (
    <div className={ItemClass}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0 mb-2">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
