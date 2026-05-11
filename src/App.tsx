/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ChevronRight, 
  MessageCircle, 
  MapPin, 
  Users, 
  ClipboardList, 
  Truck, 
  ShieldCheck, 
  Star,
  ArrowRight,
  Flame,
  Zap,
  Leaf,
  Instagram,
  Phone,
  Home,
  User,
  Mail,
  Locate
} from 'lucide-react';

// Help functions to format Google Drive URLs
const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;
const getDriveVideoUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

const ASSETS = {
  logo: getDriveUrl('1qrLHiui2Xebdba_NDGLTaCCzxniUNC6X'),
  mounnjaro: getDriveUrl('1UmJG__RCC7mWem5i6tw_BALtOnb4uRLG'),
  reed: getDriveUrl('1sqO_JpCwWzO1zf_nRAMnFiahthTeWg2_'),
  capsReed: getDriveUrl('1XY8HDWocSiXlgNK7tXaW860-p82DfNTk'),
  capsMounnjaro: getDriveUrl('14EXLxmCaTFIja7f16f7V9uf5_3Lvy_DN'),
  depRosiana: getDriveVideoUrl('142Ox57S9CE2sQAzv9bxY5znuk-IlH-uQ'),
  depRose: getDriveUrl('1AMZSgvN7E1vLoMBbSX2xB0eQ0YiCU_oT'),
  rosianaAntesDepois: getDriveUrl('1yiwX5vGPJOv1UyL2cXpfnOZNPXNsOUvU'),
};

const WHATSAPP_NUMBER = '5592993853299';
const INSTAGRAM_URL = 'https://www.instagram.com/rosimar_emagrecedores/';

type Product = 'Mounnjaro' | 'Mounjaro Reed';

function WeightLossAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col items-center my-4"
    >
      <style>{`
        .wl-body {
          transform-origin: 160px 118px;
          animation: wlSlim 4s ease-in-out infinite;
        }
        .wl-arm-l {
          transform-origin: 148px 100px;
          animation: wlArmL 4s ease-in-out infinite;
        }
        .wl-arm-r {
          transform-origin: 172px 100px;
          animation: wlArmR 4s ease-in-out infinite;
        }
        .wl-pill { animation: wlPill 4s ease-in-out infinite; }
        .wl-label { animation: wlLabel 4s ease-in-out infinite; }
        .wl-spark { animation: wlSpark 4s ease-in-out infinite; }
        .wl-arrow { animation: wlArrow 4s ease-in-out infinite; }
        @keyframes wlSlim {
          0%, 18%  { transform: scaleX(1.85) scaleY(1.1); }
          52%, 82% { transform: scaleX(0.6) scaleY(1); }
          100%     { transform: scaleX(1.85) scaleY(1.1); }
        }
        @keyframes wlArmL {
          0%, 18%  { transform: rotate(0deg); }
          28%      { transform: rotate(-35deg); }
          52%, 100%{ transform: rotate(0deg); }
        }
        @keyframes wlArmR {
          0%, 18%  { transform: rotate(0deg); }
          28%      { transform: rotate(35deg); }
          52%, 100%{ transform: rotate(0deg); }
        }
        @keyframes wlPill {
          0%   { opacity: 0; transform: translate(0px, -30px); }
          12%  { opacity: 1; transform: translate(0px, -5px); }
          26%  { opacity: 0; transform: translate(0px, 5px); }
          100% { opacity: 0; transform: translate(0px, 5px); }
        }
        @keyframes wlLabel {
          0%, 45%  { opacity: 0; }
          60%      { opacity: 1; }
          82%, 100%{ opacity: 0; }
        }
        @keyframes wlSpark {
          0%, 28%  { opacity: 0; }
          45%      { opacity: 1; }
          65%, 100%{ opacity: 0; }
        }
        @keyframes wlArrow {
          0%, 48%  { opacity: 0; transform: translateX(-6px); }
          65%      { opacity: 1; transform: translateX(0px); }
          85%, 100%{ opacity: 0; transform: translateX(4px); }
        }
      `}</style>
      <svg viewBox="0 80 320 180" className="w-64 md:w-80" aria-hidden="true">
        {/* ── BEFORE figure (left) ── */}
        <text x="52" y="95" textAnchor="middle" fontSize="9" fill="#555" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">ANTES</text>
        {/* head */}
        <circle cx="52" cy="108" r="16" fill="#222" />
        <circle cx="46" cy="105" r="2.5" fill="white"/>
        <circle cx="58" cy="105" r="2.5" fill="white"/>
        <path d="M46 113 Q52 118 58 113" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round"/>
        {/* body fat */}
        <ellipse cx="52" cy="148" rx="26" ry="35" fill="#444" />
        {/* arms */}
        <line x1="52" y1="128" x2="20" y2="148" stroke="#333" strokeWidth="7" strokeLinecap="round"/>
        <line x1="52" y1="128" x2="84" y2="148" stroke="#333" strokeWidth="7" strokeLinecap="round"/>
        {/* legs */}
        <ellipse cx="42" cy="191" rx="8" ry="13" fill="#333"/>
        <ellipse cx="62" cy="191" rx="8" ry="13" fill="#333"/>

        {/* ── ARROW in the middle ── */}
        <g className="wl-arrow">
          <line x1="130" y1="148" x2="188" y2="148" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
          <polyline points="183,142 190,148 183,154" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <g className="wl-pill">
          <rect x="143" y="128" width="32" height="14" rx="7" fill="#222"/>
          <rect x="143" y="128" width="16" height="14" rx="7" fill="#888"/>
          <line x1="159" y1="128" x2="159" y2="142" stroke="#555" strokeWidth="1"/>
          <text x="159" y="122" textAnchor="middle" fontSize="8" fill="#444" fontFamily="sans-serif">CÁPSULA</text>
        </g>

        {/* ── AFTER figure (right) ── */}
        <text x="268" y="95" textAnchor="middle" fontSize="9" fill="#555" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">DEPOIS</text>
        {/* head */}
        <circle cx="268" cy="108" r="16" fill="#222" />
        <circle cx="262" cy="105" r="2.5" fill="white"/>
        <circle cx="274" cy="105" r="2.5" fill="white"/>
        {/* smile after */}
        <path d="M262 113 Q268 120 274 113" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        {/* body slim */}
        <ellipse cx="268" cy="148" rx="13" ry="35" fill="#222" />
        {/* arms up (victory) */}
        <line x1="268" y1="128" x2="248" y2="110" stroke="#333" strokeWidth="7" strokeLinecap="round"/>
        <line x1="268" y1="128" x2="288" y2="110" stroke="#333" strokeWidth="7" strokeLinecap="round"/>
        {/* legs */}
        <ellipse cx="260" cy="191" rx="7" ry="12" fill="#333"/>
        <ellipse cx="276" cy="191" rx="7" ry="12" fill="#333"/>
        {/* sparkles */}
        <g className="wl-spark">
          <text x="295" y="108" fontSize="13" fill="#555">✦</text>
          <text x="238" y="100" fontSize="9" fill="#777">✦</text>
          <text x="300" y="125" fontSize="8" fill="#888">✦</text>
        </g>
      </svg>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Resultados em 30 dias</p>
    </motion.div>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product>('Mounnjaro');
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    street: '',
    number: '',
    neighborhood: '',
    reference: '',
    city: '',
    state: '',
    cep: '',
    email: '',
    payment: 'PIX'
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (product: Product) => {
    setSelectedProduct(product);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }
    setFormData({ ...formData, cep: value });
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 9) value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9);
    else if (value.length > 6) value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6);
    else if (value.length > 3) value = value.slice(0, 3) + '.' + value.slice(3);
    setFormData({ ...formData, cpf: value });
  };

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {};
    const requiredFields: (keyof typeof formData)[] = ['name', 'cpf', 'phone', 'street', 'city', 'state', 'cep'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = true;
    });
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const price = selectedProduct === 'Mounnjaro' ? '200' : '250';
      const message = `Olá! Quero fazer meu pedido 🛒

Para fazer o envio eu preciso de👇

*Produto:* ${selectedProduct} — R$ ${price}
*Nome:* ${formData.name}
*CPF:* ${formData.cpf}
*Fone cel:* ${formData.phone}
*E-mail:* ${formData.email || 'N/I'}

*Endereço de Entrega:*
*Rua:* ${formData.street}
*Número:* ${formData.number || 'S/N'}
*Bairro:* ${formData.neighborhood || 'N/I'}
*Cidade:* ${formData.city}
*Estado:* ${formData.state}
*CEP:* ${formData.cep}
*Referência:* ${formData.reference || 'N/I'}

*Pagamento:* ${formData.payment}

Aguardo as instruções para finalizar! 😊`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen Selection:bg-primary/10">
      {/* Header / Logo */}
      <header className="py-8 text-center flex flex-col items-center">
        <img 
          src={ASSETS.logo} 
          alt="Logo" 
          className="h-16 md:h-24 w-auto mb-4" 
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Hero Section */}
      <section className="px-6 pb-16 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-2xl md:text-5xl font-black text-primary leading-tight mb-4"
        >
          Mais que emagrecer: voltar a se sentir bem consigo mesmo
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-2 mb-10"
        >
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Dois produtos. Um objetivo: você mais leve e saudável.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
            >
              <Truck size={14} /> Entrega em todo o Brasil
            </motion.span>
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white bg-accent px-4 py-2 rounded-full shadow-lg shadow-accent/20"
            >
              <Star size={14} className="fill-white" /> FRETE GRÁTIS: MANAUS & SÃO PAULO
            </motion.span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 block w-full">
              Demais regiões consultar o frete
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hero Card Mounnjaro */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => scrollToForm('Mounnjaro')}
            className="card p-6 cursor-pointer border-2 border-transparent hover:border-mounnjaro transition-colors group"
          >
            <div className="aspect-square relative mb-4">
              <img src={ASSETS.mounnjaro} alt="Mounnjaro" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              <div className="absolute inset-0" onClick={(e) => e.preventDefault()} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-mounnjaro">Mounnjaro</h3>
            <p className="text-sm text-gray-500 mb-4 italic">Para quem está começando</p>
            <div className="btn-primary !bg-mounnjaro group-hover:scale-105">
              Ver produto <ArrowRight size={18} />
            </div>
          </motion.div>

          {/* Hero Card Reed */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => scrollToForm('Mounjaro Reed')}
            className="card p-6 cursor-pointer border-2 border-transparent hover:border-[#dc2626] transition-colors group"
          >
            <div className="aspect-square relative mb-4">
              <img src={ASSETS.reed} alt="Mounjaro Reed" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              <div className="absolute inset-0" onClick={(e) => e.preventDefault()} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-primary">Mounjaro Reed</h3>
            <p className="text-sm text-gray-500 mb-4 italic">Para quem travou no peso</p>
            <div className="btn-primary !bg-[#dc2626] group-hover:scale-105">
              Ver produto <ArrowRight size={18} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product 1: Mounnjaro */}
      <section id="mounnjaro" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <span className="badge bg-mounnjaro/10 text-mounnjaro">PARA QUEM ESTÁ COMEÇANDO</span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-mounnjaro mb-6">
                Um Inibidor Que Funciona DE VERDADE
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A fórmula completa que tira o apetite, detoxifica o corpo e dá o suporte que você nunca teve para começar a emagrecer de vez.
              </p>
              <div className="text-4xl font-black text-primary mb-8">R$ 200,00</div>
              <button onClick={() => scrollToForm('Mounnjaro')} className="btn-primary !bg-mounnjaro w-full md:w-auto">
                QUERO O MOUNNJARO → R$ 200
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative"><img src={ASSETS.mounnjaro} alt="Mounnjaro" className="w-full rounded-2xl" referrerPolicy="no-referrer" /><div className="absolute inset-0" onClick={(e) => e.preventDefault()} /></div>
              <div className="relative mt-8"><img src={ASSETS.capsMounnjaro} alt="Cápsulas" className="w-full rounded-2xl" referrerPolicy="no-referrer" /><div className="absolute inset-0" onClick={(e) => e.preventDefault()} /></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="card p-6 bg-bg/30">
              <div className="w-12 h-12 bg-mounnjaro text-white rounded-full flex items-center justify-center mb-4">
                <Flame size={24} />
              </div>
              <h4 className="font-bold mb-2">INIBIÇÃO DE APETITE</h4>
              <p className="text-sm text-gray-600">Garcinia Cambogia, Cafeína, Folha de Lótus. Controle total da fome.</p>
            </div>
            <div className="card p-6 bg-bg/30">
              <div className="w-12 h-12 bg-mounnjaro text-white rounded-full flex items-center justify-center mb-4">
                <Leaf size={24} />
              </div>
              <h4 className="font-bold mb-2">DETOX COMPLETO</h4>
              <p className="text-sm text-gray-600">Psyllium, Spirulina, Hibisco. Limpeza profunda contra inchaço.</p>
            </div>
            <div className="card p-6 bg-bg/30">
              <div className="w-12 h-12 bg-mounnjaro text-white rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h4 className="font-bold mb-2">RECONSTRUÇÃO</h4>
              <p className="text-sm text-gray-600">Com Colágeno para garantir que sua pele acompanhe o emagrecimento.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 bg-mounnjaro rounded-3xl text-white">
              <h3 className="font-display font-bold text-2xl mb-6">Para quem é?</h3>
              <ul className="space-y-4">
                {[
                  "Pessoas que estão iniciando agora no emagrecimento",
                  "Quem sente fome emocional e desconhece a saciedade",
                  "Quem sofre com inchaço e retenção de líquidos",
                  "Quem busca um protocolo seguro com acompanhamento"
                ].map((item, id) => (
                  <li key={id} className="flex gap-3 items-start">
                    <Check className="shrink-0 bg-white/20 p-0.5 rounded-full" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border-2 border-mounnjaro/20 rounded-3xl">
              <h3 className="font-display font-bold text-2xl mb-6 text-mounnjaro underline decoration-accent">Como usar</h3>
              <div className="space-y-6">
                {[
                  { title: "Dias 1–7: Adaptação", desc: "Tome 1 cápsula em dias alternados (dia sim, dia não)." },
                  { title: "Dias 8–15: Regularidade", desc: "Tome 1 cápsula todos os dias apos o cafe da manha." },
                  { title: "Dias 16–30: Resultados", desc: "Consumo de água para acelerar." }
                ].map((step, id) => (
                  <div key={id} className="flex gap-4">
                    <div className="font-black text-mounnjaro/20 text-4xl">{id + 1}</div>
                    <div>
                      <h4 className="font-bold text-mounnjaro">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-50 text-red-700 text-sm font-bold rounded-lg uppercase tracking-wide">
                ⚠️ AVISO: NUNCA TOME EM JEJUM
              </div>
            </div>
          </div>

          <div className="card p-8 border-none bg-primary/5">
            <h3 className="font-display font-bold text-xl mb-6 text-primary">O que vem incluso:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Entrega GRÁTIS: Manaus & SP",
                "Brasil: Consultar Frete",
                "Cardápio exclusivo",
                "Instruções detalhadas",
                "Grupo VIP de alunas",
                "Acompanhamento diário",
                "Plataforma de progresso"
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: Mounjaro Reed */}
      <section id="reed" className="bg-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="relative"><img src={ASSETS.reed} alt="Mounjaro Reed" className="w-full rounded-2xl" referrerPolicy="no-referrer" /><div className="absolute inset-0" onClick={(e) => e.preventDefault()} /></div>
              <div className="relative mt-8"><img src={ASSETS.capsReed} alt="Cápsulas" className="w-full rounded-2xl" referrerPolicy="no-referrer" /><div className="absolute inset-0" onClick={(e) => e.preventDefault()} /></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="badge bg-[#dc2626] text-white">PARA QUEM TRAVOU NO PESO</span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-primary mb-6">
                Destrave Seu Emagrecimento e Volte a Emagrecer Rápido
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                O único inibidor formulado para quem travou no peso e precisa sair do platô de uma vez por todas.
              </p>
              <div className="text-4xl font-black text-[#dc2626] mb-8">R$ 250,00</div>
              <button onClick={() => scrollToForm('Mounjaro Reed')} className="btn-primary !bg-[#dc2626] w-full md:w-auto">
                QUERO O MOUNJARO REED → R$ 250
              </button>
            </div>
          </div>

          <h3 className="font-display font-black text-center text-primary text-2xl mb-10">5 Frentes Simultâneas</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
            {[
              { n: "L-carnitina", f: "Energia e queima" },
              { n: "Quitosana", f: "Bloqueia gordura" },
              { n: "Laranja Moro", f: "Gordura abdominal" },
              { n: "Berberina", f: "Controle glicêmico" },
              { n: "Tirzepatida", f: "Fórmula análoga" }
            ].map((item, id) => (
              <div key={id} className="card p-4 text-center hover:border-[#dc2626] transition-colors">
                <Zap className="mx-auto mb-2 text-[#dc2626]" size={20} />
                <h5 className="font-black text-xs uppercase mb-1 tracking-wider">{item.n}</h5>
                <p className="text-[10px] text-gray-500 leading-tight">{item.f}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 bg-primary rounded-3xl text-white">
              <h3 className="font-display font-bold text-2xl mb-6">Para quem é?</h3>
              <ul className="space-y-4">
                {[
                  "Quem já usou outros inibidores e parou de ter resultado",
                  "Quem está no temido 'efeito platô'",
                  "Quem deseja resultados mais acelerados",
                  "Pessoas que precisam perder gordura localizada difícil"
                ].map((item, id) => (
                  <li key={id} className="flex gap-3 items-start">
                    <Check className="shrink-0 bg-white/20 p-0.5 rounded-full" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border-2 border-primary/20 rounded-3xl bg-white">
              <h3 className="font-display font-bold text-2xl mb-6 text-primary">Protocolo de Uso</h3>
              <div className="space-y-6">
                {[
                  { title: "Dias 1–7: Adaptação", desc: "Tome 1 cápsula em dias alternados." },
                  { title: "Dias 8–15: Regularidade", desc: "Tome 1 cápsula todos os dias apos o cafe da manha." },
                  { title: "Dias 16–30: Resultados", desc: "Protocolo completo com foco máximo em água." }
                ].map((step, id) => (
                  <div key={id} className="flex gap-4">
                    <div className="font-black text-[#dc2626] text-4xl">{id + 1}</div>
                    <div>
                      <h4 className="font-bold text-primary">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-50 text-red-700 text-sm font-bold rounded-lg uppercase tracking-wide">
                ⚠️ AVISO: NUNCA TOME EM JEJUM
              </div>
            </div>
          </div>

          <div className="card p-8 border-none bg-primary/5">
            <h3 className="font-display font-bold text-xl mb-6 text-primary">O que vem incluso:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "30 cápsulas exclusivas",
                "Entrega GRÁTIS: Manaus & SP",
                "Brasil: Consultar Frete",
                "Cardápio exclusivo",
                "Grupo VIP de alunas",
                "Acompanhamento diário",
                "Entrega para todo o Brasil"
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-black text-center text-primary mb-16">
            Resultados Reais de Quem Já Passou Por Aqui
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Depoimento 1 */}
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card flex flex-col md:flex-row items-stretch border-none shadow-xl overflow-hidden">
                <div className="md:w-1/2 aspect-video md:aspect-auto bg-black relative overflow-hidden">
                  <iframe
                    src={ASSETS.depRosiana}
                    className="w-full h-full min-h-[300px]"
                    style={{ transform: 'scale(1.12)', transformOrigin: 'bottom center' }}
                    allow="autoplay"
                    title="Depoimento Rosiana"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center bg-white">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-accent text-accent" />)}
                  </div>
                  <h4 className="font-bold text-xl mb-2">Rosiana</h4>
                  <p className="text-gray-600 text-sm italic">
                    "Menos 25kg na balança! Nunca imaginei que conseguiria sem passar fome. O acompanhamento diário mudou meu jogo."
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card border-accent/20 overflow-hidden"
              >
                <div className="bg-accent/10 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-accent">
                  Antes e Depois — Rosiana
                </div>
                <div className="relative">
                  <img src={ASSETS.rosianaAntesDepois} alt="Antes e Depois Rosiana" className="w-full h-auto" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0" onClick={(e) => e.preventDefault()} />
                </div>
              </motion.div>
            </div>

            {/* Depoimento 2 */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card flex flex-col md:flex-row items-stretch border-none shadow-xl overflow-hidden">
              <div className="md:w-1/2 relative">
                <img src={ASSETS.depRose} alt="Antes e Depois Rose" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0" onClick={(e) => e.preventDefault()} />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center bg-white">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-accent text-accent" />)}
                </div>
                <h4 className="font-bold text-xl mb-2">Rose</h4>
                <p className="text-gray-600 text-sm italic">
                  "Comecei com 115kg e já eliminei 19kg. Os inibidores funcionam mesmo, e a plataforma de progresso ajuda a manter o foco."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <ShieldCheck size={64} className="mx-auto mb-8 text-accent opacity-80" />
          <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-8">
            "Se você usar o produto da forma correta + seguir as orientações nutricionais que passo, você VAI ter resultado. E eu estarei com você TODOS OS DIAS garantindo isso."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <ClipboardList size={20} />
              <span>Acompanhamento Individual</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Users size={20} />
              <span>Grupo VIP Exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section ref={formRef} className="py-24 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-black text-primary mb-4">Pronto para Começar?</h2>
            <p className="text-gray-500">Preencha os dados abaixo para finalizar seu pedido pelo WhatsApp.</p>
          </div>

          <div className="space-y-6">
            {/* Product Selector */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Produto Selecionado</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-bg rounded-xl border border-black/5">
                <button 
                  onClick={() => setSelectedProduct('Mounnjaro')}
                  className={`py-3 px-4 rounded-lg text-sm font-bold transition-all ${selectedProduct === 'Mounnjaro' ? 'bg-mounnjaro text-white shadow-md' : 'text-gray-500 hover:bg-black/5'}`}
                >
                  Mounnjaro<br/><span className="text-[10px] opacity-70">R$ 200</span>
                </button>
                <button 
                  onClick={() => setSelectedProduct('Mounjaro Reed')}
                  className={`py-3 px-4 rounded-lg text-sm font-bold transition-all ${selectedProduct === 'Mounjaro Reed' ? 'bg-[#dc2626] text-white shadow-md' : 'text-gray-500 hover:bg-black/5'}`}
                >
                  Mounjaro Reed<br/><span className="text-[10px] opacity-70">R$ 250</span>
                </button>
              </div>
            </div>

            {/* Nome Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Como vamos te chamar?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.name ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
              />
            </div>

            {/* CPF and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">CPF</label>
                <input 
                  type="text" 
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={handleCpfChange}
                  className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.cpf ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Fone Celular</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.phone ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
                />
              </div>
            </div>

            {/* Address fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-1">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">CEP</label>
                <input 
                  type="text" 
                  placeholder="00000-000"
                  value={formData.cep}
                  onChange={handleCepChange}
                  className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.cep ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Rua</label>
                <input 
                  type="text" 
                  placeholder="Nome da rua"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.street ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Número</label>
                <input 
                  type="text" 
                  placeholder="Nº"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full p-4 rounded-xl border-2 border-bg focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Bairro</label>
                <input 
                  type="text" 
                  placeholder="Bairro"
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="w-full p-4 rounded-xl border-2 border-bg focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Cidade</label>
                <input 
                  type="text" 
                  placeholder="Cidade"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.city ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Estado</label>
                <input 
                  type="text" 
                  placeholder="Sigla (EX: AM)"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${errors.state ? 'border-red-500 bg-red-50' : 'border-bg focus:border-primary'}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Ponto de Referência</label>
              <input 
                type="text" 
                placeholder="Ex: Próximo ao mercado..."
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="w-full p-4 rounded-xl border-2 border-bg focus:border-primary transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">E-mail</label>
              <input 
                type="email" 
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 rounded-xl border-2 border-bg focus:border-primary transition-all outline-none"
              />
            </div>

            {/* Payment Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Meio de Pagamento</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {['PIX', 'Cartão'].map((method) => (
                  <label key={method} className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.payment === method ? 'border-primary bg-primary/5 font-bold' : 'border-bg hover:bg-black/5'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="hidden" 
                      checked={formData.payment === method}
                      onChange={() => setFormData({ ...formData, payment: method })}
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              className="btn-primary w-full !text-lg !py-6 shadow-xl shadow-primary/20"
            >
              <MessageCircle size={24} />
              ENVIAR PEDIDO PELO WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-bg text-center border-t border-black/5">
        <img src={ASSETS.logo} alt="Logo" className="h-12 mx-auto mb-6 opacity-80" referrerPolicy="no-referrer" />
        <p className="text-sm text-gray-600 mb-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-bold hover:text-accent transition-colors">
            <Instagram size={18} /> @rosimar_emagrecedores
          </a>
        </p>
        <p className="text-sm text-gray-500 mb-2">© 2025 — Enviamos para todo o Brasil</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1"><Truck size={12} /> Frete Grátis: Manaus & São Paulo</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full hidden md:block" />
          <span>Demais regiões: Consultar frete</span>
          <span className="flex items-center gap-1"><ShieldCheck size={12} /> Produto Original</span>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] z-50 group"
      >
        <MessageCircle size={30} className="md:w-8 md:h-8" />
        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
      </motion.a>
    </div>
  );
}
