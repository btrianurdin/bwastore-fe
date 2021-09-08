import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation';
import CheckoutDetail from '../components/organisms/CheckoutDetail';
import CheckoutItem from '../components/organisms/CheckoutItem';
import { UserTypes } from '../services/data-types';

export default function Checkout(): JSX.Element {
  return (
    <>
      <Head>
        <title>
          Checkout
          {' - '}
          StoreGG
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
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
