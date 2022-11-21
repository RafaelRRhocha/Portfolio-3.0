import type { FC } from 'react';

interface LandingHomeProps {}

const LandingHome: FC<LandingHomeProps> = ({}) => {
  return (
    <>
      <div id="home" className="p-[180px] flex justify-center items-center gap-[50px] border-b-[0.5px] border-solid border-white">
        <div className="flex flex-col items-left gap-10 text-zinc-100 text-center">
          <p className="text-[20px] font-semibold tracking-wide">
            Olá! Eu me chamo Rafael Rocha, e no momento estou buscando emprego 👋
          </p>
          <strong className="text-[52px]">
            Desenvolvedor 
            <span className="text-[#FF4A70]"> Full Stack</span> <br />
            Simples, Objetivo e Moderno
          </strong>
        </div>
        <div className="hidden md:flex lg:flex xl:flex">
          <div className="spinner-box">
            <div className="blue-orbit leo"></div>
            <div className="green-orbit leo"></div>
            <div className="red-orbit leo"></div>
            <div className="white-orbit w1 leo">
            </div><div className="white-orbit w2 leo">
            </div><div className="white-orbit w3 leo">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingHome;