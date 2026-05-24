import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Heart, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/Screenshot_2026-05-24-16-32-02-893_com.instagram.android-edit_1779651416020.png";
import box8Img from "@assets/Screenshot_2026-05-24-16-24-54-514_com.instagram.android-edit_1779651416293.jpg";
import box12Img from "@assets/Screenshot_2026-05-24-16-25-10-951_com.instagram.android-edit_1779651416268.jpg";

const WHATSAPP_NUMBER = "5527996340288";

const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const MAIN_CTA_MESSAGE = "Olá! Quero fazer um pedido na TaiaDonut!";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Header / Hero */}
      <header className="relative pt-12 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background -z-10" />
        
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto relative group">
              <img 
                src={logoImg} 
                alt="TaiaDonut Logo" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              TaiaDonut
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
              Feitos com carinho, coberturas irresistíveis e aquele sabor que transforma qualquer momento em algo especial.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-foreground border border-border/50">
                <MapPin className="w-4 h-4 text-primary" />
                Montanha/ES • Entrega na região
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-bold text-primary">
                <Clock className="w-4 h-4" />
                Produção diária
              </div>
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-sm font-bold text-accent-foreground">
                <Heart className="w-4 h-4 text-accent" />
                Feitos com amor
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-primary/30 group"
                onClick={() => window.open(generateWhatsAppLink(MAIN_CTA_MESSAGE), '_blank')}
                data-testid="button-hero-cta"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Pedir Agora
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Irresistíveis Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Mini Donuts <span className="text-primary">Irresistíveis</span>
            </h2>
            <p className="text-foreground/70 font-medium max-w-xl mx-auto">
              Nossa massa fofinha com coberturas clássicas que derretem na boca.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 4 un */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-3xl p-6 flex flex-col h-full border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-2">Perfeito pra matar a vontade</div>
                <div className="text-3xl font-black text-foreground">4 <span className="text-lg text-foreground/70">unidades</span></div>
              </div>
              <div className="text-3xl font-black text-primary mb-6">R$ 12</div>
              <div className="mt-auto pt-6">
                <Button 
                  className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(generateWhatsAppLink("Olá! Quero fazer um pedido na TaiaDonut: 1 caixa de Mini Donuts Irresistíveis com 4 unidades - R$12. Meu nome é: "), '_blank')}
                  data-testid="button-order-irresistiveis-4"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir pelo WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Card 8 un - HIGHLIGHT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-3xl p-1 flex flex-col h-full shadow-xl shadow-primary/20 transform md:-translate-y-4 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-foreground px-4 py-1 rounded-full text-sm font-black flex items-center gap-1 shadow-sm whitespace-nowrap">
                <Star className="w-4 h-4 fill-current" /> MAIS PEDIDO
              </div>
              <div className="bg-white rounded-[20px] p-6 flex flex-col h-full">
                <div className="mb-4 pt-4">
                  <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Melhor custo-benefício</div>
                  <div className="text-4xl font-black text-foreground">8 <span className="text-lg text-foreground/70">unidades</span></div>
                </div>
                <div className="text-4xl font-black text-primary mb-6">R$ 20</div>
                <div className="mt-auto pt-6">
                  <Button 
                    className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
                    onClick={() => window.open(generateWhatsAppLink("Olá! Quero fazer um pedido na TaiaDonut: 1 caixa de Mini Donuts Irresistíveis com 8 unidades - R$20. Meu nome é: "), '_blank')}
                    data-testid="button-order-irresistiveis-8"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Pedir pelo WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Card 12 un */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background rounded-3xl p-6 flex flex-col h-full border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-2">Ideal pra compartilhar</div>
                <div className="text-3xl font-black text-foreground">12 <span className="text-lg text-foreground/70">unidades</span></div>
              </div>
              <div className="text-3xl font-black text-primary mb-6">R$ 32</div>
              <div className="mt-auto pt-6">
                <Button 
                  className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(generateWhatsAppLink("Olá! Quero fazer um pedido na TaiaDonut: 1 caixa de Mini Donuts Irresistíveis com 12 unidades - R$32. Meu nome é: "), '_blank')}
                  data-testid="button-order-irresistiveis-12"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir pelo WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recheados Section */}
      <section className="py-20 px-4 bg-secondary/10 relative">
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Mini Donuts <span className="text-primary">Recheados que Viciam</span>
            </h2>
            <p className="text-foreground/70 font-medium max-w-xl mx-auto">
              A explosão de sabor que você merece. Recheios generosos e cremosos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 4 un */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 flex flex-col h-full border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-2">Perfeito pra experimentar</div>
                <div className="text-3xl font-black text-foreground">4 <span className="text-lg text-foreground/70">unidades</span></div>
              </div>
              <div className="text-3xl font-black text-primary mb-6">R$ 16</div>
              <div className="mt-auto pt-6">
                <Button 
                  className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(generateWhatsAppLink("Olá! Quero fazer um pedido na TaiaDonut: 1 caixa de Mini Donuts Recheados com 4 unidades - R$16. Meu nome é: "), '_blank')}
                  data-testid="button-order-recheados-4"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir pelo WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Card 8 un - HIGHLIGHT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-3xl p-1 flex flex-col h-full shadow-xl shadow-primary/20 transform md:-translate-y-4 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-foreground px-4 py-1 rounded-full text-sm font-black flex items-center gap-1 shadow-sm whitespace-nowrap">
                <Star className="w-4 h-4 fill-current" /> MAIS PEDIDO
              </div>
              <div className="bg-white rounded-[20px] p-6 flex flex-col h-full">
                <div className="mb-4 pt-4">
                  <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Melhor custo-benefício</div>
                  <div className="text-4xl font-black text-foreground">8 <span className="text-lg text-foreground/70">unidades</span></div>
                </div>
                <div className="text-4xl font-black text-primary mb-6">R$ 28</div>
                <div className="mt-auto pt-6">
                  <Button 
                    className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
                    onClick={() => window.open(generateWhatsAppLink("Olá! Quero fazer um pedido na TaiaDonut: 1 caixa de Mini Donuts Recheados com 8 unidades - R$28. Meu nome é: "), '_blank')}
                    data-testid="button-order-recheados-8"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Pedir pelo WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Card 12 un */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 flex flex-col h-full border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-2">Ideal pra dividir (ou não)</div>
                <div className="text-3xl font-black text-foreground">12 <span className="text-lg text-foreground/70">unidades</span></div>
              </div>
              <div className="text-3xl font-black text-primary mb-6">R$ 42</div>
              <div className="mt-auto pt-6">
                <Button 
                  className="w-full rounded-full font-bold bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(generateWhatsAppLink("Olá! Quero fazer um pedido na TaiaDonut: 1 caixa de Mini Donuts Recheados com 12 unidades - R$42. Meu nome é: "), '_blank')}
                  data-testid="button-order-recheados-12"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir pelo WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-border shadow-sm text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Sabores Disponíveis</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Leite Ninho', 'Brigadeiro', 'Doce de Leite', 'Maracujá', 'Coco', 'Nutella'].map((sabor) => (
                <span key={sabor} className="bg-background border border-border px-4 py-2 rounded-full font-bold text-foreground/80">
                  {sabor}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-lg group relative aspect-square"
            >
              <img src={box8Img} alt="Caixa com 8 mini donuts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="text-white font-bold text-xl drop-shadow-md">Caixa com 8 unidades</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-lg group relative aspect-square md:translate-y-12"
            >
              <img src={box12Img} alt="Caixa com 12 mini donuts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="text-white font-bold text-xl drop-shadow-md">Caixa com 12 unidades</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden mt-12 md:mt-24">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-sm">SABORES QUE ACABAM RÁPIDO!</h2>
            <p className="text-xl md:text-2xl mb-10 font-medium opacity-90">Garanta já o seu antes que acabem</p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-16 text-xl font-black shadow-xl hover:-translate-y-1 transition-all"
              onClick={() => window.open(generateWhatsAppLink(MAIN_CTA_MESSAGE), '_blank')}
              data-testid="button-final-cta"
            >
              <MessageCircle className="w-6 h-6 mr-3 text-green-500" />
              Quero meus Donuts!
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
              <img src={logoImg} alt="TaiaDonut Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-black">TaiaDonut</h3>
              <p className="text-white/60 text-sm font-medium">Montanha/ES</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80 font-medium flex items-center justify-center md:justify-end gap-2 mb-2">
              <Heart className="w-4 h-4 text-accent fill-current" />
              Feitos com muito amor
            </p>
            <a 
              href={generateWhatsAppLink(MAIN_CTA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-primary transition-colors font-bold inline-flex items-center gap-2"
              data-testid="link-footer-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              (27) 99634-0288
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
