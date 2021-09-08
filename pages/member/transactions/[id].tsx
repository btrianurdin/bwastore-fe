import { GetServerSideProps } from 'next';
import Head from 'next/head';
import TransactionDetailContent from '../../../components/organisms/TransactionsDetailContent';
import { getTransactionDetail } from '../../../services/member';

interface Props {
  transactionDetail: {
    [key: string]: string | any;
  }
}

export default function TransactionDetail({ transactionDetail }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>
          Transactions Detail
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={transactionDetail} />
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { token } = req.cookies;
  const { id } = params as {id: string};

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const decodeToken = Buffer.from(token, 'base64').toString('ascii');
  const res = await getTransactionDetail(id, decodeToken);

  return {
    props: {
      transactionDetail: res.data,
    },
  };
};
