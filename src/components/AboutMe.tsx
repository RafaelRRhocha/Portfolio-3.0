import type { FC } from 'react';

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div id="sobreMim" className="w-full h-[1200px] md:h-[600px] lg:h-[600px] xl:h-[600px] bg-black flex flex-col justify-center items-center gap-4 text-zinc-100 border-b-[0.5px] border-solid border-white">
      <h1 className="text-[45px] font-semibold tracking-wide">Sobre Mim</h1>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 justify-center items-center text-zinc-100 p-5">
        <div className="max-w-[500px] text-[18px] text-center md:text-left lg:text-left xl:text-left">
          <p>
            Olá! Me chamo Rafael e tenho 19 anos!
            Sou desenvolvedor front end, tenho mais experiência em ambientes
            que trabalham com react, porém tenho familiaridade com outros frameworks SPA (angular/vue).
            Tenho contato com programação desde os meus 16 anos onde tive o primeiro contato com C#,
            depois disso fui estudando cada vez mais e fui me aperfeiçoando em conhecimento, tenho bastante
            vontade de aprender coisas novas e uma grande facilidade de adaptação sempre disposto a aprender mais e mais
            Tenho contato com diversas equipes de programadores todos os dias e cada dia tenho aperfeiçoado minhas softs skills, sendo as principais delas:
            Comunicação,
            Trabalho em Equipe,
            Bom Relacionamento Interpessoal,
            Compromisso com a Equipe,
            Organização,
            e Espirito de Equipe
          </p>
        </div>
        <div className="max-w-[500px] text-[18px] text-center md:text-left lg:text-left xl:text-left">
          <p>
            A partir do momento que entrei na trybe consegui ampliar cada vez mais meus conhecimentos
            descobri novas tecnologias que me encantaram logo de cara, paralelo ao front estou estudando
            back end também, então tenho familiaridade com docker, sql, node, express, mocha e conceitos
            como POO E SOLID! <br />
            No meu tempo livre gosto de caminhar e fazer trilhas!
            Minha personalidade é INTJ-A
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;