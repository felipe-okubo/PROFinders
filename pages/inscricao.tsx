import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import styles from '../styles/subscriptions.module.scss';

import InputMask from 'react-input-mask';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  birthday: string;
  cellphone: string;
  cep: string;
  address: string;
  state: string;
  package: string;
};

const Subscriptions: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('O formulário foi enviado com sucesso!');
    }, 2000);
  };

  return (
    <>
      <Header />

      <main className={styles.container}>
        <section className={styles['main-banner']}>
          <img src="/assets/banner-subscriptions.jpg" alt="Banner inscrições" />
        </section>

        <section className={styles.form}>
          <h2>
            Preencha os dados corretamente e aguarde retorno no email para terminar sua
            inscrição.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['form-container']}>
              <div className={styles['form-row']}>
                <input {...register('name', { required: true })} placeholder="Nome" />
              </div>

              <div className={styles['form-row']}>
                <input {...register('email', { required: true })} placeholder="Email" />
              </div>

              <div className={styles['form-row']}>
                <InputMask
                  mask="99/99/9999"
                  {...register('birthday', { required: true })}
                  placeholder="**/**/****"
                />
                <InputMask
                  mask="99 99999-9999"
                  {...register('cellphone', { required: true })}
                  placeholder="Telefone"
                />
                <InputMask
                  mask="99999-999"
                  {...register('cep', { required: true })}
                  placeholder="CEP"
                />
              </div>

              <div className={styles['form-row']}>
                <input
                  {...register('address', { required: true })}
                  placeholder="Endereço"
                />
                <input {...register('state', { required: true })} placeholder="Estado" />
              </div>

              <div className={styles['form-row']}>
                <select
                  {...register('package', { required: true })}
                  placeholder="Escolher pacote"
                >
                  <option value="platina">Pacote Platina</option>
                  <option value="diamante">Pacote Diamante</option>
                  <option value="pro">Pacote Pro</option>
                </select>
              </div>
            </div>

            <button>
              {loading ? (
                <img src="/assets/icons/loading.gif" alt="Loading..." />
              ) : (
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 45L37.5 30L22.5 15"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Subscriptions;
