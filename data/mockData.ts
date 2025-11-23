import { Event, EventType, QiddiyaZone, TimelineItem } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'ليلة الأساطير الموسيقية',
    description: 'أمسية طربية تجمع عمالقة الفن العربي في مسرح محمد عبده أرينا.',
    image: 'https://picsum.photos/id/158/800/800',
    date: '2025-11-20',
    time: '09:00 م',
    location: 'بوليفارد رياض سيتي',
    type: EventType.Music,
    price: 'يبدأ من 300 ريال',
    isTrending: true,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '2',
    title: 'كأس موسم الرياض',
    description: 'مباراة تاريخية تجمع نجوم العالم في استاد المملكة أرينا.',
    image: 'https://picsum.photos/id/1059/800/800',
    date: '2025-11-21',
    time: '08:00 م',
    location: 'المملكة أرينا',
    type: EventType.Sports,
    isTrending: true,
    price: 'يبدأ من 150 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '3',
    title: 'مسرحية "الكنز المفقود"',
    description: 'عرض مسرحي كوميدي عائلي يناسب جميع الأعمار.',
    image: 'https://picsum.photos/id/453/800/800',
    date: '2025-11-20',
    time: '06:00 م',
    location: 'مسرح بكر الشدي',
    type: EventType.Theater,
    price: 'يبدأ من 150 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '4',
    title: 'عالم الديناصورات',
    description: 'رحلة عبر الزمن لاستكشاف عالم الديناصورات وتجربة تفاعلية مذهلة.',
    image: 'https://picsum.photos/id/1003/800/800',
    date: '2025-11-22',
    time: '04:00 م',
    location: 'ونتر وندرلاند',
    type: EventType.Family,
    price: 'يبدأ من 50 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '5',
    title: 'معرض السيارات الفاخرة',
    description: 'أندر السيارات في العالم تجتمع تحت سقف واحد.',
    image: 'https://picsum.photos/id/1071/800/800',
    date: '2025-11-23',
    time: '05:00 م',
    location: 'واجهة الرياض',
    type: EventType.Exhibition,
    isTrending: true,
    price: 'يبدأ من 100 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '6',
    title: 'عشاء في السماء',
    description: 'تجربة عشاء فاخرة مع إطلالة بانورامية على مدينة الرياض.',
    image: 'https://picsum.photos/id/431/800/800',
    date: '2025-11-20',
    time: '08:00 م',
    location: 'المربع',
    type: EventType.Dining,
    price: 'يبدأ من 500 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '7',
    title: 'سيرك دو سوليه',
    description: 'عروض بهلوانية عالمية تحبس الأنفاس.',
    image: 'https://picsum.photos/id/146/800/800',
    date: '2025-11-24',
    time: '08:30 م',
    location: 'بوليفارد وورلد',
    type: EventType.Family,
    isTrending: true,
    price: 'يبدأ من 200 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '8',
    title: 'مهرجان الألعاب الإلكترونية',
    description: 'أكبر تجمع للاعبين وصناع الألعاب في الشرق الأوسط.',
    image: 'https://picsum.photos/id/96/800/800',
    date: '2025-11-25',
    time: '04:00 م',
    location: 'واجهة الرياض',
    type: EventType.Exhibition,
    price: 'يبدأ من 75 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '9',
    title: 'حفلة الهضبة',
    description: 'ليلة استثنائية مع الفنان عمرو دياب.',
    image: 'https://picsum.photos/id/338/800/800',
    date: '2025-11-29',
    time: '09:30 م',
    location: 'أبوبكر سالم',
    type: EventType.Music,
    isTrending: true,
    price: 'يبدأ من 450 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '10',
    title: 'عرض الأزياء العالمي',
    description: 'أحدث صيحات الموضة من أشهر المصممين العالميين.',
    image: 'https://picsum.photos/id/331/800/800',
    date: '2025-12-05',
    time: '07:00 م',
    location: 'فيا رياض',
    type: EventType.Exhibition,
    price: 'يبدأ من 1000 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  },
  {
    id: '11',
    title: 'بطولة التنس الدولية',
    description: 'نهائيات كاس الرياض للتنس بمشاركة المصنفين الأوائل.',
    image: 'https://picsum.photos/id/835/800/800',
    date: '2025-12-10',
    time: '05:00 م',
    location: 'المملكة أرينا',
    type: EventType.Sports,
    price: 'يبدأ من 250 ريال',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22957.618205897328!2d46.711533822259334!3d24.69640799836253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e1!3m2!1sen!2sma!4v1763924109232!5m2!1sen!2sma'
  }
];

export const qiddiyaZones: QiddiyaZone[] = [
  {
    id: 'q1',
    title: 'سيكس فلاجز القدية',
    description: 'مدينة ملاهي عالمية ستحطم الأرقام القياسية بأسرع وأطول أفعوانية في العالم.',
    image: 'https://picsum.photos/id/1040/800/600',
  },
  {
    id: 'q2',
    title: 'مضمار السرعة',
    description: 'حلبة سباق بمعايير F1 لاستضافة أكبر بطولات رياضة المحركات.',
    image: 'https://picsum.photos/id/111/800/600',
  },
  {
    id: 'q3',
    title: 'منطقة الفنون',
    description: 'مسارح وقاعات حفلات مصممة بأحدث التقنيات لاستضافة الفعاليات العالمية.',
    image: 'https://picsum.photos/id/206/800/600',
  }
];

export const timeline: TimelineItem[] = [
  { year: '2025', title: 'الافتتاح الأولي', description: 'افتتاح المرحلة الأولى وتشغيل المنتزهات الرئيسية.' },
  { year: '2026', title: 'مناطق جديدة', description: 'توسع المناطق السكنية وافتتاح ملاعب الجولف.' },
  { year: '2028', title: 'التوسعات الكبرى', description: 'اكتمال المجمع الرياضي والقرية الأولمبية.' },
  { year: '2030', title: 'التشغيل الكامل', description: 'تحقيق الرؤية الكاملة واستقبال ملايين الزوار سنويًا.' },
];