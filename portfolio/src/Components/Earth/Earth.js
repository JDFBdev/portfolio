import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTFLoader, OrbitControls, Stars, Html } from 'drei';
import s from '../VoxRoom/VoxRoom.module.css';

const Model = function(){
    const gltf = useGLTFLoader('/earth.glb', true);
    const ref = useRef();
    useFrame(()=>(ref.current.rotation.y += 0.002));

    return <primitive ref={ref} object={gltf.scene} dispose={null}/>

}

const Lights = function(){
    
    return (
        <>
            <ambientLight intensity={0.05}/>
            <spotLight position={[10000, 10, 2000]} intensity={.5}/>
        </>
    )
}

export default function Earth(){

    return(
      <Canvas className={s.canvas} colorManagement camera={{position: [10, 20, 40], fov: 70 /* Ventana, altura, puerta */ }} style={{outline:'none'}}>
          <Html center>
            <div className={s.header}>
              <h3 className={s.title}>
                Because the <span style={{color: '#C91865', fontWeight:'bold'}}>web</span> can connect,<br/>
                empower,
                include and <span style={{color: '#C91865', fontWeight:'bold'}}>enhance</span>.
              </h3>
              <p className={s.subtitle}>
                And I’m committed to master my craft for the<br/>
                sake of improving those experiences.
              </p>
            </div>
          </Html>
          <Lights/>
          <Stars count={2000} fade factor={7}/>
          <OrbitControls/>
          <Suspense fallback={null}>
              <mesh scale={[18,18,18]} >
                  <Model/>
              </mesh>
          </Suspense>
      </Canvas>
    )
}