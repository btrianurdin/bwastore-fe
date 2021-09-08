import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { UserTypes } from '../../services/data-types';

export default function Member(): JSX.Element {
  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
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

  const decodeToken = Buffer.from(token, 'base64').toString('ascii');
  const payload = jwtDecode(decodeToken);
  const player = (payload as any).player as UserTypes;
  return {
    props: {
      user: { player },
    },
  };
};
