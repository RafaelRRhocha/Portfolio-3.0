import type { FC } from 'react';

interface WhatIDoProps {}

const WhatIDo: FC<WhatIDoProps> = ({}) => {
  return (
    <div id="whatIDo" className="flex flex-col justify-center p-1 md:p-10 lg:p-10 xl:p-10 items-center w-full h-[1000px] md:h-[600px] lg:h-[600px] xl:h-[600px] bg-black border-b-[0.5px] border-solid border-white">
      <h1 className="text-zinc-100 text-[45px] font-semibold tracking-wide text-center">O que eu Faço?</h1>
      <div className="container flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-2 md:gap-[80px] lg:gap-[80px] xl:gap-[80px]">
          <div className="card">
              <div className="face face1">
                  <div className="content">
                    <picture>
                      <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt="" />
                    </picture>
                      <h3>Design</h3>
                  </div>
              </div>
              <div className="face face2">
                  <div className="content">
                      <p>
                        O melhor design elegante e responsivo que fala a
                        linguagem da sua empresa e atende aos seus objetivos.
                      </p>
                  </div>
              </div>
          </div>

          <div className="card">
              <div className="face face1">
                  <div className="content">
                    <picture>
                      <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" alt="" />
                    </picture>
                      <h3>Código</h3>
                  </div>
              </div>
              <div className="face face2">
                  <div className="content">
                      <p>
                        Um bom desenvolvimento de código, limpo e rápido
                        sempre procurando um bom desenvolvimento com a equipe
                      </p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}

export default WhatIDo;