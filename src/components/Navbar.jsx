import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#services', label: 'Hizmetler' },
  { href: '#founders', label: 'Kurucular' },
  { href: '#contact', label: 'İletişim' }
];

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-gray-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-wide">
          <img src="bos.jpg" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="gradient-text text-lg">YildizTech</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map(l=> <a key={l.href} href={l.href} className="text-gray-300 hover:text-white transition">{l.label}</a>)}
          <a href="#contact" className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-xs">Teklif Al</a>
        </div>
        <button className="md:hidden relative w-9 h-9 flex flex-col justify-center gap-1.5" onClick={()=>setOpen(o=>!o)} aria-label="Menu">
          <span className={`h-0.5 bg-white transition ${open?'rotate-45 translate-y-2':''}`}></span>
          <span className={`h-0.5 bg-white transition ${open?'opacity-0':''}`}></span>
            <span className={`h-0.5 bg-white transition ${open?' -rotate-45 -translate-y-2':''}`}></span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm">
            {links.map(l=> <a onClick={()=>setOpen(false)} key={l.href} href={l.href} className="text-gray-300 hover:text-white transition">{l.label}</a>)}
            <a href="#contact" onClick={()=>setOpen(false)} className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-xs w-max">Teklif Al</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
