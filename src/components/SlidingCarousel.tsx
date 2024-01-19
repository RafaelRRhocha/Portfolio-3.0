import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface SlidingCarouselProps {}

const SlidingCarousel: FC<SlidingCarouselProps> = () => {
  const [mySkills, setMySkills] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('/api/skills');
      const data = await response.json();
      setMySkills([...data, ...data, ...data, ...data, ...data]);
    };

    fetchSkills();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mySkills.length);
    }, 5000); // Ajuste o intervalo conforme necessário

    return () => clearInterval(intervalId);
  }, [mySkills]);

  return (
    <div className="overflow-hidden p-[40px] bg-black border-b-[0.5px] border-solid border-white">
      <div className={`sliding-background ${mySkills && 'dynamic-width'}`}>
        {!mySkills ? (
          <p>loading</p>
        ) : (
          mySkills.map((e: any, index: number) => (
            <picture key={ index } className={`image-container ${index === currentIndex ? 'visible' : ''}`}>
              <img src={ e.image } width="90" alt={ e.name } />
              <p className="text-zinc-50 font-semibold tracking-wide">{ e.name }</p>
            </picture>
          ))
        )}
      </div>
    </div>
  );
};

export default SlidingCarousel;
