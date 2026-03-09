export type Language = 'zh' | 'en' | 'ru' | 'uz';

export const translations = {
  zh: {
    nav: { home: '首页', about: '关于我们', products: '产品中心', projects: '工程案例', applications: '应用领域', partners: '合作伙伴', contact: '联系我们', consult: '在线咨询' },
    hero: {
      badge: '高新技术龙头企业', title: '新高丽环保材料', subtitle: '涂覆绿色未来',
      desc: '专业研发、生产、销售氟碳涂料、粉末涂料等系列产品。立足新疆，服务中亚，为您提供高品质环保涂装解决方案。',
      btnProducts: '了解产品', btnAbout: '关于我们',
      stats: { founded: '创建于', area: '厂房面积', capacity: '年产能', lines: '生产线', unitYear: '年', unitSqm: '㎡', unitTon: '吨', unitLine: '条' }
    },
    about: {
      badge: '企业简介', title: '西北地区粉末涂料行业', titleAccent: '规模最大的高新技术企业',
      p1: '新疆新高丽环保材料有限公司成立于 2012 年，注册资金 1000 万元，是广东南海金高丽化工有限公司（创始于1998年）的分公司。',
      p2: '我们通过并严格按照 ISO9001、ISO14001 体系实施，产品通过 SGS、国家涂料认证。工厂占地面积 46000 平方米，配备国内最先进的生产流水线 12 条，实验生产线 3 条，年产能力达 10000 吨。',
      p3: '2024 年，我们相继在哈萨克斯坦设有分工厂，乌兹别克斯坦设有分销仓库，致力于为中亚市场提供更快捷、更优质的服务。',
      statLabel: '年新疆本地深耕经验', quality: '品质保证', qualityDesc: 'ISO9001/14001认证', eco: '环保材料', ecoDesc: 'SGS国家涂料认证',
    },
    products: {
      title: '核心产品系列', desc: '我们提供全方位的环保粉末涂料解决方案，产品具有装饰、防腐、抗折弯、抗冲击等优异性能，定位于中高端市场。',
      items: [
        { 
          title: '平面系列', 
          desc: '表面平滑细腻，色彩饱满，适用于办公家具、家电外壳。',
          specs: { gloss: '高光/哑光可选', curing: '180°C / 15min', feature: '流平性极佳' }
        },
        { 
          title: '砂纹系列', 
          desc: '独特的质感纹理，防滑耐磨，广泛用于城市隔离栏、户外设施。',
          specs: { gloss: '哑光纹理', curing: '200°C / 10min', feature: '耐候性强' }
        },
        { 
          title: '木纹系列', 
          desc: '仿真木质纹理，兼具金属强度与木材美感，用于铝型材、门窗。',
          specs: { gloss: '丝绸光泽', curing: '190°C / 12min', feature: '纹理清晰逼真' }
        },
        { 
          title: '金属系列', 
          desc: '闪耀金属光泽，提升产品档次，适用于汽车配件、高端门业。',
          specs: { gloss: '金属质感', curing: '180°C / 20min', feature: '附着力强' }
        },
      ]
    },
    apps: {
      title: '广泛的应用领域', desc: '我们的粉末涂料不仅提供卓越的视觉效果，更在极端环境下提供持久的保护。从城市基建到精密机械，新高丽产品无处不在。',
      list: ['波形板', '铝型材', '汽车车厢', '农业机械', '防火防盗门', '城市道路隔离栏', '文件柜', '散热器'],
      centralAsiaTitle: '立足新疆，辐射中亚', centralAsiaDesc: '2024年，我们在哈萨克斯坦设立分工厂，在乌兹别克斯坦设立分销仓库，构建起覆盖丝绸之路经济带核心区的服务网络。',
    },
    partners: { title: '合作伙伴', desc: '与行业领先企业携手，共同打造高品质工程' },
    contact: { title: '联系我们', address: '公司地址', addressVal: '新疆维吾尔自治区乌鲁木齐市/昌吉州生产基地', phone: '咨询热线', email: '电子邮箱', btn: '发送留言' },
    projects: {
      badge: '工程案例',
      title: '见证品质的历久弥新',
      desc: '服务项目超100个，涵盖交通枢纽、地标建筑及工业重防腐领域。',
      items: [
        { title: '乌鲁木齐天山国际机场', category: '交通枢纽', desc: '极端温差考验，5年无褪色、粉化。' },
        { title: '新疆首家5G物流园区', category: '产业园区', desc: '现代化工业风设计，高耐候防护。' },
        { title: '陕西中医药博物馆', category: '文化场馆', desc: '典雅外观与持久保护的完美结合。' },
        { title: '乌鲁木齐益民大厦', category: '政府办公', desc: '庄重外观，经久耐用。' },
        { title: '巴州艺术中心', category: '艺术地标', desc: '独特造型，完美色彩呈现。' },
        { title: '特变电工变压器外壳', category: '工业设备', desc: '耐化学品腐蚀，设计寿命延长50%。' },
      ]
    },
    footer: { desc: '新疆新高丽环保材料有限公司. 版权所有.', links: ['隐私政策', '使用条款'] }
  },
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', projects: 'Projects', applications: 'Applications', partners: 'Partners', contact: 'Contact', consult: 'Consult' },
    hero: {
      badge: 'High-tech Leading Enterprise', title: 'New Gaoli Eco-Materials', subtitle: 'Coating a Green Future',
      desc: 'Specializing in R&D, production, and sales of fluorocarbon and powder coatings. Based in Xinjiang, serving Central Asia with high-quality eco-friendly solutions.',
      btnProducts: 'Products', btnAbout: 'About Us',
      stats: { founded: 'Founded', area: 'Factory Area', capacity: 'Annual Capacity', lines: 'Production Lines', unitYear: '', unitSqm: '㎡', unitTon: 'Tons', unitLine: '' }
    },
    about: {
      badge: 'Company Profile', title: 'Leading Powder Coating', titleAccent: 'High-tech Enterprise in NW China',
      p1: 'Xinjiang New Gaoli Environmental Protection Materials Co., Ltd. was established in 2012 with a registered capital of 10 million RMB. It is a branch of Guangdong Nanhai King Gaoli Chemical Co., Ltd. (founded in 1998).',
      p2: 'We strictly implement ISO9001 and ISO14001 systems. Our products are SGS and national coating certified. The factory covers 46,000 sqm with 12 advanced production lines and 3 experimental lines, reaching 10,000 tons annual capacity.',
      p3: 'In 2024, we established a branch factory in Kazakhstan and a distribution warehouse in Uzbekistan to provide faster and better services for the Central Asian market.',
      statLabel: 'Years of Local Expertise', quality: 'Quality Assurance', qualityDesc: 'ISO9001/14001 Certified', eco: 'Eco-friendly', ecoDesc: 'SGS Certified',
    },
    products: {
      title: 'Core Product Series', desc: 'We provide comprehensive eco-friendly powder coating solutions with excellent decorative, anti-corrosion, and impact-resistant properties.',
      items: [
        { 
          title: 'Smooth Series', 
          desc: 'Smooth and delicate surface with full colors, suitable for office furniture and appliances.',
          specs: { gloss: 'High/Matt Gloss', curing: '180°C / 15min', feature: 'Excellent Leveling' }
        },
        { 
          title: 'Texture Series', 
          desc: 'Unique texture, non-slip and wear-resistant, used for city barriers and outdoor facilities.',
          specs: { gloss: 'Matt Texture', curing: '200°C / 10min', feature: 'High Weather Resistance' }
        },
        { 
          title: 'Wood Grain Series', 
          desc: 'Simulated wood texture combining metal strength with wood aesthetics for aluminum profiles.',
          specs: { gloss: 'Silk Gloss', curing: '190°C / 12min', feature: 'Realistic Texture' }
        },
        { 
          title: 'Metallic Series', 
          desc: 'Shining metallic luster, enhancing product grade for auto parts and high-end doors.',
          specs: { gloss: 'Metallic Luster', curing: '180°C / 20min', feature: 'Strong Adhesion' }
        },
      ]
    },
    apps: {
      title: 'Wide Range of Applications', desc: 'Our coatings provide lasting protection in extreme environments. From infrastructure to precision machinery, New Gaoli is everywhere.',
      list: ['Corrugated Plates', 'Aluminum Profiles', 'Vehicle Bodies', 'Agri-Machinery', 'Fireproof Doors', 'Road Barriers', 'File Cabinets', 'Radiators'],
      centralAsiaTitle: 'Serving Central Asia', centralAsiaDesc: 'In 2024, we expanded to Kazakhstan and Uzbekistan, building a service network across the Silk Road Economic Belt.',
    },
    partners: { title: 'Our Partners', desc: 'Working with industry leaders to create high-quality projects.' },
    contact: { title: 'Contact Us', address: 'Address', addressVal: 'Urumqi / Changji Production Base, Xinjiang, China', phone: 'Hotline', email: 'Email', btn: 'Send Message' },
    projects: {
      badge: 'Project Cases',
      title: 'Witness Enduring Quality',
      desc: 'Over 100 projects, covering transportation hubs, landmarks, and industrial anti-corrosion.',
      items: [
        { title: 'Urumqi Tianshan Int\'l Airport', category: 'Transport Hub', desc: 'Extreme temp test, no fading or chalking for 5 years.' },
        { title: 'Xinjiang\'s First 5G Logistics Park', category: 'Industrial Park', desc: 'Modern industrial design, high weather resistance.' },
        { title: 'Shaanxi TCM Museum', category: 'Cultural Venue', desc: 'Perfect blend of elegant appearance and lasting protection.' },
        { title: 'Urumqi Yimin Building', category: 'Gov Office', desc: 'Solemn appearance and long-lasting durability.' },
        { title: 'Bazhou Art Center', category: 'Art Landmark', desc: 'Unique shape with perfect color presentation.' },
        { title: 'TBEA Transformer Shell', category: 'Industrial Equipment', desc: 'Chemical resistant, extending design life by 50%.' },
      ]
    },
    footer: { desc: 'Xinjiang New Gaoli Eco-Materials Co., Ltd. All rights reserved.', links: ['Privacy Policy', 'Terms of Use'] }
  },
  ru: {
    nav: { home: 'Главная', about: 'О нас', products: 'Продукция', projects: 'Проекты', applications: 'Применение', partners: 'Партнеры', contact: 'Контакты', consult: 'Консультация' },
    hero: {
      badge: 'Ведущее высокотехнологичное предприятие', title: 'Синьгаоли Эко-материалы', subtitle: 'Покрывая зеленое будущее',
      desc: 'Специализируемся на исследованиях, производстве и продаже фторуглеродных и порошковых покрытий. Базируемся в Синьцзяне, обслуживаем Центральную Азию.',
      btnProducts: 'Продукция', btnAbout: 'О компании',
      stats: { founded: 'Основано', area: 'Площадь завода', capacity: 'Мощность', lines: 'Линии', unitYear: 'г.', unitSqm: 'м²', unitTon: 'тонн', unitLine: '' }
    },
    about: {
      badge: 'О компании', title: 'Лидер порошковых покрытий', titleAccent: 'Высокотехнологичное предприятие СЗ Китая',
      p1: 'Синьцзянская компания "Синьгаоли" была основана в 2012 году. Является филиалом Guangdong Nanhai King Gaoli Chemical Co., Ltd. (основана в 1998 году).',
      p2: 'Мы строго следуем системам ISO9001 и ISO14001. Продукция сертифицирована SGS. Завод площадью 46 000 м² оснащен 12 современными линиями мощностью 10 000 тонн в год.',
      p3: 'В 2024 году мы открыли завод в Казахстане и склад в Узбекистане для лучшего обслуживания рынка Центральной Азии.',
      statLabel: 'Лет опыта в Синьцзяне', quality: 'Гарантия качества', qualityDesc: 'Сертификация ISO9001/14001', eco: 'Эко-материалы', ecoDesc: 'Сертификация SGS',
    },
    products: {
      title: 'Основные серии продукции', desc: 'Мы предлагаем комплексные решения для экологически чистых порошковых покрытий с отличными защитными свойствами.',
      items: [
        { 
          title: 'Гладкая серия', 
          desc: 'Гладкая поверхность, насыщенные цвета, подходит для офисной мебели и техники.',
          specs: { gloss: 'Глянец/Матовый', curing: '180°C / 15мин', feature: 'Отличная растекаемость' }
        },
        { 
          title: 'Текстурная серия', 
          desc: 'Уникальная текстура, износостойкая, для дорожных ограждений и уличных объектов.',
          specs: { gloss: 'Матовая текстура', curing: '200°C / 10мин', feature: 'Высокая атмосферостойкость' }
        },
        { 
          title: 'Древесная серия', 
          desc: 'Имитация дерева, сочетающая прочность металла с эстетикой дерева.',
          specs: { gloss: 'Шелковистый блеск', curing: '190°C / 12мин', feature: 'Реалистичная текстура' }
        },
        { 
          title: 'Металлическая серия', 
          desc: 'Металлический блеск, повышающий класс изделий для авто и дверей.',
          specs: { gloss: 'Металлик', curing: '180°C / 20мин', feature: 'Сильная адгезия' }
        },
      ]
    },
    apps: {
      title: 'Широкая сфера применения', desc: 'Наши покрытия обеспечивают долговечную защиту в экстремальных условиях. От инфраструктуры до точного машиностроения.',
      list: ['Профнастил', 'Алюминиевый профиль', 'Кузова авто', 'Сельхозтехника', 'Двери', 'Ограждения', 'Шкафы', 'Радиаторы'],
      centralAsiaTitle: 'Работа в Центральной Азии', centralAsiaDesc: 'В 2024 году мы расширились в Казахстан и Узбекистан, создав сервисную сеть вдоль Экономического пояса Шелкового пути.',
    },
    partners: { title: 'Наши партнеры', desc: 'Работаем с лидерами отрасли для создания высококачественных проектов.' },
    contact: { title: 'Связаться с нами', address: 'Адрес', addressVal: 'Урумчи / Чанцзи, Синьцзян, Китай', phone: 'Горячая линия', email: 'Email', btn: 'Отправить' },
    projects: {
      badge: 'Проекты',
      title: 'Свидетельство неизменного качества',
      desc: 'Более 100 проектов: транспортные узлы, памятники архитектуры и промышленная защита.',
      items: [
        { title: 'Аэропорт Тянь-Шань Урумчи', category: 'Транспортный узел', desc: 'Испытание температурами, 5 лет без выцветания.' },
        { title: '5G Логистический парк Синьцзяна', category: 'Промзона', desc: 'Современный дизайн, высокая атмосферостойкость.' },
        { title: 'Музей медицины Шэньси', category: 'Культурный объект', desc: 'Элегантный вид и долговечная защита.' },
        { title: 'Здание Иминь в Урумчи', category: 'Госучреждение', desc: 'Торжественный вид и высокая износостойкость.' },
        { title: 'Арт-центр Бачжоу', category: 'Арт-объект', desc: 'Уникальная форма и идеальная цветопередача.' },
        { title: 'Корпус трансформатора TBEA', category: 'Оборудование', desc: 'Химостойкость, срок службы продлен на 50%.' },
      ]
    },
    footer: { desc: 'Синьцзянская компания "Синьгао利". Все права защищены.', links: ['Политика конфиденциальности', 'Условия использования'] }
  },
  uz: {
    nav: { home: 'Bosh sahifa', about: 'Biz haqimizda', products: 'Mahsulotlar', projects: 'Loyihalar', applications: 'Qo\'llanilishi', partners: 'Hamkorlar', contact: 'Bog\'lanish', consult: 'Maslahat' },
    hero: {
      badge: 'Yuqori texnologiyali yetakchi korxona', title: 'Yangi Gaoli Eko-Materiallari', subtitle: 'Yashil kelajakni qoplash',
      desc: 'Ftoruglerod va kukunli qoplamalarni ishlab chiqish va sotishga ixtisoslashgan. Shinjonda joylashgan, Markaziy Osiyoga xizmat ko\'rsatadi.',
      btnProducts: 'Mahsulotlar', btnAbout: 'Biz haqimizda',
      stats: { founded: 'Tashkil etilgan', area: 'Zavod maydoni', capacity: 'Yillik quvvat', lines: 'Ishlab chiqarish liniyalari', unitYear: 'yil', unitSqm: 'm²', unitTon: 'tonna', unitLine: '' }
    },
    about: {
      badge: 'Kompaniya haqida', title: 'Kukunli qoplamalar yetakchisi', titleAccent: 'Shimoliy-G\'arbiy Xitoy yetakchisi',
      p1: 'Shinjion Yangi Gaoli Atrof-muhitni Muhofaza Qilish Materiallari MChJ 2012-yilda tashkil etilgan. Guangdong Nanhai King Gaoli Chemical (1998-yilda tashkil etilgan) filiali.',
      p2: 'Biz ISO9001 va ISO14001 tizimlarini qat\'iy amalga oshiramiz. Mahsulotlarimiz SGS sertifikatiga ega. Zavod 46,000 m² maydonda 12 ta liniyaga ega.',
      p3: '2024-yilda Qozog\'istonda zavod va O\'zbekistonda tarqatish omborini ochdik, Markaziy Osiyo bozori uchun sifatli xizmat ko\'rsatish maqsadida.',
      statLabel: 'Yillik mahalliy tajriba', quality: 'Sifat kafolati', qualityDesc: 'ISO9001/14001 Sertifikati', eco: 'Eko-materiallar', ecoDesc: 'SGS Sertifikati',
    },
    products: {
      title: 'Asosiy mahsulotlar seriyasi', desc: 'Biz dekorativ, korroziyaga qarshi va zarbaga chidamli xususiyatlarga ega ekologik kukunli qoplama yechimlarini taqdim etamiz.',
      items: [
        { 
          title: 'Silliq seriya', 
          desc: 'Ofis mebellari va maishiy texnika uchun mos bo\'lgan silliq va rangdor sirt.',
          specs: { gloss: 'Yaltiroq/Mat', curing: '180°C / 15min', feature: 'Ajoyib tekislanish' }
        },
        { 
          title: 'Teksturali seriya', 
          desc: 'Yo\'l to\'siqlari va tashqi ob\'ektlar uchun ishlatiladigan noyob tekstura.',
          specs: { gloss: 'Mat tekstura', curing: '200°C / 10min', feature: 'Yuqori chidamlilik' }
        },
        { 
          title: 'Yog\'ochli seriya', 
          desc: 'Alyuminiy profillar uchun yog\'och estetikasini metall mustahkamligi bilan birlashtiradi.',
          specs: { gloss: 'Ipak yaltiroqligi', curing: '190°C / 12min', feature: 'Haqiqiy tekstura' }
        },
        { 
          title: 'Metallik seriya', 
          desc: 'Avto qismlar va yuqori darajadagi eshiklar uchun metall yaltiroqligi.',
          specs: { gloss: 'Metallik jilo', curing: '180°C / 20min', feature: 'Kuchli yopishish' }
        },
      ]
    },
    apps: {
      title: 'Keng qo\'llanilish sohalari', desc: 'Bizning qoplamalarimiz ekstremal sharoitlarda uzoq muddatli himoyani ta\'minlaydi. Infratuzilmadan tortib aniq mashinasozlikkacha.',
      list: ['Profnastil', 'Alyuminiy profil', 'Avto kuzovlari', 'Qishloq xo\'jaligi texnikasi', 'Eshiklar', 'To\'siqlar', 'Shkaflar', 'Radiatorlar'],
      centralAsiaTitle: 'Markaziy Osiyoda xizmat', centralAsiaDesc: '2024-yilda Qozog\'iston va O\'zbekistonga kengaydik, Ipak yo\'li iqtisodiy kamari bo\'ylab xizmat ko\'rsatish tarmog\'ini qurdik.',
    },
    partners: { title: 'Bizning hamkorlar', desc: 'Sifatli loyihalarni yaratish uchun soha yetakchilari bilan ishlaymiz.' },
    contact: { title: 'Biz bilan bog\'laning', address: 'Manzil', addressVal: 'Urumchi / Changji, Shinjon, Xitoy', phone: 'Ishonch telefoni', email: 'Email', btn: 'Xabar yuborish' },
    projects: {
      badge: 'Loyihalar',
      title: 'Bardoshli sifat guvohi',
      desc: '100 dan ortiq loyihalar: transport tugunlari, yodgorliklar va sanoat himoyasi.',
      items: [
        { title: 'Urumchi Tyan-Shan aeroporti', category: 'Transport tuguni', desc: 'Ekstremal harorat sinovi, 5 yil rang o\'zgarmasligi.' },
        { title: 'Shinjon 5G logistika parki', category: 'Sanoat parki', desc: 'Zamonaviy sanoat dizayni, yuqori chidamlilik.' },
        { title: 'Shensi TCM muzeyi', category: 'Madaniyat maskani', desc: 'Nafis ko\'rinish va uzoq muddatli himoya uyg\'unligi.' },
        { title: 'Urumchi Yimin binosi', category: 'Davlat idorasi', desc: 'Salobatli ko\'rinish va uzoq muddatli chidamlilik.' },
        { title: 'Bazhou san\'at markazi', category: 'San\'at ob\'ekti', desc: 'Noyob shakl va mukammal ranglar jilosi.' },
        { title: 'TBEA transformator korpusi', category: 'Sanoat uskunasi', desc: 'Kimyoviy chidamlilik, xizmat muddati 50% ga uzaygan.' },
      ]
    },
    footer: { desc: 'Shinjon Yangi Gaoli Eko-Materiallari MChJ. Barcha huquqlar himoyalangan.', links: ['Maxfiylik siyosati', 'Foydalanish shartlari'] }
  }
};
