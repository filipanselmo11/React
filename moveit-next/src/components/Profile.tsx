import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {

    const { level } = useContext(ChallengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/filipanselmo11.png" alt="Fílip Anselmo" />
            <div>
                <strong>
                    Fílip Anselmo
                </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}