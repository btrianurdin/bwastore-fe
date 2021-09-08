import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { setSignIn } from '../../../services/auth';

export default function SignInForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const continueClick = async () => {
    const data = { email, password };
    if (email.trim() === '' || password.trim() === '') {
      toast.error('Email / Password is empty!', { autoClose: 3000 });
    } else {
      const res = await setSignIn(data);
      if (res.status === 'error') {
        toast.error(res.message, { autoClose: 3000 });
      } else {
        toast.success('Login success!');
        const { token } = res;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 7 });
        setTimeout(() => {
          toast.success('You will be directed to home page');
        }, 1000);
        setTimeout(() => {
          router.push('/');
        }, 4000);
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={continueClick}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign Up
          </a>
        </Link>
      </div>
    </>
  );
}
