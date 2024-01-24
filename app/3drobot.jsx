"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/poly-vac/scene.gltf";
    const mesh = useRef(null);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x = 0.2
    })
  
    return (
      <mesh ref={mesh} scale={10}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }


  export function Shiba() {
    return (
      <div style={{width: "100vh", height: "100vh"}}>
        <Canvas>
          <ambientLight intensity={0.9} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <directionalLight color="white" position={[0,0,5]}  />
          <OrbitControls />
          <MeshComponent />
        </Canvas>
      </div>
    );
  }