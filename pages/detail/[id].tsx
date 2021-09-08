import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import TopUpForm from '../../components/organisms/TopUpForm';
import TopUpItem from '../../components/organisms/TopUpItem';
import { DataDetailTypes, NominalTypes, PaymentTypes } from '../../services/data-types';
import { getDetailVoucher, getFeaturedGame } from '../../services/player';

interface Props {
  dataItem: DataDetailTypes;
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function Detail({ dataItem, nominals, payments }: Props): JSX.Element {
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem));
  }, [dataItem]);
  return (
    <>
      <Head>
        <title>
          Voucher Game
          {' '}
          {dataItem.name}
          {' - '}
          StoreGG
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <Navbar />

      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getFeaturedGame();
  const paths = data.map((item) => ({
    params: {
      id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as {id: string};
  const res = await getDetailVoucher(id);

  return {
    props: {
      dataItem: res.detail,
      payments: res.payments,
      nominals: res.detail.nominals,
    },
  };
};
