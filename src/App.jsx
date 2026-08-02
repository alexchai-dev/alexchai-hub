import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { 
  Sparkles, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Sprout, 
  Brain, 
  DollarSign, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  Globe,
  Code2,
  Terminal,
  Download,
  Coffee
} from 'lucide-react';
import DonateModal from './components/DonateModal';

const getInitialHubLang = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'ru') return urlLang;

    const saved = localStorage.getItem('alexchai_hub_lang_v1');
    if (saved) return saved;

    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (userLang.startsWith('ru') || userLang.startsWith('uk') || userLang.startsWith('be') || userLang.startsWith('kk')) {
      return 'ru';
    }
    return 'en';
  } catch (e) {
    return 'ru';
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [lang, setLangState] = useState(getInitialHubLang);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const setLang = (newLang) => {
    setLangState(newLang);
    try { localStorage.setItem('alexchai_hub_lang_v1', newLang); } catch (e) {}
  };

  const content = {
    ru: {
      navSubtitle: "Интерактивные веб-приложения на стыке психологии, мышления и финансовой продуктивности",
      heroBadge: "Официальный Каталог Приложений • AlexChai",
      heroTitlePart1: "Интерактивные Системы ",
      heroTitlePart2: "Продуктивности & Мышления",
      heroDesc: "Каждое приложение — это готовый цифровой инструмент, превращающий фундаментальные законы психологии, мышления и финансового капитала в ежедневную практику.",
      
      categories: {
        all: "Все Проекты",
        productivity: "🌱 Продуктивность & Дисциплина",
        psychology: "🧠 Психология & Мышление",
        finance: "💰 Финансы & Капитал"
      },

      apps: [
        {
          id: 'rohn-system',
          title: 'The Rohn System',
          subtitle: 'Операционная система личной эффективности по философии Джима Рона',
          category: 'productivity',
          status: 'live',
          statusText: '🟢 ОПУБЛИКОВАНО (LIVE)',
          link: 'https://the-rohn-system.vercel.app',
          desc: 'Интерактивная система, созданная по мотивам легендарного семинара Джима Рона 1981 года «Вызов к успеху» (The Challenge to Succeed, Анахайм, Калифорния). Превращает фундаментальные дисциплины в неизбежный урожай успеха: Формула капитала 70/30, Поле Сева, Переплавка ошибок в опыт, 30-мин таймер чтения, 24ч планировщик и Пирамида Целей.',
          features: [
            'Формула распределения капитала 70/30',
            'Поле Сева и симулятор нормы потерь',
            'Модуль переплавки ошибок в опыт',
            '30-минутный таймер чтения & дневник',
            'Планировщик 24 часа (Major/Minor)',
            'Аудит окружения 5 пальцев',
            'Пирамида целей с трансформацией личности'
          ],
          icon: Sprout,
          color: 'amber'
        },
        {
          id: 'mind-matrix',
          title: 'Mind Matrix',
          subtitle: 'Интерактивный трекер нейронных привычек & эмоциональной стойкости',
          category: 'psychology',
          status: 'coming_soon',
          statusText: '⏳ В РАЗРАБОТКЕ (СКОРО)',
          link: null,
          desc: 'Визуализация формирования новых нейронных связей в виде интерактивной 3D-сети. Алгоритм интервальных повторений для установок мышления, трекер дофаминовых триггеров и анализ фокуса.',
          features: [
            '3D-графы нейронных связей',
            'Трекер дофаминовых триггеров',
            'Интервальные повторения аффирмаций',
            'Монитор эмоционального баланса'
          ],
          icon: Brain,
          color: 'cyan'
        },
        {
          id: 'capital-flow',
          title: 'Capital Flow 3.0',
          subtitle: 'Симулятор финансовой независимости & сложного процента',
          category: 'finance',
          status: 'coming_soon',
          statusText: '⏳ В РАЗРАБОТКЕ (СКОРО)',
          link: null,
          desc: 'Расчет точной даты вашей финансовой независимости с учетом инфляции, 30% отчислений в капитал и роста по правилу 72 через сложный процент.',
          features: [
            'Калькулятор сложного процента',
            'Защита от инфляции',
            'Матрица пассивного дохода',
            'Дорожная карта финансовой свободы'
          ],
          icon: DollarSign,
          color: 'emerald'
        }
      ],

      aboutTitle: "Об Авторе — ",
      aboutAuthorName: "AlexChai",
      aboutBadge: "</> Indie Hacker & Developer",
      aboutBio1: "Привет! Я AlexChai. Создаю практические интерактивные веб-приложения на стыке психологии, философии и финансовой продуктивности.",
      aboutBio2: "Моя миссия — облегчить процесс освоения и применения ценных знаний (философии, финансов, психологии) с помощью простых, красивых и понятных интерактивных приложений.",
      aboutBio3: "Все приложения создаются по главному принципу: Никакой рекламы • 100% Конфиденциальность • Мгновенный запуск прямо в браузере.",
      tgJoinText: "Подписывайтесь на Telegram-канал, чтобы первыми получать доступ к новым интерактивным приложениям!",
      tgButton: "Канал в Telegram ➔",

      footerPrivacy: "100% Конфиденциальность &bull; Ваши данные остаются только на вашем устройстве",
      launchApp: "🚀 Запустить PWA ➔",
      downloadApk: "📱 Скачать APK для Android",
      stayTuned: "Анонс Скоро в Telegram 💬",

      card01Title: "01. ПРИНЦИП ПРАКТИКИ",
      card02Title: "02. ФИЛОСОФИЯ УСПЕХА",
      card03Title: "03. ГАРАНТИЯ ПРИВАТНОСТИ",
    },

    en: {
      navSubtitle: "Interactive web applications at the intersection of psychology, mindset & financial productivity",
      heroBadge: "Official Application Hub • AlexChai",
      heroTitlePart1: "Interactive Systems ",
      heroTitlePart2: "Productivity & Mindset",
      heroDesc: "Every application is a ready-to-use digital framework turning fundamental laws of psychology, mindset, and financial capital into daily practice.",
      
      categories: {
        all: "All Projects",
        productivity: "🌱 Productivity & Discipline",
        psychology: "🧠 Psychology & Mindset",
        finance: "💰 Finance & Capital"
      },

      apps: [
        {
          id: 'rohn-system',
          title: 'The Rohn System',
          subtitle: 'Personal Effectiveness Operating System • Jim Rohn Philosophy',
          category: 'productivity',
          status: 'live',
          statusText: '🟢 PUBLISHED (LIVE)',
          link: 'https://the-rohn-system.vercel.app',
          desc: 'Interactive system inspired by Jim Rohn\'s legendary 1981 seminar "The Challenge to Succeed" (Anaheim, California). Turns daily disciplines into an inevitable harvest of success: 70/30 Capital Allocation, Law of Sowing, Reframing regrets, 30-min reading timer, 24h planner, and Goal Pyramid.',
          features: [
            '70/30 Capital Allocation Formula',
            'Sowing Field & Harvest Simulator',
            'Reframing Regrets into Wisdom',
            '30-Min Wisdom Timer & Journal',
            '24h Planner (Major/Minor Tasks)',
            '5 Finger Environment Audit',
            'Goal Pyramid with Identity Shift'
          ],
          icon: Sprout,
          color: 'amber'
        },
        {
          id: 'mind-matrix',
          title: 'Mind Matrix',
          subtitle: 'Interactive Neural Habit Tracker & Emotional Resilience System',
          category: 'psychology',
          status: 'coming_soon',
          statusText: '⏳ IN DEVELOPMENT (COMING SOON)',
          link: null,
          desc: 'Visualize the formation of new neural pathways as an interactive 3D network. Spaced repetition algorithm for mindset anchors, dopamine tracking, and focus trigger analysis.',
          features: [
            '3D Neural Connection Graph',
            'Dopamine & Trigger Tracker',
            'Spaced Repetition Mindset Anchors',
            'Emotional Balance Monitor'
          ],
          icon: Brain,
          color: 'cyan'
        },
        {
          id: 'capital-flow',
          title: 'Capital Flow 3.0',
          subtitle: 'Financial Independence & Compound Interest Simulator',
          category: 'finance',
          status: 'coming_soon',
          statusText: '⏳ IN DEVELOPMENT (COMING SOON)',
          link: null,
          desc: 'Calculate the exact date of your financial independence considering inflation, 30% capital allocation, and compound interest growth via the Rule of 72.',
          features: [
            'Compound Interest Simulator',
            'Inflation Shield Calculator',
            'Passive Income Allocation Matrix',
            'Financial Freedom Roadmap'
          ],
          icon: DollarSign,
          color: 'emerald'
        }
      ],

      aboutTitle: "About the Developer — ",
      aboutAuthorName: "AlexChai",
      aboutBadge: "</> Indie Hacker & Developer",
      aboutBio1: "Hello! I am AlexChai. I build practical interactive web applications at the intersection of psychology, philosophy, and financial productivity.",
      aboutBio2: "My mission is to simplify learning and applying key concepts (philosophy, finance, psychology) through simple, beautiful, and interactive web applications.",
      aboutBio3: "Every app is built with a core promise: No ads • 100% Client-side privacy • Instant launch directly in your browser.",
      tgJoinText: "Join my Telegram channel to get first access to new interactive applications and effectiveness frameworks!",
      tgButton: "Telegram Channel ➔",

      footerPrivacy: "100% Client-side Privacy &bull; All data stays exclusively on your device",
      launchApp: "🚀 Launch PWA App ➔",
      downloadApk: "📱 Download Android APK",
      stayTuned: "Announcement Soon in Telegram 💬",

      card01Title: "01. PRACTICE PRINCIPLE",
      card02Title: "02. SUCCESS PHILOSOPHY",
      card03Title: "03. PRIVACY GUARANTEE",
    }
  };

  const t = content[lang] || content.ru;

  const filteredApps = t.apps.filter(app => {
    if (activeTab === 'all') return true;
    return app.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 3D Cyber Ambient Spotlights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10">

        {/* HEADER / NAVIGATION BAR */}
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            
            {/* Logo & Monogram */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-950 border border-amber-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.25)] relative overflow-hidden group">
                <img 
                  src="/avatars/avatar1.jpg" 
                  alt="AlexChai Cyber Logo" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold tracking-tight text-slate-100 font-sans">
                    AlexChai <span className="text-amber-400 font-serif italic font-normal">| Apps</span>
                  </h1>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  {t.navSubtitle}
                </p>
              </div>
            </div>

            {/* Donate / Support Button & Language Switcher & Telegram CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Support Button */}
              <button
                onClick={() => setIsDonateOpen(true)}
                className="flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 transition-all shadow-sm shrink-0 cursor-pointer active:scale-95 text-center"
                title={lang === 'en' ? 'Support Project' : 'Поддержать проект'}
              >
                <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-bold">{lang === 'en' ? 'Support' : 'Поддержать'}</span>
              </button>

              {/* Language Switcher */}
              <div className="flex items-center gap-0.5 bg-slate-900 border border-slate-800 p-0.5 sm:p-1 rounded-xl shadow-inner shrink-0">
                <Globe className="w-3.5 h-3.5 text-amber-400 ml-1 mr-0.5 hidden sm:inline" />
                <button
                  onClick={() => setLang('ru')}
                  className={`px-1.5 sm:px-2 py-1 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                    lang === 'ru' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-1.5 sm:px-2 py-1 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                    lang === 'en' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ENG
                </button>
              </div>

              {/* Round Telegram Favicon Button */}
              <a
                href="https://t.me/alexchai_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2AABEE] hover:bg-[#229ED9] hover:scale-105 text-white flex items-center justify-center shadow-md shadow-sky-500/25 transition-all shrink-0 active:scale-95 border border-sky-300/30 cursor-pointer"
                title={lang === 'en' ? 'Contact Author (Telegram @alexchai_dev)' : 'Связь с автором (Telegram @alexchai_dev)'}
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white -translate-x-[0.5px] translate-y-[0.5px]" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-1 .54-1.42.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.88 8.01-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.07.01.24 0 .38z"/>
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold shadow-lg amber-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
            <span className="block mb-1">{t.heroTitlePart1.trim()}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              {t.heroTitlePart2.trim()}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300 font-normal leading-relaxed">
            {t.heroDesc}
          </p>

          {/* Privacy & Speed Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Privacy Client-Side</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Zero Install • Browser Instant</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Smartphone className="w-4 h-4 text-sky-400" />
              <span>PWA Mobile Ready</span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 px-1 no-scrollbar">
            {Object.keys(t.categories).map((catKey) => {
              const isActive = activeTab === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveTab(catKey)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]'
                      : 'bg-slate-900 text-slate-300 hover:text-slate-100 hover:bg-slate-850 border border-slate-800'
                  }`}
                >
                  {t.categories[catKey]}
                </button>
              );
            })}
          </div>
        </section>

        {/* APPLICATIONS CATALOG GRID */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => {
              const Icon = app.icon;
              const isLive = app.status === 'live';

              return (
                <div
                  key={app.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl card-gradient relative overflow-hidden group"
                >
                  {/* Top Status & Icon */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className={`text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full border shrink-0 ${
                        isLive 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {app.statusText}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                        {app.title}
                      </h3>
                      <p className="text-xs text-amber-400 font-medium mt-0.5">
                        {app.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {app.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {app.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                    {isLive && (
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95 text-sm uppercase tracking-wider"
                      >
                        <span>{t.launchApp}</span>
                        <ExternalLink className="w-4.5 h-4.5" />
                      </a>
                    )}
                    {!isLive && (
                      <a
                        href={lang === 'en' ? "https://t.me/jim_rohn_apps" : "https://t.me/jim_rohn_system"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-sky-300 font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all border border-slate-800 hover:border-sky-500/40 text-xs"
                      >
                        <Send className="w-4 h-4 text-sky-400" />
                        <span>{t.stayTuned}</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ULTRA-LUXURY REDESIGNED DEVELOPER SECTION: About AlexChai */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 md:p-12 shadow-2xl card-gradient relative overflow-hidden space-y-8">
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-6 pb-8 border-b border-slate-800/80">
              
              {/* 3D Glowing Creator Emblem & Golden Typography Header */}
              <div className="flex flex-col items-center md:flex-row gap-4 md:gap-5">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
                  
                  <div className="relative w-20 h-20 md:w-20 md:h-20 rounded-3xl bg-slate-950 border-2 border-amber-400/80 flex items-center justify-center shadow-2xl overflow-hidden">
                    <img 
                      src="/avatars/alexchai_photo.jpg" 
                      alt="AlexChai Creator Avatar" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>{t.aboutBadge}</span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-sans font-extrabold tracking-tight text-slate-100">
                    {t.aboutTitle}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                      {t.aboutAuthorName}
                    </span>
                  </h2>
                </div>
              </div>

              {/* Telegram Channel CTA */}
              <a
                href="https://t.me/alexchai_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-slate-950 font-extrabold text-sm flex items-center gap-2.5 shadow-xl transition-all active:scale-95 border border-sky-300/40 shrink-0"
              >
                <Send className="w-4.5 h-4.5" />
                <span>{lang === 'en' ? '💬 Contact Author & Feedback' : '💬 Связь с автором и отзывы'}</span>
              </a>
            </div>

            {/* Author Bio Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed font-normal">
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider">{t.card01Title}</div>
                <p>{t.aboutBio1}</p>
              </div>
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider">{t.card02Title}</div>
                <p>{t.aboutBio2}</p>
              </div>
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider">{t.card03Title}</div>
                <p>{t.aboutBio3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-400 font-mono">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p dangerouslySetInnerHTML={{ __html: t.footerPrivacy }} />
            <p className="text-slate-400">
              AlexChai Interactive Apps © {new Date().getFullYear()} • Built with React & TailwindCSS
            </p>
          </div>
        </footer>

        {/* Donate & Support Modal */}
        {isDonateOpen && (
          <DonateModal
            isOpen={isDonateOpen}
            onClose={() => setIsDonateOpen(false)}
            lang={lang}
          />
        )}

        <Analytics />
      </div>
    </div>
  );
}
