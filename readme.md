# test-job next.js

## Задача
Создайте страницу, которая будет динамически загружать данные с API с помощью React (через useEffect и fetch).
Реализуйте функциональность фильтрации и сортировки:
Фильтрация по возрасту и городу.
Сортировка по имени и возрасту.
Применяйте фильтрацию и сортировку на клиентской стороне, когда данные получены с бэкенда.
На странице должны быть элементы управления для фильтрации (по возрасту, городу) и сортировки (по имени и возрасту).
После применения фильтрации и сортировки, данные должны обновляться на странице без перезагрузки.
Технические требования:
Используйте TypeScript как на фронтенде, так и на бэкенде.
Фильтрация должна поддерживать фильтрацию по возрасту (например, старше 30 лет) и по городу.
Сортировка должна поддерживать сортировку по имени (по алфавиту) и по возрасту (по возрастанию или убыванию).
На фронтенде используйте React Hooks (useState, useEffect) для управления состоянием и получения данных с бэкенда.
Создайте отдельные компоненты для:
UserList — для отображения списка пользователей.
Filters — для выбора фильтров (возраст, город).
SortOptions — для выбора типа сортировки (по имени или возрасту).
Данные должны быть загружены с API, а не встроены в код.
Дополнительные улучшения (опционально):
Реализовать обработку ошибок (например, если сервер недоступен).
Добавить возможность сохранять и восстанавливать фильтры и сортировки через локальное хранилище (localStorage).
Добавить базовую стилизацию для компонентов (не обязательно, но желательно).
Цель задания:
Проверить способность кандидата реализовать взаимодействие между фронтендом и бэкендом, а также навыки работы с фильтрацией, сортировкой и асинхронными запросами в приложении с использованием React, Node.js и TypeScript.

## Стек технологий

- **React**
- **Next,js**


## Установка

Для того чтобы запустить проект локально, выполните следующие шаги:

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/stalk94/test-next
   
2. Установите зависимости node:

    ```bash
    npm install

3. Запускаем next в режиме dev:

    ```bash
    npm run dev

4. Заходим в браузер и переходим на страницу: http://localhost:3000