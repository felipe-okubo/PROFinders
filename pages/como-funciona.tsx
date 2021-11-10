import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import styles from '../styles/how-it-works.module.scss';

const HowItWorks: React.FC = () => {
  return (
    <>
      <Header />

      <main className={styles['how-it-works']}>
        <img src="/assets/como-funciona_banner.jpg" alt="Banner como funciona" />

        <section className={styles['how-it-works_content']}>
          <div className={styles['how-it-works_info']}>
            <h2 className="default-title">NOSSO MÉTODO</h2>

            <p>
              As aulas tem duração de 1 hora e serão aplicadas por um professor experiente
              no cenário, seja um analista ou ex-jogador profissional. O aluno será
              avaliado por meio de um teste junto ao professor para ser encaminhado aos
              ensinamentos de acordo com seu nível de conhecimento, as etapas são:
              conhecimento teórico (conhecimento de estratégias, posicionamento, controle
              da movimentação de adversários), habilidade técnica (proficiência individual
              de cada jogador como, por exemplo, agilidade e reflexo) e controle emocional
              (categoria essencial para a evolução de um atleta profissional de jogos
              eletrônicos, alto controle, paciência e comunicação em time). Após definido
              seu conhecimento, o aluno terá o acompanhamento online do professor pelo
              software Discord, que será o ambiente de ensino durante as aulas. O discord
              permite que professor e aluno conversem em tempo real por voz e vídeo, o
              profissional contratado poderá analisar suas partidas por compartilhamento
              de tela, dar dicas valiosas sobre estratégias dentro das partidas, dar o
              feedback sobre a evolução do aluno, tais como seus pontos fortes e questões
              à melhorar.
            </p>
          </div>

          <div className={styles['how-it-works_info']}>
            <h2 className="default-title">INSTRUTOR</h2>

            <p>
              A essência do instrutor está em fornecer suporte para que o indivíduo
              aprimore, se transforme e evolua. Assim como, auxilia-o a seguir na direção
              certa para seu estado desejado. O dever dele é entender o jogo como ele
              funciona e adaptar as melhores escolhas de cada jogador em sua posse para se
              adequar à essa forma de jogar o jogo. O professor vai estar presente em toda
              a sua jornada na escola, o ajudando e dando valiosas dicas para melhorar seu
              desempenho, além de te ajudar com dúvidas e técnicas.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HowItWorks;
