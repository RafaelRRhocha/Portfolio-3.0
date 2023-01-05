// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
      `Rafael Rocha é muito técnico e estudioso dedicado.
      Sempre em busca de novas tecnologias para solucionar desafios do ambiente de tecnologia,
      recomendo fortemente para todas as empresas que desejam ter em seu quadro de colaboradores,
      um profissional que faz a diferença e contribui com os resultados positivos.`,

      `Tive a oportunidade de trabalhar um projeto com o Rafael e a perícia dele com tecnologias
      de front end, em especial a visão incrível que ele tem de design e estilização,
      foi explicitamente vital pro sucesso do projeto. Uma pessoa incrível com uma história de vida
      mais incrível ainda, será um prazer enorme o dia que nossos caminhos no desenvolvimento se cruzarem novamente.
      Recomendo de olhos abertos, porque não existe a mínima possibilidade de eu fechar os olhos
      quando o front-end do Rafael está em display!`,

      `O Rafael é uma das minhas referências! Excelente desenvolvedor,
      fera no front-end e um ótimo colega de curso, sempre disposto a ajudar.
      Sou fã dos fronts dele! Recomendo muito.`,

      `Rafael Rocha é um excelente desenvolvedor, fortemente dedicado no seu
      aprendizado em Front-end. Sempre em busca de novas tecnologias para solucionar problemas
      e deixar usabilidade do usuário o melhor possível, minha recomendação para todas as empresas que
      desejam ter um profissional dedicado, focado no seu trabalho e estudo.`,
      
      `Rafael é um excelente programador, tecnicamente muito bom e dedicado.
      Recomendo fortemente ele para todas as empresas que desejam ter em seu quadro de colaboradores,
      um profissional que faz a diferença e contribui com os resultados positivos.`,

      `Se você procura alguém para front-end, ele é a pessoa certa.
      Bastante ágil e versátil, o Rochinha não vai descansar até ficar satisfeito com o
      resultado a ser entregue por ele.`,
      
      `Rafael é meu chará. Determinado e pró-ativo, busca sempre a melhor opção em seus desafios,
      é dedicado, compromoteido e sabe trabalhar em equipe.`,

      `Rafael é um otimo profissional, receptivo, atento, esforçado alem de ser cheio de vontade de crescer
      e se auto melhorar.`
  ])
}
