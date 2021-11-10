import { BannerWithContent } from '../components/BannerWithContent';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import Link from 'next/link';

import styles from '../styles/packages.module.scss';

type SubscriptionProps = {
  name: string;
  subscription_id: number;
  color: string;
};

const Package: React.FC<SubscriptionProps> = (props) => (
  <div className={styles['subscription']} style={{ backgroundColor: props.color }}>
    <div className={styles['subscription_id']} style={{ color: props.color }}>
      {props.subscription_id}
    </div>

    <div className={styles['subscription_content']}>
      <div className={styles['subscription_name']}>{props.name}</div>

      <span>{props.children}</span>
    </div>

    {/* does nothing, yet */}
    <Link href="/inscricao">
      <a>CONTRATE</a>
    </Link>
  </div>
);

const Packages: React.FC = () => {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <BannerWithContent
          image_url="/assets/pacotes_banner.jpg"
          title="PACOTES"
          content="Conheça nossos pacotes e escolha o que mais combina com você"
        />

        <div className={styles['subscriptions']}>
          <Package name="PACOTE PLATINA" subscription_id={1} color="#474747">
            7 Aulas <br /> R$ 150,00
          </Package>

          <Package name="PACOTE DIAMANTE" subscription_id={2} color="#171717">
            14 Aulas <br /> R$ 280,00 <br /> Economize <br /> R$ 20,00
          </Package>

          <Package name="PACOTE PRO" subscription_id={3} color="#FF9C00">
            30 Aulas <br /> R$ 500,00 <br /> Economize <br /> R$ 100,00
          </Package>
        </div>

        <ul>
          <li>• Pacotes 01(Platina) e 02 (Diamante) limite de 1 mês para uso.</li>
          <li>• Pacote 03 (Challenger) limite de 3 meses para uso.</li>
        </ul>
      </main>

      <Footer />
    </>
  );
};

export default Packages;
