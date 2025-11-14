import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioProjects = [
    {
      title: 'Премиум E-commerce',
      category: 'Интернет-магазин',
      image: 'https://cdn.poehali.dev/projects/14691bce-84af-46cd-8064-05ef986d1312/files/fcfe12d1-2bcb-4be7-947f-1d83b6ce988a.jpg',
      description: 'Элегантный интернет-магазин премиум-сегмента'
    },
    {
      title: 'Корпоративный сайт',
      category: 'Веб-дизайн',
      image: 'https://cdn.poehali.dev/projects/14691bce-84af-46cd-8064-05ef986d1312/files/cdec835b-e06d-4a02-86b3-d8e1acdaf62a.jpg',
      description: 'Минималистичный корпоративный дизайн'
    },
    {
      title: 'Брендинг',
      category: 'Айдентика',
      image: 'https://cdn.poehali.dev/projects/14691bce-84af-46cd-8064-05ef986d1312/files/865d3c1a-dee1-4902-af6d-6e3139911a8a.jpg',
      description: 'Комплексная разработка фирменного стиля'
    }
  ];

  const services = [
    {
      icon: 'Layout',
      title: 'Веб-дизайн',
      description: 'Создание уникальных интерфейсов с фокусом на пользовательский опыт'
    },
    {
      icon: 'Palette',
      title: 'Брендинг',
      description: 'Разработка визуальной идентичности и фирменного стиля'
    },
    {
      icon: 'Smartphone',
      title: 'UI/UX дизайн',
      description: 'Проектирование интуитивных интерфейсов для веб и мобильных приложений'
    },
    {
      icon: 'Zap',
      title: 'Прототипирование',
      description: 'Быстрое создание интерактивных прототипов для тестирования идей'
    }
  ];

  const testimonials = [
    {
      name: 'Михаил Петров',
      company: 'CEO, TechStart',
      text: 'Андрей создал для нас невероятный сайт. Профессионализм на высшем уровне.',
      rating: 5
    },
    {
      name: 'Елена Соколова',
      company: 'Основатель, BeautyLux',
      text: 'Работа выполнена безупречно. Все пожелания учтены, результат превзошел ожидания.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      company: 'Директор, FinanceGroup',
      text: 'Сотрудничество с Андреем — это гарантия качества. Рекомендую всем.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold tracking-tight" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>
              Андрей Зюзин
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'portfolio', 'services', 'about', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Создаю сайты,<br />которые продают
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Премиум веб-дизайн для бизнеса, который ценит качество
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="text-lg px-8">
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Избранные проекты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://азюзин.рф"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
            >
              Посмотреть все работы
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Что я предлагаю</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Обо мне</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Я Андрей Зюзин — веб-дизайнер из Москвы с фокусом на создание премиальных
                цифровых продуктов для требовательных клиентов.
              </p>
              <p>
                Моя специализация — разработка уникальных интерфейсов, которые не только
                визуально впечатляют, но и решают бизнес-задачи. Каждый проект — это
                индивидуальный подход и внимание к деталям.
              </p>
              <p>
                Работаю с компаниями, которые понимают ценность качественного дизайна и
                готовы инвестировать в развитие своего бренда.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="text-lg">Москва, Россия</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Award" size={24} className="text-primary" />
                <span className="text-lg">8+ лет опыта</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Users" size={24} className="text-primary" />
                <span className="text-lg">50+ проектов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Обсудим проект?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Оставьте заявку, и я свяжусь с вами в течение 24 часов
            </p>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@azyuzin.ru"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-lg font-medium"
                >
                  <Icon name="Mail" size={24} />
                  contact@azyuzin.ru
                </a>
                <a
                  href="tel:+74951234567"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-lg font-medium"
                >
                  <Icon name="Phone" size={24} />
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex gap-6 justify-center pt-8">
                <a
                  href="https://t.me/azyuzin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon name="Send" size={24} />
                </a>
                <a
                  href="https://wa.me/74951234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2024 Андрей Зюзин. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="https://азюзин.рф" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Портфолио
              </a>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
