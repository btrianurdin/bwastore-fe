import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>StoreGG - Topup your game voucher easily</title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
