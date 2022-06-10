import { useState, useEffect } from 'react';
import styles from '../../styles/countdown.module.scss';

interface Props {
  date: string;
}

const Countdown: React.FC<Props> = ({ date }) => {
  // month/day/year hour:minute:second
  const DATE_TO_REACH = new Date(date).getTime();
  const INITIAL_DATE = { days: '0', hours: '0', minutes: '0', seconds: '0' };

  const [countdownDate] = useState(DATE_TO_REACH);
  const [state, setState] = useState(INITIAL_DATE);

  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    setInterval(() => handleTimeChange(), 1000);
  }, []);

  const handleTimeChange = () => {
    if (!countdownDate) return;

    const currentTime = new Date().getTime();
    const distanceToDate = countdownDate - currentTime;

    const { floor } = Math;

    let days = floor(distanceToDate / (1000 * 60 * 60 * 24));
    let hours = floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = floor((distanceToDate % (1000 * 60)) / 1000);

    const addPad = (num: string | number) => {
      return String(num).padStart(2, '0').toString();
    };

    const hasCountdownFinished = [days, hours, minutes, seconds].every(
      (num) => num == 0 || num < 0
    );

    console.log({ hasCountdownFinished, days, hours, minutes, seconds });

    if (hasCountdownFinished) {
      setHasFinished(true);
    }

    setState({
      days: addPad(days || 0),
      hours: addPad(hours || 0),
      minutes: addPad(minutes || 0),
      seconds: addPad(seconds || 0),
    });
  };

  return !hasFinished ? (
    <div className={styles['countdown']}>
      <div className={styles['countdown-time']}>
        <div className={`${styles['countdown-time_item']} ${styles['days']}`}>
          {state.days}<span>DIAS</span>
        </div>
      </div>

      <div className={styles['countdown-time']}>
        <div className={`${styles['countdown-time_item']} ${styles['hours']}`}>
          {state.hours}<span>HORAS</span>
        </div>
      </div>

      <div className={styles['countdown-time']}>
        <div className={`${styles['countdown-time_item']} ${styles['minutes']}`}>
          {state.minutes}<span>MIN</span>
        </div>
      </div>

      <div className={styles['countdown-time']}>
        <div className={`${styles['countdown-time_item']} ${styles['seconds']}`}>
          {state.seconds}<span>SEG</span>
        </div>
      </div>
    </div>
  ) : (
    <h3 className={styles['countdown-over']}>A promoção encerrou :(</h3>
  );
};

export default Countdown;
