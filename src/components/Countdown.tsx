import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeOut: NodeJS.Timeout;

export function Countdown() {
    const maxMinutes = 0.1;
    const maxSecunds = 60;
    const maxMinutesInSecunds = maxMinutes * maxSecunds;

    const [time, setTime] = useState(maxMinutesInSecunds);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / maxSecunds);

    const secunds = time % maxSecunds;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

    function startCountdonw() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(maxMinutes*maxSecunds);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>
            {hasFinished?(
                <button disabled className={styles.countdownButton}>
                Ciclo encerrado
            </button>
            ):(
                isActive ? (
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abondonar ciclo
                    </button>
                ) : (
                    <button type="button" className={styles.countdownButton} onClick={startCountdonw}>
                        Iniciar um ciclo
                    </button>
                ) 
            )}
        </div>
    )
}