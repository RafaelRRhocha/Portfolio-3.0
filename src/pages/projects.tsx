import { FC, useEffect, useState } from 'react';
import Loading from '../components/Loading';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const [allProjects, setAllProjects] = useState<any>(null)

  useEffect(() => {
    fetch('/api/allProjects')
    .then(resp => resp.json())
    .then(setAllProjects)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center pt-[120px]'>
      <h1 className='text-4xl'>
        <strong className="text-zinc-100">Meus Projetos</strong>
      </h1>
      {!allProjects ? <Loading /> : (
      <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap justify-center px-2">
        {allProjects.map((e: any, i: number) => (
          <div key={ i } className='box-geral'>
            <div className='box'>
              <div className='text-content'>
                  <picture>
                    <img src={e.image} alt={e.name} className='h-14 m-auto' />
                  </picture>
                  <h2>{e.name}</h2>
                  <p className="font-semibold">Technologies Used:</p>
                  <p>{e.technologies}</p>
                  <a
                    target='_blank'
                    href={e.ref} rel="noreferrer"
                  >
                    Veja Mais
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Projects;