import { FC, useState, useRef } from 'react';
import Notification from './Notification';

import emailjs from '@emailjs/browser';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const [notificationInfos, setNotificationInfos] = useState({
    show: false,
    text: '',
    color: '',
  });

  const [emailError, setEmailError] = useState<string>('');

  const emailTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isFormValid =
    Object.values(formData).every((value) => value.trim() !== '') &&
    !emailError;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'email') {
      if (emailTimerRef.current) {
        clearTimeout(emailTimerRef.current);
      }

      emailTimerRef.current = setTimeout(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(
          value.trim() === '' || emailRegex.test(value) ? '' : 'Email inválido'
        );
      }, 1000);
    }
  };

  const handleNotification = (show: boolean, text: string, color: string) => {
    setNotificationInfos({
      show,
      text,
      color
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const form = await emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID || '',
        process.env.EMAIL_TEMPLATE_ID || '',
        e.target,
        process.env.EMAIL_PUBLIC_KEY || ''
      );

      if(form.status === 200) {
        handleNotification(true, 'Email enviado com sucesso!', 'green');

        setFormData({
          email: '',
          name: '',
          message: '',
        });
      } else {
        throw new Error(`An error ocurred => ${form}`)
      }
    } catch (error) {
      handleNotification(true, 'Ops, ocorreu um erro ao enviar o email! Por favor, tente novamente', 'red');
      console.error(error);
    }
  };

  return (
    <div
      id='contato'
      className='flex flex-col gap-10 justify-center p-10 items-center w-full h-[600px] text-zinc-100 border-b-[0.5px] border-solid border-white'
    >
      <h1 className='text-[45px] font-semibold tracking-wide text-center'>
        Entre em Contato!
      </h1>
      <div className='flex gap-[100px]'>
        <div className='hidden md:flex lg:flex xl:flex flex-col gap-4 justify-center items-center'>
          <p className='text-[20px] text-center'>
            Caso queira entrar em contato comigo <br />
            preencha o formulário ao lado!
          </p>
          <a
            className='bg-[#BCA5AE] text-center rounded-lg p-4 text-black hover:animate-pulse'
            href='https://drive.google.com/file/d/1bo4VJgZ2iOtuQrUr5r4g8F5yD3NImHzo/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Visualizar meu Currículo
          </a>
        </div>

          <Notification
            message={notificationInfos.text}
            color={notificationInfos.color}
            onClose={() => handleNotification(false, '', '')}
          />

        <form
          className='flex flex-col justify-center items-center gap-5'
          method='post'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            className='rounded-lg p-4 bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]'
            placeholder='nome*'
            name='name'
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='text'
            className='rounded-lg p-4 bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]'
            placeholder='email*'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
          <textarea
            className='rounded-lg p-4 resize-none bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]'
            placeholder='assunto*'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type='submit'
            className={`bg-[#00FF7F] w-full rounded-lg p-4 text-black ${
              isFormValid ? '' : 'disabled:opacity-[0.5]'
            }`}
            disabled={!isFormValid}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
