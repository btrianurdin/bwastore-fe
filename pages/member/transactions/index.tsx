import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionsContent';

export default function Transactions(): JSX.Element {
  return (
    <>
      <Head>
        <title>
          Transactions
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: { },
    },
  };
};
