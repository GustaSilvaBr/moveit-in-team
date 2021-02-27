import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangeContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const contextData = useContext(ChallengeContext);//

    const hasActiveChallange = contextData.hasChallenge;

    const challenge = contextData.challenge;
    
    function challengeCompleted(){
        contextData.challengeDone();
    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            {hasActiveChallange ? (
                <div className={styles.ChallangeActive}>
                    <header>Ganhe {challenge.amount} xp</header>
                    <main>
                        <img src={`icons/${challenge.type}.svg`}/>
                        <strong>Novo desafio!</strong>
                        <p>{challenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>Falhei</button>

                        <button type="button" className={styles.challengeSucceedButton} onClick={challengeCompleted}>Completei</button>
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