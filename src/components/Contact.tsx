import type { FC } from 'react';
import { useState } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const verifyInputEmail = ({ target: { value } }: any) => {
    const regexValidation = /\S+@\w+\.\w+/i;
    const finalValidation = regexValidation.test(email);
    setDisable(finalValidation);
    setEmail(value);
  };

  const inputName = ({ target: { value }}: any) => setName(value);

  return (
    <div id="contato" className="flex flex-col gap-10 justify-center p-10 items-center w-full h-[600px] text-zinc-100 border-b-[0.5px] border-solid border-white">
      <h1 className="text-[45px] font-semibold tracking-wide">Entre em Contato Comigo!</h1>
      <div className="flex gap-[100px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-[20px] text-center">
            Caso queira entrar em contato comigo <br />
            preencha o formulário ao lado!
          </p>
          <a
            className="bg-[#BCA5AE] rounded-lg p-4 text-black hover:animate-pulse"
            href="https://drive.google.com/file/d/12qx-hMATCttZzoNWx07n_3PEoTB_r_Ux/view"
            target='_blank'
            rel='noreferrer'>
            Veja meu Currículo!
          </a>
        </div>
        {!sendRequest ? (
          <form className="flex flex-col gap-5">
            <input
              type="text"
              className="rounded-lg p-4 bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
              placeholder="email"
              name="email"
              value={ email }
              onChange={ verifyInputEmail }
              autoComplete="off"
            />
            <input
              type="text"
              className="rounded-lg p-4 bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
              placeholder="name"
              name="name"
              value={ name }
              onChange={ inputName }
            />
            <textarea
              className="rounded-lg p-4 resize-none bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
              placeholder="message"
            />
            <button
              disabled={ !disable || email.length < 2 }
              onClick={() => { setSendRequest(!sendRequest); setEmail('') }}
              className="bg-[#00FF7F] rounded-lg p-4 text-black disabled:opacity-[0.5]"
            >
              Send Email
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center">
            <picture>
              <img width="80px" height="80px" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-success-user-interface-flatart-icons-lineal-color-flatarticons.png" alt="send contact" />
            </picture>
            <p>{`${name}, Obrigado pelo Contato!`}</p>
            <button onClick={() => setSendRequest(!sendRequest)} className="bg-[#00FF7F] rounded-lg p-4 text-black">Enviar Novamente</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Contact;