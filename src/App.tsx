/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { SiInstagram } from '@icons-pack/react-simple-icons';
import { 
  Phone, 
  Smartphone, 
  Wrench, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Star, 
  Menu, 
  X,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5584986221249";
const INSTAGRAM_LINK = "https://www.instagram.com/allefcell?igsh=ZzhqdHkydDRwenJ6";
const MAPS_LINK = "https://share.google/cd9BcBRGliSdLvO5S"; 

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-amber-500/30 selection:text-amber-400">
      {/* Floating WhatsApp Button */}
      <motion.a
        id="floating-whatsapp"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/20 flex items-center justify-center group"
      >
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-medium">
          Falar no WhatsApp
        </span>
      </motion.a>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span translate="no" className="notranslate text-2xl font-black tracking-tighter uppercase italic">
              ALEF<span className="text-amber-500">CELL</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#home" translate="no" className="notranslate text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors uppercase tracking-widest">Início</a>
            <a href="#produtos" translate="no" className="notranslate text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors uppercase tracking-widest">Diferenciais</a>
            <a href="#assistencia" translate="no" className="notranslate text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors uppercase tracking-widest">Serviços</a>
            <a href="#localizacao" translate="no" className="notranslate text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors uppercase tracking-widest">Localização</a>
            <a
              href={WHATSAPP_LINK}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-600/20 transition-all"
            >
              Consultoria Grátis
            </a>
          </nav>

          <button className="md:hidden text-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#020617] pt-24 px-6 md:hidden flex flex-col gap-6 text-center"
          >
            <a href="#home" translate="no" onClick={() => setIsMenuOpen(false)} className="notranslate text-2xl font-bold">Início</a>
            <a href="#produtos" translate="no" onClick={() => setIsMenuOpen(false)} className="notranslate text-2xl font-bold">Diferenciais</a>
            <a href="#assistencia" translate="no" onClick={() => setIsMenuOpen(false)} className="notranslate text-2xl font-bold">Serviços</a>
            <a href="#localizacao" translate="no" onClick={() => setIsMenuOpen(false)} className="notranslate text-2xl font-bold">Localização</a>
            <a href={WHATSAPP_LINK} className="mt-4 bg-amber-500 text-black py-4 rounded-2xl text-xl font-bold uppercase">WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          
          {/* Hero Card - Span 8 */}
          <motion.section 
            id="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8 md:row-span-2 bg-gradient-to-br from-slate-800 to-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] -z-0" />
            <div className="relative z-10">
              <span className="inline-block bg-amber-500/10 text-amber-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-amber-500/20">
                TECNOLOGIA & CONFIANÇA
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-6 tracking-tighter text-white">
                SUA LOJA DE <br/> TECNOLOGIA EM <br/> 
                <span className="text-amber-500 uppercase">PONTA NEGRA</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-md mb-10 leading-snug font-medium">
                Os melhores smartphones e assistência técnica especializada com quem entende do assunto em Natal.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WHATSAPP_LINK} className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
                  Falar com Consultor
                </a>
                <a href={INSTAGRAM_LINK} className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
                  <button aria-label="Ver catálogo de produtos">CATÁLOGO</button>
                </a>
              </div>
            </div>
          </motion.section>

          {/* Rating Card - Span 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-[#0f172a] border border-white/10 rounded-[32px] p-8 flex flex-col items-center justify-center text-center gap-2 group hover:border-amber-500/50 transition-colors"
          >
            <div className="flex text-amber-500 gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={28} fill="currentColor" />)}
            </div>
            <p className="text-5xl font-black tracking-tighter">4.9</p>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Avaliações no Google</p>
            <div className="mt-4 flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-[#0f172a]" alt="User" />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-[#0f172a] bg-slate-800 flex items-center justify-center text-[10px] font-bold">+11</div>
            </div>
          </motion.div>

          {/* Instagram Card - Span 4 */}
          <motion.a 
            href={INSTAGRAM_LINK}
            target="_blank"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-[32px] p-8 flex flex-col justify-end text-white shadow-xl shadow-pink-500/10 group overflow-hidden relative"
          >
            <SiInstagram size={48} className="absolute -top-4 -right-4 opacity-10 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tight mb-1">@alefcell.rn</h3>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Ofertas exclusivas no Feed</p>
            </div>
          </motion.a>

          {/* Differentials Card - Span 6 */}
          <motion.section 
            id="produtos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 md:row-span-2 bg-[#0f172a] border border-white/10 rounded-[32px] p-8"
          >
            <h3 translate="no" className="text-2xl font-black tracking-tight mb-8">Por que escolher a Alef Cell?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BentoFeature icon={<ShieldCheck className="text-amber-500" />} title="Garantia" text="Aparelhos revisados com nota e garantia total." />
              <BentoFeature icon={<Zap className="text-amber-500" />} title="Preço de Natal" text="Condições imbatíveis em Ponta Negra." />
              <BentoFeature icon={<Smartphone className="text-amber-500" />} title="Qualidade" text="Aparelhos originais sem marcas de uso." />
              <BentoFeature icon={<CheckCircle2 className="text-amber-500" />} title="Suporte" text="Acompanhamento especializado pós-venda." />
            </div>
          </motion.section>

          {/* Assistance Card - Span 6 */}
          <motion.section 
            id="assistencia"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 md:row-span-2 bg-gradient-to-br from-slate-900 to-[#0f172a] border border-white/10 rounded-[32px] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                <Wrench size={24} />
              </div>
              <h3 className="text-3xl font-black tracking-tight mb-4 uppercase italic">Serviços</h3>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Troca de Tela e Bateria
                </li>
                <li className="flex items-center gap-3 text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Troca de conectores
                </li>
                <li className="flex items-center gap-3 text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Desbloqueios e Software
                </li>
              </ul>
            </div>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 text-amber-500 font-black text-sm uppercase tracking-widest group">
              Fazer orçamento <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.section>

          {/* Location Card - Span 12 */}
          <motion.section 
            id="localizacao"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 bg-[#0f172a] border border-white/10 rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-12 overflow-hidden"
          >
            <div className="md:w-1/2">
              <MapPin size={40} className="text-amber-500 mb-6" />
              <h2 className="text-3xl font-black mb-4 uppercase">Sua Loja em Ponta Negra</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                R. Afonso Magalhães, 512 - Ponta Negra <br />
                Natal - RN, 59090-200
              </p>
              <a 
                href={MAPS_LINK} 
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest inline-flex items-center gap-3 hover:bg-slate-200 transition-colors"
              >
                Abrir no Maps
              </a>
            </div>
            <div className="md:w-1/2 h-[300px] w-full rounded-[24px] overflow-hidden border border-white/10 text-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.8!2d-35.176!3d-5.885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff92bc9f8745%3A0x867ba63f45607593!2sR.%20Afonso%20Magalh%C3%A3es%2C%20512%20-%20Ponta%20Negra%2C%20Natal%20-%20RN%2C%2059090-200!5e0!3m2!1spt-BR!2sbr!4v1715470000000!5m2!1spt-BR!2sbr"
                className="w-full h-full grayscale invert opacity-50 border-none"
                loading="lazy"
              ></iframe>
            </div>
          </motion.section>

        </div>
      </main>

      {/* Simplified Bento Footer */}
      <footer className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0f172a] border border-white/10 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
             <span translate="no" className="notranslate text-sm font-black tracking-tighter uppercase italic">
              ALEF<span className="text-amber-500">CELL</span>
            </span>
            <div className="w-1 h-1 bg-slate-700 rounded-full mx-2 hidden md:block" />
            <p translate="no"className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">© 2019 Alef Cell Natal</p>
          </div>
          <div className="flex gap-6">
            <a href={INSTAGRAM_LINK} className="text-slate-500 hover:text-white transition-colors"><SiInstagram size={20} /></a>
            <a href={WHATSAPP_LINK} className="text-slate-500 hover:text-white transition-colors"><MessageCircle size={20} /></a>
          </div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Especialista em Apple & Android</p>
        </div>
      </footer>
    </div>
  );
}

function BentoFeature({ icon, title, text }: { icon: ReactNode, title: string, text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/5 p-3 rounded-xl shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-sm uppercase tracking-wide mb-1 leading-none">{title}</h4>
        <p className="text-xs text-slate-500 font-medium leading-tight">{text}</p>
      </div>
    </div>
  );
}

function AssistanceItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-200">
      <div className="h-2 w-2 bg-amber-500 rounded-full" />
      <span>{text}</span>
    </li>
  );
}
