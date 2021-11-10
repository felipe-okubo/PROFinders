import Link from 'next/link';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <img
            className={styles.logo}
            src="/assets/logo-profinders.png"
            alt="Logo Profinders"
          />
        </a>
      </Link>

      <nav className={styles['navigation']}>
        <Link href="/sobre">
          <a>CONHEÇA A PROFINDERS</a>
        </Link>

        <Link href="/#servicos">
          <a>NOSSOS SERVIÇOS</a>
        </Link>

        <Link href="/inscricao">
          <a>INSCREVA-SE</a>
        </Link>

        <Link href="/como-funciona">
          <a>COMO FUNCIONA</a>
        </Link>
      </nav>
    </header>
  );
};
