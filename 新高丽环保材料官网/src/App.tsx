import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Factory, 
  Shield, 
  Globe, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Layers,
  Zap,
  Leaf,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { translations, type Language } from './translations';

/**
 * Utility for Tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Context ---
const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.zh;
}>({
  lang: 'zh',
  setLang: () => {},
  t: translations.zh,
});

const useTranslation = () => useContext(LanguageContext);

// --- Components ---

const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.applications, href: '#applications' },
    { name: t.nav.partners, href: '#partners' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'uz', label: 'O\'zbek' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://storage.googleapis.com/m-infra-ais-pre-yt7jskk4ytaxcfjavpd4u5-336268372681.asia-east1.run.app/logo_1741491474136.png" 
            alt="KGE Logo" 
            className={cn(
              "h-10 w-auto object-contain transition-all",
              !isScrolled && "brightness-0 invert"
            )}
            referrerPolicy="no-referrer"
          />
          <span className={cn(
            "font-display font-bold text-xl tracking-tight",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            {lang === 'zh' ? '新高丽环保' : lang === 'en' ? 'New Gaoli' : lang === 'ru' ? 'Синьгаоли' : 'Yangi Gaoli'}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              <Languages className="w-4 h-4" />
              {languages.find(l => l.code === lang)?.label}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-w-[120px]"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors",
                        lang === l.code ? "text-blue-600 font-bold bg-blue-50" : "text-slate-600"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20">
            {t.nav.consult}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className={cn(
              "flex items-center gap-1 text-sm font-medium",
              isScrolled ? "text-slate-600" : "text-white"
            )}
          >
            <Languages className="w-4 h-4" />
            {lang.toUpperCase()}
          </button>
          <button 
            className="text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium py-2 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-2 mt-2">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium border",
                      lang === l.code ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-100"
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold mt-2">
                {t.nav.consult}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
          alt="Industrial Factory" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            {t.hero.title} <br />
            <span className="text-blue-500">{t.hero.subtitle}</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
            {t.hero.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 group">
              {t.hero.btnProducts}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              {t.hero.btnAbout}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
          {[
            { label: t.hero.stats.founded, value: '1998', unit: t.hero.stats.unitYear },
            { label: t.hero.stats.area, value: '46000', unit: t.hero.stats.unitSqm },
            { label: t.hero.stats.capacity, value: '10000', unit: t.hero.stats.unitTon },
            { label: t.hero.stats.lines, value: '15', unit: t.hero.stats.unitLine },
          ].map((stat) => (
            <div key={stat.label} className="text-center border-r border-white/10 last:border-0">
              <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-white text-3xl font-display font-bold">
                {stat.value}<span className="text-blue-500 text-lg ml-1">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000" 
                alt="Factory Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl shadow-xl text-white hidden md:block">
              <div className="text-4xl font-bold mb-1">12+</div>
              <div className="text-sm font-medium opacity-80">{t.about.statLabel}</div>
            </div>
          </div>

          <div>
            <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">{t.about.badge}</div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              {t.about.title} <br />
              <span className="text-blue-600">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.about.quality}</div>
                  <div className="text-sm text-slate-500">{t.about.qualityDesc}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.about.eco}</div>
                  <div className="text-sm text-slate-500">{t.about.ecoDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const productImages = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <section id="products" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">{t.products.title}</h2>
          <p className="text-slate-600">
            {t.products.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.products.items.map((product, idx) => (
            <motion.div
              key={product.title}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={productImages[idx]} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>
                
                {/* Structured Specs */}
                <div className="space-y-2 pt-4 border-t border-slate-50">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-slate-400 uppercase tracking-wider font-semibold">
                        {key === 'gloss' ? 'Gloss' : key === 'curing' ? 'Curing' : 'Feature'}
                      </span>
                      <span className="text-slate-700 font-medium">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const projectImages = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <section id="projects" className="section-padding bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">{t.projects.badge}</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-right hidden md:block">
            {t.projects.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={projectImages[idx]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Applications = () => {
  const { t } = useTranslation();
  return (
    <section id="applications" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">{t.apps.title}</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              {t.apps.desc}
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {t.apps.list.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold">{t.apps.centralAsiaTitle}</h3>
              </div>
              <p className="text-sm text-slate-400">
                {t.apps.centralAsiaDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" alt="App 1" className="rounded-2xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1533991505870-28687e43d09b?auto=format&fit=crop&q=80&w=600" alt="App 2" className="rounded-2xl aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=600" alt="App 3" className="rounded-2xl aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=600" alt="App 4" className="rounded-2xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const { t } = useTranslation();
  const partners = [
    '新疆交投交安科技', '新疆八钢钢管', '新疆源盛科技', '新疆新铝', 
    '特变电工', '卓朗智能', '致盛达散热器', '联汇门业', 
    '天鹅现代采棉机', '新疆天诚农机'
  ];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{t.partners.title}</h2>
          <p className="text-slate-500">{t.partners.desc}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <motion.div 
              key={partner} 
              whileHover={{ y: -5 }}
              className="p-6 border border-slate-100 rounded-[2rem] flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-blue-100 transition-all duration-300 group bg-white"
            >
              {/* Logo Placeholder - You can replace the div below with an <img> tag */}
              <div className="w-full aspect-[3/2] bg-slate-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-slate-50 group-hover:bg-blue-50/50 transition-colors">
                <div className="text-slate-300 group-hover:text-blue-200 transition-colors">
                  <Factory className="w-10 h-10 opacity-20" />
                </div>
                {/* 
                <img 
                  src={`/path-to-your-logo/${partner}.png`} 
                  alt={partner} 
                  className="max-w-[80%] max-h-[80%] object-contain"
                  referrerPolicy="no-referrer"
                /> 
                */}
              </div>
              <span className="text-slate-500 font-bold text-xs md:text-sm group-hover:text-blue-600 transition-colors leading-tight">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">{t.contact.title}</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg mb-1">{t.contact.address}</div>
                    <div className="text-slate-500">{t.contact.addressVal}</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg mb-1">{t.contact.phone}</div>
                    <div className="text-slate-500">0991-XXXXXXX / 1XXXXXXXXXX</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg mb-1">{t.contact.email}</div>
                    <div className="text-slate-500">contact@xjxgl.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20">
                  {t.contact.btn}
                </button>
              </div>
            </div>

            <div className="bg-slate-100 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { lang, t } = useTranslation();
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
          <div className="flex items-center gap-2">
            <img 
              src="https://storage.googleapis.com/m-infra-ais-pre-yt7jskk4ytaxcfjavpd4u5-336268372681.asia-east1.run.app/logo_1741491474136.png" 
              alt="KGE Logo" 
              className="h-8 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl text-white tracking-tight">
              {lang === 'zh' ? '新高丽环保' : lang === 'en' ? 'New Gaoli' : lang === 'ru' ? 'Синьгаоли' : 'Yangi Gaoli'}
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#products" className="hover:text-white transition-colors">{t.nav.products}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 {t.footer.desc}</p>
          <div className="flex gap-6">
            {t.footer.links.map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
            {lang === 'zh' && <a href="#" className="hover:text-white transition-colors">新ICP备XXXXXXXX号</a>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('zh');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'ru', 'uz', 'zh'].includes(browserLang)) {
      setLang(browserLang as Language);
    } else {
      setLang('en'); // Default to English for other regions
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Projects />
          <Applications />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
