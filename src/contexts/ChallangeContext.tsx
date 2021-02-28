import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';
interface ChallangeProviderProps {
    children: ReactNode;//ReactNode type's can take a component

}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    hasChallenge: Boolean;
    challenge: {
        type: String;
        description: String;
        amount: number;
    };
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    challengeDone: () => void;
    challengeFaild: () => void;
}



export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallangeProviderProps) {
    useEffect(() => {
        Notification.requestPermission();
    }, []);

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [hasChallenge, setHasChallenge] = useState(false);
    const [challenge, setChallenge] = useState({
        type: "",
        description: "",
        amount: 0
    });

    let [challengeIndex, setChallengeIndex] = useState(Math.floor(Math.random() * challenges.length));

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);



    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        setHasChallenge(true);
        console.log('start: ' + challengeIndex);
        setChallenge(challenges[challengeIndex]);

        new Audio('/notification.mp3').play();

        if(Notification.permission==='granted'){
            new Notification('Novo Desafio!',{
                body:`Valendo ${challenges[challengeIndex].amount}`
            })
        }
    }

    function challengeDone() {
        setHasChallenge(false);
        setChallengeIndex(Math.floor(Math.random() * 12));
        setChallengesCompleted(challengesCompleted + 1);

        let finalExperience = currentExperience + challenge.amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
    }

    function challengeFaild() {
        setHasChallenge(false);
        setChallengeIndex(Math.floor(Math.random() * 12));
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                hasChallenge,
                challenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                challengeDone,
                challengeFaild,
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}