import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface SlidingCarouselProps {}

const SlidingCarousel: FC<SlidingCarouselProps> = ({}) => {
  const [mySkills, setMySkills] = useState<any>(null)

  useEffect(() => {
    fetch('/api/skills')
    .then(resp => resp.json())
    .then(setMySkills)
  }, []);

  return (
    <div className="overflow-hidden p-[40px] bg-black border-b-[0.5px] border-solid border-white">
      <div className="sliding-background flex items-center gap-[40px]">
        {!mySkills ? <p>loading</p> : (
          mySkills.map((e: any) => (
            <picture key={ e.name } className="h-[100px] w-[250px] flex flex-col justify-center items-center">
              <img src={ e.image } height="20" width="90" alt={ e.name } />
              <p className="text-zinc-50 font-semibold tracking-wide">{ e.name }</p>
            </picture>
          ))
        )}
      </div>
    </div>
  );
}

export default SlidingCarousel;