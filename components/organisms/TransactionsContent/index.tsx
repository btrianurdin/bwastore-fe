import { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { HistoryTypes } from '../../../services/data-types';
import { getMemberTransactions } from '../../../services/member';
import ButtonTab from './ButtonTab';
import TableRow from './TableRow';

export default function TransactionContent(): JSX.Element {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState<HistoryTypes[]>([]);
  const [tab, setTab] = useState('all');

  const getMemberTransactionsApi = useCallback(async (param) => {
    const res = await getMemberTransactions(param);
    setTotal(res.total);
    setTransactions(res.history);
  }, []);

  useEffect(() => {
    getMemberTransactionsApi('all');
  }, [getMemberTransactionsApi]);

  const tabClick = (value: string) => {
    getMemberTransactionsApi(value);
    setTab(value);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat value={total} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab onClick={() => tabClick('all')} title="All Trx" active={tab === 'all'} />
              <ButtonTab onClick={() => tabClick('success')} title="Success" active={tab === 'success'} />
              <ButtonTab onClick={() => tabClick('pending')} title="Pending" active={tab === 'pending'} />
              <ButtonTab onClick={() => tabClick('failed')} title="Failed" active={tab === 'failed'} />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {
                  transactions.map((trx) => (
                    <TableRow
                      key={trx._id}
                      id={trx._id}
                      title={trx.historyVoucherTopup.gameName}
                      category={trx.historyVoucherTopup.category}
                      image={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${trx.historyVoucherTopup.thumbnail}`}
                      item={`${trx.historyVoucherTopup.coinQuantity} ${trx.historyVoucherTopup.coinName}`}
                      price={trx.value}
                      status={trx.status}
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
