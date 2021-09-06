import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "three";
import { Suspense } from "react";

export function MyCanvas() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}

function Scene() {
  const BasePath = `${location.origin}/models/puppy/`;
  return (
    <MeshBundle
      obj={BasePath + "Puppy.obj"}
      mtl={BasePath + "Puppy.mtl"}
      image={BasePath + "tex/puppy_colormap.jpeg"}
      normal={BasePath + "tex/puppy_normalmap.jpeg"}
    />
  );
}

const MeshBundle = ({ obj, mtl, image, normal }) => {
  const mesh = React.useRef();
  const materialLoaded = useLoader(MTLLoader, mtl);
  const objLoaded = useLoader(OBJLoader, obj);
  const [colorMap, normalMap] = useLoader(TextureLoader, [image, normal]);

  return (
    <mesh
      ref={mesh}
      materials={materialLoaded.materials}
      position={[0, 0, -200]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[50, 50, 50]} intensity={1} />
      <primitive object={objLoaded} />
      <meshStandardMaterial map={colorMap} normalMap={normalMap} />
    </mesh>
  );
};
