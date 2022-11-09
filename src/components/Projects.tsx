import { ArrowSquareOut, ArrowUpRight } from 'phosphor-react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    fetch('/api/projects')
    .then(resp => resp.json())
    .then(setProjects)
  }, []);

  return (
    <div id="projetos" className="flex flex-col">
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

      {!projects ? <p>Loading</p> : (
        projects.map((e: any) => (
          <div key={ e.name } className="flex justify-center items-center border-b-[0.5px] border-solid border-white">
            <div className="flex justify-center items-center gap-7 w-1/2 h-[500px] text-zinc-100 bg-black">
              <picture className="flex justify-center items-center w-full h-full opacity-[0.4]">
                <img src={ e.projectImage} alt="Imagem do Projeto" className="w-full h-full" />
              </picture>
            </div>
            <div className="flex flex-col justify-center items-center gap-7 w-1/2 h-[500px] text-zinc-100 bg-black">
              <div className="flex justify-center items-center gap-5">
                <picture>
                  <img src={ e.image } height="40" width="60" alt="" />
                </picture>
                <h1 className="text-[25px] font-semibold tracking-wide">{ e.name }</h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                <p>{ e.stacks }</p>
                <div className="flex gap-2 justify-center items-center underline text-[#ff0c8f]">
                  <a href={ e.ref } target="_blank" rel="noreferrer">{`${e.name.split(" ").join("").toLowerCase().trim()}.com`}</a>
                  <ArrowSquareOut size={23} />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="h-[150px] font-semibold tracking-wide text-zinc-100 border-b-[0.5px] border-solid border-white bg-[#ff0c8f] flex justify-center items-center gap-2 w-full">
        <p className="text-[25px]">Gostaria de ver mais projetos? Clique <a href="rafaelrocha-projetos.vercel.app" target="_blank" rel="noreferrer" className="text-black underline">Aqui</a></p>
        <ArrowUpRight size={32} color="#000" />
      </div>
    </div>
  );
}

export default Projects;