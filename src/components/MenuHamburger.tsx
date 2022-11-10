import { Planet } from 'phosphor-react';
import { FC, useState } from 'react';

interface MenuHamburgerProps {}

const MenuHamburger: FC<MenuHamburgerProps> = ({}) => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex md:hidden lg:hidden xl:hidden px-10 justify-between h-[90px] blurBg items-center border-b-[0.5px] border-solid border-white fixed w-full z-[10]">
        <a href="#home">
          <Planet size={45} className="cursor-pointer text-[#f2f2f2] hover:text-[#FF4A70] transition-colors" />
        </a>
        <div id="menuToggle">
          <input type="checkbox" onClick={() => setMenu(!menu)} />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </div>
      </div>
      {menu && (
        <div onClick={() => setMenu(!menu)} className="flex md:hidden lg:hidden xl:hidden flex-col text-[40px] transition-all bg-black w-[100vw] h-[100vh] text-zinc-100 justify-center items-center">
            <a href="#projetos" className="underline m-[14px]">Projetos</a>
            <a href="#sobreMim" className="underline m-[14px]">Sobre Mim</a>
            <a href="#contato" className="underline m-[14px]">Contato</a>
        </div>
      )}
    </>
  );
}

export default MenuHamburger;