import React from 'react'
import { Suspense } from "react";
import Head from 'next/head';
import Layout from '@/components/Layout/layout';
import ModelCamera from '@/components/ModelCamera/ModelCamera'
import styles from '../../styles/SpellingLetters.module.css'
import dynamic from 'next/dynamic';

const DynamicModelCamera = dynamic(
    () => import("@/components/ModelCamera/ModelCamera"),
    {
        ssr: false,
    }
);



const SpellingLetters = () => {
    return (
        <>
            <Layout>
                <div>Spelling Letters</div>
                <div className={styles.left}>
                    <DynamicModelCamera />

                </div>
            </Layout>
        </>
    )
}

export default SpellingLetters