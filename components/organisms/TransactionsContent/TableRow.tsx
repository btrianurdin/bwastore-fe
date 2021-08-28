import cx from 'classnames';

interface Props {
  title: string;
  category: string;
  price: number;
  item: number;
  status: 'Pending' | 'Success' | 'Failed';
  image: string;
}

export default function TableRow({
  title, category, price, item, status, image,
}: Props): JSX.Element {
  const statusClass = cx('float-start', 'icon-status', {
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });
  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
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
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <a
          href="../member/transactions-detail.html"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </a>
      </td>
    </tr>
  );
}
