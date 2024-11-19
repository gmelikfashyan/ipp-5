# Используем официальный Node.js образ для приложения
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код приложения
COPY . .

# Открываем порт для приложения
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "start"]
