import type { FC } from 'react';

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div
      id='sobreMim'
      className='w-full h-[1200px] md:h-[600px] lg:h-[600px] xl:h-[600px] bg-black flex flex-col justify-center items-center gap-4 text-zinc-100 border-b-[0.5px] border-solid border-white'
    >
      <h1 className='text-[45px] font-semibold tracking-wide'>Sobre Mim</h1>
      <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 justify-center items-center text-zinc-100 p-5'>
        <div className='max-w-[500px] text-[18px] text-center md:text-left lg:text-left xl:text-left'>
          <p>
            Olá! Sou um desenvolvedor com pouco mais de 2 anos de
            experiência, formado pela Trybe. Minha jornada educacional
            proporcionou uma sólida base técnica, enquanto minha experiência
            profissional me permitiu aprimorar minhas habilidades em diversas
            linguagens, incluindo Ruby, TypeScript, Python, Ruby on Rails,
            mySQL. <br />
            Já deixei minha marca em projetos para gigantes da moda, como
            Reserva, Malwee, Grupo Colméia, Grupo Soma, Vivara, NTK, Grupo
            Laces, entre outros. Minha abordagem centrada em soluções eficientes
            e inovadoras destaca meu compromisso com a excelência no
            desenvolvimento.
          </p>
        </div>
        <div className='max-w-[500px] text-[18px] text-center md:text-left lg:text-left xl:text-left'>
          <p>
            Quando não tô imerso no código, gosto de relaxar com caminhadas e
            trilhas, curtindo a natureza. <br />
            Minha personalidade? Sou do tipo INTJ-A, o que traduz minha
            abordagem analítica e estratégica. Estou em busca de desafios que me
            estimulem profissionalmente, onde eu possa aplicar minha bagagem e
            contribuir para projetos de peso. <br />
            Sempre de olho em oportunidades para crescer e me destacar no mundo
            do desenvolvimento. Esse é um pouquinho sobre mim, sempre
            estou pronto para encarar os próximos desafios com seriedade e
            experiência.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
