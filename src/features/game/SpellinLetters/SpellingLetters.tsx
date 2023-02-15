import ModelCamera from '@/components/ModelCamera/ModelCamera'
import React from 'react'
import styles from './SpellingLetters.module.css'

const SpellingLetters = () => {
    return (
        <>
            <div>Spelling Letters</div>
            <div className={styles.left}>
                <ModelCamera />

            </div>
        </>
    )
}

export default SpellingLetters