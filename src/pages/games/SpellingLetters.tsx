import React from 'react'
import { Suspense } from "react";
import Head from 'next/head';
import Layout from '@/components/Layout/layout';
import SpellingLetters from '@/features/game/SpellinLetters/SpellingLetters';

const SpellingLettersPage = () => {
    return (
        <Layout>
            <SpellingLetters />
        </Layout>
    )
}

export default SpellingLettersPage