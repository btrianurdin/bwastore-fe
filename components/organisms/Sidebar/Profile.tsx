import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { UserTypes } from '../../../services/data-types';

export default function Profile(): JSX.Element {
  const [user, setUser] = useState<UserTypes>();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodeToken = atob(token);
      const payload = jwtDecode(decodeToken);
      const player = (payload as any).player as UserTypes;
      const avatar = player.avatar ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${player.avatar}` : '/img/avatar-1.png';
      setUser({ ...player, avatar });
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img src={user?.avatar} width="90" height="90" className="img-fluid mb-20 img-upload" alt="avatar" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user?.name}</h2>
      <p className="color-palette-2 m-0">{user?.email}</p>
    </div>
  );
}
