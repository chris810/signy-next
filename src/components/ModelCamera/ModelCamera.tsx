import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Models } from "../../types/Models";
import { loadModel } from './components/Model';


const DynamicCamera = dynamic(() => import('./components/Camera'), {
    ssr: false
});

const ModelCamera = () => {
    const [models, setModels] = useState<Models>({
        L_Model: undefined,
        R_Model: undefined
    })
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // if (isLoading) {
        //     loadModel().then((models) => {
        //         setModels(models);
        //         setIsLoading(false);

        //     });
        // }
    }, [isLoading])
    return (
        <>

            <DynamicCamera models={models} />
        </>
    )
}

export default ModelCamera