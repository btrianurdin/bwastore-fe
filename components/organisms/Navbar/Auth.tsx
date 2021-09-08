import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { UserTypes } from '../../../services/data-types';

export default function Auth(): JSX.Element {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<UserTypes>();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodeToken = atob(token);
      const payload = jwtDecode(decodeToken);
      const player = (payload as any).player as UserTypes;
      const avatar = player.avatar ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${player.avatar}` : '/img/avatar-1.png';
      setIsLogin(true);
      setUser({ ...player, avatar });
    }
  }, []);

  const logoutClick = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image src={`${user?.avatar}`} className="rounded-circle" width={40} height={40} alt="avatar" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Account Settings</a>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item text-lg color-palette-2"
                onClick={logoutClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
