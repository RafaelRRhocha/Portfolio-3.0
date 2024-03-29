import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-black h-[100px] text-center w-full text-zinc-500 flex justify-center items-center font-semibold">
      <p>Desenvolvido por Rafael Rocha com TypeScript, Next.js</p>
    </div>
  );
}

export default Footer;