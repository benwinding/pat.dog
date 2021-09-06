import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

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
  const BasePath = `${location.origin}/`;
  const MTLURL = BasePath + "models/puppy/Puppy.mtl";
  const OBJURL = BasePath + "models/puppy/Puppy.obj";
  const materials = useLoader(MTLLoader, MTLURL);
  const object = useLoader(OBJLoader, OBJURL, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return <primitive object={object} scale={0.02} />;
}

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
