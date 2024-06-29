
# Email Search App

## Описание

Email Search App - это простое приложение для поиска пользователей по email и номеру телефона. Приложение включает фронтенд на React с использованием TypeScript и Tailwind CSS, а также бэкенд на Node.js с использованием TypeScript и Express.js. Приложение имитирует задержку в обработке запроса и позволяет отменять предыдущие запросы при отправке новых.

## Функционал

- Форма для ввода email (обязательное поле) и номера телефона (опциональное поле).
- Валидация полей формы.
- Маска для ввода номера телефона (формат XX-XX-XX).
- Отображение результатов поиска под формой.
- Имитация задержки обработки запроса на сервере (5 секунд).
- Отмена предыдущих запросов при отправке новых.

## Требования

- Node.js
- npm

## Установка и запуск

### Бэкенд

1. Перейдите в директорию `backend`:

    ```sh
    cd backend
    ```

2. Установите зависимости:

    ```sh
    npm install
    ```

3. Скомпилируйте TypeScript в JavaScript:

    ```sh
    npx tsc
    ```

4. Запустите сервер:

    ```sh
    node dist/index.js
    ```

    Сервер будет запущен на `http://localhost:3001`.

### Фронтенд

1. Перейдите в директорию `email-search-app`:

    ```sh
    cd email-search-app
    ```

2. Установите зависимости:

    ```sh
    npm install
    ```

3. Запустите приложение:

    ```sh
    npm start
    ```

    Приложение будет запущено на `http://localhost:3000`.

## Структура проекта

### Фронтенд

- `src/SearchForm.tsx`: Компонент формы поиска.
- `src/App.tsx`: Корневой компонент приложения.
- `src/index.css`: Настройка стилей Tailwind CSS.

### Бэкенд

- `src/index.ts`: Основной файл сервера.

## Примечания

- Фронтенд использует Axios для отправки запросов на сервер.
- Валидация полей и маска для номера телефона реализованы на фронтенде.
- Сервер имитирует задержку обработки запроса с помощью `setTimeout`.
