import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text">İletişim</h2>
        <p className="mt-4 text-gray-300">İhtiyaçlarınıza özel bir keşif görüşmesi planlayalım. 48 saat içinde dönüş yapıyoruz.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={(e)=>e.preventDefault()} className="glass rounded-2xl p-8 flex flex-col gap-5">
          <input required placeholder="Ad Soyad" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <input required type="email" placeholder="E-posta" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <textarea required rows={5} placeholder="Mesajınız" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <button className="mt-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 font-medium transition">Gönder</button>
          <p className="text-xs text-gray-400"></p>
        </form>
        <div className="space-y-8">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="text-white">Genel WhatsApp:</span> <a className="text-brand-300 hover:underline" href="https://wa.me/905521643855" target="_blank" rel="noreferrer">+90 552 164 38 55</a></li>
              <li><span className="text-white">Mahmut Sibal:</span> <a className="text-brand-300 hover:underline" href="https://wa.me/905368983855" target="_blank" rel="noreferrer">+90 536 898 38 55</a></li>
              <li><span className="text-white">Yildiz Ucucu:</span> <a className="text-brand-300 hover:underline" href="https://wa.me/905353097436" target="_blank" rel="noreferrer">+90 535 309 74 36</a></li>
              <li><span className="text-white">E-posta:</span> info@yildiztech.com (örnek)</li>
              <li><span className="text-white">LinkedIn:</span> /company/yildiztech</li>
              <li><span className="text-white">GitHub:</span> /yildiztech</li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Neden Biz?</h3>
            <p className="text-sm text-gray-300 leading-relaxed">Model tabanlı üretken geliştirme, firmware optimizasyonu ve sistem seviyesi entegrasyon becerilerini aynı çatı altında topluyoruz. Risk azaltıcı hızlı prototip + güvenilir ölçekleme yaklaşımı.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
