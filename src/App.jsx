import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { 
  Sparkles, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Sprout, 
  Database, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  Globe,
  Code2,
  HelpCircle,
  Lightbulb,
  Trophy,
  Coffee,
  Activity
} from 'lucide-react';
import DonateModal from './components/DonateModal';

const getInitialHubLang = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'ua' || urlLang === 'ru') return urlLang;

    const saved = localStorage.getItem('alexchai_hub_lang_v4');
    if (saved) return saved;

    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (userLang.startsWith('uk') || userLang.startsWith('ua')) return 'ua';
    if (userLang.startsWith('ru') || userLang.startsWith('be')) return 'ru';
    return 'ua';
  } catch (e) {
    return 'ua';
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [lang, setLangState] = useState(getInitialHubLang);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const setLang = (newLang) => {
    setLangState(newLang);
    try { localStorage.setItem('alexchai_hub_lang_v4', newLang); } catch (e) {}
  };

  const content = {
    ua: {
      navSubtitle: "Інтерактивні веб-системи, PWA-додатки та Telegram Mini Apps",
      heroBadge: "AI Product Builder • Rapid MVP Development",
      heroH1: "Створюю інтерактивні системи, швидкі PWA та Telegram-боти.",
      heroSub: "Перетворюю ідеї на працюючі MVP за 24 години. AI Product Builder.",
      ctaOrder: "Замовити MVP ➔",
      
      labelProblem: "Проблема:",
      labelSolution: "Рішення:",
      labelResult: "Результат:",

      categories: {
        all: "Всі Проєкти",
        ai: "🧠 ШІ-Екосистеми & TWA",
        web3: "⚡ Web3 & MCP-Протоколи",
        productivity: "🌱 Продуктивність & PWA"
      },

      casesSectionTitle: "Портфоліо Рішень (Кейси)",
      casesSectionSub: "Кожен проект — це працюючий MVP з чітко розв'язаною бізнес-проблемою",

      cases: [
        {
          id: 'neirostudio-ai',
          title: 'NeiroStudio AI 2.0',
          subtitle: 'Мультимодальна 10-в-1 Екосистема ШІ-інструментів',
          category: 'ai',
          statusText: '🟢 ОПУБЛІКОВАНО (LIVE)',
          link: 'https://neirostudio-hub-v2.vercel.app',
          icon: Sparkles,
          color: 'amber',
          problem: 'Завищені ціни, повільні сервери та складний поріг входження для створення 3D YouTube-обкладинок, вірусних SMM-текстів та бізнес-ілюстрацій.',
          solution: 'Мультимодальний Telegram Mini App з 10 AI-інструментами (YouTube 16:9 3D Studio, NVIDIA Nemotron Copywriter, DeepSeek-R1 STEM Solver, E-Commerce Studio, Business Avatar 8K).',
          result: 'Подвійний 3D-двигун на базі надшвидкого Fal.ai FLUX Schnell та HMAC-SHA256 анти-чит захистом.',
          features: [
            '🚀 Dual 3D AI Engine (1.2 сек Fal.ai FLUX Schnell 8K)',
            '🎬 YouTube Studio (16:9 3D Обкладинки + Векторний текст)',
            '🤖 NVIDIA Nemotron-70B SMM Copywriter (AIDA структура)',
            '📐 DeepSeek-R1 STEM Math & Physics Solver (NVIDIA H100 GPU)',
            '🛍️ E-Commerce 3D Studio & Michelin Food Styling',
            '💼 Business Avatar 8K & Real Estate 3D Staging',
            '📦 Amazon KDP Sticker Generator & HD Proxy Download',
            '⭐️ Монетизація Telegram Stars (94% маржі)'
          ]
        },
        {
          id: 'x402-datahub',
          title: 'x402 Data Hub',
          subtitle: 'Автономний MCP-сервер з Web3-мікроплатежами на Cloudflare Workers',
          category: 'web3',
          statusText: '🟢 ОПУБЛІКОВАНО (LIVE)',
          link: 'https://x402datahub.io',
          icon: Database,
          color: 'cyan',
          problem: 'Складність монетизації та інтеграції Web3-мікроплатежів для автоматичних ШІ-агентів та аналітичних сервісів.',
          solution: 'Автономний протокол даних та MCP-сервер (Model Context Protocol) на базі Cloudflare Workers з автоматичною обробкою мікроплатежів x402.',
          result: 'Миттєві платіжні транзакції, безперебійний доступ до структурованих аналітичних даних та інтеграція з AI-агентами.',
          features: [
            '🌐 Інтеграція сервера Model Context Protocol (MCP)',
            '⚡ Інфраструктура Cloudflare Workers Edge',
            '💎 Автоматизовані мікроплатежі x402 Web3',
            '📊 Високопродуктивні аналітичні API-ендпоінти',
            '🤖 Нативна сумісність з AI-агентами та LLM'
          ]
        },
        {
          id: 'rohn-system',
          title: 'The Jim Rohn System',
          subtitle: 'PWA-операційна система особистої ефективності за філософією Джима Рона',
          category: 'productivity',
          statusText: '🟢 ОПУБЛІКОВАНО (LIVE)',
          link: 'https://the-rohn-system.vercel.app',
          icon: Sprout,
          color: 'amber',
          problem: 'Перевантажені нудні трекери звичок з рекламним сміттям та низьким показником щоденного утримання користувачів.',
          solution: 'Інтерактивна PWA-система особистої ефективності за філософією Джима Рона (Формула 70/30, Поле Сева, Денний 24г планер, Таймер читання).',
          result: '100% локальна приватність даних на пристрої користувача, миттєве завантаження без інсталяції та висока залученість.',
          features: [
            '🌱 Формула розподілу капіталу 70/30',
            '🌾 Поле Сева та симулятор норми втрат',
            '🔥 Модуль переплавки помилок у досвід',
            '📖 30-хвилинний таймер читання & щоденник',
            '⏱️ Планувальник 24 години (Major/Minor)',
            '🖐️ Аудит оточення 5 пальців',
            '🏛️ Піраміда цілей з трансформацією особистості'
          ]
        }
      ],

      aboutTitle: "Про Автора — ",
      aboutAuthorName: "AlexChai",
      aboutBadge: "</> Indie Hacker & AI Product Builder",
      aboutBio1: "Вітаю! Я AlexChai. Спеціалізуюся на швидкій розробці працюючих MVP за 24 години: від інтерактивних PWA-додатків до Telegram Mini Apps та AI-інструментів.",
      aboutBio2: "Моя місія — створювати швидкі, красиві та надійні цифрові продукти, які розв'язують конкретні бізнес-задачі та приносять цінність користувачам.",
      aboutBio3: "Головний принцип роботи: 0% зайвої бюрократії • 100% Конфіденційність • Робочий результат за 24 години • Чистий та масштабований код.",
      
      launchApp: "🚀 ЗАПУСТИТИ PWA / MVP ➔",
      footerPrivacy: "100% Конфіденційність &bull; Ваші дані залишаються тільки на вашому пристрої",

      card01Title: "01. ПРИНЦИП ПРАКТИКИ",
      card02Title: "02. ФІЛОСОФІЯ РОЗРОБКИ",
      card03Title: "03. ГАРАНТІЯ ЯКОСТІ",
    },

    ru: {
      navSubtitle: "Интерактивные веб-системы, PWA-приложения и Telegram Mini Apps",
      heroBadge: "AI Product Builder • Rapid MVP Development",
      heroH1: "Создаю интерактивные системы, быстрые PWA и Telegram-боты.",
      heroSub: "Превращаю идеи в работающие MVP за 24 часа. AI Product Builder.",
      ctaOrder: "Заказать MVP ➔",
      
      labelProblem: "Проблема:",
      labelSolution: "Решение:",
      labelResult: "Результат:",

      categories: {
        all: "Все Проекты",
        ai: "🧠 ИИ-Экосистемы & TWA",
        web3: "⚡ Web3 & MCP-Протоколы",
        productivity: "🌱 Продуктивность & PWA"
      },

      casesSectionTitle: "Портфолио Решений (Кейсы)",
      casesSectionSub: "Каждый проект — это рабочий MVP с четко решенной бизнес-проблемой",

      cases: [
        {
          id: 'neirostudio-ai',
          title: 'NeiroStudio AI 2.0',
          subtitle: 'Мультимодальная 10-в-1 Экосистема ИИ-инструментов',
          category: 'ai',
          statusText: '🟢 ОПУБЛИКОВАНО (LIVE)',
          link: 'https://neirostudio-hub-v2.vercel.app',
          icon: Sparkles,
          color: 'amber',
          problem: 'Завышенные цены, медленные серверы и сложный порог входа для создания 3D YouTube-обложек, вирусных SMM-текстов и бизнес-иллюстраций.',
          solution: 'Мультимодальный Telegram Mini App с 10 AI-инструментами (YouTube 16:9 3D Studio, SMM Copywriter, DeepSeek-R1 STEM Solver, E-Commerce Studio, Business Avatar 8K).',
          result: 'Двойной 3D-движок на базе сверхбыстрого Fal.ai FLUX Schnell и HMAC-SHA256 анти-чит защитой.',
          features: [
            '🚀 Dual 3D AI Engine (1.2 сек Fal.ai FLUX Schnell 8K)',
            '🎬 YouTube Studio (16:9 3D Обложки + Векторный текст)',
            '🤖 SMM Copywriter (AIDA структура)',
            '📐 DeepSeek-R1 STEM Math & Physics Solver (NVIDIA H100 GPU)',
            '🛍️ E-Commerce 3D Studio & Michelin Food Styling',
            '💼 Business Avatar 8K & Real Estate 3D Staging',
            '📦 Amazon KDP Sticker Generator & HD Proxy Download',
            '⭐️ Монетизация Telegram Stars (94% маржи)'
          ]
        },
        {
          id: 'x402-datahub',
          title: 'x402 Data Hub',
          subtitle: 'Автономный MCP-сервер с Web3-микроплатежами на Cloudflare Workers',
          category: 'web3',
          statusText: '🟢 ОПУБЛИКОВАНО (LIVE)',
          link: 'https://x402datahub.io',
          icon: Database,
          color: 'cyan',
          problem: 'Сложность монетизации и интеграции Web3-микроплатежей для автоматических ИИ-агентов и аналитических сервисов.',
          solution: 'Автономный протокол данных и MCP-сервер (Model Context Protocol) на базе Cloudflare Workers с автоматической обработкой микроплатежей x402.',
          result: 'Мгновенные платежные транзакции, бесперебойный доступ к структурированным аналитическим данным и интеграция с AI-агентами.',
          features: [
            '🌐 Интеграция сервера Model Context Protocol (MCP)',
            '⚡ Инфраструктура Cloudflare Workers Edge',
            '💎 Автоматизированные микроплатежи x402 Web3',
            '📊 Высокопроизводительные аналитические API-эндпоинты',
            '🤖 Нативная совместимость с AI-агентами и LLM'
          ]
        },
        {
          id: 'rohn-system',
          title: 'The Jim Rohn System',
          subtitle: 'PWA-операционная система личной эффективности по философии Джима Рона',
          category: 'productivity',
          statusText: '🟢 ОПУБЛИКОВАНО (LIVE)',
          link: 'https://the-rohn-system.vercel.app',
          icon: Sprout,
          color: 'amber',
          problem: 'Перегруженные трекеры привычек с рекламным мусором и низким показателем удержания пользователей.',
          solution: 'Интерактивная PWA-система личной эффективности по философии Джима Рона (Формула 70/30, Поле Сева, Дневной 24ч планер, Таймер чтения).',
          result: '100% локальная приватность данных на устройстве пользователя, мгновенный запуск без установки и высокая вовлеченность.',
          features: [
            '🌱 Формула распределения капитала 70/30',
            '🌾 Поле Сева и симулятор нормы потерь',
            '🔥 Модуль переплавки ошибок в опыт',
            '📖 30-минутный таймер чтения & дневник',
            '⏱️ Планировщик 24 часа (Major/Minor)',
            '🖐️ Аудит окружения 5 пальцев',
            '🏛️ Пирамида целей с трансформацией личности'
          ]
        }
      ],

      aboutTitle: "Об Авторе — ",
      aboutAuthorName: "AlexChai",
      aboutBadge: "</> Indie Hacker & AI Product Builder",
      aboutBio1: "Привет! Я AlexChai. Специализируюсь на быстрой разработке рабочих MVP за 24 часа: от интерактивных PWA-приложений до Telegram Mini Apps и AI-инструментов.",
      aboutBio2: "Моя миссия — создавать быстрые, красивые и надежные цифровые продукты, которые решают конкретные бизнес-задачи и приносят ценность пользователям.",
      aboutBio3: "Главный принцип работы: 0% лишних слов • 100% Конфиденциальность • Рабочий результат за 24 часа • Чистый и масштабируемый код.",
      
      launchApp: "🚀 ЗАПУСТИТЬ PWA / MVP ➔",
      footerPrivacy: "100% Конфиденциальность &bull; Ваши данные остаются только на вашем устройстве",

      card01Title: "01. ПРИНЦИП ПРАКТИКИ",
      card02Title: "02. ФИЛОСОФИЯ РАЗРАБОТКИ",
      card03Title: "03. ГАРАНТИЯ КАЧЕСТВА",
    },

    en: {
      navSubtitle: "Interactive Web Systems, PWA Applications & Telegram Mini Apps",
      heroBadge: "AI Product Builder • Rapid MVP Development",
      heroH1: "Building interactive systems, fast PWAs, and Telegram bots.",
      heroSub: "Turning ideas into working MVPs in 24 hours. AI Product Builder.",
      ctaOrder: "Order MVP ➔",

      labelProblem: "Problem:",
      labelSolution: "Solution:",
      labelResult: "Result:",
      
      categories: {
        all: "All Projects",
        ai: "🧠 AI Ecosystems & TWA",
        web3: "⚡ Web3 & MCP Protocols",
        productivity: "🌱 Productivity & PWA"
      },

      casesSectionTitle: "Portfolio of Solutions (Case Studies)",
      casesSectionSub: "Every project is a working MVP with a clearly solved business problem",

      cases: [
        {
          id: 'neirostudio-ai',
          title: 'NeiroStudio AI 2.0',
          subtitle: 'Multimodal 10-in-1 AI Tools Ecosystem',
          category: 'ai',
          statusText: '🟢 PUBLISHED (LIVE)',
          link: 'https://neirostudio-hub-v2.vercel.app',
          icon: Sparkles,
          color: 'amber',
          problem: 'Overpriced subscriptions, slow generation servers, and high friction when creating 3D YouTube thumbnails and viral SMM content.',
          solution: 'Multimodal Telegram Mini App with 10 production AI tools (YouTube 16:9 3D Studio, SMM Copywriter, DeepSeek-R1 STEM Solver, E-Commerce Studio, Business Avatar 8K).',
          result: 'Dual 3D Engine powered by high-speed Fal.ai FLUX Schnell with HMAC-SHA256 anti-cheat validation.',
          features: [
            '🚀 Dual 3D AI Engine (1.2s Fal.ai FLUX Schnell 8K)',
            '🎬 YouTube Studio (16:9 3D Covers + Vector Text)',
            '🤖 SMM Copywriter (AIDA Structure)',
            '📐 DeepSeek-R1 STEM Math & Physics Solver (NVIDIA H100 GPU)',
            '🛍️ E-Commerce 3D Studio & Michelin Food Styling',
            '💼 Business Avatar 8K & Real Estate 3D Staging',
            '📦 Amazon KDP Sticker Generator & HD Proxy Download',
            '⭐️ Telegram Stars Monetization (94% Profit Margin)'
          ]
        },
        {
          id: 'x402-datahub',
          title: 'x402 Data Hub',
          subtitle: 'Autonomous MCP Server with Web3 Micro-Payments on Cloudflare Workers',
          category: 'web3',
          statusText: '🟢 PUBLISHED (LIVE)',
          link: 'https://x402datahub.io',
          icon: Database,
          color: 'cyan',
          problem: 'Complexity in integrating Web3 micro-payment monetization and analytical endpoints for AI Agents.',
          solution: 'Autonomous data protocol & MCP (Model Context Protocol) server built on Cloudflare Workers with automated x402 micro-payment settlement.',
          result: 'Instant payment transactions, zero-downtime structured analytics access, and native AI Agent compatibility.',
          features: [
            '🌐 Model Context Protocol (MCP) Server Integration',
            '⚡ Cloudflare Workers Edge Infrastructure',
            '💎 x402 Web3 Automated Micro-Payments',
            '📊 High-Throughput Data & Analytics Endpoints',
            '🤖 Native AI Agent & LLM Compatibility'
          ]
        },
        {
          id: 'rohn-system',
          title: 'The Jim Rohn System',
          subtitle: 'Personal Effectiveness Operating System • Jim Rohn Philosophy',
          category: 'productivity',
          statusText: '🟢 PUBLISHED (LIVE)',
          link: 'https://the-rohn-system.vercel.app',
          icon: Sprout,
          color: 'amber',
          problem: 'Bloated habit trackers with invasive ads and poor daily user retention.',
          solution: 'Interactive PWA system built on Jim Rohn\'s philosophy (70/30 Capital Formula, Sowing Simulator, 24h Planner, Wisdom Timer).',
          result: '100% client-side privacy, offline capability, zero install overhead, and high daily retention.',
          features: [
            '🌱 70/30 Capital Allocation Formula',
            '🌾 Sowing Field & Harvest Simulator',
            '🔥 Reframing Regrets into Wisdom',
            '📖 30-Min Wisdom Timer & Journal',
            '⏱️ 24h Planner (Major/Minor Tasks)',
            '🖐️ 5 Finger Environment Audit',
            '🏛️ Goal Pyramid with Identity Shift'
          ]
        }
      ],

      aboutTitle: "About the Developer — ",
      aboutAuthorName: "AlexChai",
      aboutBadge: "</> Indie Hacker & AI Product Builder",
      aboutBio1: "Hello! I am AlexChai. Specializing in rapid MVP development within 24 hours: from interactive PWAs to Telegram Mini Apps and AI tools.",
      aboutBio2: "My mission is to create fast, beautiful, and reliable digital products that solve concrete business problems and deliver real value.",
      aboutBio3: "Core philosophy: 0% fluff • 100% Privacy • Working result in 24 hours • Clean & scalable code architecture.",
      
      launchApp: "🚀 LAUNCH PWA / MVP ➔",
      footerPrivacy: "100% Client-side Privacy &bull; All data stays exclusively on your device",

      card01Title: "01. PRACTICE PRINCIPLE",
      card02Title: "02. DEVELOPMENT PHILOSOPHY",
      card03Title: "03. QUALITY GUARANTEE",
    }
  };

  const t = content[lang] || content.ua;

  const filteredApps = t.cases.filter(app => {
    if (activeTab === 'all') return true;
    return app.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 3D Premium Cyber Ambient Spotlights (Warm Gold/Amber + Deep Cyan) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10">

        {/* HEADER / NAVIGATION BAR */}
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            
            {/* Logo & Monogram */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-950 border border-amber-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.25)] relative overflow-hidden group">
                <img 
                  src="/avatars/avatar1.jpg" 
                  alt="AlexChai Logo" 
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

            {/* Support, Language Switcher & Telegram Contact CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Support Button */}
              <button
                onClick={() => setIsDonateOpen(true)}
                className="flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 transition-all shadow-sm shrink-0 cursor-pointer active:scale-95 text-center"
                title={lang === 'en' ? 'Support Project' : lang === 'ua' ? 'Підтримати проект' : 'Поддержать проект'}
              >
                <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-bold">{lang === 'en' ? 'Support' : lang === 'ua' ? 'Підтримати' : 'Поддержать'}</span>
              </button>

              {/* Language Switcher Button */}
              <button
                onClick={() => setIsLangModalOpen(true)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 transition-all cursor-pointer active:scale-95 shadow-sm shrink-0 flex items-center justify-center"
                title={lang === 'en' ? 'Select Language' : lang === 'ua' ? 'Оберіть мову' : 'Выберите язык'}
              >
                <Globe className="w-4 h-4 text-amber-400" />
              </button>

              {/* Telegram Round Button */}
              <a
                href="https://t.me/alexchai_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2AABEE] hover:bg-[#229ED9] hover:scale-105 text-white flex items-center justify-center shadow-md shadow-sky-500/25 transition-all shrink-0 active:scale-95 border border-sky-300/30 cursor-pointer"
                title="Telegram @alexchai_dev"
              >
                <Send className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 pt-10 pb-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold shadow-lg amber-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.heroBadge}</span>
          </div>

          {/* H1 strictly matching TZ */}
          <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
            <span className="block mb-1">{t.heroH1}</span>
          </h1>

          {/* Subtitle strictly matching TZ */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300 font-normal leading-relaxed">
            {t.heroSub}
          </p>

          {/* CTA Order MVP Button */}
          <div className="pt-2">
            <a
              href="https://t.me/alexchai_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Send className="w-4.5 h-4.5 text-slate-950" />
              <span>{t.ctaOrder}</span>
            </a>
          </div>

          {/* Privacy & Speed Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Client-Side Privacy</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>24h MVP Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Smartphone className="w-4 h-4 text-sky-400" />
              <span>PWA & Telegram Ready</span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-2 px-1">
            {Object.keys(t.categories).map((catKey) => {
              const isActive = activeTab === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveTab(catKey)}
                  className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center cursor-pointer flex items-center justify-center ${
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

        {/* CASE STUDIES GRID */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => {
              const Icon = app.icon;

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
                      <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shrink-0">
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

                    {/* Problem ➡️ Solution ➡️ Result Breakdown */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="p-2.5 rounded-xl bg-slate-950/70 border border-rose-500/20 space-y-0.5">
                        <div className="text-[10px] font-black text-rose-400 uppercase tracking-wider flex items-center gap-1">
                          <HelpCircle className="w-3 h-3" />
                          <span>{t.labelProblem}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">{app.problem}</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-0.5">
                        <div className="text-[10px] font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          <span>{t.labelSolution}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">{app.solution}</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 space-y-0.5">
                        <div className="text-[10px] font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          <span>{t.labelResult}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">{app.result}</p>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {app.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95 text-xs uppercase tracking-wider cursor-pointer"
                    >
                      <span>{t.launchApp}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DEVELOPER SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 md:p-12 shadow-2xl card-gradient relative overflow-hidden space-y-8">
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-6 pb-8 border-b border-slate-800/80">
              
              {/* Emblem & Typography */}
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
                <span>{lang === 'en' ? '💬 Contact Author & Feedback' : lang === 'ua' ? "💬 Зв'язок з автором та відгуки" : '💬 Связь с автором и отзывы'}</span>
              </a>
            </div>

            {/* Author Bio Grid */}
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

        {/* Support Modal */}
        {isDonateOpen && (
          <DonateModal
            isOpen={isDonateOpen}
            onClose={() => setIsDonateOpen(false)}
            lang={lang}
          />
        )}

        {/* LANGUAGE SELECTOR MODAL */}
        {isLangModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-5 max-w-xs w-full space-y-4 shadow-[0_0_60px_rgba(245,158,11,0.3)] relative">
              <button
                onClick={() => setIsLangModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="text-center">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-2 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Globe className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-100">
                  {lang === 'en' ? 'Select Language' : lang === 'ua' ? 'Оберіть мову' : 'Выберите язык'}
                </h3>
              </div>

              <div className="space-y-2">
                {[
                  { code: 'ua', label: 'Українська', flag: '🇺🇦' },
                  { code: 'en', label: 'English', flag: '🇺🇸' },
                  { code: 'ru', label: 'Русский', flag: '🌐' },
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangModalOpen(false);
                    }}
                    className={`w-full py-3 px-4 rounded-xl border font-bold text-xs flex items-center justify-between transition-all cursor-pointer ${
                      lang === l.code
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {lang === l.code && <span className="text-amber-400 font-bold text-sm">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <Analytics />
      </div>
    </div>
  );
}
