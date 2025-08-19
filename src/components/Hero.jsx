import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, PresentationControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0,0,4] }}>
          <ambientLight intensity={0.6} />
            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
              <PresentationControls global zoom={1} rotation={[0,0,0]}>
                <Sphere args={[1.5, 64, 64]}>
                  <MeshDistortMaterial color="#1d7eff" attach="material" distort={0.35} speed={1.5} roughness={0.15} />
                </Sphere>
              </PresentationControls>
            </Float>
        </Canvas>
      </div>
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <motion.img
          initial={{opacity:0, y:-20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.2}}
          src="/bos.jpg"
          alt="YildizTech Logo"
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_25px_rgba(29,126,255,0.35)]"
        />
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
          YildizTech
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}} className="mt-6 text-lg md:text-xl text-gray-300">
          Yapay zeka destekli yazılım geliştirme ve yüksek güvenilir gömülü sistem çözümleri. Vizyonu kodla somutlaştırıyoruz.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 font-medium shadow-lg shadow-brand-500/30 transition">Hizmetlerimiz</a>
          <a href="#contact" className="px-8 py-4 rounded-xl border border-brand-400/40 hover:border-brand-300 font-medium backdrop-blur-md bg-white/5 transition">İletişime Geç</a>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-xs tracking-widest text-brand-300">AŞAĞI KAYDIR</div>
    </header>
  );
};

export default Hero;
