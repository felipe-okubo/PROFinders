import styles from './styles.module.scss';

type Props = {
  image_url: string;
  title: string;
  content: string;
};

export const BannerWithContent: React.FC<Props> = (props) => {
  return (
    <section className={styles.container}>
      <img src={props.image_url} alt={props.title} />

      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </section>
  );
};
