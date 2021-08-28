import Image from 'next/image';
import { FooterItemCompany, FooterItemConnect, FooterItemSupport } from './FooterItems';

export default function Footer(): JSX.Element {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi
                pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItemCompany />
                <FooterItemSupport />
                <FooterItemConnect />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
