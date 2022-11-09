import type { FC } from 'react';

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div id="sobreMim" className="w-full h-[600px] bg-black flex flex-col justify-center items-center text-zinc-100 border-b-[0.5px] border-solid border-white">
      <h1 className="text-[45px] font-semibold tracking-wide">Sobre Mim</h1>
      <div className="flex gap-4 justify-center items-center text-zinc-100">
        <div>algo aq</div>
        <div>outro aq</div>
      </div>
    </div>
  );
}

export default AboutMe;