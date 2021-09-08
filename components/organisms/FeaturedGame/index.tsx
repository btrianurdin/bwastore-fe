import { useCallback, useEffect, useState } from 'react';
import GameItem from '../../molecules/GameItem';
import { getFeaturedGame } from '../../../services/player';
import { GameItemTypes } from '../../../services/data-types';

export default function FeaturedGame(): JSX.Element {
  const [gameList, setGameList] = useState<GameItemTypes[]>([]);

  const getFeaturedGameList = useCallback(async () => {
    const res = await getFeaturedGame();
    setGameList(res.slice(0, 5));
  }, []);

  useEffect(() => {
    getFeaturedGameList();
  }, [getFeaturedGameList]);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {
            gameList.map((list: GameItemTypes) => (
              <GameItem
                key={list._id}
                id={list._id}
                title={list.name}
                category={list.category.name}
                thumbnail={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${list.thumbnail}`}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
