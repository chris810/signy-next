import React from 'react'
import { Suspense } from "react";
import Head from 'next/head';
import Layout from '@/components/Layout/layout';
import ModelCamera from '@/components/ModelCamera/ModelCamera'
import styles from '../../styles/SpellingLetters.module.css'




const SpellingLetters = () => {
    return (
        <>
            <Layout>
                <div>Spelling Letters</div>
                <div className={styles.left}>
                    <ModelCamera />

                </div>
            </Layout>
        </>
    )
}

export default SpellingLetters