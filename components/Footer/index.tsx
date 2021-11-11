import styles from './footer.module.scss';

import FacebookIcon from '../../public/assets/icons/facebook.svg';
import InstagramIcon from '../../public/assets/icons/instagram.svg';
import LinkedInIcon from '../../public/assets/icons/linkedin.svg';

export const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //...
  };

  return (
    <footer className={styles.container}>
      <div className={styles['container-left']}>
        <h2>
          NOS ENVIE <br /> UMA MENSAGEM
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="NOME" />
          <input type="email" placeholder="EMAIL" />
          <textarea placeholder="MENSAGEM" />

          <button>ENVIAR</button>
        </form>
      </div>

      <div className={styles['container-right']}>
        <h2>CONTATE-NOS</h2>

        <div className={styles['container-right_info']}>
          <h4>Endereço:</h4>
          <p>Av.Bernanrdino de Campos, 98 - São Paulo, SP 12345-678</p>
        </div>

        <div className={styles['container-right_info']}>
          <h4>Telefone:</h4>
          <p>(11) 3456-7982</p>
        </div>

        <div className={styles['container-right_info']}>
          <h4>Email:</h4>
          <p>ProFinders0@gmail.com</p>
        </div>

        <div className={styles['container-right_social']}>
          <a href="https://www.instagram.com">
            <InstagramIcon />
          </a>

          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>

          <a href="https://www.linkedin.com/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
