import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CategoryTypes } from '../services/data-types';
import { getGameCategory } from '../services/player';
import { setSignUp } from '../services/auth';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPhoto(): JSX.Element {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [favorite, setFavorite] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState<null | string>(null);
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  });
  const router = useRouter();

  const getGameCategoryApi = useCallback(async () => {
    const res = await getGameCategory();
    setCategories(res);
    setFavorite(res[0]._id);
  }, []);

  useEffect(() => {
    getGameCategoryApi();
  }, [getGameCategoryApi]);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form') as any;
    setLocalForm(JSON.parse(getLocalForm));
  }, []);

  const createAccountSubmit = async () => {
    const getLocalForm = localStorage.getItem('user-form') as any;
    const form = JSON.parse(getLocalForm);
    const data = new FormData();

    data.append('avatar', avatar);
    data.append('email', form.email);
    data.append('name', form.name);
    data.append('password', form.password);
    data.append('username', form.name);
    data.append('role', 'user');
    data.append('status', 'Y');
    data.append('favorite', favorite);

    const result = await setSignUp(data);
    if (result.status === 'error') {
      toast.error(result.message);
    } else {
      toast.success('Registration is success!');
      router.push('/sign-up-success');
      localStorage.removeItem('user-form');
    }
  };

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
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      {
                        avatarPreview
                          ? <img src={avatarPreview} width={120} height={120} alt="avatar" className="img-upload" />
                          : <Image src="/icon/upload.svg" width={120} height={120} alt="avatar" />
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
                        setAvatarPreview(URL.createObjectURL(img));
                        return setAvatar(img);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                <div className="pt-50 pb-50">
                  <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Favorite
                    Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    onChange={(e) => setFavorite(e.target.value)}
                  >
                    {
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  type="button"
                  onClick={createAccountSubmit}
                >
                  Create My Account
                </button>
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
