const courses = [
  {
    id: 'ig-reels',
    title: 'Reels для Instagram',
    description: 'Вирусные короткие видео для охвата',
    icon: '🎬',
    color: '#E1306C',
    platform: 'instagram',
    lessons: [
      { id: 1, title: 'Алгоритм Reels', duration: '5 мин', content: 'Как работает рекомендательная система Instagram. Что влияет на показы и как попасть в рекомендации.' },
      { id: 2, title: 'Тренды и звуки', duration: '6 мин', content: 'Как находить трендовые аудио. Использование популярных звуков для увеличения охвата.' },
      { id: 3, title: 'Съёмка на телефон', duration: '8 мин', content: 'Освещение, ракурсы, стабилизация. Профессиональное качество смартфоном.' },
      { id: 4, title: 'Монтаж в CapCut', duration: '10 мин', content: 'Текст на экране, переходы, эффекты, тайминг. Делаем видео цепляющим.' },
      { id: 5, title: 'Превью и обложка', duration: '5 мин', content: 'Как сделать привлекательную обложку для Reels.' },
      { id: 6, title: 'Хештеги и подпись', duration: '6 мин', content: 'Стратегия хештегов, написание подписей, CTA.' },
      { id: 7, title: 'Монетизация', duration: '7 мин', content: 'Как заработать на Reels: реклама, партнёрки, продажи.' },
      { id: 8, title: 'Аналитика', duration: '5 мин', content: 'Как читать статистику и оптимизировать контент.' }
    ]
  },
  {
    id: 'ig-carousels',
    title: 'Карусели Instagram',
    description: 'Посты-карусели для вовлечения',
    icon: '🎠',
    color: '#833AB4',
    platform: 'instagram',
    lessons: [
      { id: 1, title: 'Формат карусели', duration: '5 мин', content: 'Когда использовать карусели. Структура слайдов.' },
      { id: 2, title: 'Дизайн слайдов', duration: '7 мин', content: 'Единый стиль, типографика, цветовая палитра.' },
      { id: 3, title: 'Hook первый слайд', duration: '5 мин', content: 'Как зацепить на первом слайде.' },
      { id: 4, title: 'Контент-стратегия', duration: '6 мин', content: 'Обучающие, развлекательные, продающие карусели.' },
      { id: 5, title: 'Вories и CTA', duration: '5 мин', content: 'Призывы к действию в каруселях.' }
    ]
  },
  {
    id: 'yt-basics',
    title: 'YouTube с нуля',
    description: 'От идеи до первого видео',
    icon: '▶️',
    color: '#FF0000',
    platform: 'youtube',
    lessons: [
      { id: 1, title: 'Ниша и формат', duration: '7 мин', content: 'Как выбрать нишу. Анализ конкурентов. Определение формата канала.' },
      { id: 2, title: 'Настройка канала', duration: '5 мин', content: 'Оформление, описание, ссылки, плейлисты.' },
      { id: 3, title: 'Сценарий', duration: '8 мин', content: 'Структура видео: зацепка, контент, CTA. Шаблоны сценариев.' },
      { id: 4, title: 'Съёмка', duration: '10 мин', content: 'Освещение, звук, камера. Профессиональная съёмка дома.' },
      { id: 5, title: 'Монтаж', duration: '12 мин', content: 'DaVinci Resolve / CapCut. Монтаж, цвет, звук.' },
      { id: 6, title: 'Превью', duration: '6 мин', content: 'Как сделать кликабельную обложку. Психология превью.' },
      { id: 7, title: 'SEO и заголовки', duration: '7 мин', content: 'Оптимизация для поиска. Ключевые слова, теги, описания.' },
      { id: 8, title: 'Монетизация', duration: '8 мин', content: 'Реклама, спонсоры, товары, подписки. Как заработать на YouTube.' },
      { id: 9, title: 'Аналитика', duration: '5 мин', content: 'Как читать статистику YouTube Studio.' },
      { id: 10, title: 'Продвижение', duration: '6 мин', content: 'Кросспостинг, Shorts, коллаборации.' }
    ]
  },
  {
    id: 'yt-shorts',
    title: 'YouTube Shorts',
    description: 'Короткие видео для быстрого роста',
    icon: '⚡',
    color: '#FF6B35',
    platform: 'youtube',
    lessons: [
      { id: 1, title: 'Формат Shorts', duration: '5 мин', content: 'Отличия от длинных видео. Как работает алгоритм.' },
      { id: 2, title: 'Идеи для Shorts', duration: '6 мин', content: 'Как генерировать идеи. Тренды и форматы.' },
      { id: 3, title: 'Съёмка вертикально', duration: '5 мин', content: 'Особенности вертикального видео.' },
      { id: 4, title: 'Быстрый монтаж', duration: '6 мин', content: 'Как делать Shorts за 15 минут.' },
      { id: 5, title: 'Монетизация Shorts', duration: '5 мин', content: 'Как заработать на коротких видео.' }
    ]
  },
  {
    id: 'tiktok-viral',
    title: 'TikTok: Вирусные видео',
    description: 'Как набирать подписчиков в TikTok',
    icon: '🎵',
    color: '#000000',
    platform: 'tiktok',
    lessons: [
      { id: 1, title: 'Алгоритм TikTok', duration: '6 мин', content: 'Как работает For You page. Факторы ранжирования.' },
      { id: 2, title: 'Тренды и форматы', duration: '7 мин', content: 'Как находить и использовать тренды.' },
      { id: 3, title: 'Хуки', duration: '5 мин', content: 'Как зацепить за первые 2 секунды.' },
      { id: 4, title: 'Звук и музыка', duration: '6 мин', content: 'Использование звуков для вирусности.' },
      { id: 5, title: 'Частота постинга', duration: '5 мин', content: 'Сколько и когда публиковать.' },
      { id: 6, title: 'Взаимодействие', duration: '5 мин', content: 'Комментарии, дуэты, ставки.' },
      { id: 7, title: 'Монетизация', duration: '7 мин', content: 'Партнёрская программа, реклама, продажи.' },
      { id: 8, title: 'Аналитика TikTok', duration: '5 мин', content: 'Как читать статистику.' }
    ]
  },
  {
    id: 'tiktok-business',
    title: 'TikTok для бизнеса',
    description: 'Продвижение бренда в TikTok',
    icon: '💼',
    color: '#25F4EE',
    platform: 'tiktok',
    lessons: [
      { id: 1, title: 'Бизнес-аккаунт', duration: '5 мин', content: 'Настройка и оформление.' },
      { id: 2, title: 'Контент-план', duration: '7 мин', content: 'Как планировать контент.' },
      { id: 3, title: 'Продажи через видео', duration: '8 мин', content: 'Как продавать товары.' },
      { id: 4, title: 'Таргетированная реклама', duration: '7 мин', content: 'Настройка рекламы.' },
      { id: 5, title: 'Коллаборации', duration: '6 мин', content: 'Работа с блогерами.' }
    ]
  },
  {
    id: 'ai-content',
    title: 'AI для контента',
    description: 'Нейросети для создания контента',
    icon: '🤖',
    color: '#F59E0B',
    platform: 'ai',
    lessons: [
      { id: 1, title: 'ChatGPT для идей', duration: '6 мин', content: 'Генерация идей, сценариев, подписей через ChatGPT.' },
      { id: 2, title: 'Midjourney', duration: '8 мин', content: 'Создание изображений для постов и обложек.' },
      { id: 3, title: 'AI-видео', duration: '10 мин', content: 'Kling, Runway, Sora — генерация видео из текста.' },
      { id: 4, title: 'AI-голос', duration: '5 мин', content: 'Озвучка видео нейросетями.' },
      { id: 5, title: 'Автоматизация', duration: '7 мин', content: 'Как автоматизировать рутину с помощью AI.' }
    ]
  },
  {
    id: 'content-strategy',
    title: 'Контент-стратегия',
    description: 'Планирование и стратегия',
    icon: '📋',
    color: '#10B981',
    platform: 'general',
    lessons: [
      { id: 1, title: 'Определение ЦА', duration: '6 мин', content: 'Кто ваша аудитория. Портрет идеального подписчика.' },
      { id: 2, title: 'Контент-план', duration: '7 мин', content: 'Как составлять контент-план на месяц.' },
      { id: 3, title: 'Типы контента', duration: '6 мин', content: 'Развлекательный, обучающий, продающий.' },
      { id: 4, title: 'Сторителлинг', duration: '8 мин', content: 'Как рассказывать истории, которые цепляют.' },
      { id: 5, title: 'Аналитика и рост', duration: '6 мин', content: 'Как анализировать и расти.' },
      { id: 6, title: 'Монетизация', duration: '7 мин', content: 'Модели монетизации контента.' }
    ]
  },
  {
    id: 'design-basics',
    title: 'Дизайн для блогеров',
    description: 'Визуал для соцсетей',
    icon: '🎨',
    color: '#8B5CF6',
    platform: 'general',
    lessons: [
      { id: 1, title: 'Цвет и стиль', duration: '5 мин', content: 'Как создать единый визуальный стиль.' },
      { id: 2, title: 'Типографика', duration: '5 мин', content: 'Шрифты и их сочетание.' },
      { id: 3, title: 'Композиция', duration: '6 мин', content: 'Правило третей, баланс, фокус.' },
      { id: 4, title: 'Canva и Figma', duration: '7 мин', content: 'Быстрый дизайн в онлайн-инструментах.' },
      { id: 5, title: 'AI-дизайн', duration: '6 мин', content: 'Нейросети для создания графики.' }
    ]
  }
];

module.exports = courses;
