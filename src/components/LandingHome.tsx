import type { FC } from 'react';

interface LandingHomeProps {}

const LandingHome: FC<LandingHomeProps> = ({}) => {
  return (
    <>
      <div id="home" className="p-[180px] flex justify-center items-center gap-10 border-b-[0.5px] border-solid border-white">
        <div className="flex flex-col items-left gap-10 text-zinc-100">
          <p className="text-[20px] font-semibold tracking-wide">
            Olá, eu me chamo Rafael Rocha  👋
          </p>
          <strong className="text-[52px]">
            Desenvolvedor
            <span className="text-[#FF4A70]"> Front End</span> <br />
            Simples, Objetivo e Moderno
          </strong>
        </div>
        <div>
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