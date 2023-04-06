FROM node:17-alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

CMD ["npm", "start"]
