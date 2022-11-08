import type { FC } from 'react';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center border-b-[0.5px] border-solid border-white">
        <div className="flex flex-col justify-center items-center gap-7 w-full h-[500px] text-zinc-100 bg-black">
          <h1 className="text-[45px] font-semibold tracking-wide">Projetos</h1>
          <p className="text-[25px] font-medium tracking-wide">
            Conheça Alguns dos meus Projetos!
          </p>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
					</svg>
        </div>
      </div>

      <div className="flex justify-center items-center border-b-[0.5px] border-solid border-white">
        <div className="flex justify-center items-center gap-7 w-1/2 h-[500px] text-zinc-100 bg-[#FE4F30]">
          <h1 className="text-[45px] font-semibold tracking-wide">Imagem Do Projeto</h1>
        </div>
        <div className="flex justify-center items-center gap-7 w-1/2 h-[500px] text-zinc-100 bg-black">
          <h1 className="text-[45px] font-semibold tracking-wide">Descrição do Projeto</h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;