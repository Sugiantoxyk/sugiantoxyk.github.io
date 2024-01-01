/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useGLTF, CameraControls, Environment } from "@react-three/drei";
import { a } from '@react-spring/three';
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import * as THREE from 'three';

import quartoScene from './quarto.glb';
import Grid from "./Grid";
import Piece from "./Piece";
import { Navbar, Notification, ColorPalette, GameMenu, Loader } from "../index";
import styles from "../../styles/styles";
import { gameMenu } from "../../constants";
import { simpleInOut } from "../../styles/motion";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const Quarto = (props) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const adjustBoardForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, 0, 0];
        let rotation = [0, 0, 0];

        if(windowSize.innerWidth < 768) {
            screenScale = [4.5, 4.5, 4.5];
            screenPosition = [0, 0, 0];
        } else {
            screenScale = [6, 6, 6];
            screenPosition = [0, 0, 0];
        }

        return [screenScale, screenPosition, rotation];
    }

    const quartoRef = useRef();
    const { nodes, materials } = useGLTF(quartoScene);
    const [boardScale, boardPosition, boardRotation] = adjustBoardForScreenSize();

    // Color states
    const [selectedPalette, setSelectedPalette] = useState(0);
    const palettes = [
        {
            preset: "dawn",
            from: "from-purple-400",
            to: "to-purple-100",
            colors: [new THREE.Color( "#FFFFFF" ), new THREE.Color( "#8361FF" ), new THREE.Color( "#7D5DB1" ), new THREE.Color( "#DBC7FF" )],
        },
        {
            preset: "apartment",
            from: "from-amber-700",
            to: "to-orange-200",
            colors: [new THREE.Color( "#422006" ), new THREE.Color( "#fed7aa" ), new THREE.Color( "#854d0e" ), new THREE.Color( "#fed7aa" )],
        },
        {
            preset: "park",
            from: "from-emerald-700",
            to: "to-emerald-200",
            colors: [new THREE.Color( "#052e16" ), new THREE.Color( "#a7f3d0" ), new THREE.Color( "#065f46" ), new THREE.Color( "#a7f3d0" )],
        },
    ];
    materials.Wood_procedural_Table.color = palettes[selectedPalette].colors[0];
    materials.Smooth_Gold.color = palettes[selectedPalette].colors[1];
    materials.Wood_procedural.color = palettes[selectedPalette].colors[2];
    materials.Wood_procedural_lighter.color = palettes[selectedPalette].colors[3];
    
    // Game pieces and grids information
    const initialGridPositions = [
        {position: [-0.209, 0.021, -0.208], piece: "", win: 0},
        {position: [-0.07, 0.021, -0.208], piece: "", win: 0},
        {position: [0.069, 0.021, -0.208], piece: "", win: 0},
        {position: [0.208, 0.021, -0.208], piece: "", win: 0},
        {position: [-0.209, 0.021, -0.069], piece: "", win: 0},
        {position: [-0.07, 0.021, -0.069], piece: "", win: 0},
        {position: [0.069, 0.021, -0.069], piece: "", win: 0},
        {position: [0.208, 0.021, -0.069], piece: "", win: 0},
        {position: [-0.209, 0.021, 0.071], piece: "", win: 0},
        {position: [-0.07, 0.021, 0.071], piece: "", win: 0},
        {position: [0.069, 0.021, 0.071], piece: "", win: 0},
        {position: [0.208, 0.021, 0.071], piece: "", win: 0},
        {position: [-0.209, 0.021, 0.211], piece: "", win: 0},
        {position: [-0.07, 0.021, 0.211], piece: "", win: 0},
        {position: [0.069, 0.021, 0.211], piece: "", win: 0},
        {position: [0.208, 0.021, 0.211], piece: "", win: 0},
    ];
    const initialPiecesInfo = [
        {   
            char: "LSTS",
            grid: -1,
            geometry: nodes.Object_12.geometry,
            material: materials.Wood_procedural_lighter,
            position: [-0.209, 0.045, -0.508],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.038, 0.028],
        }, 
        {
            char: "DSTS",
            grid: -1,
            geometry: nodes.Object_14.geometry,
            material: materials.Wood_procedural,
            position: [-0.069, 0.045, -0.508],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.038, 0.028],
        }, 
        {
            char: "LSTH",
            grid: -1,
            geometry: nodes.Object_16.geometry,
            material: materials.Wood_procedural_lighter,
            position: [0.069, 0.045, -0.508],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.038, 0.028],
        }, 
        {
            char: "DSTH",
            grid: -1,
            geometry: nodes.Object_18.geometry,
            material: materials.Wood_procedural,
            position: [0.208, 0.045, -0.508],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.038, 0.028],
        }, 
        {
            char: "DRTS",
            grid: -1,
            geometry: nodes.Object_30.geometry,
            material: materials.Wood_procedural,
            position: [0.507, 0.045, -0.208],
            rotation: [0, 0, 0],
            scale: [0.029, 0.039, 0.029],
        },  
        {
            char: "LSSH",
            grid: -1,
            geometry: nodes.Object_22.geometry,
            material: materials.Wood_procedural_lighter,
            position: [-0.509, 0.045, -0.067],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.028, 0.028],
        },  
        {
            char: "LRTS",
            grid: -1,
            geometry: nodes.Object_28.geometry,
            material: materials.Wood_procedural_lighter,
            position: [0.507, 0.045, -0.067],
            rotation: [0, 0, 0],
            scale: [0.029, 0.039, 0.029],
        },  
        {
            char: "DSSH",
            grid: -1,
            geometry: nodes.Object_26.geometry,
            material: materials.Wood_procedural,
            position: [-0.509, 0.045, -0.208],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.028, 0.028],
        }, 
        {
            char: "DSSS",
            grid: -1,
            geometry: nodes.Object_24.geometry,
            material: materials.Wood_procedural,
            position: [-0.509, 0.046, 0.071],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.028, 0.028],
        }, 
        {
            char: "LSSS",
            grid: -1,
            geometry: nodes.Object_20.geometry,
            material: materials.Wood_procedural_lighter,
            position: [-0.509, 0.046, 0.211],
            rotation: [-Math.PI, 0, 0],
            scale: [-0.028, 0.028, 0.028],
        },  
        {
            char: "LRTH",
            grid: -1,
            geometry: nodes.Object_32.geometry,
            material: materials.Wood_procedural_lighter,
            position: [0.508, 0.046, 0.211],
            rotation: [0, 0, 0],
            scale: [0.029, 0.039, 0.029],
        }, 
        {
            char: "DRTH",
            grid: -1,
            geometry: nodes.Object_34.geometry,
            material: materials.Wood_procedural,
            position: [0.508, 0.046, 0.071],
            rotation: [0, 0, 0],
            scale: [0.029, 0.039, 0.029],
        }, 
        {
            char: "LRSS",
            grid: -1,
            geometry: nodes.Object_36.geometry,
            material: materials.Wood_procedural_lighter,
            position: [-0.209, 0.046, 0.511],
            rotation: [0, 0, 0],
            scale: [0.029, 0.029, 0.029],
        },  
        {
            char: "DRSS",
            grid: -1,
            geometry: nodes.Object_38.geometry,
            material: materials.Wood_procedural,
            position: [-0.07, 0.046, 0.511],
            rotation: [0, 0, 0],
            scale: [0.029, 0.029, 0.029],
        },  
        {
            char: "LRSH",
            grid: -1,
            geometry: nodes.Object_40.geometry,
            material: materials.Wood_procedural_lighter,
            position: [0.068, 0.046, 0.511],
            rotation: [0, 0, 0],
            scale: [0.029, 0.029, 0.029],
        }, 
        {
            char: "DRSH",
            grid: -1,
            geometry: nodes.Object_42.geometry,
            material: materials.Wood_procedural,
            position: [0.208, 0.046, 0.511],
            rotation: [0, 0, 0],
            scale: [0.029, 0.029, 0.029],
        }, 
    ];

    // Game states
    const [isHelperVisible, setHelperVisible] = useState(false);
    const [step, setStep] = useState(0);
    const [playerTurn, setPlayerTurn] = useState(1);
    const [indexSelected, setIndexSelected] = useState(-1);
    const [gridPositions, setGridPositions] = useState(initialGridPositions);
    const [piecesInfo, setPiecesInfo] = useState(initialPiecesInfo);

    // Helpter functions
    useEffect(() => {
        // This useEffect function will set 'navigate' image to hidden after user managed to click and hold to rotate canvas
        function handleCanvasTouch() {
            setHelperVisible(false);
        }
        
        // mousedown event for PC
        window.addEventListener('mousedown', handleCanvasTouch);
        // touchmove event for mobile
        window.addEventListener('touchmove', handleCanvasTouch);
    
        return () => {
            window.removeEventListener('mousedown', handleCanvasTouch);
            window.removeEventListener('touchmove', handleCanvasTouch);
        };
    }, []);
    function startGame() { 
        setStep(1);
        setHelperVisible(true);
    }
    function checkSame(indexes) {
        if (indexes.every(index => (gridPositions[index].piece !== "" && gridPositions[index].piece[0] === gridPositions[indexes[0]].piece[0])) ||
            indexes.every(index => (gridPositions[index].piece !== "" && gridPositions[index].piece[1] === gridPositions[indexes[0]].piece[1])) ||
            indexes.every(index => (gridPositions[index].piece !== "" && gridPositions[index].piece[2] === gridPositions[indexes[0]].piece[2])) ||
            indexes.every(index => (gridPositions[index].piece !== "" && gridPositions[index].piece[3] === gridPositions[indexes[0]].piece[3]))
        ) {
            for (const i of indexes) { gridPositions[i].win = 1; }
            return true;
        } else return false;
    }
    function checkWin() {
        var indexes = [];
        // Check if a player win or draw
        for (const i of [0,4,8,12]) {
            indexes = [];
            for (let j=0; j<4; j++) {
                indexes.push(i+j);
            }
            if (checkSame(indexes)) return 1;
        }
        for (let i=0; i<4; i++) {
            indexes = [];
            for (const j of [0,4,8,12]) {
                indexes.push(i+j);
            }
            if (checkSame(indexes)) return 1;
        }
        indexes = [];
        for (let i=0; i<16; i+=5) {
            indexes.push(i);
        }
        if (checkSame(indexes)) return 1;
        indexes = [];
        for (let i=3; i<13; i+=3) {
            indexes.push(i);
        }
        if (checkSame(indexes)) return 1;

        if (gridPositions.every(val => val.piece !== "")) return 2;
        return 0;
    }
    function handlePieceClick(index) {
        // Update states of the game
        setIndexSelected(index);
        setStep(2);
        setPlayerTurn((prev) => (prev === 1? 2 : 1));
    }
    function handleGridClick(index) {
        // Update piece new position on the board
        var newPosition = gridPositions[index].position;
        newPosition[1] = 0.045;
        const newPiecesInfo = [...piecesInfo];
        newPiecesInfo[indexSelected].position = newPosition;
        newPiecesInfo[indexSelected].grid = index;
        setPiecesInfo(newPiecesInfo);
        // Update grid is occupied
        const newGridPositions = [...gridPositions];
        newGridPositions[index].piece = piecesInfo[indexSelected].char;
        setGridPositions(newGridPositions);
        // Update states of the game
        setIndexSelected(-1);
        setStep(1);
        var flag = checkWin();
        if (flag === 1){
            setStep(3);
        } else if (flag === 2){
            setStep(4);
        };
    }
    function getChar() {
        // Helper function to return the characteristics of the piece selected
        const char = piecesInfo[indexSelected].char;
        var text = ""
        char[0] === "D" ? (text += "dark, ") : (text += "light, ");
        char[1] === "R" ? (text += "round, ") : (text += "square, ");
        char[2] === "T" ? (text += "tall, ") : (text += "short, ");
        char[3] === "S" ? (text += "solid") : (text += "hollow");
        return text
    }

    return (
        <section className="w-full h-screen">
            <Navbar bg={false} home={false}/>
            <section className="w-full h-screen">
                {/* Game's menu */}
                {
                    step === 0 && <GameMenu data={gameMenu["quarto"]} startGame={startGame}/>
                }
                {/* Helper image */}
                {
                    <AnimatePresence>
                        {isHelperVisible && <motion.img 
                            src="/navigate.svg" 
                            alt="navigate"
                            draggable="false" 
                            className="w-52 h-52 rounded-full fixed m-auto inset-x-0 inset-y-0 z-10 pointer-events-none"
                            initial="hidden"
                            whileInView="show"
                            exit="hidden"
                            variants={simpleInOut("tween", 0.2, 0.5)}
                        />}
                    </AnimatePresence>
                }
                {/* Footer */}
                <div className={`${styles.xPaddings} w-full fixed bottom-0 pb-8 z-10 pointer-events-none`}>
                    <div className={`${styles.innerWidth} mx-auto grid grid-cols-1 md:grid-cols-4 gap-4`}>
                        <div className="flex flex-row gap-2">
                            {palettes.map((data, i) => {
                                return <ColorPalette data={data} index={i} handleClick={(i) => setSelectedPalette(i)} selected={selectedPalette}/>
                            })}
                        </div>
                        <div className="col-span-2 justify-self-center">
                            {
                                step !== 0 &&
                                <Notification text={(
                                    step === 1 ? (`Player ${playerTurn}'s turn: Pick a piece for your opponent to play.`) : 
                                    step === 2 ? (`Player ${playerTurn}'s turn: Place the ${getChar()} piece.`) : 
                                    step === 3 ? (`Player ${playerTurn} win!`) : (`Draw!`)
                                )}/>
                            }
                        </div>
                    </div>
                </div>
                {/* Game scene */}
                <Canvas className="w-full h-screen bg-transparent relative">
                    <Suspense fallback={step !== 0 && <Loader />}>
                        <CameraControls
                            minDistance={3} maxDistance={10}
                            minPolarAngle={0} maxPolarAngle={1.5}
                        />
                        <directionalLight position={[-1, 2, -3]} intensity={1} />
                        <ambientLight intensity={2} />
                        <a.group {...props} 
                            ref={quartoRef} 
                            scale={boardScale}
                            position={boardPosition}
                            rotation={boardRotation}
                        >
                            <mesh
                                geometry={nodes.Object_4.geometry}
                                material={materials.Wood_procedural_Table}
                            />
                            <mesh
                                geometry={nodes.Object_6.geometry}
                                material={materials.Smooth_Gold}
                                position={[0, -0.003, 0]}
                            />
                            {gridPositions.map((data, i) => (
                                <Grid {...data} materials={materials} step={step} index={i} handleClick={handleGridClick} />
                            ))}
                            {piecesInfo.map((data, i) => (
                                <Piece {...data} step={step} index={i} handleClick={handlePieceClick} indexSelected={indexSelected} />
                            ))}
                        </a.group>
                        <Environment preset={palettes[selectedPalette].preset} background blur={1} />
                    </Suspense>
                </Canvas>
            </section>
        </section>
    );
}

export default Quarto;