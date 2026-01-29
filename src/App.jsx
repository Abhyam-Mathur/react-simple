import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import { NonExistentModule } from 'this-package-does-not-exist-netlify-testt'
import './App.css'

function RotatingBox({ position, color, scale = 1 }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.3
    meshRef.current.scale.x = hovered ? scale * 1.2 : scale
    meshRef.current.scale.y = hovered ? scale * 1.2 : scale
    meshRef.current.scale.z = hovered ? scale * 1.2 : scale
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#ffffff' : color} />
    </mesh>
  )
}

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <AnimatedSphere />
      
      <RotatingBox position={[-3, 0, -2]} color="#3b82f6" scale={0.8} />
      <RotatingBox position={[3, 0, -2]} color="#ef4444" scale={0.8} />
      <RotatingBox position={[0, 2.5, -3]} color="#10b981" scale={0.6} />
      <RotatingBox position={[0, -2.5, -3]} color="#f59e0b" scale={0.6} />
      
      <OrbitControls enableZoom={true} enablePan={true} />
    </>
  )
}

function App() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <div className="app-container">
      <div className="ui-overlay">
        <h1 className="title">3D Interactive Experience</h1>
        <p className="subtitle">Drag to rotate • Scroll to zoom • Hover over shapes</p>
        
        <div className="controls">
          <button 
            className="control-btn"
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? '⏸ Pause' : '▶ Play'} Rotation
          </button>
        </div>
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        className="canvas-3d"
      >
        <Scene autoRotate={autoRotate} />
      </Canvas>
      
      <div className="info-panel">
        <div className="info-item">
          <span className="info-label">Engine:</span>
          <span className="info-value">Three.js + React</span>
        </div>
        <div className="info-item">
          <span className="info-label">Framework:</span>
          <span className="info-value">Vite + React Fiber</span>
        </div>
      </div>
    </div>
  )
}

export default App
