const courses = [
  {
    id: 'ig-reels',
    title: 'Reels для Instagram',
    description: 'Вирусные короткие видео для охвата',
    icon: '🎬',
    color: '#E1306C',
    platform: 'instagram',
    lessons: [
      {
        id: 1, title: 'Алгоритм Reels', duration: '5 мин',
        content: '<p>Instagram показывает Reels тем, кто ещё <b>не подписан</b> на тебя. Это значит — каждый ролик это шанс получить нового подписчика.</p>' +
        '<p>Алгоритм отслеживает <span class="hl">4 главных фактора</span>:</p>' +
        '<ol class="steps"><li><b>Досмотры</b> — <span class="num">90%+</span> людей досмотрели до конца</li><li><b>Лайки</b> — реагируют на контент</li><li><b>Комментарии</b> — оставляют отклик</li><li><b>Репосты</b> — делятся с друзьями</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Главное правило</div><div class="callout-text"><span class="hl">Человек должен досмотреть до конца.</span> Поэтому видео должно быть <b>коротким (7-15 секунд)</b> и цепляющим с первой секунды. Длинные Reels = маленький охват.</div></div>' +
        '<div class="callout stat"><div class="callout-title">📊 Цифра</div><div class="callout-text">Видео до <b class="money">15 секунд</b> имеют в <span class="num">2-3 раза</span> больше досмотров, чем 30-секундные.</div></div>'
      },
      {
        id: 2, title: 'Тренды и звуки', duration: '6 мин',
        content: '<p>Трендовый звук — это <span class="hl">бесплатный буст</span> от Instagram. Платформа продвигает видео с популярными аудио.</p>' +
        '<ol class="steps"><li>Заходи в <b>Reels</b> → иконка со звуком → смотри трендовые аудио</li><li>Нажми на звук → <b>Использовать звук</b> → снимай видео</li><li>Не обязательно танцевать — можно <b>рассказывать</b> что-то под трендовый звук</li></ol>' +
        '<div class="callout tip"><div class="callout-title">💡 Совет</div><div class="callout-text">Проверяй тренды <span class="hl">каждый день</span>. Тренд живёт <b>3-7 дней</b>. Успей снять видео пока звук на пике.</div></div>' +
        '<div class="vs"><div class="vs-box vs-bad"><div class="vs-label">❌ Не надо</div><div class="vs-text">Копируй танец 1-в-1 → выглядишь нелепо</div></div><div class="vs-box vs-good"><div class="vs-label">✅ Делай так</div><div class="vs-text">Бери звук → адаптируй под <b>свою нишу</b> → будь собой</div></div></div>'
      },
      {
        id: 3, title: 'Съёмка на телефон', duration: '8 мин',
        content: '<p>Профессиональная камера не нужна. <b>Хватит смартфона</b> и 5 простых правил:</p>' +
        '<ol class="steps"><li><b>Освещение</b> — снимай у окна или купи кольцевую лампу за <span class="money">500₽</span>. Свет = <span class="num">70%</span> качества.</li><li><b>Формат 9:16</b> — только вертикально. Горизонтально = мусор.</li><li><b>Стабилизация</b> — держи двумя руками или купи штатив за <span class="money">300-500₽</span>.</li><li><b>Чисти камеру</b> — протри перед съёмкой. Грязное стекло = мыло.</li><li><b>Разрешение</b> — снимай в <span class="num">4K</span> если позволяет телефон.</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Частая ошибка</div><div class="callout-text"><span class="danger">Не снимай против света</span> — лицо будет тёмным. Всегда光源 должен быть <b>перед тобой</b> или сбоку.</div></div>' +
        '<div class="callout formula"><div class="callout-title">💰 Минимальный набор</div><div class="callout-text">Смартфон + штатив <span class="money">500₽</span> + кольцевая лампа <span class="money">500₽</span> = <b>итого <span class="money">1000₽</span></b> для старта.</div></div>'
      },
      {
        id: 4, title: 'Монтаж в CapCut', duration: '10 мин',
        content: '<p><b>CapCut</b> — бесплатный редактор, которым пользуются <span class="hl">90% блогеров</span>. Скачай бесплатно.</p>' +
        '<ol class="steps"><li><b>Импортируй</b> видео → обрежь лишнее — оставь <span class="hl">только самое цепляющее</span></li><li><b>Текст на экран</b> — крупный, контрастный, читаемый на телефоне</li><li><b>Переходы</b> — не больше <span class="num">2-3</span> на видео. Больше = каша.</li><li><b>Музыка</b> — громче голоса <span class="danger">не ставь</span>. Голос = главный.</li><li><b>Экспорт</b> в <span class="num">1080p</span></li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило монтажа</div><div class="callout-text"><span class="hl">Убери всё, что можно убрать</span> — и станет ещё лучше. Монтаж = удаление, не добавление.</div></div>' +
        '<p>Время монтажа: <b>10-20 минут</b> для одного Reels.</p>'
      },
      {
        id: 5, title: 'Hook — зацепка', duration: '5 мин',
        content: '<p><span class="hl">Первые 1-2 секунды решают всё.</span> Если не зацепил — листнут. Точка.</p>' +
        '<p><b>Готовые формулы хуков:</b></p>' +
        '<ol class="steps"><li><span class="hl">"Я потратил 100 часов на..."</span> — интрига + вложение</li><li><span class="hl">"Никто не знает про этот лайфхак..."</span> — секрет</li><li><span class="hl">"Перестань делать ЭТО..."</span> — ошибка</li><li><span class="hl">"Я заработал 50к на..."</span> — результат</li><li><span class="hl">"Это изменит твою жизнь"</span> — обещание</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Формула хука</div><div class="callout-text"><span class="formula">Число + Интрига + Результат</span><br>Пример: "<b>3 ошибки</b>, которые <span class="hl">убивают</span> твой охват"</div></div>' +
        '<p><b>Визуальный хук</b> — необычное действие в кадре. Держи предмет у камеры, сделай резкое движение, покажи результат.</p>'
      },
      {
        id: 6, title: 'Хештеги и подпись', duration: '6 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Золотое правило</div><div class="callout-text"><b>3-5 хештегов</b> — оптимально. Больше = спам. Меньше = мало охвата.</div></div>' +
        '<p><b>Стратегия хештегов:</b></p>' +
        '<ol class="steps"><li><span class="num">2</span> крупных хештега (<span class="num">&gt;1 млн</span> постов)</li><li><span class="num">2</span> средних (<span class="num">50-500к</span>)</li><li><span class="num">1</span> нишевый (<span class="num">&lt;100к</span>)</li></ol>' +
        '<p><b>Подпись</b> = продолжение видео. Задавай <span class="hl">вопрос в конце</span> — это увеличивает комментарии в <span class="num">3-5 раз</span>.</p>' +
        '<div class="callout tip"><div class="callout-title">💡 Готовая подпись</div><div class="callout-text">"А ты пробовал? Пиши в комментах 👇" — <span class="hl">простая, но рабочая</span>.</div></div>' +
        '<p><span class="danger">Не копируй один набор хештегов</span> — Instagram считает это спамом. Чередуй группы.</p>'
      },
      {
        id: 7, title: 'Монетизация Reels', duration: '7 мин',
        content: '<p>Reels — это не просто контент. Это <span class="hl">инструмент заработка</span>. Вот 5 способов:</p>' +
        '<ol class="steps"><li><b>Партнёрские программы</b> (Авито, Wildberries) — комиссия <span class="num">10-40%</span></li><li><b>Реклама от брендов</b> — от <span class="num">1000 подписчиков</span>, <span class="money">1000-50000₽</span> за пост</li><li><b>Продажа своих услуг</b> — маржа <span class="num">90%+</span></li><li><b>Продвижение</b> других аккаунтов</li><li><b>Reels бонусы</b> от Instagram</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула дохода</div><div class="callout-text"><span class="formula">(подписчики / 1000) × ставка = доход за пост</span><br>Пример: <span class="num">5000</span> подписчиков × <span class="money">100₽</span> = <span class="money">500₽</span> за пост</div></div>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Важно</div><div class="callout-text"><span class="danger">Не продавай больше 30%</span> контента — аудитория уйдёт.</div></div>'
      },
      {
        id: 8, title: 'Аналитика', duration: '5 мин',
        content: '<p>Открой <b>Insights</b> — там цифры, которые показывают <span class="hl">что работает</span>, а что нет.</p>' +
        '<p><b>Главные метрики:</b></p>' +
        '<ol class="steps"><li><b>Охват не-подписчиков</b> — <span class="hl">главная метрика</span> Reels. Сколько новых людей увидели.</li><li><b>% досмотров</b> — если <span class="danger">&lt;70%</span>, видео не цепляет.</li><li><b>Сохранения</b> — показатель <span class="hl">ценности</span>. Чем больше — тем лучше.</li><li><b>Репосты</b> — вирусный потенциал.</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Бенчмарки</div><div class="callout-text">Хороший % досмотров: <span class="num">&gt;70%</span>. Хорошее соотношение лайков: <span class="num">&gt;5%</span> от охвата.</div></div>' +
        '<p><span class="hl">Лучшее время публикации</span> — смотри когда твоя аудитория активна в Insights → Аудитория.</p>'
      },
      {
        id: 9, title: 'Частота постинга', duration: '5 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Минимум</div><div class="callout-text"><b><span class="num">3-5</span> Reels в неделю</b> — минимум для роста. Лучше <span class="num">1-2 в день</span>.</div></div>' +
        '<p>Качество важнее количества, но <span class="hl">регулярность критична</span>. Алгоритм любит авторов, которые публикуют часто.</p>' +
        '<ol class="steps"><li><b>Создавай запас</b> видео заранее — снимай по 5-10 за раз</li><li><b>Используй отложенные</b> публикации</li><li><b>Не выкладывай всё сразу</b> — растягивай на день</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Ошибка</div><div class="callout-text"><span class="danger">Публикация 5 видео за один вечер</span> = Instagram ограничит охват. По 1-2 в день — оптимально.</div></div>'
      },
      {
        id: 10, title: 'Рост подписчиков', duration: '6 мин',
        content: '<p>Подписчики приходят не сами. Вот <span class="hl">5 рабочих стратегий</span>:</p>' +
        '<ol class="steps"><li><b>Коллаборации</b> с блогерами твоего уровня — обмен аудиторией</li><li><b>Комментируй</b> популярные аккаунты — люди приходят смотреть</li><li><b>Репость</b> Reels в Stories</li><li><b>Серийный контент</b> — часть 1, часть 2... люди подписываются, чтобы не пропустить</li><li><b>Отвечай</b> на каждый комментарий в первые <span class="num">30 минут</span></li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула роста</div><div class="callout-text"><span class="formula">Контент × Взаимодействие × Регулярность = Подписчики</span><br>Пропустил один элемент — результат <span class="danger">падает в 3 раза</span>.</div></div>'
      }
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
      {
        id: 1, title: 'Формат карусели', duration: '5 мин',
        content: '<p>Карусели — это <span class="hl">2-10 слайдов</span>, которые листают вправо.</p>' +
        '<div class="callout stat"><div class="callout-title">📊 Почему карусели</div><div class="callout-text">Instagram любит карусели, потому что люди проводят <b>больше времени</b> с постом. Это <span class="hl">лучший формат</span> для обучающего и продающего контента.</div></div>' +
        '<p>Карусели набирают в <span class="num">2-3 раза</span> больше сохранений, чем обычные посты. А <span class="hl">сохранения = главный сигнал</span> для алгоритма в 2026 году.</p>'
      },
      {
        id: 2, title: 'Дизайн слайдов', duration: '7 мин',
        content: '<p><b>Единый стиль</b> — узнаваемость. Все слайды должны выглядеть как <span class="hl">одна серия</span>.</p>' +
        '<ol class="steps"><li><b>Шрифт</b> — максимум <span class="num">2</span>. Один для заголовков, один для текста.</li><li><b>Цвета</b> — <span class="num">3-4 цвета</span> палитры. Не больше.</li><li><b>Фон</b> — простой или с текстурой. Не отвлекай.</li><li><b>Текст</b> — крупный, читаемый на телефоне. Минимум <span class="num">24px</span>.</li><li><b>Логотип</b> — watermark на каждом слайде.</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="hl">30 слов на слайде</span> — максимум. Больше = никто не читает.</div></div>' +
        '<div class="callout tip"><div class="callout-title">💡 Где делать</div><div class="callout-text"><b>Canva</b> (бесплатно) — сотни готовых шаблонов для каруселей. Не изобретай велосипед.</div></div>'
      },
      {
        id: 3, title: 'Hook первый слайд', duration: '5 мин',
        content: '<p><span class="hl">Первый слайд = обложка</span>. Если он не цепляет — никто не полистает дальше.</p>' +
        '<p><b>Формула хука:</b></p>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула</div><div class="callout-text"><span class="formula">Число + Обещание результата + Интрига</span></div></div>' +
        '<p><b>Готовые примеры:</b></p>' +
        '<ol class="steps"><li><span class="hl">"5 ошибок, которые убивают твой охват"</span></li><li><span class="hl">"Как я набрала 10к за месяц"</span></li><li><span class="hl">"Сохрани, чтобы не потерять"</span></li><li><span class="hl">"3 шага до первых денег"</span></li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Не пиши</div><div class="callout-text"><span class="danger">"Мой пост о мотивации"</span> — скучно, никто не листнет. Дай <b>конкретику</b> и <span class="hl">обещание пользы</span>.</div></div>'
      },
      {
        id: 4, title: 'Структура карусели', duration: '6 мин',
        content: '<p>Каждая карусель — это <span class="hl">готовая структура</span>. Не нарушай порядок:</p>' +
        '<ol class="steps"><li><b>Слайд 1: Хук</b> — проблема/вопрос. Цепляет.</li><li><b>Слайды 2-8: Контент</b> — советы/шаги/примеры. По одному на слайд.</li><li><b>Слайд 9: Резюме</b> — что запомнить.</li><li><b>Слайд 10: CTA</b> — подпишись/сохрани/комментарий.</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="hl">Один слайд = одна мысль</span>. Не пихай 3 совета на один слайд — nobody will read.</div></div>' +
        '<p>Сколько слайдов? <span class="num">7-10</span> — оптимально. Меньше 5 = мало контента. Больше 10 = устают листать.</p>'
      },
      {
        id: 5, title: 'Монетизация каруселей', duration: '5 мин',
        content: '<p>Карусели идеальны для:</p>' +
        '<ol class="steps"><li><b>Обучающий контент</b> — продвижение курсов/консультаций</li><li><b>Продающие посты</b> — товар/услуга с описанием</li><li><b>Экспертный контент</b> — доверие → продажи</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула</div><div class="callout-text"><span class="formula">Чем больше сохранений → тем больше охват → тем больше денег</span></div></div>' +
        '<p>Карусель с <span class="num">1000+ сохранений</span> набирает в <span class="num">5-10 раз</span> больше охвата, чем обычный пост.</p>'
      }
    ]
  },
  {
    id: 'ig-stories',
    title: 'Stories для вовлечения',
    description: 'Как удерживать аудиторию',
    icon: '📱',
    color: '#F77737',
    platform: 'instagram',
    lessons: [
      {
        id: 1, title: 'Зачем Stories', duration: '4 мин',
        content: '<p>Stories — это <span class="hl">прямой контакт</span> с аудиторией. Люди смотрят Stories каждый день.</p>' +
        '<div class="callout stat"><div class="callout-title">📊 Статистика</div><div class="callout-text"><b><span class="num">500 млн</span></b> пользователей смотрят Stories ежедневно. Это <span class="hl">каждый второй</span> активный пользователь.</div></div>' +
        '<p>Stories увеличивают <span class="hl">лояльность и продажи</span>. Подписчики, которые смотрят твои Stories, покупают в <span class="num">3 раза</span> чаще.</p>'
      },
      {
        id: 2, title: 'Типы Stories', duration: '6 мин',
        content: '<p>Чередуй <span class="hl">5 типов</span>, чтобы не надоедать:</p>' +
        '<ol class="steps"><li><b>За кулисами</b> — показывай процесс создания контента</li><li><b>Опросы и голосования</b> — люди любят нажимать кнопки</li><li><b>Q&A</b> — отвечай на вопросы аудитории</li><li><b>Бумеранги</b> — короткие забавные видео</li><li><b>Текст с фоном</b> — цитаты, советы, мысли</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Золотой баланс</div><div class="callout-text"><span class="num">3-7</span> Stories в день — оптимально. Меньше = забыли. Больше = зафлудили.</div></div>'
      },
      {
        id: 3, title: 'Стикеры и взаимодействие', duration: '5 мин',
        content: '<p>Стикеры — это <span class="hl">бустер вовлечения</span>. Они увеличивают взаимодействие в <span class="num">3-5 раз</span>.</p>' +
        '<p><b>Какие стикеры использовать:</b></p>' +
        '<ol class="steps"><li><span class="hl">Опрос</span> — "Какой формат лучше: Reels или карусели?"</li><li><span class="hl">Викторина</span> — проверь знания</li><li><span class="hl">Вопрос</span> — "Что хотите увидеть?"</li><li><span class="hl">Голосование</span> — выбор из двух вариантов</li><li><span class="hl">Музыка + Гиф</span> — добавляй эмоции</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Почему это важно</div><div class="callout-text">Алгоритм показывает Stories тем, кто <span class="hl">чаще взаимодействует</span>. Твой подписчик нажал "голос" → Instagram покажет твои следующие Stories первыми.</div></div>'
      },
      {
        id: 4, title: 'Расписание Stories', duration: '5 мин',
        content: '<p><b>3-7 Stories в день</b> — растягивай на весь день.</p>' +
        '<ol class="steps"><li><b>Утро (8-10)</b> — доброе утро, планы на день</li><li><b>Обед (12-14)</b> — процесс, за кулисами</li><li><b>Вечер (18-21)</b> — итоги, опросы, Q&A</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Ошибка</div><div class="callout-text"><span class="danger">Не выкладывай все Stories сразу</span> — Instagram покажет их тем, кто онлайн сейчас. Остальные не увидят. Растягивай!</div></div>'
      }
    ]
  },
  {
    id: 'ig-growth',
    title: 'Рост в Instagram',
    description: 'От 0 до 10 000 подписчиков',
    icon: '📈',
    color: '#405DE6',
    platform: 'instagram',
    lessons: [
      {
        id: 1, title: 'Ниша и позиционирование', duration: '7 мин',
        content: '<p>Выбери <span class="hl">узкую нишу</span>. Чем уже — тем быстрее рост.</p>' +
        '<div class="vs"><div class="vs-box vs-bad"><div class="vs-label">❌ Плохо</div><div class="vs-text">"Путешествия" — слишком broadly, конкуренция <span class="danger">миллионы</span></div></div><div class="vs-box vs-good"><div class="vs-label">✅ Хорошо</div><div class="vs-text">"Путешествия по России на машине" — <span class="hl">узко, понятно, растёт быстро</span></div></div></div>' +
        '<p><b>Ответь на 3 вопроса:</b></p>' +
        '<ol class="steps"><li><b>Кому помогаешь?</b> — студенты, мамы, предприниматели?</li><li><b>Какую проблему решаешь?</b> — конкретная боль</li><li><b>Чем отличаешься?</b> — твой уникальный подход</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="hl">Узкая ниша = быстрый рост</span>. Широкая = застрянешь на 500 подписчиках навсегда.</div></div>'
      },
      {
        id: 2, title: 'Оформление профиля', duration: '5 мин',
        content: '<p>Профиль — это <span class="hl">витрина</span>. Человек решает подписаться за <span class="num">3 секунды</span>.</p>' +
        '<ol class="steps"><li><b>Аватар</b> — яркое, узнаваемое фото. Не котик, не пейзаж.</li><li><b>Имя</b> — ключевое слово. Пример: <span class="hl">"Алексей | Шеф-повар"</span></li><li><b>Био</b> — кто ты + чем полезен + CTA. Максимум 2 строки.</li><li><b>Ссылка</b> — Telegram, сайт, Linktree</li><li><b>Закреплённый пост</b> — лучший контент. Первое, что увидят.</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула био</div><div class="callout-text"><span class="formula">Помогаю [аудитории] решить [проблему] через [формат]</span><br>Пример: "Помогаю начинающим блогерам зарабатывать на Reels"</div></div>'
      },
      {
        id: 3, title: 'Контент-пирамида', duration: '6 мин',
        content: '<p><span class="hl">Золотое распределение</span> контента:</p>' +
        '<ol class="steps"><li><b><span class="num">60%</span> полезный</b> — советы, лайфхаки, обучение</li><li><b><span class="num">20%</span> развлекательный</b> — мемы, сторителлинг</li><li><b><span class="num">10%</span> продающий</b> — товар, услуга</li><li><b><span class="num">10%</span> личный</b> — жизнь, ценности</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Лимит продаж</div><div class="callout-text"><span class="danger">Не продавай больше 20%</span> — аудитория уйдёт. Если 5 из 10 постов — продажи, тебя перестают читать.</div></div>'
      },
      {
        id: 4, title: 'Время публикации', duration: '5 мин',
        content: '<p><b>Лучшее время для публикации:</b></p>' +
        '<ol class="steps"><li><b>Будни</b> — <span class="hl">12:00-14:00</span> и <span class="hl">18:00-21:00</span></li><li><b>Выходные</b> — <span class="hl">10:00-12:00</span> и <span class="hl">17:00-20:00</span></li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Трюк</div><div class="callout-text">Публикуй <span class="hl">за 30 минут до пика</span> активности. Твоё видео "греется" в алгоритме и выходит на пике.</div></div>' +
        '<p>Проверяй <b>Insights → Аудитория → Когда аудитория активна</b> — там твои конкретные цифры.</p>'
      },
      {
        id: 5, title: 'Взаимный рост', duration: '6 мин',
        content: '<p><span class="hl">Бесплатные стратегии</span> роста:</p>' +
        '<ol class="steps"><li><b>Комментируй</b> <span class="num">20-30</span> постов в день в своей нише</li><li><b>Подписывайся</b> на <span class="num">10-15</span> целевых аккаунтов в день</li><li><b>Отвечай</b> на Stories подписчиков</li><li><b>Участвуй</b> в обменах (взаимная подписка)</li><li><b>Коллаборации</b> с блогерами такого же уровня</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Норма</div><div class="callout-text">При активном взаимодействии: <span class="num">50-200</span> подписчиков в неделю. Без вложений.</div></div>'
      },
      {
        id: 6, title: 'Хештег-стратегия', duration: '5 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Формула</div><div class="callout-text"><span class="formula">2 крупных (>500к) + 2 средних (50-500к) + 1 нишевый (<50к)</span></div></div>' +
        '<p>Создавай <span class="num">5-10</span> шаблонов групп и <span class="hl">чередуй</span>.</p>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Нельзя</div><div class="callout-text"><span class="danger">Один и тот же набор хештегов</span> каждый раз — Instagram банит за спам.</div></div>'
      }
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
      {
        id: 1, title: 'Ниша и формат', duration: '7 мин',
        content: '<p>Выбери нишу, где <span class="hl">3 условия</span>:</p>' +
        '<ol class="steps"><li><b>Есть аудитория</b> — проверь через YouTube Search. Если люди ищут — тема жива.</li><li><b>Ты разбираешься</b> или готов учиться. Фейк = провал.</li><li><b>Есть монетизация</b> — реклама, партнёрки, спонсорство.</li></ol>' +
        '<p><b>Популярные форматы:</b></p>' +
        '<div class="vs"><div class="vs-box vs-good"><div class="vs-label">✅ Лучше для старта</div><div class="vs-text"><b>Туториалы</b> — люди ищут решения проблем. Видео живёт годами.</div></div><div class="vs-box vs-bad"><div class="vs-label">❌ Сложнее</div><div class="vs-text"><b>Влоги</b> — нужна личность. Без аудитории = 0 просмотров.</div></div></div>'
      },
      {
        id: 2, title: 'Настройка канала', duration: '5 мин',
        content: '<ol class="steps"><li><b>Баннер</b> — информативный, с текстом "О чём канал"</li><li><b>Аватар</b> — яркое фото или логотип</li><li><b>Описание</b> — ключевые слова + CTA</li><li><b>Ссылки</b> — соцсети, сайт</li><li><b>Плейлисты</b> — группируй видео по темам</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="hl">Плейлисты</span> = 30% просмотров. Люди смотрят серии, а не одиночные видео.</div></div>'
      },
      {
        id: 3, title: 'Сценарий видео', duration: '8 мин',
        content: '<p>Каждое видео — это <span class="hl">сценарий</span>. Без него = трата времени.</p>' +
        '<ol class="steps"><li><b>Зацепка (0-15 сек)</b> — главный интригующий момент</li><li><b>Вступление (15-30 сек)</b> — о чём видео</li><li><b>Основная часть</b> — раскрываешь тему</li><li><b>CTA</b> — подписка, лайк, комментарий</li><li><b>Финал</b> — что посмотреть дальше</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Закон</div><div class="callout-text"><span class="hl">Пиши как разговор</span> — простым языком. Сложные слова = зритель уходит.</div></div>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула зацепки</div><div class="callout-text"><span class="formula">Вопрос + Интрига + Обещание</span><br>"Почему 90% видео набирают 0 просмотров? Я знаю 3 причины."</div></div>'
      },
      {
        id: 4, title: 'Съёмка видео', duration: '10 мин',
        content: '<p><b>Минимальный набор</b> для старта:</p>' +
        '<ol class="steps"><li><b>Смартфон</b> — современный телефон с хорошей камерой</li><li><b>Штатив</b> — <span class="money">300-500₽</span></li><li><b>Петличный микрофон</b> — <span class="money">500-1000₽</span>. Звук важнее картинки!</li><li><b>Освещение</b> — окно или кольцевая лампа</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Золотое правило</div><div class="callout-text"><span class="hl">Звук важнее картинки</span>. Зритель простит размытое видео, но не простит хриплый звук.</div></div>' +
        '<div class="callout formula"><div class="callout-title">💰 Итого</div><div class="callout-text">Смартфон + штатив + микрофон = <span class="money">800-1500₽</span> для старта.</div></div>'
      },
      {
        id: 5, title: 'Монтаж', duration: '12 мин',
        content: '<p><b>Бесплатные программы:</b></p>' +
        '<div class="vs"><div class="vs-box vs-good"><div class="vs-label">DaVinci Resolve</div><div class="vs-text">Профессиональный, <b>бесплатно</b>. Крутой, но сложнее.</div></div><div class="vs-box vs-good"><div class="vs-label">CapCut</div><div class="vs-text">Простой, быстрый. <b>Идеален для старта</b>.</div></div></div>' +
        '<ol class="steps"><li><b>Убери паузы</b> и "м-м-м" — плотный монтаж</li><li><b>Текст и графика</b> — усиливай ключевые моменты</li><li><b>Цветокоррекция</b> — сделай видео ярким</li><li><b>Звук</b> — убери шум, выровняй громкость</li><li><b>Экспорт</b> — <span class="num">1080p, 30fps</span></li></ol>'
      },
      {
        id: 6, title: 'Превью (обложка)', duration: '6 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Превью = 50% успеха</div><div class="callout-text"><span class="hl">Отличное видео с плохой обложкой</span> = 0 просмотров. Люди смотрят обложку, а не видео.</div></div>' +
        '<p><b>Формулы превью:</b></p>' +
        '<ol class="steps"><li><b>Лицо с эмоцией</b> + крупный текст</li><li><b>До/после</b> — контраст</li><li><b>Тайна/интрига</b> — "не могу поверить"</li><li><b>Сравнение</b> двух объектов</li></ol>' +
        '<p><b>Инструменты:</b> Canva (бесплатно), Photoshop.</p>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило текста</div><div class="callout-text">Максимум <span class="num">4-5 слов</span> на превью. Крупный, контрастный, читаемый на телефоне.</div></div>'
      },
      {
        id: 7, title: 'SEO и заголовки', duration: '7 мин',
        content: '<p><b>SEO на YouTube</b> — как тебя находят в поиске:</p>' +
        '<ol class="steps"><li><b>Ключевые слова</b> — вбивай в YouTube Search, смотри подсказки</li><li><b>Заголовок</b> — ключевое слово + интрига. Максимум <span class="num">60 символов</span>.</li><li><b>Описание</b> — первые <span class="num">2 строки</span>最关键 (появляются в поиске)</li><li><b>Теги</b> — релевантные ключевые слова</li><li><b>Субтитры</b> — помогают с SEO</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула заголовка</div><div class="callout-text"><span class="formula">Ключевое слово + Интрига + Число</span><br>"Как заработать на YouTube: <span class="num">5</span> способов для новичков"</div></div>'
      },
      {
        id: 8, title: 'Монетизация YouTube', duration: '8 мин',
        content: '<p>YouTube платит <span class="hl">больше всех</span> за рекламу. Вот способы:</p>' +
        '<ol class="steps"><li><b>Партнёрская программа</b> — от <span class="num">1000</span> подписчиков + <span class="num">4000</span> часов просмотра</li><li><b>Спонсорство</b> — бренды платят за упоминание</li><li><b>Мерчandise</b> — свои товары</li><li><b>Super Chat</b> — донаты во время стримов</li><li><b>Партнёрские ссылки</b> — комиссия с продаж</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Цифры</div><div class="callout-text">YouTube длинные видео: <span class="money">100-500₽</span> за 1000 просмотров. Shorts: <span class="money">5-15₽</span>. Длинные видео = <span class="hl">серьёзные деньги</span>.</div></div>'
      },
      {
        id: 9, title: 'Аналитика YouTube Studio', duration: '5 мин',
        content: '<p><b>Что смотреть в аналитике:</b></p>' +
        '<ol class="steps"><li><b>CTR превью</b> — если <span class="danger">&lt;5%</span>, меняй обложку</li><li><b>Удержание</b> — если <span class="danger">&lt;50%</span>, улучшай контент</li><li><b>Источники трафика</b> — откуда приходят зрители</li><li><b>Рост подписчиков</b> — по какому видео подписались</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Ключевая метрика</div><div class="callout-text"><span class="hl">CTR &gt; 5%</span> и <span class="hl">Удержание &gt; 50%</span> = видео залетит в рекомендации.</div></div>'
      },
      {
        id: 10, title: 'Продвижение канала', duration: '6 мин',
        content: '<ol class="steps"><li><b>Shorts</b> — короткие видео для привлечения новых</li><li><b>Кросспостинг</b> — клипы в TikTok, Reels</li><li><b>Коллаборации</b> с другими блогерами</li><li><b>Комментарии</b> — оставляй полезные на других каналах</li><li><b>Сообщества</b> — публикуй в сообществе канала</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Стратегия</div><div class="callout-text"><span class="hl">Shorts → Длинные видео</span>. Короткие привлекают, длинные монетизируют.</div></div>'
      },
      {
        id: 11, title: 'Первые 1000 подписчиков', duration: '7 мин',
        content: '<p><span class="hl">Стратегия для первых 1000</span>:</p>' +
        '<ol class="steps"><li>Выбери <span class="num">10</span> тем с высоким спросом (YouTube Search)</li><li>Сделай <b>лучший контент</b> по этим темам</li><li>Оптимизируй SEO</li><li>Публикуй <span class="num">2-3</span> видео в неделю</li><li>Продвигай в соцсетях</li><li>Комментируй в своей нише</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Сроки</div><div class="callout-text">Среднее время до <span class="num">1000</span> подписчиков: <span class="hl">3-6 месяцев</span> при регулярной работе.</div></div>'
      }
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
      {
        id: 1, title: 'Формат Shorts', duration: '5 мин',
        content: '<p>Shorts — это <span class="hl">вертикальные видео до 60 секунд</span>.</p>' +
        '<div class="callout stat"><div class="callout-title">📊 Почему Shorts</div><div class="callout-text">Алгоритм Shorts <span class="hl">отдельный</span> от длинных видео. Shorts показываются на главной YouTube. Идеально для <b>быстрого набора подписчиков</b>.</div></div>'
      },
      {
        id: 2, title: 'Идеи для Shorts', duration: '6 мин',
        content: '<p><b>Формулы идей:</b></p>' +
        '<ol class="steps"><li><span class="hl">"Знал ли ты...?"</span> — интересные факты</li><li><span class="hl">"Я попробовал..."</span> — эксперименты</li><li><span class="hl">"Это гениально/ужасно"</span> — реакции</li><li><span class="hl">Лайфхаки за 15 секунд</span></li><li><span class="hl">Тренды из TikTok/Reels</span></li></ol>' +
        '<div class="callout tip"><div class="callout-title">💡 Совет</div><div class="callout-text">Ищи идеи в TikTok → адаптируй под свою нишу. <span class="hl">То, что залетело в TikTok</span>, залетит и в Shorts.</div></div>'
      },
      {
        id: 3, title: 'Съёмка вертикально', duration: '5 мин',
        content: '<ol class="steps"><li><b>Вертикально 9:16</b> — не горизонтально!</li><li><b>Телефон на уровне глаз</b></li><li><b>Действие в центре кадра</b></li><li><b>Текст крупный</b>, по центру</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Не кропай</div><div class="callout-text"><span class="danger">Не снимай горизонтально и не кропай</span> — теряется качество. Снимай сразу вертикально.</div></div>'
      },
      {
        id: 4, title: 'Быстрый монтаж', duration: '6 мин',
        content: '<ol class="steps"><li>Обрежь до <span class="num">30-45</span> секунд</li><li>Добавь текст с хуком</li><li>Музыка — трендовый звук</li><li>Быстрые переходы</li><li>Экспорт вертикально</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Время</div><div class="callout-text">Монтаж одного Shorts: <span class="num">10-15 минут</span>. Публикуй <span class="num">1-3</span> в день.</div></div>'
      },
      {
        id: 5, title: 'Рост через Shorts', duration: '5 мин',
        content: '<ol class="steps"><li>Публикуй <span class="num">1-3</span> Shorts в день</li><li>Используй трендовые звуки</li><li>Хук в первые <span class="num">2</span> секунды</li><li>Концовка — <span class="hl">"Подпишись ещё"</span> или <span class="hl">"Часть 2"</span></li><li>Ссылки на длинные видео в описании</li></ol>'
      },
      {
        id: 6, title: 'Монетизация Shorts', duration: '5 мин',
        content: '<p>Shorts приносят <span class="danger">меньше рекламных доходов</span>, но:</p>' +
        '<ol class="steps"><li><b>Быстрый рост</b> подписчиков</li><li><b>Привлечение</b> на длинные видео</li><li><b>Партнёрские ссылки</b> в описании</li><li><b>Продажи</b> через Telegram/сайт</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Стратегия</div><div class="callout-text"><span class="formula">Shorts → Подписчик → Длинное видео → Реклама → Деньги</span></div></div>'
      }
    ]
  },
  {
    id: 'tiktok-viral',
    title: 'TikTok: Вирусные видео',
    description: 'Как набирать подписчиков в TikTok',
    icon: '🎵',
    color: '#010101',
    platform: 'tiktok',
    lessons: [
      {
        id: 1, title: 'Алгоритм TikTok', duration: '6 мин',
        content: '<p>TikTok показывает видео <span class="hl">случайным людям</span>. Это шанс — и ловушка.</p>' +
        '<p>Алгоритм проверяет:</p>' +
        '<ol class="steps"><li><b>% досмотров</b> — <span class="hl">главный фактор</span></li><li><b>Лайки</b></li><li><b>Комментарии</b></li><li><b>Репосты</b></li><li><b>Время просмотра</b></li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Шанс новых аккаунтов</div><div class="callout-text">Новым аккаунтам дают <span class="hl">шанс</span> — первые 5-10 видео показывают широкой аудитории. <span class="danger">Используй его</span>, а не трать на тесты.</div></div>'
      },
      {
        id: 2, title: 'Хуки — зацепки', duration: '5 мин',
        content: '<p><span class="hl">Первые 1-2 секунды решают всё.</span></p>' +
        '<p><b>Готовые хуки:</b></p>' +
        '<ol class="steps"><li><span class="hl">"Никто не расскажет ЭТО..."</span></li><li><span class="hl">"Я заработал 100к на..."</span></li><li><span class="hl">"Перестань делать ЭТО..."</span></li><li><span class="hl">"Этот трюк изменит твою жизнь"</span></li></ol>' +
        '<p><b>Визуальный хук</b> — необычное действие, крупный план, резкое движение.</p>'
      },
      {
        id: 3, title: 'Тренды и звуки', duration: '7 мин',
        content: '<ol class="steps"><li>Заходи в <b>"Для тебя"</b> → смотри трендовые звуки</li><li>Используй популярные звуки — <span class="hl">TikTok продвигает</span> видео с ними</li><li>Не обязательно танцевать — <b>адаптируй тренд</b> под свою нишу</li><li>Проверяй тренды <span class="hl">каждый день</span></li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="hl">Тренд живёт 3-7 дней</span>. Успей снять видео пока звук на пике.</div></div>'
      },
      {
        id: 4, title: 'Длина видео', duration: '5 мин',
        content: '<ol class="steps"><li><b><span class="num">15-30 секунд</span></b> — для вирусности</li><li><b><span class="num">60 секунд</span></b> — для обучающего контента</li><li><b><span class="num">3-10 минут</span></b> — для влогов и обзоров</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Формула</div><div class="callout-text"><span class="formula">Короткие видео = больше досмотров = больше охват</span></div></div>'
      },
      {
        id: 5, title: 'Частота постинга', duration: '5 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Минимум</div><div class="callout-text"><b><span class="num">1-3 видео в день</span></b>. TikTok любит активных авторов. Лучше <span class="num">2-3</span>.</div></div>' +
        '<p>Публикуй в пиковые часы: <span class="hl">12-14</span> и <span class="hl">18-22</span>.</p>' +
        '<div class="callout tip"><div class="callout-title">💡 Совет</div><div class="callout-text">Создавай запас видео. Снимай по <span class="num">5-10</span> за раз, публикуй по <span class="num">1-3</span> в день.</div></div>'
      },
      {
        id: 6, title: 'Текст и подписи', duration: '5 мин',
        content: '<ol class="steps"><li><b>Текст на видео</b> — крупный, контрастный</li><li><b>Подпись</b> — короткая, с хуком</li><li><b>Вопрос в конце</b> = больше комментариев</li><li><b>Хештеги</b> — <span class="num">3-5</span> штук, смешивай крупные и мелкие</li></ol>'
      },
      {
        id: 7, title: 'Монетизация TikTok', duration: '7 мин',
        content: '<ol class="steps"><li><b>Партнёрская программа</b> — от <span class="num">10к</span> подписчиков</li><li><b>LIVE-дары</b> — во время прямых трансляций</li><li><b>Реклама от брендов</b></li><li><b>TikTok Shop</b> — продажа товаров прямо в приложении</li><li><b>Партнёрские ссылки</b> в bio</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Порог</div><div class="callout-text">Первые деньги: от <span class="num">1000</span> подписчиков (реклама) или <span class="num">10 000</span> (партнёрка).</div></div>'
      },
      {
        id: 8, title: 'Рост подписчиков', duration: '6 мин',
        content: '<ol class="steps"><li><b>Серийный контент</b> — часть 1, 2, 3... люди подписываются</li><li><b>Комментируй</b> популярные видео</li><li><b>Коллаборации</b> (дуэты, ставки)</li><li><b>Репостируй</b> в другие соцсети</li><li><b>Отвечай</b> на комментарии — это увеличивает охват</li></ol>'
      }
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
      {
        id: 1, title: 'Бизнес-аккаунт', duration: '5 мин',
        content: '<p>Переключись на <b>Pro-аккаунт</b> (<span class="good">бесплатно</span>). Это даёт:</p>' +
        '<ol class="steps"><li><b>Аналитику</b> — кто смотрит, откуда</li><li><b>Кнопку "Контакт"</b></li><li><b>Размещение на карте</b></li></ol>' +
        '<p>Оформи профиль: логотип, описание с ключевыми словами, ссылка.</p>'
      },
      {
        id: 2, title: 'Контент-план', duration: '7 мин',
        content: '<p><b>Планируй на неделю:</b></p>' +
        '<ol class="steps"><li><b>Пн</b> — обучающее видео</li><li><b>Вт</b> — трендовый формат</li><li><b>Ср</b> — за кулисами</li><li><b>Чт</b> — обзор/отзыв</li><li><b>Пт</b> — развлекательное</li><li><b>Сб</b> — LIVE</li><li><b>Вс</b> — отдых/аналитика</li></ol>' +
        '<div class="callout tip"><div class="callout-title">💡 Инструменты</div><div class="callout-text">Google Таблицы или Notion — <span class="hl">бесплатно</span> и удобно.</div></div>'
      },
      {
        id: 3, title: 'Продажи через видео', duration: '8 мин',
        content: '<p><b>Формулы продаж:</b></p>' +
        '<ol class="steps"><li><span class="hl">Проблема → Решение → Продажа</span></li><li><span class="hl">До/после → Как получить результат</span></li><li><span class="hl">Обзор → Преимущества → Ссылка</span></li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Закон</div><div class="callout-text"><span class="danger">Не продавай напрямую</span> — покажи результат. Ссылка в bio или в комментариях.</div></div>'
      },
      {
        id: 4, title: 'TikTok Shop', duration: '6 мин',
        content: '<p>TikTok Shop позволяет <span class="hl">продавать товары прямо в приложении</span>.</p>' +
        '<ol class="steps"><li>Регистрация на <b>seller.tiktok.com</b></li><li>Загрузка товаров</li><li>Привязка к аккаунту</li><li>Создание видео с товарами</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Комиссия</div><div class="callout-text">Комиссия TikTok — <span class="money">5-8%</span>.</div></div>'
      },
      {
        id: 5, title: 'Реклама в TikTok', duration: '7 мин',
        content: '<p><b>TikTok Ads:</b></p>' +
        '<ol class="steps"><li><b>Реклама в ленте</b> — нативные видео</li><li><b>TopView</b> — первое видео при открытии</li><li><b>Branded Hashtag</b> — челлендж с хештегом</li></ol>' +
        '<div class="callout formula"><div class="callout-title">💰 Бюджет</div><div class="callout-text">Минимальный бюджет: от <span class="money">$50</span>. Настройка через <b>ads.tiktok.com</b>.</div></div>'
      },
      {
        id: 6, title: 'Аналитика бизнеса', duration: '5 мин',
        content: '<ol class="steps"><li><b>Охват</b> — сколько людей увидели</li><li><b>Вовлечённость</b> — лайки, комментарии</li><li><b>Конверсия</b> — сколько перешли по ссылке</li><li><b>Время просмотра</b> — качество контента</li><li><b>Рост подписчиков</b> — эффективность стратегии</li></ol>'
      }
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
      {
        id: 1, title: 'ChatGPT для идей', duration: '6 мин',
        content: '<p><b>ChatGPT</b> (<span class="good">бесплатно</span>) — твой <span class="hl">персональный помощник</span>.</p>' +
        '<p><b>Что он умеет:</b></p>' +
        '<ol class="steps"><li><b>Генерация идей</b> — "Придумай 10 идей для Reels про кулинарию"</li><li><b>Сценарии</b> — "Напиши сценарий для 15-секундного видео"</li><li><b>Подписи</b> — "Напиши подпись к посту про путешествия"</li><li><b>Хештеги</b> — "Подбери хештеги для поста о моде"</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило промпта</div><div class="callout-text">Чем <span class="hl">конкретнее</span> промпт — тем лучше результат. Не "напиши пост", а "напиши продающий пост для блогеров-новичков, 120 слов, с историей и CTA".</div></div>'
      },
      {
        id: 2, title: 'Midjourney / DALL-E', duration: '8 мин',
        content: '<p>Для создания <span class="hl">картинок</span>:</p>' +
        '<ol class="steps"><li><b>Midjourney</b> — лучшее качество (через Discord, есть бесплатные генерации)</li><li><b>DALL-E</b> — интегрирован в ChatGPT</li><li><b>Stable Diffusion</b> — полностью бесплатно</li></ol>' +
        '<p>Используй для: <b>обложек</b>, иллюстраций, постов.</p>' +
        '<div class="callout tip"><div class="callout-title">💡 Совет</div><div class="callout-text">Для обложек YouTube лучше всего <span class="hl">Midjourney</span>. Для постов в Instagram — <span class="hl">DALL-E</span> в ChatGPT.</div></div>'
      },
      {
        id: 3, title: 'AI-видео', duration: '10 мин',
        content: '<p>Генерация видео из текста:</p>' +
        '<ol class="steps"><li><b>Kling AI</b> — бесплатные генерации</li><li><b>Runway</b> — пробный период</li><li><b>Pika</b> — бесплатно</li></ol>' +
        '<p>Как использовать: опиши сцену → получи видео → отредактируй.</p>' +
        '<div class="callout stat"><div class="callout-title">📊 Использование</div><div class="callout-text">AI-видео идеально для: <span class="hl">B-roll</span> (вставки), заставок, переходов. Не заменяет съёмку, но <span class="num">ускоряет</span> в <span class="num">5-10 раз</span>.</div></div>'
      },
      {
        id: 4, title: 'AI-озвучка', duration: '5 мин',
        content: '<p><b>Бесплатные сервисы:</b></p>' +
        '<ol class="steps"><li><b>ElevenLabs</b> — реалистичные голоса (бесплатный план)</li><li><b>Murf AI</b> — голоса на разных языках</li><li><b>Google TTS</b> — полностью бесплатно</li></ol>' +
        '<p>Используй для: озвучки видео, подкастов, аудиопостов.</p>'
      },
      {
        id: 5, title: 'AI для текстов', duration: '6 мин',
        content: '<p>Нейросети помогают писать:</p>' +
        '<ol class="steps"><li><b>Заголовки</b> — "Перефразируй, сделай цепляющим"</li><li><b>Описания</b> — "Напиши SEO-описание для видео"</li><li><b>Комментарии</b> — "Придумай 5 комментариев для продвижения"</li><li><b>Рассылки</b> — "Напиши письмо для подписчиков"</li></ol>'
      },
      {
        id: 6, title: 'Автоматизация с AI', duration: '7 мин',
        content: '<p><b>Что можно автоматизировать:</b></p>' +
        '<ol class="steps"><li><b>Генерация идей</b> — каждый день через ChatGPT</li><li><b>Написание текстов</b> — шаблоны промптов</li><li><b>Создание картинок</b> — шаблоны для Midjourney</li><li><b>Планирование</b> — AI составляет контент-план</li></ol>' +
        '<div class="callout formula"><div class="callout-title">💰 Экономия</div><div class="callout-text"><span class="hl">2-4 часа в день</span> экономии. То, что раньше занимало целый день, теперь — 30 минут.</div></div>'
      }
    ]
  },
  {
    id: 'monetization',
    title: 'Заработок на контенте',
    description: 'Цифры, пороги и способы',
    icon: '💰',
    color: '#10B981',
    platform: 'general',
    lessons: [
      {
        id: 1, title: 'Пороги входа', duration: '7 мин',
        content: '<p><b>Когда начинаешь зарабатывать:</b></p>' +
        '<ol class="steps"><li><b>Instagram</b> — от <span class="num">1000</span> подписчиков (реклама), от <span class="num">500</span> (партнёрки)</li><li><b>TikTok</b> — от <span class="num">10к</span> (партнёрка), от <span class="num">1к</span> (реклама)</li><li><b>YouTube</b> — от <span class="num">1000</span> подпис + <span class="num">4000</span> часов (реклама)</li><li><b>Telegram</b> — от <span class="num">500-1500</span> (реклама в канале)</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Реалистично</div><div class="callout-text">Первые деньги через <span class="num">2-4 месяца</span> активной работы.</div></div>'
      },
      {
        id: 2, title: 'CPM по платформам', duration: '8 мин',
        content: '<p><b>Сколько платят за <span class="num">1000</span> просмотров:</b></p>' +
        '<ol class="steps"><li><b>Instagram Reels</b> — <span class="money">50-200₽</span> (от брендов)</li><li><b>TikTok</b> — <span class="money">20-80₽</span> (партнёрская программа)</li><li><b>YouTube Shorts</b> — <span class="money">5-15₽</span> (реклама)</li><li><b>YouTube длинные</b> — <span class="money">100-500₽</span> (реклама)</li><li><b>Telegram</b> — <span class="money">100-300₽</span> (реклама в канале)</li><li><b>UGC-биржи</b> — <span class="money">100-1000₽</span> (бренды платят за просмотры)</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула дохода</div><div class="callout-text"><span class="formula">CPM × (просмотры / 1000) = выплата за ролик</span><br>Пример: <span class="money">200₽</span> × (<span class="num">50000</span>/1000) = <span class="money">10 000₽</span> за ролик</div></div>'
      },
      {
        id: 3, title: '5 способов заработка', duration: '7 мин',
        content: '<ol class="steps"><li><b>Реклама от брендов</b> — от <span class="num">1000</span> подписчиков, <span class="money">1000-50000₽</span> за пост</li><li><b>Партнёрские программы</b> — комиссия <span class="num">10-40%</span> (Авито, Wildberries, Ozon)</li><li><b>UGC-биржи</b> — снимаешь ролики по ТЗ, <span class="money">100-1000₽</span> за 1000 просмотров</li><li><b>Свои продукты</b> — курсы, шаблоны, консультации, маржа <span class="num">90%+</span></li><li><b>Ведение аккаунтов</b> — <span class="money">3000-15000₽</span> за проект для SMM</li></ol>'
      },
      {
        id: 4, title: 'Доход от 0 до 100к', duration: '8 мин',
        content: '<p><span class="hl">Пошаговый план</span>:</p>' +
        '<ol class="steps"><li><b>Месяц 1-2:</b> Набор <span class="num">1000</span> подписчиков (бесплатно)</li><li><b>Месяц 3:</b> Партнёрские ссылки + UGC (<span class="money">5-15к₽</span>)</li><li><b>Месяц 4-5:</b> Реклама + продажа услуг (<span class="money">15-40к₽</span>)</li><li><b>Месяц 6:</b> Свои инфопродукты + реклама (<span class="money">50-100к₽</span>)</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Ключевой принцип</div><div class="callout-text"><span class="hl">Сначала аудитория, потом деньги</span>. Не пытайся продавать с 0 подписчиков.</div></div>'
      },
      {
        id: 5, title: 'Ошибки монетизации', duration: '5 мин',
        content: '<p><b>Чего НЕ делать:</b></p>' +
        '<ol class="steps"><li><span class="danger">Не продавай сразу</span> — сначала доверие (2-3 месяца контента)</li><li><span class="danger">Не рекламируй всё подряд</span> — теряешь аудиторию (макс 1 партнёрка)</li><li><span class="danger">Не занижай цены</span> — убивает ценность</li><li><span class="danger">Не забывай про контент</span> — продажи без контента = 0</li><li><span class="danger">Не ври</span> — репутация важнее денег</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Реалистика</div><div class="callout-text"><span class="hl">3-6 месяцев</span> до первых <span class="money">30к₽</span>. Быстрых денег нет.</div></div>'
      },
      {
        id: 6, title: 'Считай доход', duration: '6 мин',
        content: '<p><b>Готовые формулы:</b></p>' +
        '<div class="callout formula"><div class="callout-title">📐 Реклама</div><div class="callout-text"><span class="formula">(подписчики / 1000) × ставка = доход за пост</span><br>Средняя ставка: <span class="money">50-200₽</span> за 1000 подписчиков</div></div>' +
        '<div class="callout formula"><div class="callout-title">📐 Партнёрки</div><div class="callout-text"><span class="formula">конверсия 1-3% × средний чек × комиссия</span><br>Пример: <span class="num">1000</span> кликов × <span class="num">2%</span> × <span class="money">1000₽</span> × <span class="num">15%</span> = <span class="money">3000₽</span></div></div>' +
        '<div class="callout formula"><div class="callout-title">📐 UGC</div><div class="callout-text"><span class="formula">CPM × (просмотры / 1000)</span><br>Пример: <span class="money">200₽</span> × (<span class="num">50000</span>/1000) = <span class="money">10 000₽</span> за ролик</div></div>'
      }
    ]
  },
  {
    id: 'content-strategy',
    title: 'Контент-стратегия',
    description: 'Система контента и рубрики',
    icon: '📋',
    color: '#10B981',
    platform: 'general',
    lessons: [
      {
        id: 1, title: 'Правило 70/30', duration: '6 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ ГЛАВНОЕ ПРАВИЛО КОНТЕНТА</div><div class="callout-text"><span class="hl">70% пользы, 30% продажи</span>. Пример: 7 постов с пользой → 3 поста с предложением.</div></div>' +
        '<p><b>Что будет если нарушить:</b></p>' +
        '<div class="vs"><div class="vs-box vs-bad"><div class="vs-label">❌ Больше 30% продаж</div><div class="vs-text"><span class="danger">Аудитория уйдёт</span>. Будешь выглядеть как спамер.</div></div><div class="vs-box vs-good"><div class="vs-label">✅ Меньше 30% продаж</div><div class="vs-text"><span class="money">Заработаешь 0</span>. Польза без монетизации = хобби.</div></div></div>' +
        '<div class="callout stat"><div class="callout-title">📊 Факт</div><div class="callout-text">Это баланс, который работает на <b>всех платформах</b> — Instagram, YouTube, TikTok, Telegram.</div></div>'
      },
      {
        id: 2, title: 'Контент-матрица 3x3', duration: '8 мин',
        content: '<p>Три типа контента × три цели = <span class="hl">матрица</span>:</p>' +
        '<p><b>Типы контента:</b></p>' +
        '<ol class="steps"><li><b>Обучающий</b> — советы, разборы</li><li><b>Личный</b> — истории, за кулисами</li><li><b>Продающий</b> — кейсы, офферы</li></ol>' +
        '<p><b>Цели:</b></p>' +
        '<ol class="steps"><li><b>Охват</b> — новые люди</li><li><b>Доверие</b> — подписчики</li><li><b>Продажа</b> — деньги</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула на неделю</div><div class="callout-text"><span class="num">3</span> обучающих для охвата + <span class="num">2</span> личных для доверия + <span class="num">1</span> продающий для продаж = <b><span class="num">6</span> постов в неделю</b></div></div>'
      },
      {
        id: 3, title: '3-5 рубрик', duration: '7 мин',
        content: '<p>Стратегия = <span class="hl">рубрики</span>, которые ведут к покупке.</p>' +
        '<p><b>Примеры рубрик:</b></p>' +
        '<ol class="steps"><li><span class="hl">"Разбор ошибок"</span> — обучение → охват</li><li><span class="hl">"Мой день/процесс"</span> — личное → доверие</li><li><span class="hl">"Кейс клиента"</span> — продажа → конверсия</li><li><span class="hl">"Вопрос-ответ"</span> — снятие возражений</li><li><span class="hl">"Что я думаю про..."</span> — экспертность</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text">Найди формат, который <span class="hl">"твой"</span> и заходит — и переснимай его, пока работает.</div></div>'
      },
      {
        id: 4, title: 'Лестница осознанности', duration: '7 мин',
        content: '<p>Человек проходит <span class="hl">5 ступеней</span> от незнакомца до покупателя:</p>' +
        '<ol class="steps"><li><b>Не знает о проблеме</b> — "Знаешь, почему 80% блогеров теряют аудиторию?"</li><li><b>Знает о проблеме</b> — "Проблема в том, что нет системы"</li><li><b>Знает о решениях</b> — "Вот 3 способа решить"</li><li><b>Знает о тебе</b> — "Я помогаю блогерам через..."</li><li><b>Готов купить</b> — "Осталось 3 места, записывайся"</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Ошибка</div><div class="callout-text"><span class="danger">Не прыгай с 1 на 5</span> — люди не готовы. Контент должен вести по <b>каждой</b> ступени.</div></div>'
      },
      {
        id: 5, title: 'Контент-план', duration: '6 мин',
        content: '<ol class="steps"><li>Определи <span class="num">3-5</span> рубрик</li><li>Напиши темы на <span class="num">2 недели</span> вперёд</li><li>Разбей по дням: <span class="hl">Пн-Ср = обучение, Чт = личное, Пт = продажа</span></li><li>Каждый пост = CTA</li><li>Инструменты: Google Таблицы, Notion</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="danger">Не планируй дальше 2 недель</span> — корректируй по статистике.</div></div>'
      },
      {
        id: 6, title: 'Сторителлинг', duration: '8 мин',
        content: '<p><b>Формула истории:</b></p>' +
        '<ol class="steps"><li><b>Герой</b> (ты или подписчик)</li><li><b>Проблема</b> (что не так)</li><li><b>Путь</b> (как решил)</li><li><b>Результат</b> (что вышло)</li><li><b>Мораль</b> (чему научился)</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Факт</div><div class="callout-text">Истории запоминаются в <span class="num">22 раза</span> лучше фактов.</div></div>' +
        '<p><b>Лучшие темы:</b> провал → вывод, сомнение → результат, ошибка → исправление.</p>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="danger">Не пиши "я крутой"</span> — пиши <span class="hl">"я ошибался, вот чему научился"</span>.</div></div>'
      },
      {
        id: 7, title: 'Ресайкл контента', duration: '6 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ ОДНО видео → 5 форматов</div><div class="callout-text"><span class="hl">Экономия: 70% времени</span>. Не изобретай новый контент — переиспользуй.</div></div>' +
        '<ol class="steps"><li><b>Reels/TikTok/Shorts</b> — видео</li><li><b>Карусель</b> — текст</li><li><b>Stories</b> — процесс съёмки</li><li><b>Telegram</b> — длинная версия</li><li><b>Pinterest</b> — инфографика</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Важно</div><div class="callout-text"><span class="danger">Не публикуй один и тот же текст везде</span> — адаптируй под платформу.</div></div>'
      }
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
      {
        id: 1, title: 'Единый стиль', duration: '5 мин',
        content: '<p>Создай <span class="hl">узнаваемость</span>:</p>' +
        '<ol class="steps"><li><b>Цвета</b> — <span class="num">2-3</span> фирменных цвета</li><li><b>Шрифты</b> — <span class="num">1-2</span> шрифта</li><li><b>Стиль обработки</b> — единая палитра</li><li><b>Логотип</b> — подпись на каждом посте</li><li><b>Фирменные элементы</b> — повторяющиеся детали</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text">Все посты должны выглядеть как <span class="hl">одна серия</span>. Человек видит и сразу понимает — это твой контент.</div></div>'
      },
      {
        id: 2, title: 'Цвета и сочетания', duration: '6 мин',
        content: '<p><b>Как выбирать:</b></p>' +
        '<ol class="steps"><li><b>Основной цвет</b> — отражает настроение</li><li><b>Дополнительный</b> — для акцентов</li><li><b>Фоновый</b> — нейтральный</li></ol>' +
        '<div class="callout tip"><div class="callout-title">💡 Инструменты</div><div class="callout-text"><b>coolors.co</b> и <b>colorhunt.co</b> — <span class="hl">бесплатно</span>. Генерируй палитры.</div></div>' +
        '<div class="vs"><div class="vs-box vs-good"><div class="vs-label">Тёплые цвета</div><div class="vs-text"><span class="hl">Энергия, драйв</span>. Для мотивации, еды, активностей.</div></div><div class="vs-box vs-good"><div class="vs-label">Холодные цвета</div><div class="vs-text"><span class="hl">Спокойствие</span>. Для бизнеса, технологий, здоровья.</div></div></div>'
      },
      {
        id: 3, title: 'Типографика', duration: '5 мин',
        content: '<p><b>Шрифты для соцсетей:</b></p>' +
        '<ol class="steps"><li><b>Заголовки</b> — жирный, крупный</li><li><b>Основной текст</b> — обычный, средний</li><li><b>Акценты</b> — курсив или другой шрифт</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="danger">Не больше 2 шрифтов</span> на дизайн. Больше = каша.</div></div>' +
        '<p><b>Бесплатные шрифты:</b> Google Fonts.</p>'
      },
      {
        id: 4, title: 'Canva для блогеров', duration: '7 мин',
        content: '<p><b>Canva</b> (<span class="good">бесплатно</span>) — <span class="hl">основной инструмент</span>:</p>' +
        '<ol class="steps"><li><b>Шаблоны</b> для Instagram — сотни готовых</li><li><b>Удаление фона</b> — одним кликом</li><li><b>Анимация</b> — добавляй движение</li><li><b>Бренд-кит</b> — сохраняй свои цвета и шрифты</li><li><b>Планировщик</b> — публикуй прямо из Canva</li></ol>'
      },
      {
        id: 5, title: 'AI-дизайн', duration: '6 мин',
        content: '<p><b>Нейросети для дизайна:</b></p>' +
        '<ol class="steps"><li><b>Midjourney</b> — генерация картинок</li><li><b>Remove.bg</b> — удаление фона</li><li><b>Upscayl</b> — увеличение качества</li><li><b>Khroma</b> — подбор цветовых палитр</li><li><b>Fontjoy</b> — подбор шрифтов</li></ol>' +
        '<div class="callout formula"><div class="callout-title">💰 Экономия</div><div class="callout-text">AI-дизайн экономит <span class="num">3-5 часов</span> в неделю на визуале.</div></div>'
      }
    ]
  },
  {
    id: 'tg-channel',
    title: 'Telegram-канал для заработка',
    description: 'Создай канал и монетизируй',
    icon: '✈️',
    color: '#0088CC',
    platform: 'telegram',
    lessons: [
      {
        id: 1, title: 'Зачем Telegram', duration: '5 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ ГЛАВНОЕ ПРЕИМУЩЕСТВО</div><div class="callout-text">Telegram — <span class="hl">единственная платформа</span>, где алгоритм не решает. Подписчики видят <span class="num">100%</span> постов.</div></div>' +
        '<p><b>Плюсы Telegram:</b></p>' +
        '<ol class="steps"><li><span class="good">Нет банов за ссылки</span></li><li><span class="good">Встроенные платежи</span></li><li><span class="good">Мини-приложения</span></li><li><span class="good">Боты для автоматизации</span></li><li><span class="good">Прямой доступ к аудитории</span></li></ol>'
      },
      {
        id: 2, title: 'Создание канала', duration: '6 мин',
        content: '<p><b>Пошагово:</b></p>' +
        '<ol class="steps"><li><b>Создай канал</b> (не группу)</li><li><b>Название</b> = ниша + имя</li><li><b>Описание</b> с ключевыми словами</li><li><b>Аватар</b> — яркий, узнаваемый</li><li><b>Ссылка</b> — короткая и запоминающаяся</li><li><b>Приватность:</b> публичный для роста</li><li><b>Привяжи бота</b> для статистики</li></ol>'
      },
      {
        id: 3, title: 'Контент для канала', duration: '8 мин',
        content: '<p><b>Форматы:</b></p>' +
        '<ol class="steps"><li><b>Длинные посты</b> — экспертность</li><li><b>Короткие заметки</b> — вовлечение</li><li><b>Медиа</b> — фото, видео, голосовые</li><li><b>Опросы</b> — обратная связь</li><li><b>Закреплённый пост</b> — главная ценность</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Частота</div><div class="callout-text"><span class="num">1-3</span> поста в день. Правило <span class="hl">70/30</span>: 70% пользы, 30% личного/продаваемого.</div></div>'
      },
      {
        id: 4, title: 'Набор аудитории', duration: '8 мин',
        content: '<p><span class="hl">Бесплатные способы:</span></p>' +
        '<ol class="steps"><li><b>Посты</b> в других каналах (обмены)</li><li><b>Комментарии</b> в Telegram-чатах</li><li><b>Кросс-постинг</b> из Instagram/TikTok</li><li><b>Лид-магнит</b> — бесплатный гайд за подписку</li><li><b>Реклама</b> в каналах того же уровня (от <span class="money">500₽</span>)</li><li><b>SEO</b> — ключевые слова в названии и описании</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Норма</div><div class="callout-text">Средний рост: <span class="num">100-300</span> подписчиков в месяц на старте.</div></div>'
      },
      {
        id: 5, title: 'Боты для автоматизации', duration: '7 мин',
        content: '<p><b>Что могут боты:</b></p>' +
        '<ol class="steps"><li>Приветствие новых подписчиков</li><li>Рассылка по расписанию</li><li>Приём оплаты</li><li>Мини-апп (веб-приложение)</li><li>Запись на услуги</li></ol>' +
        '<p><b>Сервисы:</b></p>' +
        '<ol class="steps"><li><b>@BotFather</b> — создание ботов</li><li><b>@Combot</b> — статистика</li><li><b>SendPulse</b> — рассылки</li></ol>' +
        '<div class="callout tip"><div class="callout-title">💡 Бесплатно</div><div class="callout-text">Бесплатно до <span class="num">1000</span> подписчиков.</div></div>'
      },
      {
        id: 6, title: 'Монетизация канала', duration: '8 мин',
        content: '<p><b>Способы:</b></p>' +
        '<ol class="steps"><li><b>Реклама в канале</b> — от <span class="num">1000</span> подписчиков, CPM <span class="money">50-200₽</span></li><li><b>Партнёрские ссылки</b> — комиссия <span class="num">10-40%</span></li><li><b>Продажа своих услуг/курсов</b></li><li><b>Подписка</b> на эксклюзив (Telegram Stars)</li><li><b>Донаты</b> через ботов</li></ol>' +
        '<div class="callout formula"><div class="callout-title">💰 Доход</div><div class="callout-text"><span class="money">5-30к₽/мес</span> при <span class="num">3-5к</span> подписчиков.</div></div>'
      },
      {
        id: 7, title: 'Telegram vs Другие', duration: '5 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Стратегия</div><div class="callout-text"><span class="hl">Telegram = воронка</span>, а Instagram/TikTok = трафик. Используй оба.</div></div>' +
        '<p><b>Преимущества Telegram:</b></p>' +
        '<ol class="steps"><li><span class="good">Нет алгоритмической цензуры</span> — все посты видят</li><li><span class="good">Ссылки без ограничений</span></li><li><span class="good">Встроенные платежи</span></li><li><span class="good">Мини-приложения</span></li><li><span class="good">Боты</span></li></ol>' +
        '<p><span class="danger">Недостаток:</span> нет вирусного охвата как в Instagram.</p>'
      }
    ]
  },
  {
    id: 'sales-funnels',
    title: 'Автоворонки и продажи',
    description: 'Система продаж через контент',
    icon: '🔄',
    color: '#F59E0B',
    platform: 'general',
    lessons: [
      {
        id: 1, title: 'Что такое воронка', duration: '6 мин',
        content: '<p><b>Воронка</b> — это путь человека от знакомства до покупки:</p>' +
        '<ol class="steps"><li><b>Охват</b> — человек тебя увидел</li><li><b>Интерес</b> — понял, что тебе полезно</li><li><b>Доверие</b> — стал подписчиком</li><li><b>Решение</b> — готов купить</li><li><b>Покупка</b></li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Закон</div><div class="callout-text"><span class="hl">Без воронки охваты = ноль денег</span>. Воронка превращает <span class="hl">внимание в доход</span>.</div></div>'
      },
      {
        id: 2, title: 'Контент-воронка', duration: '8 мин',
        content: '<p><span class="hl">Как работает связка:</span></p>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула</div><div class="callout-text"><span class="formula">Контент → Ключевое действие → Лид → Продажа</span></div></div>' +
        '<p><b>Пример:</b></p>' +
        '<ol class="steps"><li>Reels "5 ошибок в Instagram"</li><li>CTA: <span class="hl">"Напиши ОШИБКА в комментах"</span></li><li>Бот отправляет бесплатный чек-лист</li><li>Бот прогревает <span class="num">3</span> дня</li><li>Предложение курса/консультации</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text">Каждый пост должен <span class="hl">вести человека по лестнице осознанности</span>.</div></div>'
      },
      {
        id: 3, title: 'Лид-магнит', duration: '7 мин',
        content: '<p><b>Лид-магнит</b> — бесплатная ценность за действие.</p>' +
        '<p><b>Примеры:</b></p>' +
        '<ol class="steps"><li>Чек-лист "10 ошибок в Reels"</li><li>Шаблон контент-плана</li><li>Мини-курс из 3 уроков</li><li>Разбор аккаунта</li><li>Скидка/бонус</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула</div><div class="callout-text"><span class="formula">"Напиши [слово] — пришлю [пользу]"</span><br>Увеличивает конверсию в лид в <span class="num">3-5 раз</span>.</div></div>'
      },
      {
        id: 4, title: 'Автоворонка в Telegram', duration: '8 мин',
        content: '<p><b>Пошаговая сборка:</b></p>' +
        '<ol class="steps"><li>Бот приветствует и отправляет лид-магнит</li><li>Через <span class="num">1</span> день — полезный контент</li><li>Через <span class="num">2</span> дня — кейс/отзыв</li><li>Через <span class="num">3</span> дня — предложение с ограничением</li><li>Напоминание через <span class="num">2</span> дня</li></ol>' +
        '<div class="callout tip"><div class="callout-title">💡 Сервисы</div><div class="callout-text">SendPulse, BotHelp, Chatfuel. <span class="hl">Бесплатно до 1000 подписчиков</span>.</div></div>'
      },
      {
        id: 5, title: 'Прогрев и продажа', duration: '7 мин',
        content: '<p><b>Правила прогрева:</b></p>' +
        '<ol class="steps"><li>Не продавай сразу — <span class="hl">сначала ценность</span></li><li>Показывай результаты других людей</li><li>Создавай дефицит (лимит мест, дедлайн)</li><li>Задавай вопросы — вовлекай в диалог</li><li>Повторяй предложение <span class="num">3-5</span> раз в разных форматах</li></ol>' +
        '<div class="callout formula"><div class="callout-title">📐 Формула продажи</div><div class="callout-text"><span class="formula">Боль → Усиление боли → Решение → Доказательство → Оффер → Срочность</span></div></div>'
      },
      {
        id: 6, title: 'Ступеньки осознанности', duration: '6 мин',
        content: '<p>Человек проходит <span class="hl">5 ступеней</span>:</p>' +
        '<ol class="steps"><li><b>Не знает о проблеме</b> — "Знаешь ли ты, что 80% блогеров теряют аудиторию?"</li><li><b>Знает о проблеме</b></li><li><b>Знает о решениях</b></li><li><b>Знает о тебе</b></li><li><b>Готов купить</b> — "Осталось 3 места, записывайся сейчас"</li></ol>' +
        '<div class="callout warning"><div class="callout-title">⚠️ Ошибка</div><div class="callout-text"><span class="danger">Не прыгай с 1 на 5</span> — люди не готовы.</div></div>'
      },
      {
        id: 7, title: 'Метрики воронки', duration: '5 мин',
        content: '<p><b>Что отслеживать:</b></p>' +
        '<ol class="steps"><li><b>Охват</b> контента</li><li><b>Переходы</b> в Telegram/на сайт</li><li><b>Количество лидов</b> (подписчиков бота)</li><li><b>Конверсия</b> лид → продажа</li><li><b>Средний чек</b></li><li><b>LTV</b> (сколько приносит один клиент за весь период)</li></ol>' +
        '<div class="callout stat"><div class="callout-title">📊 Норма</div><div class="callout-text">Конверсия лид → продажа: <span class="num">3-10%</span>. Если ниже — меняй прогрев или оффер.</div></div>'
      }
    ]
  },
  {
    id: 'ai-prompts',
    title: 'AI-промпты для контента',
    description: 'Нейросети для постов и видео',
    icon: '🧠',
    color: '#6366F1',
    platform: 'ai',
    lessons: [
      {
        id: 1, title: 'Основы промптинга', duration: '6 мин',
        content: '<div class="callout rule"><div class="callout-title">⚡ Хороший промпт = 4 компонента</div><div class="callout-text"><span class="hl">Роль + Задача + Контекст + Формат</span></div></div>' +
        '<ol class="steps"><li><b>Роль</b> — "Ты копирайтер для Instagram"</li><li><b>Задача</b> — "Напиши пост про..."</li><li><b>Контекст</b> — "Для аудитории 25-35 лет"</li><li><b>Формат</b> — "Максимум 150 слов, с хуком и CTA"</li></ol>' +
        '<div class="callout rule"><div class="callout-title">⚡ Правило</div><div class="callout-text"><span class="hl">Чем конкретнее промпт — тем лучше результат</span>. Не пиши "напиши пост" — пиши "напиши продающий пост для блогеров-новичков, 120 слов, с историей и CTA".</div></div>'
      },
      {
        id: 2, title: 'Промпты для постов', duration: '8 мин',
        content: '<p><b>Готовые формулы:</b></p>' +
        '<div class="callout formula"><div class="callout-title">📝 Пост-полезность</div><div class="callout-text">"Напиши обучающий пост на тему <span class="hl">[X]</span> для <span class="hl">[аудитория]</span>. Формат: хук → 3 совета с примерами → CTA. Тон: разговорный, без воды."</div></div>' +
        '<div class="callout formula"><div class="callout-title">📝 Пост-история</div><div class="callout-text">"Напиши сторителлинг на тему <span class="hl">[X]</span>. Формат: ситуация → проблема → решение → вывод. 150-200 слов."</div></div>' +
        '<div class="callout formula"><div class="callout-title">📝 Продающий пост</div><div class="callout-text">"Напиши пост, который продвигает <span class="hl">[продукт]</span>. Формула: боль → усиление → решение → оффер → срочность."</div></div>' +
        '<div class="callout formula"><div class="callout-title">📝 Карусель</div><div class="callout-text">"Создай текст для карусели из 10 слайдов на тему <span class="hl">[X]</span>. Каждый слайд = 1 мысль, до 25 слов."</div></div>'
      },
      {
        id: 3, title: 'Промпты для Reels', duration: '7 мин',
        content: '<div class="callout formula"><div class="callout-title">📝 Вирусный Reels</div><div class="callout-text">"Напиши сценарий Reels 15 сек на тему <span class="hl">[X]</span>. Структура: Хук (0-3 сек) → 3 совета (3-12 сек) → CTA (12-15 сек). Максимум 45 слов. Тон: уверенный, разговорный."</div></div>' +
        '<div class="callout formula"><div class="callout-title">📝 Обучающий</div><div class="callout-text">"Сценарий Reels 30 сек: проблема → пошаговое решение → результат. Добавь текст для плашек отдельно от озвучки."</div></div>' +
        '<div class="callout formula"><div class="callout-title">📝 Продающий</div><div class="callout-text">"Сценарий Reels 20 сек: эмоциональная боль → продукт как решение → оффер с ограничением." Добавь: "Расчитай тайминг."</div></div>'
      },
      {
        id: 4, title: 'Claude для контента', duration: '8 мин',
        content: '<p><b>Claude</b> — лучший AI для длинных текстов и анализа.</p>' +
        '<ol class="steps"><li>Загрузи примеры лучших постов → <span class="hl">"Проанализируй стиль и напиши 5 постов в таком же стиле"</span></li><li>Дай контекст: <span class="hl">"Я веду Instagram про [нишу], моя аудитория — [описание]"</span></li><li>Проси адаптацию: <span class="hl">"Перефразируй этот пост под Telegram"</span></li><li>Используй для анализа: <span class="hl">"Почему этот пост не зашёл? Что исправить?"</span></li></ol>'
      },
      {
        id: 5, title: 'AI для каруселей', duration: '7 мин',
        content: '<p><b>Пошаговый промпт:</b></p>' +
        '<div class="callout formula"><div class="callout-title">📝 Готовый промпт</div><div class="callout-text">"Создай карусель из 10 слайдов на тему <span class="hl">[X]</span>. Формат: Слайд 1: Хук-обложка. Слайды 2-8: По одному совету, максимум 20 слов. Слайд 9: Резюме. Слайд 10: CTA. Добавь рекомендации по дизайну."</div></div>' +
        '<div class="callout tip"><div class="callout-title">💡 Трюк</div><div class="callout-text"><span class="hl">"Сгенерируй 5 вариантов хуков"</span> — и выбери лучший.</div></div>'
      },
      {
        id: 6, title: 'AI-workflow каждый день', duration: '6 мин',
        content: '<p><b>Ежедневный процесс с AI (30 минут):</b></p>' +
        '<ol class="steps"><li><b>Утро (15 мин):</b> ChatGPT — "Придумай 5 идей для контента на сегодня"</li><li><b>Утро (15 мин):</b> Claude — "Напиши пост по идее №[номер]"</li><li><b>Обед (10 мин):</b> Midjourney — "Создай картинку для поста про [тему]"</li><li><b>Вечер (5 мин):</b> Claude — "Проанализируй статистику и предложи 3 идеи на завтра"</li></ol>' +
        '<div class="callout formula"><div class="callout-title">💰 Экономия</div><div class="callout-text"><span class="hl">30 минут в день</span> вместо <span class="danger">2-3 часов</span>. Экономия: <span class="num">70%</span> времени.</div></div>'
      }
    ]
  }
];

module.exports = courses;
