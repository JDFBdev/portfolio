import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTFLoader, Stars, OrbitControls } from 'drei';
import s from './VoxRoom.module.css';

const Model = function(){
    const gltf = useGLTFLoader('/room.glb', true);
    const ref = useRef();
    useFrame(()=>(ref.current.rotation.y += 0.001));

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

export default function VoxRoom(){

    return(
        <Canvas className={s.canvas} colorManagement camera={{position: [100, 50, 50], fov: 70 /* Ventana, altura, puerta */ }}>  
            <Lights/>
            <Stars count={2000} fade factor={7}/>
            <OrbitControls/>
            <Suspense fallback={null}>
                <mesh rotation={[0, 1.3, 0]}>
                    <Model/>
                </mesh>
            </Suspense>
        </Canvas>
    )
}