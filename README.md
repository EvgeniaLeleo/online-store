Demo: [https://evgenialeleo.github.io/online-store/](https://evgenialeleo.github.io/online-store/)

## Установка

Склонируйте репозиторий и установите зависимости

```sh
cd online-store
npm install
```

Для запуска сервера в development-режиме выполните команду

```sh
npm run start
```

При необходимости production сборки выполните команду

```sh
npm run build
```

## ТЗ

Online-store [https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md)

Screenshot:
![изображение](https://user-images.githubusercontent.com/88904845/179363230-863838ca-53be-4bd5-a8a1-1c5fd32de7f9.png)

Done July 18th 2022

Особенности реализации:

-   [x] приложение написано на TypeScript.
    -   [x] используется Everyday Types
    -   [x] использование Object Types
    -   [x] используются Generics
    -   [x] использование Classes
    -   [x] использование Function
    -   [x] нигде не используется тип Any
    -   [x] ESLinter настроен на TypeScript (используется плагин `typescript-eslint/recommended`) и отсутствуют ошибки
    -   [x] В конфигурационном файле TypeScript стоят флаги `"noImplicitAny": true` и `"strict": true`
    -   [x] webpack настроен и работает с TypeScript
    -   [x] код разбит на модули
    -   [x] карточки товаров добавляются динамически средствами JavaScript
    -   Дополнительно реализован всплывающий список с товарами, помещенными в корзину (при наведении курсора на Корзину при width >= 768px)
    -   Реализованы unit-тесты (для запуска тестов - команда `npm test`)
    -   Настроен gh-pages deploy
