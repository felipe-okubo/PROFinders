import React from 'react';
import { BannerWithContent } from '../components/BannerWithContent';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import styles from '../styles/online-games.module.scss';

type GameProps = {
  content: typeof games[number];
};

const games = [
  {
    image_url: '/assets/valorant-image.jpg',
    title: 'VALORANT',
    description:
      'Valorant é o novo jogo FPS da Riot Games, a mesma desenvolvedora do League of Legends (LoL). Conhecido inicialmente como “Project A”, o game é um fps 5v5 tático que mistura. O título conta com um elenco de personagens com habilidades específicas e mapas onde o objetivo é ativar um bomba ou defender um território. Os times começam a partida como ataque ou defesa, e trocam de lado na décima segunda rodada. Vence a equipe que fizer 13 pontos primeiro, e os jogos têm até 24 rounds.',
  },
  {
    image_url: '/assets/csgo-image.jpg',
    title: 'COUNTER STRIKE (CS:GO)',
    description:
      'Counter Strike - Global Offensive ou (CS:GO) É um popular jogo eletrônico de tiro em primeira pessoa. Inicialmente criado como um "mod" de Half-Life para jogos online, foi desenvolvido por Minh Le e Jess Cliffe e depois adquirido pela Valve Corporation.',
  },
  {
    image_url: '/assets/overwatch-image.jpg',
    title: 'OVERWATCH',
    description:
      'É um jogo eletrônico multijogador de tiro em primeira pessoa desenvolvido e publicado pela Blizzard Entertainment. Revelado na BlizzCon de 2014, o jogo enfatiza a jogabilidade cooperativa usando um elenco de vários "heróis", cada um com suas próprias habilidades e funções dentro de uma equipe.',
  },
  {
    image_url: '/assets/lol-image.jpg',
    title: 'LEAGUE OF LEGENDS',
    description:
      'É um jogo online competitivo que mistura a velocidade e a intensidade de um RTS com elementos de RPG. Duas equipes de poderosos campeões, cada um com design e estilo único, lutam em diversos campos de batalha e modos de jogo. Com um elenco de campeões em constante expansão, atualizações frequentes e uma cena competitiva exuberante, League of Legends oferece diversão incessante para jogadores de todos os níveis de habilidade.',
  },
];

const OnlineGames: React.FC = () => {
  const RenderGame: React.FC<GameProps> = ({ content }) => (
    <div className={styles.game}>
      <img src={content.image_url} alt={content.title} />

      <div className={styles.game_content}>
        <h2 className="default-title">{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <Header />

      <main className={styles.container}>
        <BannerWithContent
          image_url="/assets/jogos-online_banner.jpg"
          title="JOGOS ONLINE"
          content="Conheça os jogos que temos na ProFinders."
        />

        <section className={styles['our-games']}>
          {games.map((game, index) => (
            <RenderGame key={index} content={game} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OnlineGames;
