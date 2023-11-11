"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/cinimon/scene.gltf";
    const mesh = useRef(null);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
      mesh.current.rotation.y += 0.01;
    })
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }


  export function Shiba() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Canvas className='h-lg w-lg'>
        <ambientLight intensity={13.25} />
          <OrbitControls />
          <pointLight position={[6,12,10]} />
          <MeshComponent />
        </Canvas>
      </div>
    );
  }