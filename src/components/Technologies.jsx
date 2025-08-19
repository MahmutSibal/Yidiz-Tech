import React from 'react';
import { motion } from 'framer-motion';

const stacks = [
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Embedded C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Rust', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
];

const Technologies = () => {
  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold gradient-text">Teknoloji Yelpazemiz</h2>
        <p className="mt-4 text-gray-300">Modern, güvenilir ve sürdürülebilir teknoloji yığınları.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 items-center">
        {stacks.map((t,i)=>(
          <motion.div key={t.name} initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*0.05}} className="flex flex-col items-center gap-2">
            <div className="p-4 rounded-xl glass w-full flex items-center justify-center">
              <img src={t.img} alt={t.name} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-xs text-gray-300 tracking-wide">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Technologies;
