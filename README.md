# Content Factory

Telegram Mini App для обучения созданию контента.

## Установка

```bash
npm install
npm start
```

## Переменные окружения

- `PORT` — порт сервера (по умолчанию 3000)
- `BOT_TOKEN` — токен Telegram бота

## Архитектура

```
src/
├── domain/         # Бизнес-логика
├── services/       # Сервисный слой
├── adapters/       # Внешние зависимости
└── entrypoints/    # Точка входа (сервер)
```

## лицензия

MIT
