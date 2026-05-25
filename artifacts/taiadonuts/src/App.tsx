import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle, MapPin, Clock, Heart, ChevronRight, Star, Sparkles, Package, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/Screenshot_2026-05-24-16-32-02-893_com.instagram.android-edit_1779651416020.png";
import box8Img from "@assets/Screenshot_2026-05-24-16-24-54-514_com.instagram.android-edit_1779651416293.jpg";
import box12Img from "@assets/Screenshot_2026-05-24-16-25-10-951_com.instagram.android-edit_1779651416268.jpg";
import flavorLeitNinhoImg from "@assets/1_20260524_170248_0000_1779653189582.png";
import flavorBrigadeiroImg from "@assets/2_20260524_170249_0001_1779653236226.png";
import flavorDoceLeiteImg from "@assets/3_20260524_170249_0002_1779653236290.png";
import flavorMaracujaImg from "@assets/4_20260524_170249_0003_1779653236309.png";
import flavorCocoImg from "@assets/4_20260524_165751_0003_1779653236329.png";
import flavorNutellaImg from "@assets/5_20260524_170249_0004_1779653236348.png";

const WHATSAPP_NUMBER = "5527996340288";

const generateWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const MAIN_CTA_MESSAGE = "Olá! Quero fazer um pedido na Taia Donuts!";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const viewportOpts = { once: true, margin: "-80px" };

/* ── Name Modal ── */
interface NameModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
}

