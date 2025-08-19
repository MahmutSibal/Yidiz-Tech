import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Yapay Zeka Destekli Yazılım Geliştirme',
    desc: 'Öğrenen, uyarlanan ve optimize eden akıllı uygulamalar. Veri odaklı ürünlerinizi hızla doğrulayın ve ölçekleyin.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png'
  },
  {
    title: 'Gömülü Sistem Mimarisi',
    desc: 'Gerçek zamanlı, düşük güç tüketimli ve güvenilir firmware & edge computing çözümleri.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2345/2345334.png'
  },
  {
    title: 'Bulut & Mikroservis Entegrasyonları',
    desc: 'Dayanıklı, gözlemlenebilir ve ölçeklenebilir modern backend mimarileri.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4144/4144797.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold gradient-text">Çözümlerimiz</h2>
        <p className="mt-4 text-gray-300">Ürün yaşam döngünüzün her aşamasını kapsayan uçtan uca teknoloji uzmanlığı.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s,i)=>(
          <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.15}} className="glass rounded-2xl p-8 flex flex-col items-start hover:shadow-brand-500/20 hover:shadow-xl transition">
            <img src={s.icon} alt={s.title} className="w-14 h-14 mb-6" />
            <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
