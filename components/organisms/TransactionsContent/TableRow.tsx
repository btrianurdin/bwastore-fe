import cx from 'classnames';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface Props {
  id: string
  title: string;
  category: string;
  price: number;
  item: string;
  status: 'Pending' | 'Success' | 'Failed';
  image: string;
}

function capitalize(str: string): string {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

export default function TableRow({
  id, title, category, price, item, status, image,
}: Props): JSX.Element {
  const statusClass = cx('float-start', 'icon-status', {
    pending: capitalize(status) === 'Pending',
    success: capitalize(status) === 'Success',
    failed: capitalize(status) === 'Failed',
  });
  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`${image}`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {item}
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          <NumberFormat value={price} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            { capitalize(status) }
          </p>
        </div>
      </td>
      <td>
        <Link href={`/member/transactions/${id}`}>
          <a
            className="btn btn-status rounded-pill text-sm"
          >
            Details
          </a>
        </Link>
      </td>
    </tr>
  );
}
