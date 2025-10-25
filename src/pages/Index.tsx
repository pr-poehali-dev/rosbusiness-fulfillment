import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Package',
      title: 'Приемка товара',
      description: 'Профессиональная приемка, проверка и размещение товара на складе'
    },
    {
      icon: 'Warehouse',
      title: 'Хранение',
      description: 'Современные складские помещения с оптимальными условиями хранения'
    },
    {
      icon: 'Truck',
      title: 'Комплектация и отгрузка',
      description: 'Быстрая сборка заказов и своевременная отправка по всей России'
    },
    {
      icon: 'BarChart3',
      title: 'Учет и отчетность',
      description: 'Полная прозрачность движения товара и онлайн-доступ к данным'
    }
  ];

  const advantages = [
    { number: '15000', label: 'м² складских площадей' },
    { number: '500+', label: 'обработанных заказов в день' },
    { number: '99.8%', label: 'точность комплектации' },
    { number: '24/7', label: 'мониторинг и контроль' }
  ];

  const tariffs = [
    {
      name: 'Старт',
      price: 'от 25 000 ₽',
      period: '/месяц',
      features: [
        'До 50 м² складской площади',
        'До 200 заказов в месяц',
        'Базовая упаковка',
        'Отчетность 1 раз в неделю'
      ]
    },
    {
      name: 'Бизнес',
      price: 'от 50 000 ₽',
      period: '/месяц',
      features: [
        'До 150 м² складской площади',
        'До 1000 заказов в месяц',
        'Индивидуальная упаковка',
        'Ежедневная отчетность',
        'Личный менеджер'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: 'Индивидуально',
      period: '',
      features: [
        'Безлимитная площадь',
        'Безлимитные заказы',
        'Премиум упаковка',
        'Онлайн отчетность 24/7',
        'Выделенная команда',
        'Интеграция с вашей системой'
      ]
    }
  ];

  const cases = [
    {
      company: 'Интернет-магазин "Техно"',
      result: 'Увеличение скорости обработки заказов на 300%',
      description: 'Перевод склада на аутсорсинг позволил сократить время доставки с 5 до 1.5 дней'
    },
    {
      company: 'Сеть магазинов "Спорт+"',
      result: 'Снижение затрат на логистику на 40%',
      description: 'Оптимизация складских процессов и маршрутизация доставки'
    },
    {
      company: 'Бренд одежды "Мода.ru"',
      result: 'Масштабирование в 3 региона за 6 месяцев',
      description: 'Гибкая система фулфилмента позволила быстро расширить географию продаж'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Package2" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">РосБизнесСклад</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-sm font-semibold hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm font-semibold hover:text-primary transition-colors">Преимущества</a>
            <a href="#tariffs" className="text-sm font-semibold hover:text-primary transition-colors">Тарифы</a>
            <a href="#cases" className="text-sm font-semibold hover:text-primary transition-colors">Кейсы</a>
            <a href="#contacts" className="text-sm font-semibold hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1A1F2C] to-[#2A3F5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Профессиональный фулфилмент для вашего бизнеса
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in">
              Надежное хранение, быстрая обработка и доставка заказов по всей России. Сосредоточьтесь на развитии бизнеса, а логистику доверьте нам.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <a href="#form">Оставить заявку</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <a href="#services">Узнать больше</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              РосБизнесСклад — современный фулфилмент-оператор с 2015 года. Мы предоставляем полный спектр складских услуг для интернет-магазинов и производителей. Наши склады оснащены современным оборудованием, а команда профессионалов обеспечивает высокую скорость и точность обработки заказов.
            </p>
            <p className="text-lg text-muted-foreground">
              Мы помогаем бизнесу масштабироваться, снижать издержки и улучшать качество обслуживания клиентов, взяв на себя всю логистическую цепочку от приемки товара до доставки конечному покупателю.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества в цифрах</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{advantage.number}</div>
                <div className="text-lg text-white/80">{advantage.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Тарифные планы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{tariff.price}</span>
                    <span className="text-muted-foreground">{tariff.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Кейсы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Trophy" size={32} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{caseItem.company}</h3>
                  <div className="text-primary font-semibold mb-3">{caseItem.result}</div>
                  <p className="text-muted-foreground text-sm">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Оставьте заявку</h2>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму, и наш менеджер свяжется с вами в течение 15 минут
            </p>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Компания</label>
                    <Input
                      placeholder="ООО «Ваша компания»"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон *</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="mail@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о ваших потребностях..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Телефон</h3>
              <p className="text-white/80">+7 (495) 123-45-67</p>
              <p className="text-white/80 text-sm">Пн-Пт: 9:00 - 18:00</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-white/80">info@rosbiznesklad.ru</p>
              <p className="text-white/80 text-sm">Ответим в течение часа</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Адрес</h3>
              <p className="text-white/80">Москва, Варшавское ш., 145</p>
              <p className="text-white/80 text-sm">Склад № 7А</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#0F1419] text-white/60 text-center">
        <p className="text-sm">© 2024 РосБизнесСклад. Все права защищены.</p>
      </footer>
    </div>
  );
}
