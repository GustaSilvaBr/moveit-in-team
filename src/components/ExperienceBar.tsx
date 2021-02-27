import {useContext} from 'react';
import {ChallengeContext} from '../contexts/ChallangeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const contextData = useContext(ChallengeContext);

    const currentExperience=contextData.currentExperience;

    const maxExperience = 600;

    const currentExperiencePercent= Math.floor(currentExperience*100/maxExperience);


    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${currentExperiencePercent}%` }}>
                    <span className={styles.currentExperience} style={{left:'50%'}}>{currentExperience}xp</span>
                </div>
            </div>
            <span>{maxExperience} xp</span>
        </header>
    )
}