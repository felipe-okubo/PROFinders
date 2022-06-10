import type { NextPage } from 'next';

import Link from 'next/link';

import { Header } from '../components/Header';
import styles from '../styles/home.module.scss';

import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import { Footer } from '../components/Footer';

import CountdownTimer from '../components/Countdown';

type BoxProps = { content: typeof ourServicesBoxes[number] };
type CommentProps = { content: typeof comments[number] };

const ourServicesBoxes = [
  {
    title: 'JOGOS ONLINE',
    description: 'CONHEÇA OS JOGOS DISPONíVEIS',
    href: '/jogos-online',
  },
  {
    title: 'PACOTES',
    description: 'CONHEÇA OS PACOTES E VALORES E ESCOLHA O QUE MAIS COMBINA COM VOCÊ',
    href: '/pacotes',
  },
];

const comments = [
  {
    user: 'JOÃO',
    occupation: 'Instrutor',
    message:
      'Trabalhar na Profinders é divertido, trabalhar com jogos é minha paixão desde criança, e passar meu conhecimento adiante é muito legal, espero sempre fazer parte desse ensino onde descobrimos talentos e até futuros jogadores profissionais.',
    image: '/assets/profile-joao.jpg',
  },
  {
    user: 'CAROL',
    occupation: 'Aluna',
    message:
      'Sempre amei jogos, e com a Profinders descobri que é possível construir uma carreira no mundo dos games, sonhando junto com eles em me tornar uma jogadora profissional!',
    image: '/assets/profile-carol.jpg',
  },
];

const Box: React.FC<BoxProps> = ({ content }) => (
  <div className={styles['box']}>
    <h2>{content.title}</h2>
    <p>{content.description}</p>

    <Link href={content.href}>
      <a>SAIBA +</a>
    </Link>
  </div>
);

const Comment: React.FC<CommentProps> = ({ content }) => (
  <div className={styles['comment']}>
    <div className={styles['comment_image']}>
      <img src={content.image} alt={content.user} />
    </div>

    <div className={styles['comment_content']}>
      <div className={styles['comment_content-label']}>
        <h2 className="default-title">{content.user}</h2>
        <span>{content.occupation}</span>
      </div>

      <p>"{content.message}"</p>
    </div>
  </div>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles['main-banner']}>
        <img src="/assets/main-banner_home.jpg" alt="Banner principal da home" />
      </section>

      <section className={styles['main-banner_content']}>

        <CountdownTimer date='06/17/2022 21:05:08' />

        <div className={styles['text-promotion']}>
          <p>PROMOÇÃO MÊS DE JULHO</p>
          <span>Aguarde....</span>
        </div>

        <h1>PROFINDERS</h1>
        <p>
          Com um ensino online direcionado para jogos eletrônicos competitivos, a
          ProFinders é feita para você que tenha interesse em entrar no cenário
          competitivo dos games ou aperfeiçoar suas habilidades e conhecimentos nos jogos.
        </p>
      </section>

      <section className={styles['our-services']} id="servicos">
        <h1 className="default-title">NOSSOS SERVIÇOS</h1>

        <div className={styles['our-services_content']}>
          {ourServicesBoxes.map((box, i) => (
            <Box key={i} content={box} />
          ))}
        </div>
      </section>

      <section className={styles['champion']}>
        <h2>
          <span>SEJA UM CAMPEÃO!</span> <br /> ENTRE PARA A <span>PROFINDERS</span> E VIRE
          UM MESTRE DOS <span>GAMES</span>
        </h2>

        <Flickity
          className={styles['champion_carousel']}
          options={{ initialIndex: 2, lazyLoad: true, wrapAround: true, pageDots: false }}
        >
          <img src="/assets/slider-valorant.jpg" alt="Slider - imagem 1" />
          <img src="/assets/slider-overwatch.jpg" alt="Slider - imagem 2" />
          <img src="/assets/slider-csgo.jpg" alt="Slider - imagem 3" />
          <img src="/assets/slider-lol.jpg" alt="Slider - imagem 4" />
        </Flickity>
      </section>

      <section className={styles['comments']}>
        <h2 className="default-title">COMENTÁRIOS</h2>

        {comments.map((comment, i) => (
          <Comment key={i} content={comment} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
