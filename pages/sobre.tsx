import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import banner_styles from '../components/BannerWithContent/styles.module.scss';
import styles from '../styles/about.module.scss';

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <section className={styles['main-banner']}>
          <div className={`${banner_styles.content} ${styles.content}`}>
            <h2>SOBRE NÓS</h2>
          </div>

          <img src="/assets/about-banner_logo.png" alt="Banner logo profinders" />
        </section>

        <section className={styles.about}>
          <div className={styles['about-content']}>
            <h2 className="default-title">PROFINDERS</h2>

            <p>
              Profinders é uma empresa que foi criada em 31 de março de 2020 com o
              objetivo de implementar o ensino online direcionado para jogos eletrônicos
              competitivos, para alunos que tenham interesse em entrar no cenário ou
              aperfeiçoar suas habilidades e conhecimentos.
            </p>
          </div>

          <div className={styles['about-content']}>
            <h2 className="default-title">NOSSO LOGOTIPO</h2>

            <p>
              O nome da empresa foi desenvolvido pensando nas características principais
              da empresa PROFinders.
            </p>

            <ul>
              <li>PRO que se refere a profissionais.</li>
              <li>Finders vem do inglês com a tradução de encontrar.</li>
            </ul>

            <p>
              No logotipo, destaca-se uma coruja com um capelo o que refere-se ao saber.
              Os olhos formam um joystick de video-game, referindo à área de atuação da
              empresa, jogos eletrônicos. É o que somos, procuramos alunos com o sonho de
              se tornarem profissionais e os ajudamos alcançar esse sonho com todo o
              conhecimento necessário.
            </p>

            <div className={styles['image-container']}>
              <img src="/assets/about-logo_image.jpg" alt="Representação do logo" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
