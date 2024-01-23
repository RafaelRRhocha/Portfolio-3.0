import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';

interface FeedbacksProps {}

const Feedbacks: FC<FeedbacksProps> = ({}) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    fetch('/api/feedbacks')
    .then(resp => resp.json())
    .then(setFeedbacks)
  }, []);

  return (
    <div id="feedbacks" className="hidden w-full h-[1000px] md:h-[600px] lg:h-[600px] xl:h-[600px] bg-black md:flex lg:flex xl:flex flex-col items-center gap-10 text-zinc-100 border-b-[0.5px] border-solid border-white">
      <h1 className="text-[45px] font-semibold tracking-wide pt-[60px]">Feedbacks</h1>
      <div className="flex justify-center items-center gap-10 ">
        <button
          type="button"
          disabled={ indice <= 0 }
          onClick={() => indice > 0 && setIndice(indice - 1)}
          className="disabled:opacity-[0.5]"
        >
          <ArrowCircleLeft size={ 30 } />
        </button>
        <p
          className="max-w-[700px] h-[310px] text-center text-[23px]"
        >
          {`"${feedbacks[indice] }"`}
        </p>
        <button
          type="button"
          disabled={ indice >= 7 }
          onClick={() => indice < 7 && setIndice(indice + 1)}
          className="disabled:opacity-[0.5]"
        >
          <ArrowCircleRight size={ 30 } />
        </button>
      </div>
      <p className="text-[#3F3C47]">*feedbacks retirados do linkedin*</p>
    </div>
  );
}

export default Feedbacks;