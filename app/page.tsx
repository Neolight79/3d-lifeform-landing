export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <header className="flex items-center justify-between whitespace-nowrap nav-blur rounded-full px-8 py-3">
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-white text-xl font-black tracking-tight font-display uppercase">
                3D - ФОРМА ЖИЗНИ
              </span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a
                className="text-slate-400 hover:text-white text-sm font-semibold transition-colors"
                href="#"
              >
                Главная
              </a>
              <a
                className="text-slate-400 hover:text-white text-sm font-semibold transition-colors"
                href="#about"
              >
                О компании
              </a>
              <a
                className="text-slate-400 hover:text-white text-sm font-semibold transition-colors"
                href="#services"
              >
                Услуги
              </a>
              <a
                className="text-slate-400 hover:text-white text-sm font-semibold transition-colors"
                href="#news"
              >
                Блог
              </a>
              <a
                className="text-slate-400 hover:text-white text-sm font-semibold transition-colors"
                href="#contact"
              >
                Контакты
              </a>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-105 active:scale-95">
              Заказать 3D
            </button>
          </header>
        </div>
      </nav>
      <main>
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 render-container">
            <img
              alt="High-Res 3D Geometric Object with Internal Light"
              className="w-full h-full object-cover object-right"
              src="/images/luminous_structure.jpg"
            />
          </div>
          <div className="absolute inset-0 hero-gradient-overlay z-[1]"></div>
          <div className="absolute inset-0 dof-blur z-[2]"></div>
          <div className="relative w-full max-w-[1200px] z-10">
            <div className="max-w-3xl flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#00F2FF]"></span>
                  <span className="text-accent-cyan font-bold tracking-[0.3em] text-sm uppercase">
                    Аддитивное производство нового поколения
                  </span>
                </div>
                <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                  БУДУЩЕЕ <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
                    ОБРЕТАЕТ
                  </span>{" "}
                  <br /> ФОРМУ
                </h1>
                <p className="text-slate-300 text-lg md:text-2xl font-normal max-w-xl leading-relaxed mt-6">
                  Передовые технологии 3D-печати и моделирования для ваших идей.
                  Чистые и профессиональные решения для визионеров.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 mt-4">
                <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg glow-accent hover:bg-primary/90 transition-all transform hover:-translate-y-1">
                  Создать модель
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Наш процесс
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
            <span className="text-xs uppercase tracking-widest font-bold">Листать вниз</span>
            <span className="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
          </div>
        </section>
        <section className="py-32 px-6 bg-obsidian" id="services">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                  Наши компетенции
                </span>
                <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
                  Наши услуги
                </h2>
                <p className="text-slate-400 text-lg">
                  Мы сокращаем путь от цифрового дизайна до физической реальности с помощью
                  передовых материалов и высокоточного сканирования.
                </p>
              </div>
              <a
                className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group text-lg"
                href="#"
              >
                Все услуги <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="service-card p-10 rounded-2xl flex flex-col gap-8 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                  <span className="material-symbols-outlined text-3xl">token</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">Проектирование</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Быстрое итеративное проектирование для разработки промышленного оборудования
                    и прототипов.
                  </p>
                </div>
              </div>
              <div className="service-card p-10 rounded-2xl flex flex-col gap-8 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">3D Сканирование</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Высокоточное сканирование органических форм с точностью до микрона для
                    медицины и дизайна.
                  </p>
                </div>
              </div>
              <div className="service-card p-10 rounded-2xl flex flex-col gap-8 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">FDM Печать</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Послойная печать крупногабаритных деталей промышленного назначения и оснастки.
                  </p>
                </div>
              </div>
              <div className="service-card p-10 rounded-2xl flex flex-col gap-8 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                  <span className="material-symbols-outlined text-3xl">layers</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">SLA Печать</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Высокоточная фотополимерная печать для создания моделей с идеальной поверхностью.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-6 bg-[#0E1218]" id="about">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    alt="Современная лаборатория 3D-печати"
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                    src="/images/about.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <p className="text-accent-cyan font-black text-6xl mb-1">12+</p>
                    <p className="text-white/80 text-sm uppercase tracking-[0.2em] font-bold">
                      Мировых патентов
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                  О лаборатории
                </span>
                <h2 className="text-white text-5xl md:text-6xl font-black mb-10 leading-tight tracking-tighter uppercase">
                  НАША ИСТОРИЯ
                </h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed">
                  <p>
                    Наша миссия сосредоточена на пересечении высоких технологий и органической
                    геометрии. Мы раздвигаем границы возможного в аддитивном производстве, объединяя
                    генеративный дизайн с передовой наукой о материалах.
                  </p>
                  <p>
                    Основанная в 2021 году, студия «Форма Жизни» стала ведущим центром для творцов,
                    которым не нужен компромисс между эстетикой и конструктивной целостностью.
                  </p>
                  <div className="pt-8 border-t border-white/10 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="text-white font-semibold">Геометрическая точность 99.9%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="text-white font-semibold">Собственные композитные материалы</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="text-white font-semibold">Полная защита ваших CAD-файлов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-6 bg-obsidian" id="news">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                Инсайты индустрии
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4 uppercase">
                Новости технологий
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Последние обновления из лаборатории и новые знаковые коллаборации в мире 3D-печати.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group cursor-pointer bg-white/5 p-5 rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/images/news-1.jpg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest shadow-lg">
                      Инновации
                    </span>
                  </div>
                </div>
                <span className="text-slate-500 text-xs font-bold mb-3 block">12 Октября, 2023</span>
                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                  Аэрокосмический проект: Снижение веса конструкций
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  Как мы достигли снижения веса конструкции на 40% для шасси орбитальных спутников.
                </p>
              </div>
              <div className="group cursor-pointer bg-white/5 p-5 rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/images/news-2.jpg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-cyan text-obsidian text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest shadow-lg">
                      Лаборатория
                    </span>
                  </div>
                </div>
                <span className="text-slate-500 text-xs font-bold mb-3 block">5 Ноября, 2023</span>
                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                  DMLS: Будущее прямого лазерного спекания металлов
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  Технология DMLS разрушает барьеры традиционных методов литья металлов.
                </p>
              </div>
              <div className="group cursor-pointer bg-white/5 p-5 rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/images/news-3.jpg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest shadow-lg">
                      Кейс
                    </span>
                  </div>
                </div>
                <span className="text-slate-500 text-xs font-bold mb-3 block">20 Ноября, 2023</span>
                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                  Биосинтетические структуры в современной архитектуре
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  Изучение интеграции органических 3D-форм в экологически устойчивые здания.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-6 bg-obsidian" id="contact">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="bg-white/5 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row border border-white/10">
              <div className="lg:w-1/2 p-12 lg:p-20">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                  Обсудим проект?
                </span>
                <h2 className="text-white text-4xl font-black mb-10 uppercase">Связаться с нами</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                        Ваше имя
                      </label>
                      <input
                        className="glass-input rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                        placeholder="Имя или Название компании"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                        Email
                      </label>
                      <input
                        className="glass-input rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                        placeholder="hello@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                      Тип услуги
                    </label>
                    <select className="glass-input rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                      <option className="bg-obsidian">Проектирование и прототипы</option>
                      <option className="bg-obsidian">Промышленная 3D печать</option>
                      <option className="bg-obsidian">3D Сканирование</option>
                      <option className="bg-obsidian">Индивидуальное моделирование</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                      Ваш проект...
                    </label>
                    <textarea
                      className="glass-input rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-slate-600"
                      placeholder="Опишите ваши требования и сроки..."
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg glow-accent mt-4"
                    type="submit"
                  >
                    ОТПРАВИТЬ ЗАПРОС <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
              <div className="lg:w-1/2 relative min-h-[500px]">
                <div className="absolute inset-0">
                  <img
                    alt="Карта расположения студии"
                    className="w-full h-full object-cover grayscale brightness-50 contrast-125"
                    src="/images/map.jpg"
                  />
                </div>
                <div className="relative h-full flex flex-col justify-end p-12 lg:p-20 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-white font-black text-2xl mb-2 uppercase tracking-tight">
                        Студия в Москве
                      </h3>
                      <p className="text-slate-400 font-medium text-lg leading-relaxed">
                        ул. Ленинская Слобода, 19 <br /> Москва 115280, Россия
                      </p>
                    </div>
                    <div>
                      <h3 className="text-white font-black text-2xl mb-2 uppercase tracking-tight">
                        Связь 24/7
                      </h3>
                      <p className="text-primary font-bold text-xl hover:underline cursor-pointer">
                        hello@lifeform.ru
                      </p>
                    </div>
                    <div className="flex gap-5 pt-4">
                      <a
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-xl">language</span>
                      </a>
                      <a
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-xl">share</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-16 px-6 border-t border-white/5 bg-obsidian">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-slate-500 text-sm tracking-[0.2em] font-bold uppercase">
              © 2024 3D - ФОРМА ЖИЗНИ
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <a
              className="text-slate-500 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
              href="#"
            >
              Конфиденциальность
            </a>
            <a
              className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
              href="#"
            >
              Условия использования
            </a>
            <a
              className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
              href="#"
            >
              Инструкции
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
