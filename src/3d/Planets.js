import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'

const makeUrl = file => `https://raw.githubusercontent.com/flowers1225/threejs-earth/master/src/img/${file}.jpg`

export default function Planets() {
  const ref = useRef()
  const [texture, moon] = useLoader(THREE.TextureLoader, [makeUrl('earth4'), 'http://jaanga.github.io/moon/heightmaps/WAC_GLD100_E000N1800_004P-1024x512.png'])
  return (
    <group ref={ref} scale={[100, 100, 100]} position={[-500, -500, 1000]}>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
        <meshStandardMaterial attach="material" map={texture} roughness={1} fog={false} />
      </mesh>
      <mesh position={[5, -5, -5]}>
        <sphereBufferGeometry attach="geometry" args={[0.75, 32, 32]} />
        <meshStandardMaterial attach="material" roughness={1} map={moon} fog={false} />
      </mesh>
      <pointLight position={[-5, -5, -5]} distance={1000} intensity={6} />
      <mesh position={[-30, -10, -60]}>
        <sphereBufferGeometry attach="geometry" args={[4, 32, 32]} />
        <meshBasicMaterial attach="material" color="#FFFF99" fog={false} />
        <pointLight distance={6100} intensity={50} color="white" />
      </mesh>
    </group>
  )
}
