FROM node:20

WORKDIR /app

copy package*.json /app

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "start"]