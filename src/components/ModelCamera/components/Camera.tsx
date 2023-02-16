
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Models, Alphabet } from "../../../types/Models";
import styles from "./Camera.module.css";
import * as Hands from "@mediapipe/hands";
import Webcam from "react-webcam";
import * as Cam from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

interface CameraProps {
    models: Models;
}
const Camera: FunctionComponent<CameraProps> = (props) => {

    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let camera = null;

    async function onResults(results: any) {
        let width = 0;
        let height = 0;
        if (webcamRef.current !== null && webcamRef.current.video !== null) {
            width = webcamRef.current.video.videoWidth;
            height = webcamRef.current.video.videoHeight;
        }

        if (canvasRef.current !== null) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
        }

        const canvasElement: HTMLCanvasElement | null = canvasRef.current;
        const canvasCtx: CanvasRenderingContext2D | null | undefined =
            canvasElement?.getContext("2d");

        canvasCtx?.save();
        canvasCtx?.clearRect(0, 0, canvasElement?.width!, canvasElement?.height!);

        canvasCtx?.drawImage(
            results.image,
            0,
            0,
            canvasElement?.width!,
            canvasElement?.height!
        );

        if (results.multiHandLandmarks && results.multiHandedness) {
            for (let index = 0; index < results.multiHandLandmarks.length; index++) {
                const classification = results.multiHandedness[index];
                const isRightHand = classification.label === "Right";
                const landmarks = results.multiHandLandmarks[index];
                //@ts-ignore
                drawConnectors(canvasCtx!, landmarks, Hands.HAND_CONNECTIONS, {
                    color: "#4D4CAC",
                    lineWidth: 5,
                });
                // @ts-ignore
                drawLandmarks(canvasCtx, landmarks, {
                    color: "#6f6dec",
                    lineWidth: 2,
                });
            }
        }
        canvasCtx?.restore()
    }

    useEffect(() => {
        const hands: Hands.Hands = new Hands.Hands({
            locateFile: (file: string) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            },
        });

        hands.setOptions({
            modelComplexity: 1,
            selfieMode: true,
            maxNumHands: 1,
            minDetectionConfidence: 0.75,
            minTrackingConfidence: 0.5,
        });

        hands.onResults(onResults);

        if (
            webcamRef !== null &&
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null
        ) {
            camera = new Cam.Camera(webcamRef.current.video!, {
                onFrame: async () => {
                    if (webcamRef !== null && webcamRef.current !== null) {
                        await hands.send({ image: webcamRef.current.video! });
                    }
                },
                width: 1280,
                height: 720,
            });
            camera.start();
        }
    }, [])

    return (
        <div className={styles.webcamContainer}>
            <Webcam
                className={styles.webcam}
                videoConstraints={{ facingMode: "user" }}
                audio={false}
                screenshotFormat="image/jpeg"
                mirrored={true}
                ref={webcamRef}
            ></Webcam>
            <canvas className={styles.canvas} ref={canvasRef} />
        </div>
    );
}


export default Camera