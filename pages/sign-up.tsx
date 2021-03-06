import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import SignUpForm from '../components/organisms/SignUpForm';

export default function SignUp(): JSX.Element {
  return (
    <>
      <Head>
        <title>
          Sign Up
          {' - '}
          StoreGG
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/">
                <a className="navbar-brand ">
                  <Image src="/icon/logo.svg" className="rounded-circle" width={60} height={60} />
                </a>
              </Link>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
}
