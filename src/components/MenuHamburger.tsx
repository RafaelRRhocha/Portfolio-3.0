import { AnimatePresence, motion } from 'framer-motion';
import { List, Planet } from 'phosphor-react';
import { FC, useRef, useState } from 'react';

interface MenuHamburgerProps {}

const MenuHamburger: FC<MenuHamburgerProps> = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(prev => !prev);

  const ref = useRef(null);

  return (
    <>
      <div className="flex md:hidden lg:hidden xl:hidden px-10 justify-between h-[90px] blurBg items-center border-b-[0.5px] border-solid border-white fixed w-full z-[10]">
        <a href="#home">
          <Planet size={45} className="cursor-pointer text-[#f2f2f2] hover:text-[#FF4A70] transition-colors" />
        </a>

        <button
          onClick={toggleSidebar}
          className="p-2 relative"
          aria-label="toggle sidebar"
        >
          <List size={35} color='white' />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
            <motion.div
            {...framerSidebarPanel}
            className="fixed top-0 bottom-0 right-0 z-50 min-w-[100%] h-screen bg-black text-zinc-100 text-[25px] flex flex-col justify-center items-center"
            ref={ref}
            aria-label="Sidebar"
            onClick={toggleSidebar}
          >
            <a href="#projetos" className="underline m-[14px]">Projetos</a>
            <a href="#sobreMim" className="underline m-[14px]">Sobre Mim</a>
            <a href="#contato" className="underline m-[14px]">Contato</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuHamburger;

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.3 },
}