function NameModal({ open, onClose, onConfirm }: NameModalProps) {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);

  const trimmed = name.trim();
  const invalid = touched && trimmed.length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (trimmed.length === 0) return;
    onConfirm(trimmed);
    setName("");
    setTouched(false);
  };

  const handleClose = () => {
    setName("");
    setTouched(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={handleClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-foreground/30 hover:text-foreground/70 transition-colors"
              data-testid="button-modal-close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-4xl text-center mb-4 select-none">🍩</div>
            <h2 className="text-xl font-black text-foreground text-center mb-1">
              Qual é o seu nome?
            </h2>
            <p className="text-foreground/50 text-sm text-center mb-6 font-medium">
              Para identificar seu pedido no WhatsApp
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  autoFocus
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="Digite seu nome..."
                  className={`w-full px-4 py-3 rounded-xl border-2 font-semibold text-foreground placeholder:text-foreground/30 outline-none transition-colors ${
                    invalid
                      ? "border-red-400 bg-red-50"
                      : "border-border focus:border-primary bg-background"
                  }`}
                  data-testid="input-name"
                />
                {invalid && (
                  <p className="text-red-500 text-xs font-bold mt-1.5 ml-1">
                    Por favor, digite seu nome antes de continuar.
                  </p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="submit"
                  className="w-full rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white h-12 text-base shadow-md shadow-green-600/20"
                  data-testid="button-modal-confirm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4"
    >
      <Sparkles className="w-3.5 h-3.5" />
      {children}
    </motion.div>
  );
}

interface ComboCardProps {
  units: number;
  price: string;
  label: string;
  highlight?: boolean;
  orderMessage: string;
  testId: string;
  delay?: number;
  onOrder: (msg: string) => void;
}

function ComboCard({ units, price, label, highlight = false, orderMessage, testId, delay = 0, onOrder }: ComboCardProps) {
  if (highlight) {
    return (
      <motion.div
        variants={scaleIn}
        custom={delay}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        whileHover={{ y: -6 }}
        className="relative z-10"
      >
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-accent text-foreground px-5 py-1.5 rounded-full text-sm font-black flex items-center gap-1.5 shadow-md whitespace-nowrap"
          >
            <Star className="w-3.5 h-3.5 fill-current" /> MAIS PEDIDO
          </motion.div>
        </div>
        <div className="bg-primary rounded-[28px] p-1 shadow-2xl shadow-primary/30 h-full">
          <div className="bg-white rounded-[22px] p-7 flex flex-col h-full text-center">
            <div className="pt-4 mb-3">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">{label}</span>
            </div>
            <div className="text-5xl font-black text-foreground mb-1">
              {units} <span className="text-xl font-bold text-foreground/50">un</span>
            </div>
            <div className="text-5xl font-black text-primary mb-8">
              R$<span>{price}</span>
            </div>
            <div className="mt-auto">
              <Button
                className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white h-12 text-base shadow-lg shadow-green-600/20"
                onClick={() => onOrder(orderMessage)}
                data-testid={testId}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Pedir pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      className="bg-white rounded-[28px] p-7 flex flex-col border border-border/60 shadow-sm h-full text-center transition-shadow"
    >
      <div className="mb-3">
        <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-4xl font-black text-foreground mb-1">
        {units} <span className="text-xl font-bold text-foreground/50">un</span>
      </div>
      <div className="text-4xl font-black text-primary mb-8">
        R$<span>{price}</span>
      </div>
      <div className="mt-auto">
        <Button
          className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-600/20"
          onClick={() => onOrder(orderMessage)}
          data-testid={testId}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Pedir pelo WhatsApp
        </Button>
      </div>
    </motion.div>
  );
}

export default function App() {
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 400], [0, -40]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const [modalOpen, setModalOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");

  const handleOrder = (msg: string) => {
    setPendingMessage(msg);
    setModalOpen(true);
  };

  const handleConfirm = (name: string) => {
    const full = `${pendingMessage} — ${name}`;
    window.open(generateWhatsAppLink(full), "_blank");
    setModalOpen(false);
  };

  const flavors = [
    { name: "Leite Ninho", img: flavorLeitNinhoImg, bg: "from-amber-50 to-yellow-100" },
    { name: "Brigadeiro", img: flavorBrigadeiroImg, bg: "from-amber-900/10 to-amber-800/20" },
    { name: "Doce de Leite", img: flavorDoceLeiteImg, bg: "from-orange-100 to-amber-200" },
    { name: "Maracujá", img: flavorMaracujaImg, bg: "from-yellow-100 to-orange-100" },
    { name: "Coco", img: flavorCocoImg, bg: "from-stone-50 to-stone-100" },
    { name: "Nutella", img: flavorNutellaImg, bg: "from-amber-800/10 to-stone-200" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">

      <NameModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />

      {/* ── HERO ── */}
      <header className="relative pt-16 pb-28 px-4 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            style={{ y: logoY, scale: logoScale }}
            initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="mb-8"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-primary/20 mx-auto"
            >
              <img src={logoImg} alt="Taia Donuts Logo" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-foreground tracking-tight mb-4"
          >
            Taia Donuts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-medium leading-relaxed mb-8"
          >
            Feitos com carinho, coberturas irresistíveis e aquele sabor que transforma qualquer momento em algo especial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: <MapPin className="w-4 h-4 text-primary" />, label: "Montanha/ES • Entrega na região", cls: "bg-white border border-border/60 text-foreground" },
              { icon: <Clock className="w-4 h-4" />, label: "Produção diária", cls: "bg-primary/10 text-primary" },
              { icon: <Heart className="w-4 h-4 text-accent" />, label: "Feitos com amor", cls: "bg-accent/20 text-foreground" },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.1, type: "spring", stiffness: 200 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-sm ${b.cls}`}
              >
                {b.icon}
                {b.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 16 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg font-black shadow-xl shadow-primary/30"
                onClick={() => handleOrder(MAIN_CTA_MESSAGE)}
                data-testid="button-hero-cta"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pedir Agora
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ── WAVE ── */}
      <div className="relative -mt-1 leading-none">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── IRRESISTÍVEIS ── */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>Mini Donuts Clássicos</SectionBadge>
            <motion.h2 variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-3xl md:text-5xl font-black text-foreground mb-4">
              Mini Donuts <span className="text-primary">Irresistíveis</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-foreground/60 font-medium max-w-xl mx-auto text-lg">
              Nossa massa fofinha com coberturas clássicas que derretem na boca.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <ComboCard units={4} price="12" label="Perfeito pra matar a vontade" orderMessage="Pedido na Taia Donuts: Mini Donuts Irresistíveis — 4 un (R$12)" testId="button-order-irresistiveis-4" delay={0.1} onOrder={handleOrder} />
            <ComboCard units={8} price="20" label="Melhor custo-benefício" highlight orderMessage="Pedido na Taia Donuts: Mini Donuts Irresistíveis — 8 un (R$20)" testId="button-order-irresistiveis-8" delay={0.2} onOrder={handleOrder} />
            <ComboCard units={12} price="32" label="Ideal pra compartilhar" orderMessage="Pedido na Taia Donuts: Mini Donuts Irresistíveis — 12 un (R$32)" testId="button-order-irresistiveis-12" delay={0.3} onOrder={handleOrder} />
          </div>

          <motion.div variants={fadeUp} custom={0.4} initial="hidden" whileInView="visible" viewport={viewportOpts} className="mt-10 bg-primary/5 border border-primary/15 rounded-2xl px-6 py-4 flex flex-wrap justify-center gap-6 text-sm font-bold text-foreground/60">
            {["Produção diária", "Fresquinhos", "Feitos com amor", "Fornada limitada por dia"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div className="relative leading-none bg-white">
        <svg viewBox="0 0 1440 60" className="w-full fill-[hsl(24,57%,94%)]" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── RECHEADOS ── */}
      <section className="py-20 px-4 bg-[hsl(24,57%,94%)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>Com recheio cremoso</SectionBadge>
            <motion.h2 variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-3xl md:text-5xl font-black text-foreground mb-4">
              Mini Donuts <span className="text-primary">Recheados que Viciam</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-foreground/60 font-medium max-w-xl mx-auto text-lg">
              A explosão de sabor que você merece. Recheios generosos e cremosos que escorrem.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-16">
            <ComboCard units={4} price="16" label="Perfeito pra experimentar" orderMessage="Pedido na Taia Donuts: Mini Donuts Recheados — 4 un (R$16)" testId="button-order-recheados-4" delay={0.1} onOrder={handleOrder} />
            <ComboCard units={8} price="28" label="Melhor custo-benefício" highlight orderMessage="Pedido na Taia Donuts: Mini Donuts Recheados — 8 un (R$28)" testId="button-order-recheados-8" delay={0.2} onOrder={handleOrder} />
            <ComboCard units={12} price="42" label="Ideal pra dividir (ou não)" orderMessage="Pedido na Taia Donuts: Mini Donuts Recheados — 12 un (R$42)" testId="button-order-recheados-12" delay={0.3} onOrder={handleOrder} />
          </div>

          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">6 Sabores Irresistíveis</h3>
            <p className="text-foreground/50 font-medium">Escolha o seu favorito — ou peça um de cada!</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {flavors.map((sabor, i) => (
              <motion.div
                key={sabor.name}
                variants={scaleIn}
                custom={i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                whileHover={{ y: -6, scale: 1.04 }}
                className="flex flex-col items-center gap-2.5 group cursor-default"
                data-testid={`card-sabor-${sabor.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className={`w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${sabor.bg} shadow-md border border-white group-hover:shadow-xl transition-all duration-300`}>
                  <img src={sabor.img} alt={sabor.name} className="w-full h-full object-contain p-1.5" />
                </div>
                <span className="text-sm font-black text-foreground/80 text-center leading-tight">{sabor.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div className="relative leading-none bg-[hsl(24,57%,94%)]">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── GALLERY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>Feitos na hora</SectionBadge>
            <motion.h2 variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-3xl md:text-5xl font-black text-foreground">
              Fresquinhos e irresistíveis
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <motion.div variants={fadeLeft} custom={0} initial="hidden" whileInView="visible" viewport={viewportOpts} whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-xl group relative aspect-square">
              <img src={box8Img} alt="Caixa com 8 mini donuts recheados" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm font-bold">Mini Donuts Recheados</span>
                  </div>
                  <span className="text-white font-black text-2xl drop-shadow-md">Caixa com 8 unidades</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} custom={0.15} initial="hidden" whileInView="visible" viewport={viewportOpts} whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-xl group relative aspect-square md:mt-12">
              <img src={box12Img} alt="Caixa com 12 mini donuts recheados" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm font-bold">Mini Donuts Recheados</span>
                  </div>
                  <span className="text-white font-black text-2xl drop-shadow-md">Caixa com 12 unidades</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-4 overflow-hidden bg-primary mt-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 pointer-events-none"
            style={{ width: 200 + i * 160, height: 200 + i * 160 }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}

        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <motion.div variants={scaleIn} custom={0} initial="hidden" whileInView="visible" viewport={viewportOpts}>
            <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="text-5xl mb-6 select-none">
              🍩
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-sm leading-tight">
              SABORES QUE<br />ACABAM RÁPIDO!
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-medium">
              Garanta já o seu antes que acabem
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 rounded-full px-12 h-16 text-xl font-black shadow-2xl"
                onClick={() => handleOrder(MAIN_CTA_MESSAGE)}
                data-testid="button-final-cta"
              >
                <MessageCircle className="w-6 h-6 mr-3 text-green-500" />
                Quero meus Donuts!
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} custom={0.3} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-white/60 text-sm font-bold mt-6 uppercase tracking-widest">
              Rápido • Fácil • Delicioso
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-white py-14 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div variants={fadeLeft} custom={0} initial="hidden" whileInView="visible" viewport={viewportOpts} className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0">
                <img src={logoImg} alt="Taia Donuts Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black">Taia Donuts</h3>
                <p className="text-white/50 text-sm font-medium">Montanha/ES • Entrega na região</p>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} custom={0} initial="hidden" whileInView="visible" viewport={viewportOpts} className="text-center md:text-right">
              <p className="text-white/60 font-medium flex items-center justify-center md:justify-end gap-2 mb-3 text-sm">
                <Heart className="w-3.5 h-3.5 text-accent fill-current" />
                Feitos com muito amor todos os dias
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={generateWhatsAppLink(MAIN_CTA_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-lg"
                data-testid="link-footer-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                (27) 99634-0288
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={0.2} initial="hidden" whileInView="visible" viewport={viewportOpts} className="mt-10 pt-8 border-t border-white/10 text-center text-white/30 text-xs font-medium">
            © 2026 Taia Donuts • Montanha/ES
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
