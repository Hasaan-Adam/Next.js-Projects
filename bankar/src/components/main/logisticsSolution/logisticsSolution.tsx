"use client";

import { ClientLogos } from "./clientLogos";
import { CardSection } from "./cardSection";
import { NumbersSection } from "./numberSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
  const modelRef = useRef<THREE.Object3D>(null);
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/3d-model/20ft_container.glb", // Ensure the path is correct
      (gltf) => {
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );
  }, []);

  return model ? (
    <primitive
      ref={modelRef}
      object={model}
      scale={[1.2, 1.2, 1.2]} // Adjusted scale for better fit
      // rotation={[Math.PI / 4, -Math.PI / 6, Math.PI / 8]} // Fine-tuned rotation (X, Y, Z)
      position={[0, -0.5, 0]} // Adjusted position to match the image
    />
  ) : null;
};

export const LogisticsSolution = () => {
  return (
    <section className="space-y-20 !pt-0">
      <div className="relative w-full h-screen -mt-24 -mb-96">
        <div className="absolute top-10 left-10 bg-orange-500 text-white p-2 rounded-full aspect-square grid items-center">
          360°
        </div>
        <Canvas camera={{ position: [8.6, 4.8, 6.2], fov: 35 }}>
          {" "}
          {/* Adjusted camera position */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            onChange={(e) => console.log(e?.target)}
            enablePan={false}
            autoRotate={false} // Enable auto-rotation
            autoRotateSpeed={1.5} // Adjust rotation speed for smooth effect
          />
        </Canvas>
      </div>
      <div className="bg-zinc-900 rounded-4xl text-white pt-36">
        <div className="max-w-[90%] mx-auto py-20 space-y-20">
          <ClientLogos />
          <CardSection />
        </div>
      </div>
      <NumbersSection />
    </section>
  );
};
