import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 text-center text-xs text-gray-400">
      <p>© {new Date().getFullYear()} YildizTech A.Ş. Tüm hakları saklıdır.</p>
      <p className="mt-2">Yapay Zeka & Gömülü Sistem Mükemmeliyeti</p>
    </footer>
  );
};

export default Footer;
