import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';

export default function EditProfile(): JSX.Element {
  const [user, setUser] = useState<UserTypes | any>({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [preview, setPreview] = useState<null | string>(null);
  const router = useRouter();

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

  const saveProfileClick = async () => {
    const data = new FormData();
    data.append('avatar', user.avatar);
    data.append('name', user.name);
    data.append('phoneNumber', user.phoneNumber);
    const result = await updateProfile(data);
    if (result.status === 'error') {
      toast.error(result.message);
    } else {
      toast.success('Update profile is successfull!');
      Cookies.remove('token');
      router.push('/sign-in');
    }
  };

  return (
    <>
      <Head>
        <title>
          Edit Profile
        </title>
        <meta name="description" content="We provide all game voucher to you, a gamer." />
      </Head>
      <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {
                        preview
                          ? <img src={preview} width={90} height={90} alt="Avatar Upload" className="img-upload" />
                          : <img src={user?.avatar} alt="Avatar Upload" width={90} height={90} className="img-upload" />
                      }
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        let img: File | any;
                        if (e.target.files) {
                          // eslint-disable-next-line prefer-destructuring
                          img = e.target.files[0];
                        }
                        setPreview(URL.createObjectURL(img));
                        return setUser({ ...user, avatar: img });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    placeholder="Enter Your Name"
                    value={user.name}
                    onChange={(e: React.FormEvent<EventTarget>) => {
                      const target = e.target as HTMLInputElement;
                      return setUser({ ...user, name: target.value });
                    }}
                  />
                </div>
                <div className="pt-30">
                  <Input label="Email Address" placeholder="Enter Your Email Address" value={user?.email} disabled />
                </div>
                <div className="pt-30">
                  <Input
                    value={user?.phoneNumber}
                    label="Phone Number"
                    placeholder="Enter Your Phone Number"
                    onChange={(e: React.FormEvent<EventTarget>) => {
                      const target = e.target as HTMLInputElement;
                      return setUser({ ...user, phoneNumber: target.value });
                    }}
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={saveProfileClick}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
