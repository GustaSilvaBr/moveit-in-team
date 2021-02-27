import { createContext, ReactNode, useState } from 'react';
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
    levelUp: ()=>void;
    startNewChallenge: ()=>void;
    challengeDone: ()=>void;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallangeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [hasChallenge, setHasChallenge] = useState(false);
    const [challenge, setChallenge] = useState({
        type:"",
        description:"",
        amount:0
    });

    let [challengeIndex, setChallengeIndex] = useState(Math.floor(Math.random()*12));
   
    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        setHasChallenge(true);
        console.log('start: '+challengeIndex);
        setChallenge(challenges[challengeIndex]);
    }

    function challengeDone(){
        console.log('done: '+challengeIndex);
        setCurrentExperience(currentExperience + challenges[challengeIndex].amount);
        setHasChallenge(false);
        setChallengeIndex(Math.floor(Math.random()*12));
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                hasChallenge,
                challenge,
                levelUp,
                startNewChallenge,
                challengeDone
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}