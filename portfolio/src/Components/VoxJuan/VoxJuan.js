import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTFLoader, OrbitControls } from 'drei';
import s from '../VoxRoom/VoxRoom.module.css';

const Model = function(){
    const gltf = useGLTFLoader('/juan.glb', true);
    const ref = useRef();
    useFrame(()=>(ref.current.rotation.y += 0.01));

    return <primitive ref={ref} object={gltf.scene} dispose={null}/>

}

const Lights = function(){
    
    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight position={[0, 10, 2000]} intensity={.2}/>
        </>
    )
}

export default function VoxJuan(){

    return(
        <Canvas className={s.canvas} colorManagement camera={{position: [0, 20, 40], fov: 70 /* Ventana, altura, puerta */ }} style={{outline:'none'}}>  
            <Lights/>
            <OrbitControls/>
            <Suspense fallback={null}>
                <mesh scale={[1.7,1.7,1.7]}>
                    <Model/>
                </mesh>
            </Suspense>
        </Canvas>
    )
}