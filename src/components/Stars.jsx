import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarsField() {
  const ref = useRef();
  const { positions, colors } = useMemo(()=>{
    const count = 1200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i=0;i<count;i++) {
      const r = 50;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2*Math.random()-1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions.set([x,y,z], i*3);
      const c = 0.6 + Math.random()*0.4;
      colors.set([c,c,c], i*3);
    }
    return { positions, colors };
  },[]);

  useFrame(()=>{
    if(ref.current) ref.current.rotation.y += 0.0008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length/3} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={colors.length/3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.25} vertexColors depthWrite={false} transparent />
    </points>
  );
}

const Stars = () => (
  <div className="absolute inset-0 -z-10 opacity-60">
    <Canvas camera={{ position: [0,0,8] }}>
      <color attach="background" args={["#060b16"]} />
      <StarsField />
    </Canvas>
  </div>
);

export default Stars;
