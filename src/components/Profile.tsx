import {useContext} from 'react';
import {ChallengeContext} from '../contexts/ChallangeContext';
import style from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengeContext);

    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/GustavoSilva-hub.png" alt="Gustavo Silva"/>
            <div>
                <strong>Gustavo Silva</strong>
               
                <p> <img src="icons/level.svg" alt="Level"/>Level {level}</p>
            </div>
        </div>
    );
}