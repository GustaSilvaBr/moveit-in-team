import {useState, useEffect} from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const maxMinutes = 1;
    const maxSecunds = 60;
    const maxMinutesInSecunds = maxMinutes * maxSecunds;

    const [time, setTime] = useState(maxMinutesInSecunds);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/maxSecunds);

    const secunds = time % maxSecunds;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

    function startCountdonw(){
        setActive(true);
    }

    useEffect(()=>{
        if(active && time > 0){
            setTimeout(()=>{
                setTime(time-1);
            },1000)
        }
    },[active, time]);

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
            <button type="button" className={styles.countdownButton} onClick={startCountdonw}>
                Iniciar um ciclo
            </button>
        </div>
    )
}