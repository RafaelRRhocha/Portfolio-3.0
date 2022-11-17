import { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div id="contato" className="flex flex-col gap-10 justify-center p-10 items-center w-full h-[600px] text-zinc-100 border-b-[0.5px] border-solid border-white">
      <h1 className="text-[45px] font-semibold tracking-wide text-center">Entre em Contato!</h1>
      <div className="flex gap-[100px]">
        <div className="hidden md:flex lg:flex xl:flex flex-col gap-4 justify-center items-center">
          <p className="text-[20px] text-center">
            Caso queira entrar em contato comigo <br />
            preencha o formulário ao lado!
          </p>
          <a
            className="bg-[#BCA5AE] text-center rounded-lg p-4 text-black hover:animate-pulse"
            href="https://drive.google.com/file/d/1Ftl657WNDrtqnIxy3ylmINh1XyTXFwQl/view"
            target='_blank'
            rel='noreferrer'>
            Veja meu Currículo!
          </a>
        </div>
          <form className="flex flex-col justify-center items-center gap-5" action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="cf2d6dd5-6542-475f-ad2d-3c5d473f90a9" />
            <input type="hidden" name="redirectTo" value="https://rafaelrocha.vercel.app" />
            <input
              type="text"
              className="rounded-lg p-4 bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
              placeholder="email"
              name="email"
              autoComplete="off"
            />
            <input
              type="text"
              className="rounded-lg p-4 bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
              placeholder="nome"
              name="name"
            />
            <textarea
              className="rounded-lg p-4 resize-none bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
              placeholder="mensagem"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00FF7F] w-full rounded-lg p-4 text-black disabled:opacity-[0.5]"
            >
              Send Email
            </button>
          </form>
      </div>
    </div>
  );
}

export default Contact;