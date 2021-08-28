import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  category: string;
  thumbnail: string;
}

export default function GameItem({ title, category, thumbnail }: Props): JSX.Element {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <img className="thumbnail" src={`/img/${thumbnail}.png`} width={205} height={270} alt="Thumbnail" />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/console.svg" width={54} height={36} alt="console" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{ title }</p>
                <p className="fw-light text-white m-0">{ category }</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
