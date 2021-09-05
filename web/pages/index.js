import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
export default function Page() {
  const [cursorClass, setCursorClass] = React.useState('cursor-pat');

  return (
    <div className={"min-h-screen w-full flex flex-col " + cursorClass}>
      <div className="w-full flex-0 bg-red-100 p-2">
        <h1>Pat.dog</h1>
        <p>By Jaana Bithell and Ben Winding</p>
      </div>
      <div className="w-full flex-1 bg-green-100 flex flex-row justify-around">
        <div className="flex-1 flex flex-row justify-around">
          <div className="flex flex-col justify-around">
            {/* <span>Dog Being Patted Goes Here</span> */}
            <Environment />
          </div>
        </div>
      </div>
      <div className="w-full flex-0 bg-red-100 p-2">
        <Buttons onCursorChanged={setCursorClass} />
      </div>
    </div>
  )
}

Page.isPublic = true;

function Environment() {
  return  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>;
}

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Buttons({ onCursorChanged }) {
  const buttons = [
    {
      label: 'Pat',
      cursorClass: 'cursor-pat'
    },
    {
      label: 'Scratch',
      cursorClass: 'cursor-scratch'
    },
  ]

  const onClickedButton = (b, i) => {
    onCursorChanged(b.cursorClass);
  }
  return <div className="flex gap-2">
    <div className="flex-1"></div>
    <div className="flex-0 flex flex-col gap-2">
      <h1>Pat Type</h1>
      {
        buttons.map((b, i) => <button key={i} onClick={() => onClickedButton(b, i)} className="btn btn-primary">{b.label}</button>)
      }
    </div>
  </div>
}
