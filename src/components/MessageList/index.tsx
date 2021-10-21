import styles from './styles.module.scss'

import logoImg from '../../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>I am looking forward to start this event, of course it will be the best one.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/mhayk.png" alt="Mhayk Whandson" />
                        </div>
                        <span>Mhayk Whandson</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>I am looking forward to start this event, of course it will be the best one.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/mhayk.png" alt="Mhayk Whandson" />
                        </div>
                        <span>Mhayk Whandson</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>I am looking forward to start this event, of course it will be the best one.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/mhayk.png" alt="Mhayk Whandson" />
                        </div>
                        <span>Mhayk Whandson</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
