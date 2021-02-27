import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangeContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const contextData = useContext(ChallengeContext);//return the context value

    console.log('Value: '+contextData);

    const hasActiveChallange = true;

    return (
        <div className={styles.ChallengeBoxContainer}>
            {hasActiveChallange ? (
                <div className={styles.ChallangeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio!</strong>
                        <p>Levante e faça uma caminhada</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>Falhei</button>

                        <button type="button" className={styles.challengeSucceedButton} >Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.ChallengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
                )
            }


        </div>
    )
}