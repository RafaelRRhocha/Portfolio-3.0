import { ArrowSquareOut } from 'phosphor-react';
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
            <div className="flex justify-center items-center gap-7 w-1/2 h-[500px] text-zinc-100 bg-[#FE4F30]">
              <picture className="flex items-center w-full h-full">
                <img src="https://user-images.githubusercontent.com/99758843/200694482-3d8d5c5e-2216-4bf3-8112-c42aa9ad4b43.png" alt="" />
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
                <div className="flex gap-2 justify-center items-center underline">
                  <a href={ e.ref } target="_blank" rel="noreferrer">{`${e.name.split(" ").join("").toLowerCase().trim()}.com`}</a>
                  <ArrowSquareOut size={23} color="#f2f2f2" />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;