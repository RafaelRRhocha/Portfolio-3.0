import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo, Planet } from 'phosphor-react';
import type { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className="flex justify-between h-[90px] blurBg items-center border-b-[0.5px] border-solid border-white fixed w-full z-[10]">
        <div className="flex items-center gap-[80px]">
          <a href="#home">
            <Planet size={35} className="ml-10 cursor-pointer text-[#f2f2f2] hover:text-[#FF4A70] transition-colors" />
          </a>
          <div className="text-zinc-100 text-[20px] flex gap-4">
            <a href="" className="hover:underline m-[14px]">Projetos</a>
            <a href="" className="hover:underline m-[14px]">Sobre Mim</a>
            <a href="" className="hover:underline m-[14px]">Redes Sociais</a>
            <a href="" className="hover:underline m-[14px]">Contato</a>
          </div>
        </div>
          <div className="flex gap-6 mr-[45px]" >
            <Link href="https://www.instagram.com/rafaelrhocha" target="_blank">
              <InstagramLogo size={35} color="#fffafa" className="cursor-pointer scale-90 hover:scale-100 transition-all" />
            </Link>
            <Link href="https://github.com/RafaelRRhocha" target="_blank">
              <GithubLogo size={35} color="#fffafa" className="cursor-pointer scale-90 hover:scale-100 transition-all" />
            </Link>
            <Link href="https://www.linkedin.com/in/rafael-rhocha" target="_blank">
              <LinkedinLogo size={35} color="#fffafa" className="cursor-pointer scale-90 hover:scale-100 transition-all" />
            </Link>
          </div>
      </header>
    </>
  );
}

export default Header;